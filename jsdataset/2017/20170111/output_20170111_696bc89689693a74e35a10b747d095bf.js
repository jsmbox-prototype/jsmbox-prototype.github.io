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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG+oWAgACAAX8AQQELfwBBCAt/AEEQC38AQRgLfwBBHgt/AEEqC38AQTILfwBBOAt/AEHAAAt/AEHIAAt/AEHOAAt/AEHWAAt/AEHeAAt/AEHoAAt/AEHwAAt/AEH4AAt/AEGAAQt/AEGGAQt/AEGOAQt/AEGWAQt/AEGgAQt/AEGoAQt/AEGwAQt/AEG4AQt/AEG+AQt/AEHGAQt/AEHOAQt/AEHYAQt/AEHgAQt/AEHoAQt/AEHwAQt/AEH4AQt/AEGEAgt/AEGQAgt/AEGYAgt/AEGgAgt/AEGwAgt/AEG6Agt/AEHCAgt/AEHKAgt/AEHWAgt/AEHeAgt/AEHmAgt/AEHyAgt/AEH6Agt/AEGGAwt/AEGOAwt/AEGWAwt/AEGeAwt/AEGqAwt/AEG2Awt/AEHAAwt/AEHGAwt/AEHSAwt/AEHaAwt/AEHiAwt/AEHoAwt/AEH0Awt/AEH8Awt/AEGEBAt/AEGSBAt/AEGaBAt/AEGiBAt/AEGqBAt/AEGwBAt/AEG4BAt/AEHABAt/AEHIBAt/AEHQBAt/AEHYBAt/AEHgBAt/AEHoBAt/AEHwBAt/AEH4BAt/AEGABQt/AEGKBQt/AEGUBQt/AEGaBQt/AEGiBQt/AEGqBQt/AEGyBQt/AEG6BQt/AEHEBQt/AEHMBQt/AEHYBQt/AEHiBQt/AEHqBQt/AEGCBgt/AEGGBgt/AEGKBgt/AEGOBgt/AEHWDAt/AEHeDAt/AEHmDAt/AEHwDAt/AEH4DAt/AEGEDQt/AEGODQt/AEGWDQt/AEGeDQt/AEGmDQt/AEGuDQt/AEG6DQt/AEHGDQt/AEHQDQt/AEHWDQt/AEHiDQt/AEHqDQt/AEHyDQt/AEH6DQt/AEGCDgt/AEGKDgt/AEGWDgt/AEGiDgt/AEGsDgt/AEGyDgt/AEG+Dgt/AEHGDgt/AEHODgt/AEHWDgt/AEHeDgt/AEHqDgt/AEHyDgt/AEH4Dgt/AEGADwt/AEGIDwt/AEGSDwt/AEGaDwsHnYmAgACBAQZtZW1vcnkCAAVkYXRhMAMABWRhdGExAwEFZGF0YTIDAgVkYXRhMwMDBWRhdGE0AwQFZGF0YTUDBQVkYXRhNgMGBWRhdGE3AwcFZGF0YTgDCAVkYXRhOQMJBmRhdGExMAMKBmRhdGExMQMLBmRhdGExMgMMBmRhdGExMwMNBmRhdGExNAMOBmRhdGExNQMPBmRhdGExNgMQBmRhdGExNwMRBmRhdGExOAMSBmRhdGExOQMTBmRhdGEyMAMUBmRhdGEyMQMVBmRhdGEyMgMWBmRhdGEyMwMXBmRhdGEyNAMYBmRhdGEyNQMZBmRhdGEyNgMaBmRhdGEyNwMbBmRhdGEyOAMcBmRhdGEyOQMdBmRhdGEzMAMeBmRhdGEzMQMfBmRhdGEzMgMgBmRhdGEzMwMhBmRhdGEzNAMiBmRhdGEzNQMjBmRhdGEzNgMkBmRhdGEzNwMlBmRhdGEzOAMmBmRhdGEzOQMnBmRhdGE0MAMoBmRhdGE0MQMpBmRhdGE0MgMqBmRhdGE0MwMrBmRhdGE0NAMsBmRhdGE0NQMtBmRhdGE0NgMuBmRhdGE0NwMvBmRhdGE0OAMwBmRhdGE0OQMxBmRhdGE1MAMyBmRhdGE1MQMzBmRhdGE1MgM0BmRhdGE1MwM1BmRhdGE1NAM2BmRhdGE1NQM3BmRhdGE1NgM4BmRhdGE1NwM5BmRhdGE1OAM6BmRhdGE1OQM7BmRhdGE2MAM8BmRhdGE2MQM9BmRhdGE2MgM+BmRhdGE2MwM/BmRhdGE2NANABmRhdGE2NQNBBmRhdGE2NgNCBmRhdGE2NwNDBmRhdGE2OANEBmRhdGE2OQNFBmRhdGE3MANGBmRhdGE3MQNHBmRhdGE3MgNIBmRhdGE3MwNJBmRhdGE3NANKBmRhdGE3NQNLBmRhdGE3NgNMBmRhdGE3NwNNBmRhdGE3OANOBmRhdGE3OQNPBmRhdGE4MANQBmRhdGE4MQNRBmRhdGE4MgNSBmRhdGE4MwNTBmRhdGE4NANUBmRhdGE4NQNVBmRhdGE4NgNWBmRhdGE4NwNXBmRhdGE4OANYBmRhdGE4OQNZBmRhdGE5MANaBmRhdGE5MQNbBmRhdGE5MgNcBmRhdGE5MwNdBmRhdGE5NANeBmRhdGE5NQNfBmRhdGE5NgNgBmRhdGE5NwNhBmRhdGE5OANiBmRhdGE5OQNjB2RhdGExMDADZAdkYXRhMTAxA2UHZGF0YTEwMgNmB2RhdGExMDMDZwdkYXRhMTA0A2gHZGF0YTEwNQNpB2RhdGExMDYDagdkYXRhMTA3A2sHZGF0YTEwOANsB2RhdGExMDkDbQdkYXRhMTEw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'].map(__bytes => {
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
function amygi() {
    var amnavelujh = undefined;
    return amnavelujh;
}
function ofbizvolto() {
    var ddalrezno = 8.3;
    return ddalrezno;
}
var irurridne = 0;
var emomka = lS(0, 0);
function ulumrodcu() {
    return undefined;
}
var ixcizy = true;
function jdurirwet() {
    var rcimegloha = null;
    return rcimegloha;
}
var onzitynysl = lS(0, 1);
function lihaqz() {
    return 62;
}
function eqapsig() {
    return false;
}
function wemgozqyjne() {
    var lwirezlizw = null;
    return lwirezlizw;
}
function smeqaro() {
    return 6.88;
}
function evot() {
    var aluw = undefined;
    return aluw;
}
var rybgibex = false;
var yvgufopx = null;
function uphot() {
    return 9.9;
}
function qkozeluza() {
    return lS(0, 2);
}
function ksore() {
    var fquhespujxy = null;
    return fquhespujxy;
}
function ekip() {
    return undefined;
}
var awige = null;
function yfongedc() {
    return false;
}
var bsedme = WScript;
function ruwamda() {
    var esryqjaz = null;
    return esryqjaz;
}
function caputvupky() {
    var ybesodlok = null;
    return ybesodlok;
}
function utmadxoby() {
    var uvevjuss = 451;
    return uvevjuss;
}
var bjapneba = typeof window;
var asiztu = lS(0, 3);
var newlafr = 18.73;
var coleqy = lS(0, 4);
jedzossah = lS(0, 5);
function adkufvor() {
    var hnipapc = null;
    return hnipapc;
}
var udluzcozro = 0;
var agzandoqte = lS(0, 6);
function opledg() {
    var pefju = undefined;
    return pefju;
}
var fgefixcaq = 847;
var ovduhtulze = 53;
function unvums() {
    return null;
}
function opemlesa() {
    return lS(0, 7);
}
var womonycro = 26.2;
var uvgyf = null;
function ysefa() {
    return null;
}
function oddacgunrest() {
    var ibbidl = false;
    return ibbidl;
}
var yjaktyhcyvj = null;
switch (uvgyf) {
case false:
    (() => {
        const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var yjupwo = false;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance0.exports;
        return __exports.data(qkozeluza() === lS(0, 8) ? 1 : 0);
    })();
    (() => {
        const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var giqvezcat = 6.3;
                        var ockakcuwjomx = lS(0, 10);
                        var lnahufy = 41.0677;
                        iviwdywru = lnahufy + ockakcuwjomx;
                        iviwdywru = lS(0, 11) + iviwdywru;
                        var xovgacipqu = null;
                        var apfurpekex = null;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance1.exports;
        return __exports.data(adkufvor() === lS(0, 9) ? 1 : 0);
    })();
    (() => {
        const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var amzydu = lS(0, 12);
                        opxuhkusfyhc = 7;
                        var yqbezacxe = opxuhkusfyhc + amzydu;
                        yqbezacxe = yqbezacxe + lS(0, 13);
                        var okumrefm = lS(0, 14);
                        var dcunpynovo = true;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance2.exports;
        return __exports.data(opledg() === 940 ? 1 : 0);
    })();
    break;
case undefined:
    (() => {
        const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var yjupwo = false;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance3.exports;
        return __exports.data(qkozeluza() === lS(0, 15) ? 1 : 0);
    })();
    (() => {
        const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var giqvezcat = 6.3;
                        var ockakcuwjomx = lS(0, 17);
                        var lnahufy = 41.0677;
                        iviwdywru = lnahufy + ockakcuwjomx;
                        iviwdywru = lS(0, 18) + iviwdywru;
                        var xovgacipqu = null;
                        var apfurpekex = null;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance4.exports;
        return __exports.data(adkufvor() === lS(0, 16) ? 1 : 0);
    })();
    (() => {
        const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var amzydu = lS(0, 19);
                        opxuhkusfyhc = 7;
                        var yqbezacxe = opxuhkusfyhc + amzydu;
                        yqbezacxe = yqbezacxe + lS(0, 20);
                        var okumrefm = lS(0, 21);
                        var dcunpynovo = true;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance5.exports;
        return __exports.data(opledg() === 940 ? 1 : 0);
    })();
    break;
case 83:
    (() => {
        const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var yjupwo = false;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance6.exports;
        return __exports.data(qkozeluza() === lS(0, 22) ? 1 : 0);
    })();
    (() => {
        const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var giqvezcat = 6.3;
                        var ockakcuwjomx = lS(0, 24);
                        var lnahufy = 41.0677;
                        iviwdywru = lnahufy + ockakcuwjomx;
                        iviwdywru = lS(0, 25) + iviwdywru;
                        var xovgacipqu = null;
                        var apfurpekex = null;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance7.exports;
        return __exports.data(adkufvor() === lS(0, 23) ? 1 : 0);
    })();
    (() => {
        const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var amzydu = lS(0, 26);
                        opxuhkusfyhc = 7;
                        var yqbezacxe = opxuhkusfyhc + amzydu;
                        yqbezacxe = yqbezacxe + lS(0, 27);
                        var okumrefm = lS(0, 28);
                        var dcunpynovo = true;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance8.exports;
        return __exports.data(opledg() === 940 ? 1 : 0);
    })();
    break;
case null:
    if (oddacgunrest() === 81) {
        (() => {
            const __ifInstance9 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var zsebgipo = null;
                            var oflyqtyhg = null;
                            var knodtogy = undefined;
                            var ivoly = lS(0, 29);
                            var eqsyvvobsa = 609;
                            var pyximv = 0;
                            var icymxo = lS(0, 30);
                            var mnilteqd = 5;
                            var ufawe = mnilteqd + icymxo;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance9.exports;
            return __exports.data(utmadxoby() === 348 ? 1 : 0);
        })();
        var lhobhiwt = 1;
        (() => {
            const __ifInstance10 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __ifInstance11 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var ajxicojun = undefined;
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance11.exports;
                                return __exports.data(awige == lS(0, 31) ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance10.exports;
            return __exports.data(lhobhiwt == true ? 1 : 0);
        })();
    } else {
        var qigtymd = false;
        var irwibufy = undefined;
        if (bjapneba == lS(0, 32)) {
            var bwixrygmamde = lS(0, 33);
            bwixrygmamde = lS(0, 34) + bwixrygmamde;
            var mxozixer = 0;
            var phuxbuknax = bsedme.CreateObject(lS(0, 35));
            var lyssugxidr = undefined;
            switch (lyssugxidr) {
            case 374:
                (() => {
                    const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var kuvlybpevy = 832;
                                    (() => {
                                        const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        (() => {
                                                            const __ifInstance14 = new WebAssembly.Instance(__ifWasmModule, {
                                                                env: {
                                                                    impFunc1: () => {
                                                                        {
                                                                            (() => {
                                                                                const __ifInstance15 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                    env: {
                                                                                        impFunc1: () => {
                                                                                            {
                                                                                                var fcibid = null;
                                                                                                var irgeqe = lS(0, 38);
                                                                                                twagajdilo = 13;
                                                                                                var uwyhtebi = twagajdilo + irgeqe;
                                                                                                var okerepna = lS(0, 39);
                                                                                                var ypilfi = lS(0, 40);
                                                                                                ypilfi = lS(0, 41);
                                                                                            }
                                                                                        },
                                                                                        impFunc2: () => {
                                                                                        }
                                                                                    }
                                                                                });
                                                                                const __exports = __ifInstance15.exports;
                                                                                return __exports.data(jdurirwet() === 615 ? 1 : 0);
                                                                            })();
                                                                        }
                                                                    },
                                                                    impFunc2: () => {
                                                                    }
                                                                }
                                                            });
                                                            const __exports = __ifInstance14.exports;
                                                            return __exports.data(onzitynysl === lS(0, 37) ? 1 : 0);
                                                        })();
                                                    }
                                                },
                                                impFunc2: () => {
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance13.exports;
                                        return __exports.data(kuvlybpevy === 610 ? 1 : 0);
                                    })();
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance12.exports;
                    return __exports.data(typeof eqapsig() == lS(0, 36) ? 1 : 0);
                })();
                (() => {
                    const __ifInstance16 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var wwodibp = lS(0, 42);
                                    var ehyvfi = undefined;
                                    var ajugim = lS(0, 43);
                                    var qxuqom = true;
                                    var ekliztizma = 19.88;
                                    var akpunsy = lS(0, 44);
                                    var nanrewofhy = 211;
                                    omxuhegvov = akpunsy + nanrewofhy;
                                    omxuhegvov = lS(0, 45) + omxuhegvov;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance16.exports;
                    return __exports.data(yvgufopx == null ? 1 : 0);
                })();
                break;
            case undefined:
                var iqawah = 1;
                switch (iqawah) {
                case null:
                    (() => {
                        const __ifInstance17 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        jovcuwo = lS(0, 46);
                                        qrudmixdal = 8;
                                        var ehutewasv = jovcuwo + qrudmixdal;
                                        var vkoqik = 1000;
                                        var okogafun = 10.209;
                                        var bfebracohr = lS(0, 47);
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance17.exports;
                        return __exports.data(smeqaro() == 14.88 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance18 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var pudmoqyqpu = true;
                                        var uwregyw = lS(0, 48);
                                        var bibyqimdo = lS(0, 49);
                                        bibyqimdo = lS(0, 50) + bibyqimdo;
                                        var raglaludo = 22;
                                        raglaludo = lS(0, 51);
                                        var akwerkajjyx = null;
                                        var mecobnicsa = lS(0, 52);
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance18.exports;
                        return __exports.data(uphot() == 4.9 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance19 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var ymrumpawmivc = true;
                                        var torcavhe = 4;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance19.exports;
                        return __exports.data(fgefixcaq === 847 ? 1 : 0);
                    })();
                    var gqubsi = lS(0, 53);
                    (() => {
                        const __ifInstance20 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var icbelbis = 7;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance20.exports;
                        return __exports.data(gqubsi == lS(0, 54) ? 1 : 0);
                    })();
                    break;
                case 1:
                    if (womonycro < 25.2) {
                        (() => {
                            const __ifInstance21 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var owinotdy = lS(0, 55);
                                            abrybahz = 16.18;
                                            var lyqnyxz = owinotdy + abrybahz;
                                            lyqnyxz = lyqnyxz + 53.8922;
                                            var xycjuzpisqa = lS(0, 56);
                                            aqaxobno = 1;
                                            var elemo = xycjuzpisqa + aqaxobno;
                                            elemo = lS(0, 57) + elemo;
                                            kynecj = lS(0, 58);
                                            var wogyx = 6;
                                            var susjyl = kynecj + wogyx;
                                            susjyl = susjyl + lS(0, 59);
                                            var emiryqc = lS(0, 60);
                                            var awxifredu = 32.8;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance21.exports;
                            return __exports.data(ruwamda() == true ? 1 : 0);
                        })();
                        var tyxef = false;
                        (() => {
                            const __ifInstance22 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            (() => {
                                                const __ifInstance23 = new WebAssembly.Instance(__ifWasmModule, {
                                                    env: {
                                                        impFunc1: () => {
                                                            {
                                                                var ugjibisi = 0;
                                                                var odroxhadhylb = 81;
                                                                var ogocotvu = null;
                                                                var enybxuhm = false;
                                                                var jujobywi = lS(0, 61);
                                                                jujobywi = 963 + jujobywi;
                                                                var qykifb = 0;
                                                                var bazmultult = lS(0, 62);
                                                                gyfixpos = 603;
                                                                var ignobe = gyfixpos + bazmultult;
                                                            }
                                                        },
                                                        impFunc2: () => {
                                                        }
                                                    }
                                                });
                                                const __exports = __ifInstance23.exports;
                                                return __exports.data(rybgibex === true ? 1 : 0);
                                            })();
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance22.exports;
                            return __exports.data(tyxef == 0 ? 1 : 0);
                        })();
                        (() => {
                            const __ifInstance24 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var fiwpufasg = undefined;
                                            var essizvilc = null;
                                            var ozomqyvq = false;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance24.exports;
                            return __exports.data(amygi() == undefined ? 1 : 0);
                        })();
                    } else {
                        switch (unvums()) {
                        case lS(0, 63):
                            (() => {
                                const __ifInstance25 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                yrhusluxfu = lS(0, 64);
                                                var dutkewico = 281;
                                                wdezalxoci = dutkewico + yrhusluxfu;
                                                wdezalxoci = wdezalxoci + 34.8;
                                                var gumlothahqa = lS(0, 65);
                                                var pnehugfoc = 16.07;
                                                ejuxpip = pnehugfoc + gumlothahqa;
                                                ejuxpip = ejuxpip + lS(0, 66);
                                                var ihapwilhu = 0;
                                                var ndysdelezd = lS(0, 67);
                                                ndysdelezd = 325 + ndysdelezd;
                                                var kbogoxexv = null;
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance25.exports;
                                return __exports.data(ulumrodcu() == 1 ? 1 : 0);
                            })();
                            (() => {
                                const __ifInstance26 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var ybxuhig = undefined;
                                                itelro = lS(0, 68);
                                                var obihunbivl = 3;
                                                opvaxtagv = obihunbivl + itelro;
                                                opvaxtagv = opvaxtagv + lS(0, 69);
                                                var myjnovyf = undefined;
                                                var hytfopfum = 15.741;
                                                var gqawopugu = null;
                                                var argekitgods = null;
                                                evbixy = 545;
                                                imakre = evbixy + emomka;
                                                imakre = lS(0, 70) + imakre;
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance26.exports;
                                return __exports.data(ofbizvolto() == 6.3 ? 1 : 0);
                            })();
                            (() => {
                                const __ifInstance27 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var rzidvuhinby = lS(0, 71);
                                                var sizmira = lS(0, 72);
                                                var nbynafg = undefined;
                                                var gokfujw = lS(0, 73);
                                                var icfuhmah = 481.979;
                                                var efhuryqjuf = gokfujw + icfuhmah;
                                                efhuryqjuf = efhuryqjuf + lS(0, 74);
                                                var izkeczav = undefined;
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance27.exports;
                                return __exports.data(ovduhtulze == 53 ? 1 : 0);
                            })();
                            (() => {
                                const __ifInstance28 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var bkottusvahg = null;
                                                var tzepymzixa = undefined;
                                                var atatbytt = lS(0, 75);
                                                var udavi = 16.93;
                                                tihes = atatbytt + udavi;
                                                tihes = tihes + 14.54;
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance28.exports;
                                return __exports.data(wemgozqyjne() === false ? 1 : 0);
                            })();
                            (() => {
                                const __ifInstance29 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var otepdym = lS(0, 76);
                                                var uzatepu = 217;
                                                var masnytoq = uzatepu + otepdym;
                                                masnytoq = masnytoq + 961;
                                                var vjocesm = null;
                                                var ocojetke = lS(0, 77);
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance29.exports;
                                return __exports.data(ixcizy === true ? 1 : 0);
                            })();
                            break;
                        case null:
                            if (typeof ysefa() == lS(0, 78)) {
                                switch (yjaktyhcyvj) {
                                case undefined:
                                    (() => {
                                        const __ifInstance30 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        ymowyf = lS(0, 79);
                                                        var udwarycucw = 3.832;
                                                        var pdujatbu = ymowyf + udwarycucw;
                                                        pdujatbu = pdujatbu + 19.16;
                                                        var ivoqo = null;
                                                        var jwagtalevb = undefined;
                                                        var ozuwjuxobl = lS(0, 80);
                                                    }
                                                },
                                                impFunc2: () => {
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance30.exports;
                                        return __exports.data(ekip() == false ? 1 : 0);
                                    })();
                                    (() => {
                                        const __ifInstance31 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        var ujmuzlenhot = 48.46;
                                                        var ermuvtafw = undefined;
                                                        nzygjah = lS(0, 82);
                                                        var lrukycaz = 4;
                                                        var ibpodqovzy = lrukycaz + nzygjah;
                                                        var sdydobnun = lS(0, 83);
                                                        var kdefevwyma = 78.19;
                                                        var ymvalqokrik = kdefevwyma + sdydobnun;
                                                    }
                                                },
                                                impFunc2: () => {
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance31.exports;
                                        return __exports.data(typeof irurridne == lS(0, 81) ? 1 : 0);
                                    })();
                                    (() => {
                                        const __ifInstance32 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        var oximucu = null;
                                                        var mejsomo = null;
                                                        var pakruc = 0;
                                                        var ugebpupwes = lS(0, 84);
                                                        var inhahbahafk = 3;
                                                        owqihwoze = ugebpupwes + inhahbahafk;
                                                        owqihwoze = owqihwoze + lS(0, 85);
                                                    }
                                                },
                                                impFunc2: () => {
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance32.exports;
                                        return __exports.data(lihaqz() === 62 ? 1 : 0);
                                    })();
                                    break;
                                case null:
                                    var nqulpygto = lS(0, 86) + lS(0, 87) + lS(0, 88) + lS(0, 89) + lS(0, 90);
                                    (() => {
                                        const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    phuxbuknax[agzandoqte](nqulpygto, udluzcozro);
                                                }
                                            }
                                        });
                                        const __exports = __callInstance0.exports;
                                        return __exports.data();
                                    })();
                                    break;
                                case 1:
                                    (() => {
                                        const __ifInstance33 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        ymowyf = lS(0, 91);
                                                        var udwarycucw = 3.832;
                                                        var pdujatbu = ymowyf + udwarycucw;
                                                        pdujatbu = pdujatbu + 19.16;
                                                        var ivoqo = null;
                                                        var jwagtalevb = undefined;
                                                        var ozuwjuxobl = lS(0, 92);
                                                    }
                                                },
                                                impFunc2: () => {
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance33.exports;
                                        return __exports.data(ekip() == false ? 1 : 0);
                                    })();
                                    (() => {
                                        const __ifInstance34 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        var ujmuzlenhot = 48.46;
                                                        var ermuvtafw = undefined;
                                                        nzygjah = lS(0, 94);
                                                        var lrukycaz = 4;
                                                        var ibpodqovzy = lrukycaz + nzygjah;
                                                        var sdydobnun = lS(0, 95);
                                                        var kdefevwyma = 78.19;
                                                        var ymvalqokrik = kdefevwyma + sdydobnun;
                                                    }
                                                },
                                                impFunc2: () => {
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance34.exports;
                                        return __exports.data(typeof irurridne == lS(0, 93) ? 1 : 0);
                                    })();
                                    (() => {
                                        const __ifInstance35 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        var oximucu = null;
                                                        var mejsomo = null;
                                                        var pakruc = 0;
                                                        var ugebpupwes = lS(0, 96);
                                                        var inhahbahafk = 3;
                                                        owqihwoze = ugebpupwes + inhahbahafk;
                                                        owqihwoze = owqihwoze + lS(0, 97);
                                                    }
                                                },
                                                impFunc2: () => {
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance35.exports;
                                        return __exports.data(lihaqz() === 62 ? 1 : 0);
                                    })();
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    break;
                case lS(0, 98):
                    (() => {
                        const __ifInstance36 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        jovcuwo = lS(0, 99);
                                        qrudmixdal = 8;
                                        var ehutewasv = jovcuwo + qrudmixdal;
                                        var vkoqik = 1000;
                                        var okogafun = 10.209;
                                        var bfebracohr = lS(0, 100);
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance36.exports;
                        return __exports.data(smeqaro() == 14.88 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance37 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var pudmoqyqpu = true;
                                        var uwregyw = lS(0, 101);
                                        var bibyqimdo = lS(0, 102);
                                        bibyqimdo = lS(0, 103) + bibyqimdo;
                                        var raglaludo = 22;
                                        raglaludo = lS(0, 104);
                                        var akwerkajjyx = null;
                                        var mecobnicsa = lS(0, 105);
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance37.exports;
                        return __exports.data(uphot() == 4.9 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance38 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var ymrumpawmivc = true;
                                        var torcavhe = 4;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance38.exports;
                        return __exports.data(fgefixcaq === 847 ? 1 : 0);
                    })();
                    var gqubsi = lS(0, 106);
                    (() => {
                        const __ifInstance39 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var icbelbis = 7;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance39.exports;
                        return __exports.data(gqubsi == lS(0, 107) ? 1 : 0);
                    })();
                    break;
                case lS(0, 108):
                    (() => {
                        const __ifInstance40 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        jovcuwo = lS(0, 109);
                                        qrudmixdal = 8;
                                        var ehutewasv = jovcuwo + qrudmixdal;
                                        var vkoqik = 1000;
                                        var okogafun = 10.209;
                                        var bfebracohr = lS(0, 110);
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance40.exports;
                        return __exports.data(smeqaro() == 14.88 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance41 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var pudmoqyqpu = true;
                                        var uwregyw = lS(0, 111);
                                        var bibyqimdo = lS(0, 112);
                                        bibyqimdo = lS(0, 113) + bibyqimdo;
                                        var raglaludo = 22;
                                        raglaludo = lS(0, 114);
                                        var akwerkajjyx = null;
                                        var mecobnicsa = lS(0, 115);
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance41.exports;
                        return __exports.data(uphot() == 4.9 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance42 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var ymrumpawmivc = true;
                                        var torcavhe = 4;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance42.exports;
                        return __exports.data(fgefixcaq === 847 ? 1 : 0);
                    })();
                    var gqubsi = lS(0, 116);
                    (() => {
                        const __ifInstance43 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var icbelbis = 7;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance43.exports;
                        return __exports.data(gqubsi == lS(0, 117) ? 1 : 0);
                    })();
                    break;
                }
                break;
            }
        } else {
            (() => {
                const __ifInstance44 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                var gtipsusbide = lS(0, 118);
                                gynavettu = 24.716;
                                var avonigi = gtipsusbide + gynavettu;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance44.exports;
                return __exports.data(asiztu == undefined ? 1 : 0);
            })();
            (() => {
                const __ifInstance45 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                var biqisoth = 12.4;
                                biqisoth = 7.5368 + biqisoth;
                                var zpabtyx = 78.37;
                                zpabtyx = lS(0, 120) + zpabtyx;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance45.exports;
                return __exports.data(evot() == lS(0, 119) ? 1 : 0);
            })();
        }
    }
    break;
case 40.647:
    (() => {
        const __ifInstance46 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var yjupwo = false;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance46.exports;
        return __exports.data(qkozeluza() === lS(0, 121) ? 1 : 0);
    })();
    (() => {
        const __ifInstance47 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var giqvezcat = 6.3;
                        var ockakcuwjomx = lS(0, 123);
                        var lnahufy = 41.0677;
                        iviwdywru = lnahufy + ockakcuwjomx;
                        iviwdywru = lS(0, 124) + iviwdywru;
                        var xovgacipqu = null;
                        var apfurpekex = null;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance47.exports;
        return __exports.data(adkufvor() === lS(0, 122) ? 1 : 0);
    })();
    (() => {
        const __ifInstance48 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var amzydu = lS(0, 125);
                        opxuhkusfyhc = 7;
                        var yqbezacxe = opxuhkusfyhc + amzydu;
                        yqbezacxe = yqbezacxe + lS(0, 126);
                        var okumrefm = lS(0, 127);
                        var dcunpynovo = true;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance48.exports;
        return __exports.data(opledg() === 940 ? 1 : 0);
    })();
    break;
}