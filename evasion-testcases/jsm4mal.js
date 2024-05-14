//Incomplete. To be updated!
(function() {
  var host_origin = (new URL(window.location)).origin;
  var CORS_enabled = 'withCredentials' in new XMLHttpRequest();
  //alert("Debug: host_origin="+host_origin);
  var origin_source_read = new Map();
  var debug = true;
  function jsm4mal_log(s){
      if((!debug) || (!console.log)) return;
      console.log('jsm4mal log: '+s);
  }
  jsm4mal_log("starting jsm4mal.js");
  //store builtin functions to keep their original implementations
  var $Array = Array;
  var $Object = window.Object;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var originalDocument_createElelment = document.createElement; //we need to keep the original copy so that our code will not be intercepted.

  var builtins = {};

  builtins.__proto__ = null;
  with (Function.prototype)
    builtins.Function = { apply: apply, call: call, toString: toString };
  try {
    // Create a function from a string.  Note that functions created with
    // the Function constructor DO NOT get a scope chain that includes the
    // current lexical scope; their scope chains include only the global
    // context.  To export local function declarations, we do some simple
    // parsing of the string form of the function and append commands that
    // explicitly export each definition.  Ads can obviously defeat this
    // eaprocess in a variety of ways, but doing so just harms themselves.

    
    /********************** Begin the IRM code ******************************/
    //The common monitor function to intercept a function call with a policy
    var monitorMethod = function(object, method, policy) {
      while (!hasOwnProperty.call(object, method) && object.__proto__)
      object = object.__proto__;
      if (object === null) {
          throw new Error('Failed to find function for alias ' + method);
      }
      var original = object[method];
      if ((original === null) || (original === undefined))
      throw new Error('No method ' + method +'found for '+object);
      //make sure to call the original apply function
      original.apply = builtins.Function.apply;
      object[method] = function wrapper(image) {

          var object = this;
          var orgArgs = arguments;
          var proceed = function() {
            return original.apply(object, orgArgs);
          };
          return policy(orgArgs, proceed,object);
      }
    }
    function setOriginSourceRead(origin){
      try{
        origin_source_read.set(origin,true);
        //alert("Debug: origin '" + origin +"' read data. isOriginSourceRead['"+origin+"']="+origin_source_read.get(origin));
      }catch{
        alert("jsm4mal-Debug: Error: cannot set origin_source_read for " + origin);
      }
    }
    function isOriginSourceRead(origin){
      //alert("Debug: isOriginSourceRead['"+origin+"']="+origin_source_read.get(origin));
      return origin_source_read.get(origin);
    }

    function getCodeOrigin(trace){
      var url;
      try {
       url = new URL(getCodeSource(trace));
       return url.origin;
      }catch{
        return undefined;
      }
    }
    function isRelativePath(path){
      //alert("Debug: isNotRelativePath('"+path+"')="+ (path && path.indexOf("://")>0 ));
      if(path && path.indexOf("://")>0 ){
        return false;
      }
      return true;
    }
    function originAllowed(origin,objectnName,functionORproperty,args){
      //TODO: implement specific rules
      //alert("Debug: origin '" + origin + "' invokes " + objectnName + "." + functionORproperty + " is allowed");
      return true;
    }
    function isSameOrigin(url1,url2){
      try{
        var same = ((new URL(url1)).origin === (new URL(url2)).origin);
        return same;
      }catch{
        return false;
      }
    }
    function getCodeSource(trace){
      //TODO: need to consider the case of extensions or without HTTP/S URLs
      if (!trace || !trace.includes("http")) {
        return undefined;
      }
      //jsm4mal_log("getCodeSource->trace="+trace);
      var protocol;
      var stackLines;
      if (trace.includes("https")) {
        protocol = "https";
        stackLines= trace.split("https://"); 
      }else if (trace.includes("http")) {
        protocol = "http";
        stackLines= trace.split("http://"); 
      }
      if (!stackLines || stackLines.length == 0) {
        return undefined;
      }
      return protocol+"://"+stackLines[stackLines.length-1];
    }
    
    
  
    
    function monitor_location_search() {
      var location_search_desc= Object.getOwnPropertyDescriptor(location, "search");
      Object.defineProperty(location, "search", 
        {
          get: function () {
            var callstack = new Error().stack;
            jsm4mal_log(" location.search is monitored. source ="+getCodeSource(callstack));
            return location_search_desc.get.call(this);
        }
      });
    }
    
    //A. monitoring the sources, where data might be accessed.

    //1. document.getElementById:
    function getElementById_policy(args, proceed, obj) {
      var elementID = args[0];
      var callstack = new Error().stack;
      //jsm4mal_log("getElementById is monitored. source ="+getCodeSource(callstack));
      var code_origin = getCodeOrigin(callstack);
      if (originAllowed(code_origin,"document","getElementById",args)) {
        setOriginSourceRead(code_origin);
        return proceed();  
      }
      return;
    }    
    monitorMethod(document, "getElementById", getElementById_policy);

    function eval_policy(args, proceed, obj) {
      var code = args[0];
      jsm4mal_log("eval is monitored. code="+code);
      var callstack = new Error().stack;
       jsm4mal_log("source=" + getCodeSource(callstack));
      //return proceed();
      return;
    }
    monitorMethod(window, "eval", eval_policy);
    //document.write[ln]
    jsm4mal_log("jsm4mal.js is completely loaded");
 }
  catch (err) {
    alert(err.message);
  }
})();
