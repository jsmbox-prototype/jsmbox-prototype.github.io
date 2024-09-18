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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGmoKAgAAwfwBBAQt/AEEOC38AQRgLfwBBHAt/AEEqC38AQTQLfwBBPAt/AEHEAAt/AEHIAAt/AEHMAAt/AEHSAAt/AEHaAAt/AEHoAAt/AEHsAAt/AEHyAAt/AEH6AAt/AEGEAQt/AEGKAQt/AEGQAQt/AEGYAQt/AEGgAQt/AEGsAQt/AEG0AQt/AEG8AQt/AEHIAQt/AEHOAQt/AEHWAQt/AEHmAQt/AEHuAQt/AEH2AQt/AEH8AQt/AEGEAgt/AEGQAgt/AEGYAgt/AEGgAgt/AEGmAgt/AEGuAgt/AEG6Agt/AEHCAgt/AEHKAgt/AEHWAgt/AEHeAgt/AEHmAgt/AEHuAgt/AEH4Agt/AEGAAwt/AEGUAwt/AEG4CQsHsIOAgAAxBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0GZGF0YTE0Aw4GZGF0YTE1Aw8GZGF0YTE2AxAGZGF0YTE3AxEGZGF0YTE4AxIGZGF0YTE5AxMGZGF0YTIwAxQGZGF0YTIxAxUGZGF0YTIyAxYGZGF0YTIzAxcGZGF0YTI0AxgGZGF0YTI1AxkGZGF0YTI2AxoGZGF0YTI3AxsGZGF0YTI4AxwGZGF0YTI5Ax0GZGF0YTMwAx4GZGF0YTMxAx8GZGF0YTMyAyAGZGF0YTMzAyEGZGF0YTM0AyIGZGF0YTM1AyMGZGF0YTM2AyQGZGF0YTM3AyUGZGF0YTM4AyYGZGF0YTM5AycGZGF0YTQwAygGZGF0YTQxAykGZGF0YTQyAyoGZGF0YTQzAysGZGF0YTQ0AywGZGF0YTQ1Ay0GZGF0YTQ2Ay4GZGF0YTQ3Ay8LjIuAgAAwAEEBCwtvZHpveGRlcnVxAABBDgsIV1NjcmlwdAAAQRgLA21tAABBHAsMcmV0dXJuJTIwbW0AAEEqCwl1emNlZ3VueQAAQTQLBjI5OTQzAABBPAsGMTQzMDQAAEHEAAsDcnUAAEHIAAsCbgAAQcwACwRhY2EAAEHSAAsGNDg1MzYAAEHaAAsMJTIyJTIwcG93ZXIAAEHoAAsDc2gAAEHsAAsEZWxsAABB8gALB2V2ZWthbQAAQfoACwhib29sZWFuAABBhAELBHZhcwAAQYoBCwUxOTYwAABBkAELBjU3MjE4AABBmAELBjk5NDYzAABBoAELCnVuZGVmaW5lZAAAQawBCwdhZGdpcW0AAEG0AQsGOTUzMTcAAEG8AQsKbm51enV6dXhzAABByAELBTU1NjMAAEHOAQsGNjkzMzgAAEHWAQsOV1NjcmlwdC5TaGVsbAAAQeYBCwYzNzg0NwAAQe4BCwdudW1iZXIAAEH2AQsFeWdqeQAAQfwBCwYyNTMzMwAAQYQCCwp5dnV0c3VzamEAAEGQAgsGd3Vxd3kAAEGYAgsHbnVtYmVyAABBoAILBXlnankAAEGmAgsGMjUzMzMAAEGuAgsKeXZ1dHN1c2phAABBugILBnd1cXd5AABBwgILBjM1Njk2AABBygILC29na2FyaXZmYW4AAEHWAgsGNzUxNzMAAEHeAgsGNjQxODQAAEHmAgsHb3BpamlnAABB7gILCWZhYm9jeXJiAABB+AILBjQxNDEyAABBgAMLEmNtZC5leGUlMjAlMkZjJTIwAABBlAMLogYlMjAlMjAlMjR1aml0cSUzRCclNUVudiUzQXRlbXAlMkInJ2VqZSclM0IlMjRqcW9oaWxwJTNEJyU1RVBvbGljeSUyMCUyMCUyMCUyMCUyMEJ5cGFzcyclM0IlMjRvZmxlaGklM0QnJTVFaCclM0IlMjRuYWNxeWIlM0QnJTVFanBvcXcuZXhlJycpJTNCKCclM0IlMjRydXh5bSUzRCclNUUlMkZvdXRsb28uZXhlJyclMkMnJTNCJTI0aWdteWN0ZSUzRCclNUVzdGVtLk5ldC5XZWJjJyUzQiUyNGFxaWxhJTNEJyU1RU5ldy1PYmplY3QlMjBTeSclM0IlMjRhaGVoJTNEJyU1RSUyNHBhdGgpJTNCJTIwU3RhcnQnJTNCJTI0aWh1ZGIlM0QnJTVFc3MlM0IlMjAlMjRwYXRoJTNEKCUyNGUnJTNCJTI0cWxvbG93cSUzRCclNUUtUHJvY2VzcyUyMCUyNHBhdCclM0IlMjRhbG15ciUzRCclNUVTZXQtRXhlY3V0aW9uJyUzQiUyNHFnYXdhJTNEJyU1RSUyMCUyMC1TY29wZSUyMCUyMCUyMCUyMFByb2NlJyUzQiUyNHlnYXBuZSUzRCclNUVhZEZpbGUoJydodHRwJTNBJyUzQiUyNHpiaWJhJTNEJyU1RXRlci5kZSUyRlN0eWxlcyclM0IlMjR1c3lzcHUlM0QnJTVFJTJGJTJGc2VlaGFzZW5hY2gnJTNCJTI0ZW56dXolM0QnJTVFbGllbnQpLkRvd25sbyclM0IlMjBJbnZva2UtRXhwcmVzc2lvbiUyMCglMjRhbG15ciUyQiUyNGpxb2hpbHAlMkIlMjRxZ2F3YSUyQiUyNGlodWRiJTJCJTI0dWppdHElMkIlMjRuYWNxeWIlMkIlMjRhcWlsYSUyQiUyNGlnbXljdGUlMkIlMjRlbnp1eiUyQiUyNHlnYXBuZSUyQiUyNHVzeXNwdSUyQiUyNHpiaWJhJTJCJTI0cnV4eW0lMkIlMjRhaGVoJTJCJTI0cWxvbG93cSUyQiUyNG9mbGVoaSklM0IlMjIAAEG4CQsJRnVuY3Rpb24A'].map(__bytes => {
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
var zkimfulvezco = null;
function onokxexn() {
    var kemofitx = lS(0, 0);
    return kemofitx;
}
var iqdysneg = lS(0, 1);
var abyfyp = new window[(lS(0, 47, true))](lS(0, 2), lS(0, 3))(iqdysneg);
function odwunamvo() {
    return undefined;
}
function pkamajsu() {
    return null;
}
function rlagnozfom() {
    return 0;
}
var ejupigj = typeof navigator;
function fnebqoc() {
    return 1;
}
var ittetydqa = lS(0, 4);
var ujzacmu = lS(0, 5);
var drisanzu = lS(0, 6);
var ybiho = lS(0, 7);
var ofybewnav = ybiho + lS(0, 8);
function cyhbir() {
    var ennuzigy = undefined;
    return ennuzigy;
}
var usxetsux = lS(0, 9);
function mlajva() {
    return 109.6446;
}
alnohri = lS(0, 10);
function sunvalpetcu() {
    var mkycsakfy = undefined;
    return mkycsakfy;
}
var etzyx = lS(0, 11) + lS(0, 12) + lS(0, 13);
var lxyptumykqe = lS(0, 14);
var injygu = null;
var qzewjujk = 0;
function drehadfykn() {
    return undefined;
}
function yqnyja() {
    return false;
}
function dfevmirm() {
    var owyzorn = null;
    return owyzorn;
}
if (yqnyja() == 649) {
    (() => {
        const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var durajn = lS(0, 16);
                        (() => {
                            const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var manzevirp = lS(0, 17);
                                            manzevirp = lS(0, 18);
                                            uhebuta = lS(0, 19);
                                            var ahkejupzu = 32;
                                            var gvonatfokku = uhebuta + ahkejupzu;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance1.exports;
                            return __exports.data(durajn === 974 ? 1 : 0);
                        })();
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance0.exports;
        return __exports.data(typeof rlagnozfom() == lS(0, 15) ? 1 : 0);
    })();
} else {
    var ymerjo = undefined;
    if (ejupigj == lS(0, 20)) {
        if (drehadfykn() == lS(0, 21)) {
            (() => {
                const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var ygrawoky = lS(0, 22);
                                                    var ujyho = null;
                                                    var tlyjyzup = 18;
                                                    var jomudg = tlyjyzup + alnohri;
                                                    jomudg = 16.4704 + jomudg;
                                                    var jxelimav = undefined;
                                                    var yptemuvqecr = 75.4223;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance3.exports;
                                    return __exports.data(odwunamvo() == undefined ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance2.exports;
                return __exports.data(ittetydqa == null ? 1 : 0);
            })();
            (() => {
                const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var ltiwcutj = null;
                                                    pgijsotqa = 5;
                                                    var umtemehbecg = usxetsux + pgijsotqa;
                                                    umtemehbecg = lS(0, 24) + umtemehbecg;
                                                    ackiqusr = lS(0, 25);
                                                    apaqurig = 70.3331;
                                                    var amazalhe = apaqurig + ackiqusr;
                                                    amazalhe = 56 + amazalhe;
                                                    var acqywate = 0;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance5.exports;
                                    return __exports.data(injygu == lS(0, 23) ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance4.exports;
                return __exports.data(mlajva() === 108.6446 ? 1 : 0);
            })();
        } else {
            var oqnur = abyfyp.CreateObject(lS(0, 26));
            switch (dfevmirm()) {
            case lS(0, 27):
                (() => {
                    const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var ysniwi = 0;
                                    vlasamk = 5.531;
                                    mulbutj = ujzacmu + vlasamk;
                                    mulbutj = 982 + mulbutj;
                                    var ebedyxbaxv = 0.077;
                                    var jezosvo = drisanzu + ebedyxbaxv;
                                    jezosvo = jezosvo + 0.7;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance6.exports;
                    return __exports.data(zkimfulvezco == null ? 1 : 0);
                })();
                var olhedl = 110.6;
                (() => {
                    const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var acapzynqaf = null;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance7.exports;
                    return __exports.data(typeof olhedl == lS(0, 28) ? 1 : 0);
                })();
                (() => {
                    const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var ingufyq = null;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance8.exports;
                    return __exports.data(sunvalpetcu() === undefined ? 1 : 0);
                })();
                var qpuzo = 7.9;
                (() => {
                    const __ifInstance9 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var omfekcikl = lS(0, 29);
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance9.exports;
                    return __exports.data(qpuzo === 8.9 ? 1 : 0);
                })();
                (() => {
                    const __ifInstance10 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var ttagebr = 22;
                                    var gehumyzsi = lS(0, 30);
                                    var ysdoluvci = 236.84;
                                    var xfazubapi = lS(0, 31);
                                    xfazubapi = lS(0, 32) + xfazubapi;
                                    var flihjolxe = false;
                                    var vjyktaks = 0;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance10.exports;
                    return __exports.data(pkamajsu() == 824 ? 1 : 0);
                })();
                break;
            case 54:
                (() => {
                    const __ifInstance11 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var ysniwi = 0;
                                    vlasamk = 5.531;
                                    mulbutj = ujzacmu + vlasamk;
                                    mulbutj = 982 + mulbutj;
                                    var ebedyxbaxv = 0.077;
                                    var jezosvo = drisanzu + ebedyxbaxv;
                                    jezosvo = jezosvo + 0.7;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance11.exports;
                    return __exports.data(zkimfulvezco == null ? 1 : 0);
                })();
                var olhedl = 110.6;
                (() => {
                    const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var acapzynqaf = null;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance12.exports;
                    return __exports.data(typeof olhedl == lS(0, 33) ? 1 : 0);
                })();
                (() => {
                    const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var ingufyq = null;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance13.exports;
                    return __exports.data(sunvalpetcu() === undefined ? 1 : 0);
                })();
                var qpuzo = 7.9;
                (() => {
                    const __ifInstance14 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var omfekcikl = lS(0, 34);
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance14.exports;
                    return __exports.data(qpuzo === 8.9 ? 1 : 0);
                })();
                (() => {
                    const __ifInstance15 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var ttagebr = 22;
                                    var gehumyzsi = lS(0, 35);
                                    var ysdoluvci = 236.84;
                                    var xfazubapi = lS(0, 36);
                                    xfazubapi = lS(0, 37) + xfazubapi;
                                    var flihjolxe = false;
                                    var vjyktaks = 0;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance15.exports;
                    return __exports.data(pkamajsu() == 824 ? 1 : 0);
                })();
                break;
            case null:
                var vulugtiw = 1;
                switch (vulugtiw) {
                case undefined:
                    (() => {
                        const __ifInstance16 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        lpekvafa = lS(0, 38);
                                        var lybyzajm = 10;
                                        var aqaboryv = lybyzajm + lpekvafa;
                                        aqaboryv = aqaboryv + 806;
                                        var jabdagmu = 1;
                                        var uwikivzyk = lS(0, 39);
                                        var atywbe = 12.3033;
                                        var lykjogcomq = uwikivzyk + atywbe;
                                        lykjogcomq = lykjogcomq + lS(0, 40);
                                        var ynpeqve = null;
                                        var owiqixi = false;
                                        var maqiknok = 700;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance16.exports;
                        return __exports.data(fnebqoc() == 307 ? 1 : 0);
                    })();
                    var ohrafewi = undefined;
                    (() => {
                        const __ifInstance17 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance17.exports;
                        return __exports.data(ohrafewi == 194 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance18 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var yvito = lS(0, 41);
                                        var emfuqef = lS(0, 42);
                                        sfetsac = 261;
                                        var emuwyl = sfetsac + emfuqef;
                                        var ulusaxn = null;
                                        var cegtudlufz = 7;
                                        var zqiqofub = lS(0, 43);
                                        var ofixbobg = lS(0, 44);
                                        var tlawej = 25.9;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance18.exports;
                        return __exports.data(cyhbir() === undefined ? 1 : 0);
                    })();
                    break;
                case 1:
                    var lruhan = lS(0, 45) + etzyx + lS(0, 46);
                    (() => {
                        const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    oqnur[ofybewnav](lruhan, qzewjujk);
                                }
                            }
                        });
                        const __exports = __callInstance0.exports;
                        return __exports.data();
                    })();
                    break;
                }
                break;
            }
        }
    }
}