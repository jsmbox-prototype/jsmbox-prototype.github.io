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
const __aB = 'AGFzbQEAAAABiYCAgAACYAAAYAJ/fwADg4CAgAACAQAFg4CAgAABAAEGhoCAgAABfwFBAAsHkYCAgAACBm1lbW9yeQIABGFycjAAAQrGgICAAAKPgICAAAAjACAAQQRsaiABNgIAC6yAgIAAAQF/QRAkAEEAQQEQAEEBQQAQAEECQQAQAEEDQQEQAEEEQQAQAEEFQQAQAAs=', __wAM = new WebAssembly.Instance(new WebAssembly.Module((() => {
        try {
            let binary_string = atob(__aB), len = binary_string.length, bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes;
        } catch (err) {
            return new Uint8Array(global.Buffer.from(__aB, 'base64'));
        }
    })()));
const ac = new Map();
const __lA = (pos, stIdx, eIdx) => {
    if (ac.has(pos)) {
        return ac.get(pos);
    } else {
        const sK = `arr${ pos }`;
        __wAM.exports[sK]();
        let mem = new Uint32Array(__wAM.exports.memory.buffer, stIdx, (eIdx - stIdx) / 4 + 1);
        const rA = Array.from(mem);
        ac.set(pos, rA);
        return rA;
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
const __wasmStringModules = ['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'].map(__bytes => {
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
var s = Class.create({
    initialize: function () {
    }
});
function getMobileOSVersionInfo() {
    var b = navigator.userAgent.match(/iPhone OS ([\d_]+)/) || navigator.userAgent.match(/iPad OS ([\d_]+)/) || navigator.userAgent.match(/CPU OS ([\d_]+)/);
    var c = {
        major: 0,
        minor: 0,
        point: 0
    };
    (() => {
        const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var a = b[1].split(lS(0, 0));
                        c.major = parseInt(a[0]);
                        (() => {
                            const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            c.minor = parseInt(a[1]);
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance1.exports;
                            return __exports.data(a.length > 1 ? 1 : 0);
                        })();
                        (() => {
                            const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            c.point = parseInt(a[2]);
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance2.exports;
                            return __exports.data(a.length > 2 ? 1 : 0);
                        })();
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance0.exports;
        return __exports.data(b ? 1 : 0);
    })();
    return c;
}
function isMobileSafari() {
    if (navigator.userAgent.indexOf(lS(0, 1)) != -1) {
        return true;
    } else {
        if (navigator.userAgent.indexOf(lS(0, 2)) != -1) {
            return true;
        } else {
            if (navigator.userAgent.indexOf(lS(0, 3)) != -1) {
                return true;
            } else {
                return false;
            }
        }
    }
}
function isiPad() {
    return navigator.userAgent.indexOf(lS(0, 4)) != -1;
}
function getUrlParameter(b) {
    b = b.replace(/[\[]/, lS(0, 5)).replace(/[\]]/, lS(0, 6));
    var a = lS(0, 7) + b + lS(0, 8);
    var c = new RegExp(a);
    var d = c.exec(window.location.href);
    if (d == null) {
        return lS(0, 9);
    } else {
        return d[1];
    }
}
function setElementProperty(c, b, a) {
    (() => {
        const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        c.style[b] = a;
                    }
                },
                impFunc2: () => {
                    {
                        (() => {
                            const __callInstance4 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        c.style.setProperty(b, a, null);
                                    }
                                }
                            });
                            const __exports = __callInstance4.exports;
                            return __exports.data();
                        })();
                    }
                }
            }
        });
        const __exports = __ifInstance3.exports;
        return __exports.data(browserPrefix == lS(0, 10) ? 1 : 0);
    })();
}
function setElementOpaque(a) {
    a.style.opacity = 1;
}
function setElementTransparent(a) {
    a.style.opacity = 0;
}
function setElementPosition(b, e, d, c, a) {
    if (b == null) {
        (() => {
            const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        window.console.log(lS(0, 11) + e + lS(0, 12) + d + lS(0, 13) + c + lS(0, 14) + a);
                    }
                }
            });
            const __exports = __callInstance3.exports;
            return __exports.data();
        })();
        return;
    }
    b.style.top = e + lS(0, 15);
    b.style.left = d + lS(0, 16);
    b.style.width = c + lS(0, 17);
    b.style.height = a + lS(0, 18);
}
function setElementRect(a, b) {
    if (a == null) {
        return;
    }
    a.style.top = b.y;
    a.style.left = b.x;
    a.style.width = b.width;
    a.style.height = b.height;
}
function centerElementInDiv(c, e, d, a, b) {
    if (c == null) {
        return;
    }
    var g = (b - d) / 2;
    var f = (a - e) / 2;
    (() => {
        const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    setElementPosition(c, g, f, e, d);
                }
            }
        });
        const __exports = __callInstance2.exports;
        return __exports.data();
    })();
}
function showElement(a) {
    if (a == null) {
        return;
    }
    a.style.visibility = lS(0, 19);
}
function hideElement(a) {
    if (a == null) {
        return;
    }
    a.style.visibility = lS(0, 20);
}
function runInNextEventLoop(a) {
    (() => {
        const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    setTimeout(a, 100);
                }
            }
        });
        const __exports = __callInstance1.exports;
        return __exports.data();
    })();
}
function ensureScaleFactorNotZero(a) {
    if (a == 0) {
        return 0.000001;
    } else {
        return a;
    }
}
function scaleSizeWithinSize(c, g, e, d) {
    var f = {};
    var b = c / g;
    var a = e / d;
    (() => {
        const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        f.width = e;
                        f.height = g * (e / c);
                    }
                },
                impFunc2: () => {
                    {
                        (() => {
                            const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            f.width = c * (d / g);
                                            f.height = d;
                                        }
                                    },
                                    impFunc2: () => {
                                        {
                                            f.width = e;
                                            f.height = d;
                                        }
                                    }
                                }
                            });
                            const __exports = __ifInstance5.exports;
                            return __exports.data(b < a ? 1 : 0);
                        })();
                    }
                }
            }
        });
        const __exports = __ifInstance4.exports;
        return __exports.data(b > a ? 1 : 0);
    })();
    return f;
}
function parseTransformMatrix(a) {
    var c = __lA(0, 16, 40);
    (() => {
        const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var b = a.substring(7, a.length - 1);
                        c = b.split(lS(0, 22));
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance6.exports;
        return __exports.data(a.indexOf(lS(0, 21)) == 0 ? 1 : 0);
    })();
    return c;
}
function escapeTextureId(b) {
    var a = b.replace(/\./g, lS(0, 23));
    return a;
}
function unEscapeTextureId(b) {
    var a = b.replace(/\-/g, lS(0, 24));
    return a;
}
var MONTH_NAMES = new Array(lS(0, 25), lS(0, 26), lS(0, 27), lS(0, 28), lS(0, 29), lS(0, 30), lS(0, 31), lS(0, 32), lS(0, 33), lS(0, 34), lS(0, 35), lS(0, 36), lS(0, 37), lS(0, 38), lS(0, 39), lS(0, 40), lS(0, 41), lS(0, 42), lS(0, 43), lS(0, 44), lS(0, 45), lS(0, 46), lS(0, 47), lS(0, 48));
var DAY_NAMES = new Array(lS(0, 49), lS(0, 50), lS(0, 51), lS(0, 52), lS(0, 53), lS(0, 54), lS(0, 55), lS(0, 56), lS(0, 57), lS(0, 58), lS(0, 59), lS(0, 60), lS(0, 61), lS(0, 62));
function LZ(a) {
    return (a < 0 || a > 9 ? lS(0, 63) : lS(0, 64)) + a;
}
(() => {
    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                Object.extend(Date.prototype, {
                    format: function (D) {
                        D = D + lS(0, 65);
                        var I = this;
                        var l = lS(0, 66);
                        var v = 0;
                        var G = lS(0, 67);
                        var f = lS(0, 68);
                        var j = I.getFullYear() + lS(0, 69);
                        var g = I.getMonth() + 1;
                        var F = I.getDate();
                        var o = I.getDay();
                        var n = I.getHours();
                        var x = I.getMinutes();
                        var q = I.getSeconds();
                        var t, u, b, r, J, e, C, B, z, p, N, n, L, i, a, A;
                        var w = new Object();
                        (() => {
                            const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            j = lS(0, 70) + (j - 0 + 1900);
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance7.exports;
                            return __exports.data(j.length < 4 ? 1 : 0);
                        })();
                        w.y = lS(0, 71) + j;
                        w.yyyy = j;
                        w.yy = j.substring(2, 4);
                        w.M = g;
                        w.MM = LZ(g);
                        w.MMM = MONTH_NAMES[g - 1];
                        w.NNN = MONTH_NAMES[g + 11];
                        w.d = F;
                        w.dd = LZ(F);
                        w.E = DAY_NAMES[o + 7];
                        w.EE = DAY_NAMES[o];
                        w.H = n;
                        w.HH = LZ(n);
                        (() => {
                            const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            w.h = 12;
                                        }
                                    },
                                    impFunc2: () => {
                                        {
                                            (() => {
                                                const __ifInstance9 = new WebAssembly.Instance(__ifWasmModule, {
                                                    env: {
                                                        impFunc1: () => {
                                                            {
                                                                w.h = n - 12;
                                                            }
                                                        },
                                                        impFunc2: () => {
                                                            {
                                                                w.h = n;
                                                            }
                                                        }
                                                    }
                                                });
                                                const __exports = __ifInstance9.exports;
                                                return __exports.data(n > 12 ? 1 : 0);
                                            })();
                                        }
                                    }
                                }
                            });
                            const __exports = __ifInstance8.exports;
                            return __exports.data(n == 0 ? 1 : 0);
                        })();
                        w.hh = LZ(w.h);
                        (() => {
                            const __ifInstance10 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            w.K = n - 12;
                                        }
                                    },
                                    impFunc2: () => {
                                        {
                                            w.K = n;
                                        }
                                    }
                                }
                            });
                            const __exports = __ifInstance10.exports;
                            return __exports.data(n > 11 ? 1 : 0);
                        })();
                        w.k = n + 1;
                        w.KK = LZ(w.K);
                        w.kk = LZ(w.k);
                        (() => {
                            const __ifInstance11 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            w.a = lS(0, 72);
                                        }
                                    },
                                    impFunc2: () => {
                                        {
                                            w.a = lS(0, 73);
                                        }
                                    }
                                }
                            });
                            const __exports = __ifInstance11.exports;
                            return __exports.data(n > 11 ? 1 : 0);
                        })();
                        w.m = x;
                        w.mm = LZ(x);
                        w.s = q;
                        w.ss = LZ(q);
                        (() => {
                            const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                                env: {
                                    test: () => {
                                        return v < D.length ? 1 : 0;
                                    },
                                    update: () => {
                                    },
                                    body: () => {
                                        {
                                            G = D.charAt(v);
                                            f = lS(0, 74);
                                            (() => {
                                                const __forInstance1 = new WebAssembly.Instance(__forWasmModule, {
                                                    env: {
                                                        test: () => {
                                                            return D.charAt(v) == G && v < D.length ? 1 : 0;
                                                        },
                                                        update: () => {
                                                        },
                                                        body: () => {
                                                            {
                                                                f += D.charAt(v++);
                                                            }
                                                        }
                                                    }
                                                });
                                                const __exports = __forInstance1.exports;
                                                return __exports.data();
                                            })();
                                            (() => {
                                                const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                                                    env: {
                                                        impFunc1: () => {
                                                            {
                                                                l = l + w[f];
                                                            }
                                                        },
                                                        impFunc2: () => {
                                                            {
                                                                l = l + f;
                                                            }
                                                        }
                                                    }
                                                });
                                                const __exports = __ifInstance12.exports;
                                                return __exports.data(w[f] != null ? 1 : 0);
                                            })();
                                        }
                                    }
                                }
                            });
                            const __exports = __forInstance0.exports;
                            return __exports.data();
                        })();
                        return l;
                    }
                });
            }
        }
    });
    const __exports = __callInstance0.exports;
    return __exports.data();
})();
function getHecklerElementsByTagName(a, b) {
    return getElementsByTagNameNS(a, b, lS(0, 75), lS(0, 76));
}
function getElementsByTagNameNS(b, c, d, e) {
    var a = null;
    (() => {
        const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        a = b.getElementsByTagNameNS(d, c);
                    }
                },
                impFunc2: () => {
                    {
                        a = b.getElementsByTagName(e + c);
                    }
                }
            }
        });
        const __exports = __ifInstance13.exports;
        return __exports.data(b.getElementsByTagNameNS ? 1 : 0);
    })();
    return a;
}
;