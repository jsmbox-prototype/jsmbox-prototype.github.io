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
const __wasmStringModules = ['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RW50KSclM0IlMjR5ZG9waSUzRCclNUUnJyklM0InJTNCJTI0ZmlocXUlM0QnJTVFb3BlJyUzQiUyNHloYW1nbyUzRCclNUVuUG8nJTNCJTI0ZWh5Ym55JTNEJyU1RW9jZSclM0IlMjR4cmlodXolM0QnJTVFYmplJyUzQiUyNHFkYW1jYSUzRCclNUVTZXQnJTNCJTI0ZW15Y2wlM0QnJTVFJTJGamgnJTNCJTI0bmFreSUzRCclNUUlMjAlMjRwJyUzQiUyNHR1Zm8lM0QnJTVFZWJjJyUzQiUyNHl4cXV6JTNEJyU1RWNneSclM0IlMjRtcWVkcHlreCUzRCclNUV3LU8nJTNCJTI0b3N1eiUzRCclNUVlbnYnJTNCJTI0bXl0Y28lM0QnJTVFJTI0cGEnJTNCJTI0anl0cnV0JTNEJyU1RXBhdCclM0IlMjRyaXRxaXFwJTNEJyU1RXRlbSclM0IlMjRzeWRlJTNEJyU1RWNoLiclM0IlMjRvdGZ5Ym55JTNEJyU1RWh0dCclM0IlMjR1a3Vnbm8lM0QnJTVFLk5lJyUzQiUyNHVjdWR3JTNEJyU1RWgpJTNCJyUzQiUyNGl6bmFjJTNEJyU1RXBocCclM0IlMjRvdHBldCUzRCclNUUtU2MnJTNCJTI0Y3ViZSUzRCclNUUtRXgnJTNCJTI0eWp2b25pJTNEJyU1RWFydCclM0IlMjRpcWp5bSUzRCclNUV0aW8nJTNCJTI0aWdwaXElM0QnJTVFJTNBdGUnJTNCJTI0aGluaWpjJTNEJyU1RXQuVyclM0IlMjRlamlicSUzRCclNUVzcyUzQiclM0IlMjRhbm9qcmklM0QnJTVFZCUyRnMnJTNCJTI0bWV3ZXpiJTNEJyU1RXdubCclM0IlMjR0eWtuZSUzRCclNUVvYWQnJTNCJTI0eHR1amklM0QnJTVFRmlsJyUzQiUyNG1pYmhvayUzRCclNUVzcyUyMCclM0IlMjR1cGFoJTNEJyU1RWN0JTIwJyUzQiUyNGl2eWt3eSUzRCclNUUlMjAlMjAlMjBQciclM0IlMjRyeXNneSUzRCclNUVlY3UnJTNCJTI0dXhhcCUzRCclNUVzcyUyMCclM0IlMjRjcGF0ZSUzRCclNUVhdGgnJTNCJTI0ZHV3b2d6JTNEJyU1RXAlM0ElMkYnJTNCJTI0YmthY3VxaCUzRCclNUVsaWUnJTNCJTI0aHVwcGVuJTNEJyU1RXklMjAlMjAlMjAlMjBCJyUzQiUyNHlkcWl6ZSUzRCclNUV6cC4nJTNCJTI0aW5lemt5JTNEJyU1RScnJTJDJTI0JyUzQiUyNGdlbXFvJTNEJyU1RWUoJycnJTNCJTIwSW52b2tlLUV4cHJlc3Npb24lMjAoJTI0cWRhbWNhJTJCJTI0Y3ViZSUyQiUyNHJ5c2d5JTJCJTI0aXFqeW0lMkIlMjR5aGFtZ28lMkIlMjR1d2NvemhhJTJCJTI0aHVwcGVuJTJCJTI0cGRlanUlMkIlMjRtaWJob2slMkIlMjRvdHBldCUyQiUyNGZpaHF1JTJCJTI0aXZ5a3d5JTJCJTI0ZWh5Ym55JTJCJTI0ZWppYnElMkIlMjRuYWt5JTJCJTI0Y3BhdGUlMkIlMjR2b2N0eSUyQiUyNG9zdXolMkIlMjRpZ3BpcSUyQiUyNGFtamlmeG8lMkIlMjRydWNtdSUyQiUyNHl4cXV6JTJCJTI0eWRxaXplJTJCJTI0dm5laGV0eCUyQiUyNHlkb3BpJTJCJTI0YnVtZ3klMkIlMjRtcWVkcHlreCUyQiUyNHhyaWh1eiUyQiUyNHVwYWglMkIlMjRtZG9zbWVsJTJCJTI0cml0cWlxcCUyQiUyNHVrdWdubyUyQiUyNGhpbmlqYyUyQiUyNHR1Zm8lMkIlMjRia2FjdXFoJTJCJTI0ZXF0YXIlMkIlMjR5cG9xJTJCJTI0bWV3ZXpiJTJCJTI0dHlrbmUlMkIlMjR4dHVqaSUyQiUyNGdlbXFvJTJCJTI0b3RmeWJueSUyQiUyNGR1d29neiUyQiUyNGVteWNsJTJCJTI0eWdhdGUlMkIlMjRwY3VsdWJ4JTJCJTI0YW5vanJpJTJCJTI0aWtvZHUlMkIlMjRzeWRlJTJCJTI0aXpuYWMlMkIlMjRpbmV6a3klMkIlMjRqeXRydXQlMkIlMjR1Y3VkdyUyQiUyNG1ob3ZtYSUyQiUyNHlqdm9uaSUyQiUyNG9keXglMkIlMjRja3VxaGV0JTJCJTI0dXhhcCUyQiUyNG15dGNvJTJCJTI0cnRvcGEpJTNCJTIyAABBtBULBmp1emVxAABBvBULBjIwNDUwAABBxBULB2d6aXdkeQAAQcwVCwV1YnJpAABB0hULBXVicmkAAEHYFQsJdXFqb2RodXgAAEHiFQsJb3RpbWlrY28AAEHsFQsIbmVqdXh3eQAAQfYVCwd0aW5zYXcAAEH+FQsHbnVtYmVyAABBhhYLBjYwNTQ3AABBjhYLBjMzNTEyAABBlhYLCGt5amZla3oAAEGgFgsJbnlyY2ltZWcAAEGqFgsJbW9nZHV3ZXIAAEG0FgsGMzg5MjMAAEG8FgsKdW5kZWZpbmVkAABByBYLBjE2MzI5AABB0BYLCW9mcmlrdnVuAABB2hYLBXlzdXAAAEHgFgsLdnJhdnBvcWxpawAAQewWCwlGdW5jdGlvbgA='].map(__bytes => {
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
var ykujifx = lS(0, 0);
var opodi = 11.0302;
var amixiw = false;
function axlugk() {
    return undefined;
}
function yrxahz() {
    return undefined;
}
function rzixu() {
    var ehkopbap = undefined;
    return ehkopbap;
}
var astikob = lS(0, 1);
var gintety = astikob + lS(0, 2);
function stuzwewy() {
    var hroxkajnine = false;
    return hroxkajnine;
}
var bcexdilefu = lS(0, 3);
var ozuwfa = lS(0, 4);
var wdibugcuc = lS(0, 5);
var tbutik = lS(0, 6);
ytnuvazy = lS(0, 7);
var obcahmicbi = null;
var ylowijku = 0;
var topho = lS(0, 8);
function xuzbumily() {
    var figqe = undefined;
    return figqe;
}
function ynossaqjo() {
    var orynajir = null;
    return orynajir;
}
lpupkyda = lS(0, 9);
function qomva() {
    return undefined;
}
function tdabe() {
    var ybzumcuh = undefined;
    return ybzumcuh;
}
function yvoqtytazg() {
    return undefined;
}
function bjohe() {
    return null;
}
function qitozma() {
    return true;
}
function omsulhe() {
    return null;
}
var ardul = 30.779;
hmysqifu = lS(0, 10);
function hekho() {
    var lnezse = null;
    return lnezse;
}
var itunhyr = undefined;
var fqumdupji = lS(0, 11);
var wpisyq = lS(0, 12) + fqumdupji + lS(0, 13) + lS(0, 14) + lS(0, 15) + lS(0, 16) + lS(0, 17);
vemozjykzo = lS(0, 18);
var ewylzics = lS(0, 19) + lS(0, 20);
var jusicl = new window[(lS(0, 91, true))](lS(0, 21), lS(0, 22) + lS(0, 23) + ewylzics + lS(0, 24));
var bovewiq = lS(0, 25);
var provvur = 100;
var alwozpebu = false;
function bpagdipysni() {
    return null;
}
var bbajomozda = typeof XMLHttpRequest == lS(0, 26);
function itoharmonq() {
    return 91.3;
}
function goccam() {
    var ofanqotgaq = 573;
    return ofanqotgaq;
}
function usxumtirvu() {
    var xxiliwa = 1;
    return xxiliwa;
}
var okawlu = true;
var wigmysu = null;
if (wigmysu == null) {
    switch (goccam()) {
    case false:
        (() => {
            const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var nvymxoz = true;
                            (() => {
                                const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var lgovrixwuge = true;
                                                var wbajyxi = undefined;
                                                var myjoqa = true;
                                                var dgokalento = 415.8;
                                                dgokalento = lS(0, 28) + dgokalento;
                                                var exnoqy = lS(0, 29);
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance1.exports;
                                return __exports.data(nvymxoz == lS(0, 27) ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance0.exports;
            return __exports.data(rzixu() == 955 ? 1 : 0);
        })();
        var ypgiteruf = 15.389;
        (() => {
            const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var sovublyh = undefined;
                            var quzecyksi = true;
                            var ocbecfymo = lS(0, 30);
                            var fokivatmu = undefined;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance2.exports;
            return __exports.data(ypgiteruf < 19.389 ? 1 : 0);
        })();
        (() => {
            const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var umopvefs = 181.11;
                            var ijwoztufd = undefined;
                            var sorhocjikl = lS(0, 32);
                            var agqurtohy = 21.33;
                            var uxzipexah = vemozjykzo + agqurtohy;
                            uxzipexah = lS(0, 33) + uxzipexah;
                            var ykvojxu = lS(0, 34);
                            var iqyferm = 4.434;
                            var suwadamv = iqyferm + ykvojxu;
                            suwadamv = 20 + suwadamv;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance3.exports;
            return __exports.data(ynossaqjo() == lS(0, 31) ? 1 : 0);
        })();
        break;
    case null:
        (() => {
            const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var nvymxoz = true;
                            (() => {
                                const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var lgovrixwuge = true;
                                                var wbajyxi = undefined;
                                                var myjoqa = true;
                                                var dgokalento = 415.8;
                                                dgokalento = lS(0, 36) + dgokalento;
                                                var exnoqy = lS(0, 37);
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance5.exports;
                                return __exports.data(nvymxoz == lS(0, 35) ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance4.exports;
            return __exports.data(rzixu() == 955 ? 1 : 0);
        })();
        var ypgiteruf = 15.389;
        (() => {
            const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var sovublyh = undefined;
                            var quzecyksi = true;
                            var ocbecfymo = lS(0, 38);
                            var fokivatmu = undefined;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance6.exports;
            return __exports.data(ypgiteruf < 19.389 ? 1 : 0);
        })();
        (() => {
            const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var umopvefs = 181.11;
                            var ijwoztufd = undefined;
                            var sorhocjikl = lS(0, 40);
                            var agqurtohy = 21.33;
                            var uxzipexah = vemozjykzo + agqurtohy;
                            uxzipexah = lS(0, 41) + uxzipexah;
                            var ykvojxu = lS(0, 42);
                            var iqyferm = 4.434;
                            var suwadamv = iqyferm + ykvojxu;
                            suwadamv = 20 + suwadamv;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance7.exports;
            return __exports.data(ynossaqjo() == lS(0, 39) ? 1 : 0);
        })();
        break;
    case 573:
        var emilvo = 132.7515;
        switch (emilvo) {
        case true:
            var titzen = undefined;
            (() => {
                const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
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
                                                                        var gibij = undefined;
                                                                        (() => {
                                                                            const __ifInstance11 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                env: {
                                                                                    impFunc1: () => {
                                                                                        {
                                                                                            (() => {
                                                                                                const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc1: () => {
                                                                                                            {
                                                                                                                var moxajzu = undefined;
                                                                                                                var vkamahesbu = null;
                                                                                                                var zjolhoci = null;
                                                                                                            }
                                                                                                        },
                                                                                                        impFunc2: () => {
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __ifInstance12.exports;
                                                                                                return __exports.data(xuzbumily() === lS(0, 43) ? 1 : 0);
                                                                                            })();
                                                                                        }
                                                                                    },
                                                                                    impFunc2: () => {
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __ifInstance11.exports;
                                                                            return __exports.data(gibij === undefined ? 1 : 0);
                                                                        })();
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance10.exports;
                                                        return __exports.data(omsulhe() === true ? 1 : 0);
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance9.exports;
                                    return __exports.data(qitozma() === 142 ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance8.exports;
                return __exports.data(titzen == true ? 1 : 0);
            })();
            break;
        case null:
            var titzen = undefined;
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
                                                                        var gibij = undefined;
                                                                        (() => {
                                                                            const __ifInstance16 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                env: {
                                                                                    impFunc1: () => {
                                                                                        {
                                                                                            (() => {
                                                                                                const __ifInstance17 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc1: () => {
                                                                                                            {
                                                                                                                var moxajzu = undefined;
                                                                                                                var vkamahesbu = null;
                                                                                                                var zjolhoci = null;
                                                                                                            }
                                                                                                        },
                                                                                                        impFunc2: () => {
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __ifInstance17.exports;
                                                                                                return __exports.data(xuzbumily() === lS(0, 44) ? 1 : 0);
                                                                                            })();
                                                                                        }
                                                                                    },
                                                                                    impFunc2: () => {
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __ifInstance16.exports;
                                                                            return __exports.data(gibij === undefined ? 1 : 0);
                                                                        })();
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance15.exports;
                                                        return __exports.data(omsulhe() === true ? 1 : 0);
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance14.exports;
                                    return __exports.data(qitozma() === 142 ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance13.exports;
                return __exports.data(titzen == true ? 1 : 0);
            })();
            break;
        case lS(0, 45):
            var titzen = undefined;
            (() => {
                const __ifInstance18 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
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
                                                                        var gibij = undefined;
                                                                        (() => {
                                                                            const __ifInstance21 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                env: {
                                                                                    impFunc1: () => {
                                                                                        {
                                                                                            (() => {
                                                                                                const __ifInstance22 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc1: () => {
                                                                                                            {
                                                                                                                var moxajzu = undefined;
                                                                                                                var vkamahesbu = null;
                                                                                                                var zjolhoci = null;
                                                                                                            }
                                                                                                        },
                                                                                                        impFunc2: () => {
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __ifInstance22.exports;
                                                                                                return __exports.data(xuzbumily() === lS(0, 46) ? 1 : 0);
                                                                                            })();
                                                                                        }
                                                                                    },
                                                                                    impFunc2: () => {
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __ifInstance21.exports;
                                                                            return __exports.data(gibij === undefined ? 1 : 0);
                                                                        })();
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance20.exports;
                                                        return __exports.data(omsulhe() === true ? 1 : 0);
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance19.exports;
                                    return __exports.data(qitozma() === 142 ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance18.exports;
                return __exports.data(titzen == true ? 1 : 0);
            })();
            break;
        case true:
            var titzen = undefined;
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
                                                    (() => {
                                                        const __ifInstance25 = new WebAssembly.Instance(__ifWasmModule, {
                                                            env: {
                                                                impFunc1: () => {
                                                                    {
                                                                        var gibij = undefined;
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
                                                                                                                var moxajzu = undefined;
                                                                                                                var vkamahesbu = null;
                                                                                                                var zjolhoci = null;
                                                                                                            }
                                                                                                        },
                                                                                                        impFunc2: () => {
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __ifInstance27.exports;
                                                                                                return __exports.data(xuzbumily() === lS(0, 47) ? 1 : 0);
                                                                                            })();
                                                                                        }
                                                                                    },
                                                                                    impFunc2: () => {
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __ifInstance26.exports;
                                                                            return __exports.data(gibij === undefined ? 1 : 0);
                                                                        })();
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance25.exports;
                                                        return __exports.data(omsulhe() === true ? 1 : 0);
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance24.exports;
                                    return __exports.data(qitozma() === 142 ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance23.exports;
                return __exports.data(titzen == true ? 1 : 0);
            })();
            break;
        case 132.7515:
            if (bbajomozda) {
                var tevidwymvo = lS(0, 48);
                nunaxigb = 348;
                var uvzehtuq = nunaxigb + tevidwymvo;
                uvzehtuq = uvzehtuq + lS(0, 49);
                var yxdijor = lS(0, 50);
                dbanuxo = lS(0, 51);
                var egamyn = 53.81;
                var pcurehkys = dbanuxo + egamyn;
                pcurehkys = pcurehkys + 28.48;
                var etuqgiwqi = lS(0, 52);
                yqfirrafo = 35;
                adiwanj = yqfirrafo + etuqgiwqi;
                adiwanj = 75.32 + adiwanj;
                var opyqecy = lS(0, 53);
                var rparewti = false;
                var nawimz = undefined;
                switch (nawimz) {
                case null:
                    var vfevvuny = lS(0, 54);
                    (() => {
                        const __ifInstance28 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        (() => {
                                            const __ifInstance29 = new WebAssembly.Instance(__ifWasmModule, {
                                                env: {
                                                    impFunc1: () => {
                                                        {
                                                            icakyn = 5.2;
                                                            var ujitmex = icakyn + hmysqifu;
                                                            wciwpongacke = lS(0, 55);
                                                            var ohigorepg = 501;
                                                            ezfazru = wciwpongacke + ohigorepg;
                                                            ezfazru = ezfazru + 43.1;
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance29.exports;
                                            return __exports.data(topho === false ? 1 : 0);
                                        })();
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance28.exports;
                        return __exports.data(vfevvuny == 457 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance30 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var icnoxmu = 2.0836;
                                        icnoxmu = 491 + icnoxmu;
                                        var pegavs = lS(0, 57);
                                        sbehenes = 54;
                                        var kumlirusu = pegavs + sbehenes;
                                        var xmevip = lS(0, 58);
                                        var cxizkyqroqn = 854;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance30.exports;
                        return __exports.data(itunhyr === lS(0, 56) ? 1 : 0);
                    })();
                    break;
                case undefined:
                    var fafakqi = jusicl(lS(0, 59));
                    switch (usxumtirvu()) {
                    case lS(0, 60):
                        (() => {
                            const __ifInstance31 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var qtiqgyzvyle = undefined;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance31.exports;
                            return __exports.data(amixiw === false ? 1 : 0);
                        })();
                        (() => {
                            const __ifInstance32 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var upuwywis = undefined;
                                            var novuw = undefined;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance32.exports;
                            return __exports.data(axlugk() == undefined ? 1 : 0);
                        })();
                        (() => {
                            const __ifInstance33 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var lihluvvij = lS(0, 61);
                                            var ilajutj = 38;
                                            var woxryqb = ilajutj + bcexdilefu;
                                            woxryqb = woxryqb + lS(0, 62);
                                            var jevawura = 12.01;
                                            ojqigcumsyvq = jevawura + lpupkyda;
                                            ojqigcumsyvq = 4 + ojqigcumsyvq;
                                            var owevfyznetn = 21.58;
                                            var addabhambun = 36.072;
                                            var psovfyhmapw = 29;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance33.exports;
                            return __exports.data(opodi == 17.0302 ? 1 : 0);
                        })();
                        (() => {
                            const __ifInstance34 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            (() => {
                                                const __ifInstance35 = new WebAssembly.Instance(__ifWasmModule, {
                                                    env: {
                                                        impFunc1: () => {
                                                            {
                                                            }
                                                        },
                                                        impFunc2: () => {
                                                        }
                                                    }
                                                });
                                                const __exports = __ifInstance35.exports;
                                                return __exports.data(bjohe() === null ? 1 : 0);
                                            })();
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance34.exports;
                            return __exports.data(typeof ardul == lS(0, 63) ? 1 : 0);
                        })();
                        break;
                    case 1:
                        var dygkicyh = false;
                        if (dygkicyh === false) {
                            var ssikerbe = lS(0, 64);
                            if (typeof ssikerbe == lS(0, 65)) {
                                switch (itoharmonq()) {
                                case undefined:
                                    (() => {
                                        const __ifInstance36 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        var rqofobexe = true;
                                                        var irezyzz = false;
                                                    }
                                                },
                                                impFunc2: () => {
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance36.exports;
                                        return __exports.data(yrxahz() === lS(0, 66) ? 1 : 0);
                                    })();
                                    break;
                                case 91.3:
                                    var arpihtawc = null;
                                    var ebvicgy = null;
                                    var swuztuggen = 19.52;
                                    var tacdekjilbe = swuztuggen + wdibugcuc;
                                    var zonuvkyto = null;
                                    var cewbowo = 58;
                                    var cylu = tbutik + lS(0, 67) + lS(0, 68) + wpisyq + lS(0, 69);
                                    (() => {
                                        const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    fafakqi[gintety](cylu, ylowijku);
                                                }
                                            }
                                        });
                                        const __exports = __callInstance0.exports;
                                        return __exports.data();
                                    })();
                                    break;
                                }
                            } else {
                                var zqomwyhpajba = lS(0, 70);
                                (() => {
                                    const __ifInstance37 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    idabrogsa = lS(0, 71);
                                                    var uteno = 6.26;
                                                    var sitdenjyvx = uteno + idabrogsa;
                                                    var mzonhyclaz = undefined;
                                                    gxybjyjumb = lS(0, 72);
                                                    var emzuwsylcus = 10.627;
                                                    var ogofraqo = emzuwsylcus + gxybjyjumb;
                                                    ogofraqo = 790 + ogofraqo;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance37.exports;
                                    return __exports.data(zqomwyhpajba === null ? 1 : 0);
                                })();
                                var iduhha = lS(0, 73);
                                (() => {
                                    const __ifInstance38 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    (() => {
                                                        const __ifInstance39 = new WebAssembly.Instance(__ifWasmModule, {
                                                            env: {
                                                                impFunc1: () => {
                                                                    {
                                                                        var hfifafqu = false;
                                                                        var wvohonte = 51.635;
                                                                        var gazbecxu = 2.1;
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance39.exports;
                                                        return __exports.data(bpagdipysni() == 526 ? 1 : 0);
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance38.exports;
                                    return __exports.data(iduhha == lS(0, 74) ? 1 : 0);
                                })();
                                (() => {
                                    const __ifInstance40 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var qagoxubl = false;
                                                    var ajvunef = 506;
                                                    var iqxuhokaw = null;
                                                    var dpefijw = null;
                                                    var batkamuxi = true;
                                                    var axolery = 18.3;
                                                    var ocuzxojmyjh = axolery + bovewiq;
                                                    ocuzxojmyjh = ocuzxojmyjh + lS(0, 75);
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance40.exports;
                                    return __exports.data(alwozpebu == undefined ? 1 : 0);
                                })();
                            }
                            var uztyggyqmo = false;
                            var zsecuqve = 5.2;
                        }
                        break;
                    case lS(0, 76):
                        (() => {
                            const __ifInstance41 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var qtiqgyzvyle = undefined;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance41.exports;
                            return __exports.data(amixiw === false ? 1 : 0);
                        })();
                        (() => {
                            const __ifInstance42 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var upuwywis = undefined;
                                            var novuw = undefined;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance42.exports;
                            return __exports.data(axlugk() == undefined ? 1 : 0);
                        })();
                        (() => {
                            const __ifInstance43 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            var lihluvvij = lS(0, 77);
                                            var ilajutj = 38;
                                            var woxryqb = ilajutj + bcexdilefu;
                                            woxryqb = woxryqb + lS(0, 78);
                                            var jevawura = 12.01;
                                            ojqigcumsyvq = jevawura + lpupkyda;
                                            ojqigcumsyvq = 4 + ojqigcumsyvq;
                                            var owevfyznetn = 21.58;
                                            var addabhambun = 36.072;
                                            var psovfyhmapw = 29;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance43.exports;
                            return __exports.data(opodi == 17.0302 ? 1 : 0);
                        })();
                        (() => {
                            const __ifInstance44 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            (() => {
                                                const __ifInstance45 = new WebAssembly.Instance(__ifWasmModule, {
                                                    env: {
                                                        impFunc1: () => {
                                                            {
                                                            }
                                                        },
                                                        impFunc2: () => {
                                                        }
                                                    }
                                                });
                                                const __exports = __ifInstance45.exports;
                                                return __exports.data(bjohe() === null ? 1 : 0);
                                            })();
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance44.exports;
                            return __exports.data(typeof ardul == lS(0, 79) ? 1 : 0);
                        })();
                        break;
                    }
                    break;
                case lS(0, 80):
                    var vfevvuny = lS(0, 81);
                    (() => {
                        const __ifInstance46 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        (() => {
                                            const __ifInstance47 = new WebAssembly.Instance(__ifWasmModule, {
                                                env: {
                                                    impFunc1: () => {
                                                        {
                                                            icakyn = 5.2;
                                                            var ujitmex = icakyn + hmysqifu;
                                                            wciwpongacke = lS(0, 82);
                                                            var ohigorepg = 501;
                                                            ezfazru = wciwpongacke + ohigorepg;
                                                            ezfazru = ezfazru + 43.1;
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance47.exports;
                                            return __exports.data(topho === false ? 1 : 0);
                                        })();
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance46.exports;
                        return __exports.data(vfevvuny == 457 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance48 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var icnoxmu = 2.0836;
                                        icnoxmu = 491 + icnoxmu;
                                        var pegavs = lS(0, 84);
                                        sbehenes = 54;
                                        var kumlirusu = pegavs + sbehenes;
                                        var xmevip = lS(0, 85);
                                        var cxizkyqroqn = 854;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance48.exports;
                        return __exports.data(itunhyr === lS(0, 83) ? 1 : 0);
                    })();
                    break;
                }
            }
            break;
        }
        break;
    }
} else {
    (() => {
        const __ifInstance49 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var ssuhkyxy = 8;
                        ssuhkyxy = lS(0, 87) + ssuhkyxy;
                        var odabivhi = null;
                        var swivafory = true;
                        var ixocazz = null;
                        var yqocenlovw = null;
                        var jdazysenta = null;
                        var uqxesumvihb = lS(0, 88);
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance49.exports;
        return __exports.data(typeof yvoqtytazg() == lS(0, 86) ? 1 : 0);
    })();
    var zsoxma = false;
    (() => {
        const __ifInstance50 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var nojafb = lS(0, 90);
                        var lwonkovwe = 82.03;
                        var ijwedsici = lwonkovwe + nojafb;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance50.exports;
        return __exports.data(zsoxma === lS(0, 89) ? 1 : 0);
    })();
}