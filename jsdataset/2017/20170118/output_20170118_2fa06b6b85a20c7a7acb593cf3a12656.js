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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGrYSAgABefwBBAQt/AEEIC38AQRALfwBBHAt/AEEkC38AQSoLfwBBMgt/AEE6C38AQcIAC38AQcoAC38AQdYAC38AQeQAC38AQewAC38AQf4AC38AQYQBC38AQYwBC38AQZQBC38AQZwBC38AQaQBC38AQawBC38AQbgBC38AQcYBC38AQc4BC38AQdgBC38AQeQBC38AQe4BC38AQfYBC38AQYYCC38AQY4CC38AQZYCC38AQZ4CC38AQaoCC38AQbICC38AQb4CC38AQcoCC38AQdICC38AQd4CC38AQegCC38AQfACC38AQfgCC38AQYQDC38AQYwDC38AQZQDC38AQZoDC38AQaIDC38AQaoDC38AQbIDC38AQboDC38AQcADC38AQcgDC38AQdQDC38AQdwDC38AQeQDC38AQeoDC38AQfIDC38AQfoDC38AQYIEC38AQYoEC38AQZAEC38AQZgEC38AQaQEC38AQawEC38AQbQEC38AQboEC38AQcIEC38AQcoEC38AQdIEC38AQdoEC38AQeAEC38AQegEC38AQf4EC38AQa4LC38AQbYLC38AQb4LC38AQcYLC38AQc4LC38AQdYLC38AQeILC38AQeoLC38AQfYLC38AQf4LC38AQYgMC38AQZAMC38AQZ4MC38AQaQMC38AQawMC38AQbgMC38AQcYMC38AQc4MC38AQdgMC38AQeAMC38AQeYMC38AQe4MC38AQfYMCwfOhoCAAF8GbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwIFZGF0YTMDAwVkYXRhNAMEBWRhdGE1AwUFZGF0YTYDBgVkYXRhNwMHBWRhdGE4AwgFZGF0YTkDCQZkYXRhMTADCgZkYXRhMTEDCwZkYXRhMTIDDAZkYXRhMTMDDQZkYXRhMTQDDgZkYXRhMTUDDwZkYXRhMTYDEAZkYXRhMTcDEQZkYXRhMTgDEgZkYXRhMTkDEwZkYXRhMjADFAZkYXRhMjEDFQZkYXRhMjIDFgZkYXRhMjMDFwZkYXRhMjQDGAZkYXRhMjUDGQZkYXRhMjYDGgZkYXRhMjcDGwZkYXRhMjgDHAZkYXRhMjkDHQZkYXRhMzADHgZkYXRhMzEDHwZkYXRhMzIDIAZkYXRhMzMDIQZkYXRhMzQDIgZkYXRhMzUDIwZkYXRhMzYDJAZkYXRhMzcDJQZkYXRhMzgDJgZkYXRhMzkDJwZkYXRhNDADKAZkYXRhNDEDKQZkYXRhNDIDKgZkYXRhNDMDKwZkYXRhNDQDLAZkYXRhNDUDLQZkYXRhNDYDLgZkYXRhNDcDLwZkYXRhNDgDMAZkYXRhNDkDMQZkYXRhNTADMgZkYXRhNTEDMwZkYXRhNTIDNAZkYXRhNTMDNQZkYXRhNTQDNgZkYXRhNTUDNwZkYXRhNTYDOAZkYXRhNTcDOQZkYXRhNTgDOgZkYXRhNTkDOwZkYXRhNjADPAZkYXRhNjEDPQZkYXRhNjIDPgZkYXRhNjMDPwZkYXRhNjQDQAZkYXRhNjUDQQZkYXRhNjYDQgZkYXRhNjcDQwZkYXRhNjgDRAZkYXRhNjkDRQZkYXRhNzADRgZkYXRhNzEDRwZkYXRhNzIDSAZkYXRhNzMDSQZkYXRhNzQDSgZkYXRhNzUDSwZkYXRhNzYDTAZkYXRhNzcDTQZkYXRhNzgDTgZkYXRhNzkDTwZkYXRhODADUAZkYXRhODEDUQZkYXRhODIDUgZkYXRhODMDUwZkYXRhODQDVAZkYXRhODUDVQZkYXRhODYDVgZkYXRhODcDVwZkYXRhODgDWAZkYXRhODkDWQZkYXRhOTADWgZkYXRhOTEDWwZkYXRhOTIDXAZkYXRhOTMDXQuYkICAAF4AQQELBnBvd2VyAABBCAsGc2hlbGwAAEEQCwthc2lkeGVodnVnAABBHAsHb3F0aXN5AABBJAsEbnl2AABBKgsGNjY4MTYAAEEyCwdzYWtveGQAAEE6CwZ1cWhhYwAAQcIACwdzYXhlcGEAAEHKAAsKdW5kZWZpbmVkAABB1gALDHdqYXFsaWN1ZmtvAABB5AALB2xweWdiaQAAQewACxFyZXR1cm4lMjBXU2NyaXB0AABB/gALBHJ1bgAAQYQBCwY5NTc4OQAAQYwBCwYyNzYyMAAAQZQBCwY5NTc4OQAAQZwBCwYyNzYyMAAAQaQBCwdvYmplY3QAAEGsAQsKeXdoeXNoYW5rAABBuAELDXJtb2R3YWZuaXZsZQAAQcYBCwY4NDk2MQAAQc4BCwl0d2ltZGlqZQAAQdgBCwtlY2d5a3ZvbHNlAABB5AELCHdwb2R5bHgAAEHuAQsGNTkxODIAAEH2AQsOV1Nj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'].map(__bytes => {
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
var syfofo = null;
var ucazkukibz = 12.78;
var ifezax = false;
var qitulty = lS(0, 0) + lS(0, 1);
var ujkimen = lS(0, 2);
function xsypiqyg() {
    return 95;
}
function dysyho() {
    var abir = 7;
    return abir;
}
uqvatze = lS(0, 3);
var ojoghy = 0;
function sawqon() {
    return null;
}
dzusitny = lS(0, 4);
function ajugh() {
    return true;
}
function ymzywbipy() {
    var pojxo = lS(0, 5);
    return pojxo;
}
var uqzencoqo = lS(0, 6);
rridkefmyf = lS(0, 7);
enakorigz = lS(0, 8);
var ewnukowgor = typeof window == lS(0, 9);
var siwidutx = 1;
var idfopewzacr = undefined;
var fybevwywi = lS(0, 10);
ompawcijbigx = lS(0, 11);
function rilheljo() {
    var argebqohwibz = null;
    return argebqohwibz;
}
var uvgud = new window[(lS(0, 93, true))](lS(0, 12))();
var ozulqy = null;
var ozyvlifaq = null;
var uxalaqu = lS(0, 13);
function afefexej() {
    var fhuzkuxomh = 1;
    return fhuzkuxomh;
}
function niqvevle() {
    var anah = null;
    return anah;
}
var xoro = 15.84;
function oglypij() {
    var jraqjarfyfk = null;
    return jraqjarfyfk;
}
var fawy = undefined;
switch (afefexej()) {
case null:
    var exugevu = 1;
    (() => {
        const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var rlystubawu = 4;
                        ojubu = 743;
                        qbutyjtyna = dzusitny + ojubu;
                        qbutyjtyna = qbutyjtyna + lS(0, 14);
                        zexoxr = lS(0, 15);
                        ciztysik = 89;
                        var apkuquspe = ciztysik + zexoxr;
                        var uzpullo = undefined;
                        var chegwoj = 1;
                        var ukqagesikr = 59.1486;
                        var sdampebeb = ukqagesikr + enakorigz;
                        sdampebeb = 39 + sdampebeb;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance0.exports;
        return __exports.data(exugevu == true ? 1 : 0);
    })();
    break;
case undefined:
    var exugevu = 1;
    (() => {
        const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var rlystubawu = 4;
                        ojubu = 743;
                        qbutyjtyna = dzusitny + ojubu;
                        qbutyjtyna = qbutyjtyna + lS(0, 16);
                        zexoxr = lS(0, 17);
                        ciztysik = 89;
                        var apkuquspe = ciztysik + zexoxr;
                        var uzpullo = undefined;
                        var chegwoj = 1;
                        var ukqagesikr = 59.1486;
                        var sdampebeb = ukqagesikr + enakorigz;
                        sdampebeb = 39 + sdampebeb;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance1.exports;
        return __exports.data(exugevu == true ? 1 : 0);
    })();
    break;
case 1:
    switch (niqvevle()) {
    case true:
        (() => {
            const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var ksirlaclubgo = null;
                            var ylmovvibh = undefined;
                            var zcydcykjot = null;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance2.exports;
            return __exports.data(ozyvlifaq == null ? 1 : 0);
        })();
        (() => {
            const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var imvepfo = 143.447;
                            imvepfo = lS(0, 19);
                            var jgemvamylsi = undefined;
                            var yzylxoqxog = 117.68;
                            var usetcyhyb = null;
                            var pvotywu = lS(0, 20);
                            var obbyratocg = lS(0, 21);
                            opkimuzo = lS(0, 22);
                            var pufgykjuhna = 823;
                            var idxefre = pufgykjuhna + opkimuzo;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance3.exports;
            return __exports.data(typeof syfofo == lS(0, 18) ? 1 : 0);
        })();
        (() => {
            const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var nzitozmymi = undefined;
                            var ebadvo = undefined;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance4.exports;
            return __exports.data(ozulqy === null ? 1 : 0);
        })();
        break;
    case null:
        var ivanguc = null;
        if (ewnukowgor) {
            var jufradmo = true;
            var qsetomhexj = lS(0, 23);
            var phuznus = 1.48;
            ypmozxy = lS(0, 24);
            var egatlyjjo = 7.337;
            var lopwomylzo = ypmozxy + egatlyjjo;
            var atcaqut = 712;
            var naqugt = atcaqut + uqzencoqo;
            var ybveltylocx = 9;
            ybveltylocx = lS(0, 25) + ybveltylocx;
            var avzamol = uvgud.CreateObject(lS(0, 26));
            switch (xoro) {
            case false:
                (() => {
                    const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var kaklitvu = lS(0, 27);
                                    var syfekkaj = 23.09;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance5.exports;
                    return __exports.data(ucazkukibz < 16.78 ? 1 : 0);
                })();
                break;
            case 15.84:
                var hnusweqsalh = 6.16;
                var ycrafuxs = lS(0, 28);
                var ekreqbun = null;
                var xlygcehyxh = 7;
                lilvuwovw = 138;
                var cuzysfo = lilvuwovw + ompawcijbigx;
                cuzysfo = cuzysfo + 8;
                qepnan = lS(0, 29);
                figpomog = 16.6;
                var ebywda = figpomog + qepnan;
                ebywda = ebywda + 465;
                var ucpugykhex = 112.9;
                switch (ucpugykhex) {
                case true:
                    var avavnumewn = undefined;
                    (() => {
                        const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        (() => {
                                            const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
                                                env: {
                                                    impFunc1: () => {
                                                        {
                                                            (() => {
                                                                const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                                                                    env: {
                                                                        impFunc1: () => {
                                                                            {
                                                                                var izxijo = lS(0, 31);
                                                                                var upagtinci = lS(0, 32);
                                                                                var ivososyf = 20;
                                                                                var ymravu = ivososyf + upagtinci;
                                                                                ymravu = 5 + ymravu;
                                                                            }
                                                                        },
                                                                        impFunc2: () => {
                                                                        }
                                                                    }
                                                                });
                                                                const __exports = __ifInstance8.exports;
                                                                return __exports.data(ifezax === null ? 1 : 0);
                                                            })();
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance7.exports;
                                            return __exports.data(xsypiqyg() < 139 ? 1 : 0);
                                        })();
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance6.exports;
                        return __exports.data(typeof avavnumewn == lS(0, 30) ? 1 : 0);
                    })();
                    break;
                case 1:
                    var avavnumewn = undefined;
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
                                                            (() => {
                                                                const __ifInstance11 = new WebAssembly.Instance(__ifWasmModule, {
                                                                    env: {
                                                                        impFunc1: () => {
                                                                            {
                                                                                var izxijo = lS(0, 34);
                                                                                var upagtinci = lS(0, 35);
                                                                                var ivososyf = 20;
                                                                                var ymravu = ivososyf + upagtinci;
                                                                                ymravu = 5 + ymravu;
                                                                            }
                                                                        },
                                                                        impFunc2: () => {
                                                                        }
                                                                    }
                                                                });
                                                                const __exports = __ifInstance11.exports;
                                                                return __exports.data(ifezax === null ? 1 : 0);
                                                            })();
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance10.exports;
                                            return __exports.data(xsypiqyg() < 139 ? 1 : 0);
                                        })();
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance9.exports;
                        return __exports.data(typeof avavnumewn == lS(0, 33) ? 1 : 0);
                    })();
                    break;
                case 112.9:
                    switch (oglypij()) {
                    case false:
                        (() => {
                            const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var oqetdahub = lS(0, 37);
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance12.exports;
                            return __exports.data(typeof ajugh() == lS(0, 36) ? 1 : 0);
                        })();
                        (() => {
                            const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var dezhymka = null;
                                            var ocleghaqot = null;
                                            var dfyrrasulm = lS(0, 38);
                                            var ytvycil = 6;
                                            ytvycil = 169.737 + ytvycil;
                                            var udfarsu = false;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance13.exports;
                            return __exports.data(siwidutx == 1 ? 1 : 0);
                        })();
                        break;
                    case null:
                        var kbuqe = null;
                        if (kbuqe == null) {
                            switch (fawy) {
                            case 1:
                                var edynju = lS(0, 39);
                                (() => {
                                    const __ifInstance14 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var pwybfinp = 72;
                                                    var uwijo = null;
                                                    var phiwjyxbejfy = 40.4;
                                                    ajisevfo = lS(0, 40);
                                                    var hbufqope = 33.49;
                                                    var oresudz = ajisevfo + hbufqope;
                                                    oresudz = lS(0, 41) + oresudz;
                                                    var erawqatbag = undefined;
                                                    var wjumypq = 40.4847;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance14.exports;
                                    return __exports.data(edynju === 497 ? 1 : 0);
                                })();
                                (() => {
                                    const __ifInstance15 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    (() => {
                                                        const __ifInstance16 = new WebAssembly.Instance(__ifWasmModule, {
                                                            env: {
                                                                impFunc1: () => {
                                                                    {
                                                                        var dtinych = null;
                                                                        var qymlyvikgo = 79;
                                                                        var virnugavo = lS(0, 42);
                                                                        var fcyzasihd = 268.6;
                                                                        var hycrebejn = fcyzasihd + ujkimen;
                                                                        hycrebejn = hycrebejn + lS(0, 43);
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance16.exports;
                                                        return __exports.data(idfopewzacr == true ? 1 : 0);
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance15.exports;
                                    return __exports.data(sawqon() === 418 ? 1 : 0);
                                })();
                                var amude = lS(0, 44);
                                (() => {
                                    const __ifInstance17 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var otoswa = false;
                                                    var yregy = null;
                                                    var acwolefk = lS(0, 46);
                                                    var absynqodd = true;
                                                    var vpumpadugo = lS(0, 47);
                                                    var wdefyhyve = 312;
                                                    var dkuwhulo = wdefyhyve + vpumpadugo;
                                                    dkuwhulo = lS(0, 48) + dkuwhulo;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance17.exports;
                                    return __exports.data(amude == lS(0, 45) ? 1 : 0);
                                })();
                                break;
                            case null:
                                var edynju = lS(0, 49);
                                (() => {
                                    const __ifInstance18 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var pwybfinp = 72;
                                                    var uwijo = null;
                                                    var phiwjyxbejfy = 40.4;
                                                    ajisevfo = lS(0, 50);
                                                    var hbufqope = 33.49;
                                                    var oresudz = ajisevfo + hbufqope;
                                                    oresudz = lS(0, 51) + oresudz;
                                                    var erawqatbag = undefined;
                                                    var wjumypq = 40.4847;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance18.exports;
                                    return __exports.data(edynju === 497 ? 1 : 0);
                                })();
                                (() => {
                                    const __ifInstance19 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    (() => {
                                                        const __ifInstance20 = new WebAssembly.Instance(__ifWasmModule, {
                                                            env: {
                                                                impFunc1: () => {
                                                                    {
                                                                        var dtinych = null;
                                                                        var qymlyvikgo = 79;
                                                                        var virnugavo = lS(0, 52);
                                                                        var fcyzasihd = 268.6;
                                                                        var hycrebejn = fcyzasihd + ujkimen;
                                                                        hycrebejn = hycrebejn + lS(0, 53);
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance20.exports;
                                                        return __exports.data(idfopewzacr == true ? 1 : 0);
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance19.exports;
                                    return __exports.data(sawqon() === 418 ? 1 : 0);
                                })();
                                var amude = lS(0, 54);
                                (() => {
                                    const __ifInstance21 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var otoswa = false;
                                                    var yregy = null;
                                                    var acwolefk = lS(0, 56);
                                                    var absynqodd = true;
                                                    var vpumpadugo = lS(0, 57);
                                                    var wdefyhyve = 312;
                                                    var dkuwhulo = wdefyhyve + vpumpadugo;
                                                    dkuwhulo = lS(0, 58) + dkuwhulo;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance21.exports;
                                    return __exports.data(amude == lS(0, 55) ? 1 : 0);
                                })();
                                break;
                            case 4:
                                var edynju = lS(0, 59);
                                (() => {
                                    const __ifInstance22 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var pwybfinp = 72;
                                                    var uwijo = null;
                                                    var phiwjyxbejfy = 40.4;
                                                    ajisevfo = lS(0, 60);
                                                    var hbufqope = 33.49;
                                                    var oresudz = ajisevfo + hbufqope;
                                                    oresudz = lS(0, 61) + oresudz;
                                                    var erawqatbag = undefined;
                                                    var wjumypq = 40.4847;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance22.exports;
                                    return __exports.data(edynju === 497 ? 1 : 0);
                                })();
                                (() => {
                                    const __ifInstance23 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    (() => {
                                                        const __ifInstance24 = new WebAssembly.Instance(__ifWasmModule, {
                                                            env: {
                                                                impFunc1: () => {
                                                                    {
                                                                        var dtinych = null;
                                                                        var qymlyvikgo = 79;
                                                                        var virnugavo = lS(0, 62);
                                                                        var fcyzasihd = 268.6;
                                                                        var hycrebejn = fcyzasihd + ujkimen;
                                                                        hycrebejn = hycrebejn + lS(0, 63);
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance24.exports;
                                                        return __exports.data(idfopewzacr == true ? 1 : 0);
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance23.exports;
                                    return __exports.data(sawqon() === 418 ? 1 : 0);
                                })();
                                var amude = lS(0, 64);
                                (() => {
                                    const __ifInstance25 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var otoswa = false;
                                                    var yregy = null;
                                                    var acwolefk = lS(0, 66);
                                                    var absynqodd = true;
                                                    var vpumpadugo = lS(0, 67);
                                                    var wdefyhyve = 312;
                                                    var dkuwhulo = wdefyhyve + vpumpadugo;
                                                    dkuwhulo = lS(0, 68) + dkuwhulo;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance25.exports;
                                    return __exports.data(amude == lS(0, 65) ? 1 : 0);
                                })();
                                break;
                            case undefined:
                                var nemzeqr = lS(0, 69) + qitulty + lS(0, 70);
                                (() => {
                                    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                avzamol[uxalaqu](nemzeqr, ojoghy);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance0.exports;
                                    return __exports.data();
                                })();
                                var nsijimo = 8.492;
                                var wexqedro = lS(0, 71);
                                var cubibxazi = 18;
                                var vernofvo = cubibxazi + wexqedro;
                                vernofvo = vernofvo + 49;
                                var amsipojud = lS(0, 72);
                                var urcudfimqyph = 44.9;
                                rxamefpurmu = amsipojud + urcudfimqyph;
                                break;
                            }
                        } else {
                            var usyk = null;
                            (() => {
                                const __ifInstance26 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __ifInstance27 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    var ugefle = undefined;
                                                                    var ukpuxkehuk = 9.97;
                                                                    var rquxvorrul = fybevwywi + ukpuxkehuk;
                                                                    rquxvorrul = lS(0, 74) + rquxvorrul;
                                                                    var ocmiddo = undefined;
                                                                    var exate = 0;
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance27.exports;
                                                    return __exports.data(rilheljo() == null ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance26.exports;
                                return __exports.data(typeof usyk == lS(0, 73) ? 1 : 0);
                            })();
                            (() => {
                                const __ifInstance28 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var ellafxyr = null;
                                                var hewwehji = 22.473;
                                                var xofuz = uqvatze + hewwehji;
                                                xofuz = xofuz + 3;
                                                var ssynfeme = 30.23;
                                                var medis = 1;
                                                var umjalnawyvp = undefined;
                                                var arxydrazyt = 3.7899;
                                                arxydrazyt = lS(0, 75);
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance28.exports;
                                return __exports.data(dysyho() == 7 ? 1 : 0);
                            })();
                        }
                        break;
                    }
                    break;
                case null:
                    var avavnumewn = undefined;
                    (() => {
                        const __ifInstance29 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        (() => {
                                            const __ifInstance30 = new WebAssembly.Instance(__ifWasmModule, {
                                                env: {
                                                    impFunc1: () => {
                                                        {
                                                            (() => {
                                                                const __ifInstance31 = new WebAssembly.Instance(__ifWasmModule, {
                                                                    env: {
                                                                        impFunc1: () => {
                                                                            {
                                                                                var izxijo = lS(0, 77);
                                                                                var upagtinci = lS(0, 78);
                                                                                var ivososyf = 20;
                                                                                var ymravu = ivososyf + upagtinci;
                                                                                ymravu = 5 + ymravu;
                                                                            }
                                                                        },
                                                                        impFunc2: () => {
                                                                        }
                                                                    }
                                                                });
                                                                const __exports = __ifInstance31.exports;
                                                                return __exports.data(ifezax === null ? 1 : 0);
                                                            })();
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance30.exports;
                                            return __exports.data(xsypiqyg() < 139 ? 1 : 0);
                                        })();
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance29.exports;
                        return __exports.data(typeof avavnumewn == lS(0, 76) ? 1 : 0);
                    })();
                    break;
                }
                break;
            case undefined:
                (() => {
                    const __ifInstance32 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var kaklitvu = lS(0, 79);
                                    var syfekkaj = 23.09;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance32.exports;
                    return __exports.data(ucazkukibz < 16.78 ? 1 : 0);
                })();
                break;
            }
        } else {
            (() => {
                const __ifInstance33 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                var lobypl = lS(0, 80);
                                var akymhob = undefined;
                                var qpylazce = false;
                                var ytubapr = lS(0, 81);
                                var izzixcevz = lS(0, 82);
                                var cxanoqgeq = 15.92;
                                var scyclimru = izzixcevz + cxanoqgeq;
                                var ixcusekyz = lS(0, 83);
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance33.exports;
                return __exports.data(ymzywbipy() === 273 ? 1 : 0);
            })();
        }
        break;
    case 10:
        (() => {
            const __ifInstance34 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var ksirlaclubgo = null;
                            var ylmovvibh = undefined;
                            var zcydcykjot = null;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance34.exports;
            return __exports.data(ozyvlifaq == null ? 1 : 0);
        })();
        (() => {
            const __ifInstance35 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var imvepfo = 143.447;
                            imvepfo = lS(0, 85);
                            var jgemvamylsi = undefined;
                            var yzylxoqxog = 117.68;
                            var usetcyhyb = null;
                            var pvotywu = lS(0, 86);
                            var obbyratocg = lS(0, 87);
                            opkimuzo = lS(0, 88);
                            var pufgykjuhna = 823;
                            var idxefre = pufgykjuhna + opkimuzo;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance35.exports;
            return __exports.data(typeof syfofo == lS(0, 84) ? 1 : 0);
        })();
        (() => {
            const __ifInstance36 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var nzitozmymi = undefined;
                            var ebadvo = undefined;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance36.exports;
            return __exports.data(ozulqy === null ? 1 : 0);
        })();
        break;
    }
    var odikejr = undefined;
    var ijakel = 10;
    oxoqelh = ijakel + rridkefmyf;
    oxoqelh = lS(0, 89) + oxoqelh;
    var mmuppito = undefined;
    break;
case lS(0, 90):
    var exugevu = 1;
    (() => {
        const __ifInstance37 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var rlystubawu = 4;
                        ojubu = 743;
                        qbutyjtyna = dzusitny + ojubu;
                        qbutyjtyna = qbutyjtyna + lS(0, 91);
                        zexoxr = lS(0, 92);
                        ciztysik = 89;
                        var apkuquspe = ciztysik + zexoxr;
                        var uzpullo = undefined;
                        var chegwoj = 1;
                        var ukqagesikr = 59.1486;
                        var sdampebeb = ukqagesikr + enakorigz;
                        sdampebeb = 39 + sdampebeb;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance37.exports;
        return __exports.data(exugevu == true ? 1 : 0);
    })();
    break;
}