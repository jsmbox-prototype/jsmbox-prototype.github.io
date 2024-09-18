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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG/YCAgAAVfwBBAQt/AEEGC38AQcYAC38AQc4AC38AQdAAC38AQdgAC38AQdoAC38AQd4AC38AQeIAC38AQeYAC38AQeoAC38AQfIAC38AQfYAC38AQf4AC38AQYIBC38AQYYBC38AQZABC38AQZQBC38AQZ4BC38AQaIBC38AQawBCwe9gYCAABYGbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwIFZGF0YTMDAwVkYXRhNAMEBWRhdGE1AwUFZGF0YTYDBgVkYXRhNwMHBWRhdGE4AwgFZGF0YTkDCQZkYXRhMTADCgZkYXRhMTEDCwZkYXRhMTIDDAZkYXRhMTMDDQZkYXRhMTQDDgZkYXRhMTUDDwZkYXRhMTYDEAZkYXRhMTcDEQZkYXRhMTgDEgZkYXRhMTkDEwZkYXRhMjADFAuZgoCAABUAQQELBCUyMgAAQQYLPyUyMiUyMG5lZWRzJTIwYSUyMGNvbW1lbnQlMjB0byUyMGJlJTIwcGlja2VkJTIwdXAlMjBmb3IlMjBsb2MuAABBxgALByUyNSU0MAAAQc4ACwEAAEHQAAsHJTI1JTQwAABB2AALAQAAQdoACwItAABB3gALA2VuAABB4gALA2VuAABB5gALA2ZyAABB6gALB0ZyZW5jaAAAQfIACwNkZQAAQfYACwdHZXJtYW4AAEH+AAsDamEAAEGCAQsDanAAAEGGAQsJSmFwYW5lc2UAAEGQAQsDZW4AAEGUAQsIRW5nbGlzaAAAQZ4BCwNlcwAAQaIBCwhTcGFuaXNoAABBrAELCEVuZ2xpc2gA'].map(__bytes => {
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
var SC = SC || {}, CoreDocs = CoreDocs || {}, NO = false, YES = true;
CoreDocs.loc = function (a, b) {
    (() => {
        const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        (() => {
                            const __callInstance5 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        CoreDocs.error(lS(0, 0) + a + lS(0, 1));
                                    }
                                }
                            });
                            const __exports = __callInstance5.exports;
                            return __exports.data();
                        })();
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance0.exports;
        return __exports.data(b === undefined ? 1 : 0);
    })();
    a = a.loc();
    a = a.replace(/@@/g, lS(0, 2));
    return a;
};
SC.String = {
    fmt: function () {
        var f = this.gsub(/%@([0-9]+)/, function (g) {
            return (arguments[parseInt(g[1], 0) - 1] || lS(0, 3)).toString();
        });
        var c = [];
        var a = -1;
        var e = 0;
        var b = 0;
        (() => {
            const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return (a = f.indexOf(lS(0, 4), e)) >= 0 ? 1 : 0;
                    },
                    update: () => {
                    },
                    body: () => {
                        {
                            (() => {
                                const __callInstance4 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            c.push(f.slice(e, a));
                                        }
                                    }
                                });
                                const __exports = __callInstance4.exports;
                                return __exports.data();
                            })();
                            e = a + 2;
                            var d = arguments[b++];
                            (() => {
                                const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                d = d.toString();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance1.exports;
                                return __exports.data(d && d.toString ? 1 : 0);
                            })();
                            (() => {
                                const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            c.push(d);
                                        }
                                    }
                                });
                                const __exports = __callInstance3.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __forInstance0.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            c.push(f.slice(e, f.length));
                                        }
                                    }
                                });
                                const __exports = __callInstance2.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance2.exports;
            return __exports.data(e < f.length ? 1 : 0);
        })();
        return c.length > 1 ? c.join(lS(0, 5)) : c[0];
    },
    loc: function () {
        var a = String[String.currentLanguage()];
        var b = a[this];
        (() => {
            const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            b = String.English[this] || this;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance3.exports;
            return __exports.data(!b ? 1 : 0);
        })();
        return b.fmt.apply(b, arguments);
    }
};
for (var key in SC.String) {
    String.prototype[key] = SC.String[key];
}
(() => {
    const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                Object.extend(String, {
                    browserLanguage: (navigator.language || navigator.browserLanguage).split(lS(0, 6), 1)[0],
                    useAutodetectedLanguage: NO,
                    preferredLanguage: null,
                    currentLanguage: function () {
                        var a = this.useAutodetectedLanguage ? this.browserLanguage || this.preferredLanguage || lS(0, 7) : this.preferredLanguage || this.browserLanguage || lS(0, 8);
                        (() => {
                            const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            a = this.normalizedLanguage(a);
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance4.exports;
                            return __exports.data(!this[a] ? 1 : 0);
                        })();
                        return a;
                    },
                    normalizedLanguage: function (a) {
                        switch (a) {
                        case lS(0, 9):
                            a = lS(0, 10);
                            break;
                        case lS(0, 11):
                            a = lS(0, 12);
                            break;
                        case lS(0, 13):
                        case lS(0, 14):
                            a = lS(0, 15);
                            break;
                        case lS(0, 16):
                            a = lS(0, 17);
                            break;
                        case lS(0, 18):
                            a = lS(0, 19);
                            break;
                        default:
                            a = lS(0, 20);
                            break;
                        }
                        return a;
                    },
                    addStringsFor: function (b, a) {
                        b = String.normalizedLanguage(b);
                        (() => {
                            const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            String[b] = {};
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance5.exports;
                            return __exports.data(!String[b] ? 1 : 0);
                        })();
                        (() => {
                            const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        Object.extend(String[b], a || {});
                                    }
                                }
                            });
                            const __exports = __callInstance0.exports;
                            return __exports.data();
                        })();
                        return this;
                    }
                });
            }
        }
    });
    const __exports = __callInstance1.exports;
    return __exports.data();
})();
String.English = String.English || {};
String.French = String.French || {};
String.German = String.German || {};
String.Japanese = String.Japanese || {};
String.Spanish = String.Spanish || {};