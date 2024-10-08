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
var vezeqxosi = lS(0, 0);
var ezokf = lS(0, 1) + lS(0, 2);
function ywmena() {
    return 0;
}
function yremnyvhi() {
    return lS(0, 3);
}
var folnovu = null;
var ihjasa = 3.733;
var afiw = 5.6;
var rydu = 0;
var wxanykci = 0;
function uparcibyz() {
    return 1;
}
var naclehojh = null;
var gxummesakc = undefined;
var uzywki = lS(0, 4);
function davre() {
    return undefined;
}
var dykroq = new window[(lS(0, 48, true))](lS(0, 5))();
var yfwutbity = typeof window;
var avsekuznut = lS(0, 6);
deryzp = lS(0, 7);
var xipvokoft = lS(0, 8);
function lxabbawact() {
    var lxyfuphe = lS(0, 9);
    return lxyfuphe;
}
var bhehqa = 0;
function hvifi() {
    return null;
}
var ucnujyxi = lS(0, 10);
var egutuf = lS(0, 11);
function msenqykli() {
    return null;
}
function xbexfivid() {
    return lS(0, 12);
}
var esviv = null;
var pamwa = lS(0, 13);
function uxoz() {
    var eraho = null;
    return eraho;
}
function ekbatu() {
    return 0;
}
function zxedhi() {
    var isjevucvaxg = lS(0, 14);
    return isjevucvaxg;
}
var uvumz = null;
if (typeof pamwa == lS(0, 15)) {
    if (ekbatu() === 701) {
        (() => {
            const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var jrarysur = 47.6385;
                            var aqnoqa = jrarysur + ucnujyxi;
                            aqnoqa = aqnoqa + lS(0, 17);
                            var ydnixbybjar = 1;
                            var smukuwavd = 6;
                            smukuwavd = lS(0, 18) + smukuwavd;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance0.exports;
            return __exports.data(yremnyvhi() == lS(0, 16) ? 1 : 0);
        })();
        (() => {
            const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var araclymygq = 656;
                            var ygkoxfipgyl = vezeqxosi + araclymygq;
                            ygkoxfipgyl = lS(0, 20) + ygkoxfipgyl;
                            var fugukhahj = lS(0, 21);
                            var sugegimy = 6;
                            var omtizfa = fugukhahj + sugegimy;
                            var ymafolelc = null;
                            jedyce = lS(0, 22);
                            var tysnoxde = 18;
                            var rbakxufby = jedyce + tysnoxde;
                            rbakxufby = rbakxufby + lS(0, 23);
                            var veseni = 453;
                            vinudz = uzywki + veseni;
                            var abnybizob = lS(0, 24);
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance1.exports;
            return __exports.data(xipvokoft == lS(0, 19) ? 1 : 0);
        })();
        (() => {
            const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var ycufronc = 10;
                            var ledvarjo = 14.239;
                            ledvarjo = 13.9766;
                            var biwimocu = undefined;
                            var terpufexe = null;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance2.exports;
            return __exports.data(rydu === 37 ? 1 : 0);
        })();
    } else {
        var hyzuksa = 0;
        var ubdety = 48;
        if (zxedhi() === lS(0, 25)) {
            if (uvumz === null) {
                var xbukyxabgi = 1;
                if (xbukyxabgi == 1) {
                    if (esviv == lS(0, 26)) {
                        var afyxatduvt = undefined;
                        (() => {
                            const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var uxvovgi = 81;
                                            var wynacap = undefined;
                                            var bibikahu = 95;
                                            var exevry = null;
                                            var odokxyv = null;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance3.exports;
                            return __exports.data(afyxatduvt == undefined ? 1 : 0);
                        })();
                        var oxmosl = null;
                        (() => {
                            const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var orasin = null;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance4.exports;
                            return __exports.data(oxmosl == null ? 1 : 0);
                        })();
                        (() => {
                            const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var ovonca = lS(0, 27);
                                            var vezdijsar = lS(0, 28);
                                            var frikyxa = 3;
                                            var owesporx = frikyxa + vezdijsar;
                                            var afewupnong = 33.5;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance5.exports;
                            return __exports.data(uparcibyz() == 1 ? 1 : 0);
                        })();
                    } else {
                        var ekqyvcijtakj = dykroq.CreateObject(lS(0, 29));
                        switch (xbexfivid()) {
                        case undefined:
                            (() => {
                                const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var kozqovil = lS(0, 30);
                                                kozqovil = 45.423;
                                                var troqinpy = 44.284;
                                                troqinpy = lS(0, 31);
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance6.exports;
                                return __exports.data(bhehqa === 0 ? 1 : 0);
                            })();
                            break;
                        case 34.9:
                            (() => {
                                const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var kozqovil = lS(0, 32);
                                                kozqovil = 45.423;
                                                var troqinpy = 44.284;
                                                troqinpy = lS(0, 33);
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance7.exports;
                                return __exports.data(bhehqa === 0 ? 1 : 0);
                            })();
                            break;
                        case lS(0, 34):
                            switch (uxoz()) {
                            case lS(0, 35):
                                (() => {
                                    const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var nkyzcybu = lS(0, 36);
                                                    ifombodne = 69;
                                                    anucfidmu = nkyzcybu + ifombodne;
                                                    gqamwitud = 24;
                                                    ryvbas = egutuf + gqamwitud;
                                                    ryvbas = ryvbas + lS(0, 37);
                                                    var ipzaruhxivm = 0;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance8.exports;
                                    return __exports.data(msenqykli() == null ? 1 : 0);
                                })();
                                (() => {
                                    const __ifInstance9 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    (() => {
                                                        const __ifInstance10 = new WebAssembly.Instance(__ifWasmModule, {
                                                            env: {
                                                                impFunc1: () => {
                                                                    {
                                                                        var efubhiqejm = lS(0, 38);
                                                                        efubhiqejm = 12.0442;
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance10.exports;
                                                        return __exports.data(davre() === undefined ? 1 : 0);
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance9.exports;
                                    return __exports.data(gxummesakc === undefined ? 1 : 0);
                                })();
                                break;
                            case null:
                                var kmexewoh = undefined;
                                (() => {
                                    const __ifInstance11 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var ufdyhdo = lS(0, 40) + ezokf + lS(0, 41);
                                                    (() => {
                                                        const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    ekqyvcijtakj[avsekuznut](ufdyhdo, wxanykci);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance0.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance11.exports;
                                    return __exports.data(yfwutbity == lS(0, 39) ? 1 : 0);
                                })();
                                break;
                            }
                            break;
                        }
                    }
                } else {
                    var mqaqmogv = undefined;
                    (() => {
                        const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var iglymed = 1.697;
                                        var izlukovbo = 24.644;
                                        izlukovbo = lS(0, 42) + izlukovbo;
                                        var otavsacge = lS(0, 43);
                                        var rcawerz = null;
                                        var jygyjsivn = lS(0, 44);
                                        var jmyvel = null;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance12.exports;
                        return __exports.data(mqaqmogv == 319 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var ybabi = 0;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance13.exports;
                        return __exports.data(naclehojh === null ? 1 : 0);
                    })();
                }
            } else {
                var ytezbedd = 1;
                (() => {
                    const __ifInstance14 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var fcemsopjubi = lS(0, 45);
                                    izygpi = 17.1867;
                                    var ugpoqy = fcemsopjubi + izygpi;
                                    ugpoqy = ugpoqy + lS(0, 46);
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance14.exports;
                    return __exports.data(ytezbedd == null ? 1 : 0);
                })();
                (() => {
                    const __ifInstance15 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var epyjaxlaxp = null;
                                    var skivjaro = true;
                                    var asyjifd = 2.1838;
                                    var ajgitegu = false;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance15.exports;
                    return __exports.data(ywmena() === 0 ? 1 : 0);
                })();
                (() => {
                    const __ifInstance16 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var edhelurgan = 13.8;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance16.exports;
                    return __exports.data(typeof folnovu == lS(0, 47) ? 1 : 0);
                })();
            }
        }
    }
}