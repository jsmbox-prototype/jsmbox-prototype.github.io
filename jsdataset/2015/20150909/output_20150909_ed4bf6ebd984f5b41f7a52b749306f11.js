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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGw4KAgAA2fwBBAQt/AEEgC38AQcAAC38AQeAAC38AQf4AC38AQZwBC38AQboBC38AQcQBC38AQc4BC38AQdYBC38AQeABC38AQfYBC38AQZQCC38AQbICC38AQbwCC38AQdICC38AQdwCC38AQfICC38AQfwCC38AQYYDC38AQYwDC38AQZIDC38AQZwDC38AQaADC38AQagDC38AQa4DC38AQbQDC38AQcADC38AQcQDC38AQdADC38AQdoDC38AQeADC38AQegDC38AQZAEC38AQZYEC38AQb4EC38AQcQEC38AQeoEC38AQfIEC38AQZgFC38AQaAFC38AQaIFC38AQaQFC38AQaoFC38AQbAFC38AQbIFC38AQbQFC38AQbYFC38AQbgFC38AQb4FC38AQcQFC38AQcYFC38AQcgFC38AQcoFCwfmg4CAADcGbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwIFZGF0YTMDAwVkYXRhNAMEBWRhdGE1AwUFZGF0YTYDBgVkYXRhNwMHBWRhdGE4AwgFZGF0YTkDCQZkYXRhMTADCgZkYXRhMTEDCwZkYXRhMTIDDAZkYXRhMTMDDQZkYXRhMTQDDgZkYXRhMTUDDwZkYXRhMTYDEAZkYXRhMTcDEQZkYXRhMTgDEgZkYXRhMTkDEwZkYXRhMjADFAZkYXRhMjEDFQZkYXRhMjIDFgZkYXRhMjMDFwZkYXRhMjQDGAZkYXRhMjUDGQZkYXRhMjYDGgZkYXRhMjcDGwZkYXRhMjgDHAZkYXRhMjkDHQZkYXRhMzADHgZkYXRhMzEDHwZkYXRhMzIDIAZkYXRhMzMDIQZkYXRhMzQDIgZkYXRhMzUDIwZkYXRhMzYDJAZkYXRhMzcDJQZkYXRhMzgDJgZkYXRhMzkDJwZkYXRhNDADKAZkYXRhNDEDKQZkYXRhNDIDKgZkYXRhNDMDKwZkYXRhNDQDLAZkYXRhNDUDLQZkYXRhNDYDLgZkYXRhNDcDLwZkYXRhNDgDMAZkYXRhNDkDMQZkYXRhNTADMgZkYXRhNTEDMwZkYXRhNTIDNAZkYXRhNTMDNQvEh4CAADYAQQELHktOVHJhbnNpdGlvblN3b29zaF9TaGFkb3cucG5nAABBIAseS05UcmFuc2l0aW9uU3dvb3NoX1NoYWRvdy5wbmcAAEHAAAseS05UcmFuc2l0aW9uU3dvb3NoX1NoYWRvdy5wbmcAAEHgAAscS05UcmFuc2l0aW9uU2xpZGVfQmxhY2sucG5nAABB/gALHEtOVHJhbnNpdGlvblNsaWRlX0JsYWNrLnBuZwAAQZwBCxxLTlRyYW5zaXRpb25TbGlkZV9CbGFjay5wbmcAAEG6AQsIdGV4dHVyZQAAQcQBCwh0ZXh0dXJlAABBzgELBnNsaWRlAABB1gELCWluY29taW5nAABB4AELFGluY29taW5nLXJlZmxlY3Rpb24AAEH2AQscS05UcmFuc2l0aW9uU2xpZGVfQmxhY2sucG5nAABBlAILHEtOVHJhbnNpdGlvblNsaWRlX0JsYWNrLnBuZwAAQbICCwlpbmNvbWluZwAAQbwCCxRpbmNvbWluZy1yZWZsZWN0aW9uAABB0gILCW91dGdvaW5nAABB3AILFG91dGdvaW5nLXJlZmxlY3Rpb24AAEHyAgsIdGV4dHVyZQAAQfwCCwh0ZXh0dXJlAABBhgMLBHBuZwAAQYwDCwVsb2FkAABBkgMLCGZpbGUlM0EAAEGcAwsCcAAAQaADCwdzY3JpcHQAAEGoAwsEc3JjAABBrgMLBCUyRgAAQbQDCwt0ZXh0JTJGeG1sAABBwAMLA21zAABBxAMLC3RleHQlMkZ4bWwAAEHQAwsIdmlld0JveAAAQdoDCwQlMjAAAEHgAwsGaW1hZ2UAAEHoAwsnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmsAAEGQBAsFaHJlZgAAQZYECydodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4bGluawAAQb4ECwVocmVmAABBxAQLJWh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZwAAQeoECwZ3aWR0aAAAQfIECyVodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcAAEGYBQsHaGVpZ2h0AABBoAULAQAAQaIFCwEAAEGkBQsFaHR0cAAAQaoFCwQlMkYAAEGwBQsBAABBsgULAQAAQbQFCwEAAEG2BQsBAABBuAULBWh0dHAAAEG+BQsEJTJGAABBxAULAQAAQcYFCwEAAEHIBQsBAABBygULByUyQyUyMAA='].map(__bytes => {
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
var KNStaticAssets = {};
KNStaticAssets[lS(0, 0)] = new Image();
KNStaticAssets[lS(0, 1)].src = static_url(lS(0, 2));
KNStaticAssets[lS(0, 3)] = new Image();
KNStaticAssets[lS(0, 4)].src = static_url(lS(0, 5));
var TextureManager = Class.create({
    initialize: function (a) {
        this.script = null;
        this.showUrl = a;
        this.sceneCache = {};
        this.slideCache = {};
        this.sceneDidLoadCallbackHandler = null;
        this.viewScale = 1;
        (() => {
            const __callInstance26 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kScriptDidDownloadEvent, function (b) {
                            (() => {
                                const __callInstance25 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.handleScriptDidDownloadEvent(b);
                                        }
                                    }
                                });
                                const __exports = __callInstance25.exports;
                                return __exports.data();
                            })();
                        }.bind(this), false);
                    }
                }
            });
            const __exports = __callInstance26.exports;
            return __exports.data();
        })();
    },
    setSceneDidLoadCallbackHandler: function (a, b) {
        this.sceneDidLoadCallbackHandler = {
            handler: a,
            sceneIndex: b
        };
    },
    processTextureDidLoadCallback: function (d, b) {
        if (this.sceneDidLoadCallbackHandler == null) {
            return;
        }
        var c = this.sceneDidLoadCallbackHandler.sceneIndex;
        var a = this.script.slideIndexFromSceneIndexLookup[c];
        if (a != b) {
            return;
        }
        (() => {
            const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance24 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.callSceneDidLoadCallback();
                                        }
                                    }
                                });
                                const __exports = __callInstance24.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance0.exports;
            return __exports.data(this.isSlidePreloaded(b) ? 1 : 0);
        })();
    },
    processSlideDidLoadCallback: function (b) {
        if (this.sceneDidLoadCallbackHandler == null) {
            return;
        }
        var c = this.sceneDidLoadCallbackHandler.sceneIndex;
        var a = this.script.slideIndexFromSceneIndexLookup[c];
        if (a != b) {
            return;
        }
        (() => {
            const __callInstance23 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.callSceneDidLoadCallback();
                    }
                }
            });
            const __exports = __callInstance23.exports;
            return __exports.data();
        })();
    },
    processSceneDidLoadCallback: function (a) {
        (() => {
            const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance22 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.callSceneDidLoadCallback();
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
            const __exports = __ifInstance1.exports;
            return __exports.data(this.sceneDidLoadCallbackHandler && a === this.sceneDidLoadCallbackHandler.sceneIndex && this.isScenePreloaded(a) ? 1 : 0);
        })();
    },
    callSceneDidLoadCallback: function () {
        (() => {
            const __callInstance21 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.sceneDidLoadCallbackHandler.handler();
                    }
                }
            });
            const __exports = __callInstance21.exports;
            return __exports.data();
        })();
        this.sceneDidLoadCallbackHandler = null;
    },
    loadScene: function (c, a) {
        if (c < 0 || c > this.script.numScenes) {
            return;
        }
        (() => {
            const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance20 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.setSceneDidLoadCallbackHandler(a, c);
                                        }
                                    }
                                });
                                const __exports = __callInstance20.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance2.exports;
            return __exports.data(a ? 1 : 0);
        })();
        var b = this.script.slideIndexFromSceneIndexLookup[c];
        (() => {
            const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance19 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.assetForSlide(b);
                                        }
                                    }
                                });
                                const __exports = __callInstance19.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __callInstance18 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.requestTexturesForSlide(b);
                                        }
                                    }
                                });
                                const __exports = __callInstance18.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance3.exports;
            return __exports.data(this.delegate.loadTextureBySlideIndex ? 1 : 0);
        })();
    },
    preloadScenes: function (a) {
        for (var c in a) {
            var b = this.script.slideIndexFromSceneIndexLookup[c];
            if (b == null) {
                continue;
            }
            (() => {
                const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __callInstance17 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.loadScene(c);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance17.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance4.exports;
                return __exports.data(this.slideCache.hasOwnProperty(b) === false ? 1 : 0);
            })();
        }
    },
    isSlidePreloaded: function (b) {
        var a = false;
        if (this.slideCache[b]) {
            a = true;
            for (var c in this.slideCache[b].textureRequests) {
                if (this.slideCache[b].textureRequests[c] === false) {
                    a = false;
                    break;
                }
            }
        }
        return a;
    },
    isScenePreloaded: function (c) {
        var b = this.script.slideIndexFromSceneIndexLookup[c];
        var a = this.isSlidePreloaded(b);
        return a;
    },
    handleScriptDidDownloadEvent: function (a) {
        this.script = a.memo.script;
        this.delegate = a.memo.delegate;
    },
    assetForSlide: function (f) {
        var d = this.slideCache[f];
        var c = this.script.slideList[f];
        var b = this.script.slides[c];
        var a = b.assets;
        (() => {
            const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.slideCache[f] = {};
                            this.slideCache[f].textureAssets = {};
                            this.slideCache[f].textureRequests = {};
                            for (var g in a) {
                                var e = a[g];
                                (() => {
                                    const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    this.slideCache[f].textureRequests[g] = false;
                                                    (() => {
                                                        const __callInstance16 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    this.requestAsset(g, e, c, f);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance16.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance6.exports;
                                    return __exports.data(e.type === lS(0, 6) ? 1 : 0);
                                })();
                            }
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance15 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.processSlideDidLoadCallback(f);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance15.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                for (var g in a) {
                                                    var e = a[g];
                                                    (() => {
                                                        const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                                                            env: {
                                                                impFunc1: () => {
                                                                    {
                                                                        (() => {
                                                                            const __callInstance14 = new WebAssembly.Instance(__callWasmModule, {
                                                                                env: {
                                                                                    impFunc: () => {
                                                                                        this.requestAsset(g, e, c, f);
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __callInstance14.exports;
                                                                            return __exports.data();
                                                                        })();
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance8.exports;
                                                        return __exports.data(this.slideCache[f].textureRequests[g] === false && e.type === lS(0, 7) ? 1 : 0);
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance7.exports;
                                return __exports.data(this.isSlidePreloaded(f) ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance5.exports;
            return __exports.data(d == null ? 1 : 0);
        })();
    },
    requestAsset: function (d, b, a, c) {
        requestedSlideIndex = c;
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
                                                                    requestedSlideIndex = this.script.slideList.indexOf(b.assetRequest.slide);
                                                                    (() => {
                                                                        const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        (() => {
                                                                                            const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                env: {
                                                                                                    impFunc1: () => {
                                                                                                        {
                                                                                                            requestedSlideIndex = 0;
                                                                                                        }
                                                                                                    },
                                                                                                    impFunc2: () => {
                                                                                                        {
                                                                                                            requestedSlideIndex = c;
                                                                                                            b.assetRequest.state = lS(0, 11);
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __ifInstance13.exports;
                                                                                            return __exports.data(this.script.loopSlideshow ? 1 : 0);
                                                                                        })();
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance12.exports;
                                                                        return __exports.data(requestedSlideIndex === -1 ? 1 : 0);
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    (() => {
                                                                        const __ifInstance14 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        requestedSlideIndex = c + 1;
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                    {
                                                                                        (() => {
                                                                                            const __ifInstance15 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                env: {
                                                                                                    impFunc1: () => {
                                                                                                        {
                                                                                                            requestedSlideIndex = 0;
                                                                                                        }
                                                                                                    },
                                                                                                    impFunc2: () => {
                                                                                                        {
                                                                                                            requestedSlideIndex = c;
                                                                                                            b.assetRequest.state = lS(0, 12);
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __ifInstance15.exports;
                                                                                            return __exports.data(this.script.loopSlideshow ? 1 : 0);
                                                                                        })();
                                                                                    }
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance14.exports;
                                                                        return __exports.data(c < this.script.slideList.length - 1 ? 1 : 0);
                                                                    })();
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance11.exports;
                                                    return __exports.data(b.assetRequest.slide ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance10.exports;
                                return __exports.data(b.assetRequest.state === lS(0, 9) || b.assetRequest.state === lS(0, 10) ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance9.exports;
            return __exports.data(b.assetRequest.type === lS(0, 8) ? 1 : 0);
        })();
        (() => {
            const __ifInstance16 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance13 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.delegate.loadTextureBySlideIndex(requestedSlideIndex, b.assetRequest, function (e, g, f) {
                                                this.slideCache[g].textureAssets[e] = f;
                                                this.slideCache[g].textureRequests[e] = true;
                                                (() => {
                                                    const __callInstance12 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.processTextureDidLoadCallback(d, c);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance12.exports;
                                                    return __exports.data();
                                                })();
                                            }.bind(this, d, c));
                                        }
                                    }
                                });
                                const __exports = __callInstance13.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            this.slideCache[c].textureAssets[d] = KNStaticAssets[b.assetRequest.state];
                            this.slideCache[c].textureRequests[d] = true;
                        }
                    }
                }
            });
            const __exports = __ifInstance16.exports;
            return __exports.data(b.assetRequest.state === lS(0, 13) || b.assetRequest.state === lS(0, 14) || b.assetRequest.state === lS(0, 15) || b.assetRequest.state === lS(0, 16) ? 1 : 0);
        })();
    },
    requestTexturesForSlide: function (f) {
        var d = this.slideCache[f];
        var c = this.script.slideList[f];
        var b = this.script.slides[c];
        var a = b.assets;
        (() => {
            const __ifInstance17 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.slideCache[f] = {};
                            this.slideCache[f].textureAssets = {};
                            this.slideCache[f].textureRequests = {};
                            for (var g in a) {
                                var e = a[g];
                                (() => {
                                    const __ifInstance18 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    this.slideCache[f].textureRequests[g] = false;
                                                    (() => {
                                                        const __callInstance11 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    this.fetchTexture(g, c, f);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance11.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance18.exports;
                                    return __exports.data(e.type === lS(0, 17) ? 1 : 0);
                                })();
                            }
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __ifInstance19 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance10 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.processSlideDidLoadCallback(f);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance10.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                for (var g in a) {
                                                    var e = a[g];
                                                    (() => {
                                                        const __ifInstance20 = new WebAssembly.Instance(__ifWasmModule, {
                                                            env: {
                                                                impFunc1: () => {
                                                                    {
                                                                        (() => {
                                                                            const __callInstance9 = new WebAssembly.Instance(__callWasmModule, {
                                                                                env: {
                                                                                    impFunc: () => {
                                                                                        this.fetchTexture(g, c, f);
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __callInstance9.exports;
                                                                            return __exports.data();
                                                                        })();
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance20.exports;
                                                        return __exports.data(this.slideCache[f].textureRequests[g] === false && e.type === lS(0, 18) ? 1 : 0);
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance19.exports;
                                return __exports.data(this.isSlidePreloaded(f) ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance17.exports;
            return __exports.data(d == null ? 1 : 0);
        })();
    },
    fetchTexture: function (h, d, f) {
        var c = this.urlForTexture(h, d);
        var g = c.substr(c.length - 3);
        if (g === lS(0, 19)) {
            var b = new Image();
            (() => {
                const __callInstance8 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            Event.observe(b, lS(0, 20), this.handleImageOnloadEvent.bind(this, h, f));
                        }
                    }
                });
                const __exports = __callInstance8.exports;
                return __exports.data();
            })();
            b.src = c;
            return;
        }
        (() => {
            const __ifInstance21 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            c = c + lS(0, 22);
                            (() => {
                                const __ifInstance22 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                window.local_svg = function (i) {
                                                    (() => {
                                                        const __callInstance7 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    this.handleFetchCompleted(null, i, true);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance7.exports;
                                                        return __exports.data();
                                                    })();
                                                }.bind(this);
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance22.exports;
                                return __exports.data(window.local_svg == null || window.local_svg == undefined ? 1 : 0);
                            })();
                            var a = document.createElement(lS(0, 23));
                            (() => {
                                const __callInstance6 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            a.setAttribute(lS(0, 24), c);
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
                                            document.head.appendChild(a);
                                        }
                                    }
                                });
                                const __exports = __callInstance5.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            var e = {
                                textureId: h,
                                slideId: d,
                                slideIndex: f
                            };
                            new Ajax.Request(c, {
                                method: 'get',
                                onSuccess: this.handleFetchCompleted.bind(this, e)
                            });
                        }
                    }
                }
            });
            const __exports = __ifInstance21.exports;
            return __exports.data(window.location.protocol === lS(0, 21) ? 1 : 0);
        })();
    },
    handleFetchCompleted: function (r, d, n) {
        var a = this.viewScale;
        var t;
        var s;
        (() => {
            const __ifInstance23 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            t = d.name;
                            slideId = d.slide;
                            s = this.script.slideList.indexOf(slideId);
                        }
                    },
                    impFunc2: () => {
                        {
                            t = r.textureId;
                            slideId = r.slideId;
                            s = r.slideIndex;
                        }
                    }
                }
            });
            const __exports = __ifInstance23.exports;
            return __exports.data(n ? 1 : 0);
        })();
        var f = this.urlForTexture(t, slideId);
        var l = f.substring(0, f.lastIndexOf(lS(0, 25)) + 1);
        var j;
        var b = new DOMParser();
        (() => {
            const __ifInstance24 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            j = b.parseFromString(d.svg, lS(0, 26));
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __ifInstance25 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                j = b.parseFromString(d.responseText, lS(0, 28));
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                j = d.responseXML;
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance25.exports;
                                return __exports.data(browserPrefix === lS(0, 27) && browserVersion < 10 ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance24.exports;
            return __exports.data(n ? 1 : 0);
        })();
        var h = j.documentElement.getAttribute(lS(0, 29)).split(lS(0, 30));
        var g = h[2];
        var m = h[3];
        var c = j.getElementsByTagName(lS(0, 31));
        (() => {
            var p = 0, e = c.length;
            const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return p < e ? 1 : 0;
                    },
                    update: () => {
                        p++;
                    },
                    body: () => {
                        {
                            var q = c[p];
                            var o = q.getAttributeNS(lS(0, 32), lS(0, 33));
                            (() => {
                                const __callInstance4 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            q.setAttributeNS(lS(0, 34), lS(0, 35), l + o);
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
            const __exports = __forInstance0.exports;
            return __exports.data();
        })();
        var k = document.importNode(j.documentElement, true);
        (() => {
            const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        k.setAttributeNS(lS(0, 36), lS(0, 37), g);
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
                        k.setAttributeNS(lS(0, 38), lS(0, 39), m);
                    }
                }
            });
            const __exports = __callInstance2.exports;
            return __exports.data();
        })();
        this.slideCache[s].textureAssets[t] = k;
        this.slideCache[s].textureRequests[t] = true;
        (() => {
            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.processTextureDidLoadCallback(t, s);
                    }
                }
            });
            const __exports = __callInstance1.exports;
            return __exports.data();
        })();
    },
    setViewScale: function (a) {
        (() => {
            const __ifInstance26 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.viewScale = a;
                            this.sceneCache = null;
                            this.sceneCache = {};
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance26.exports;
            return __exports.data(this.viewScale !== a ? 1 : 0);
        })();
    },
    handleImageOnloadEvent: function (d, c, b) {
        b = b || window.event;
        var a = b.target || b.srcElement;
        this.slideCache[c].textureAssets[d] = a;
        this.slideCache[c].textureRequests[d] = true;
        (() => {
            const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.processTextureDidLoadCallback(d, c);
                    }
                }
            });
            const __exports = __callInstance0.exports;
            return __exports.data();
        })();
    },
    getTextureObject: function (d, c) {
        var a;
        var b = this.script.slideIndexFromSceneIndexLookup[d];
        a = this.slideCache[b].textureAssets[c];
        return a;
    },
    getTextureInfo: function (e, d) {
        var c = this.script.slideIndexFromSceneIndexLookup[e];
        if (c == null) {
            return null;
        }
        var a = this.script.slideList[c];
        var b = this.script.slides[a].assets[d];
        return b;
    },
    getTextureUrl: function (d, c) {
        var b = this.script.slideIndexFromSceneIndexLookup[d];
        if (b == null) {
            return null;
        }
        var a = this.script.slideList[b];
        return this.urlForTexture(c, a);
    },
    getMovieUrl: function (d, c) {
        var b = this.script.slideIndexFromSceneIndexLookup[d];
        if (b == null) {
            return null;
        }
        var a = this.script.slideList[b];
        return this.urlForMovie(c, a);
    },
    urlForAsset: function (e, c) {
        var b = lS(0, 40);
        var d = this.script.slides[c].assets[e];
        if (d == null) {
            return b;
        }
        var a = d.url;
        (() => {
            const __ifInstance27 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __ifInstance28 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                b = a;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                b = this.showUrl + (c ? c + lS(0, 43) : lS(0, 44)) + a;
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance28.exports;
                                return __exports.data(a.toLowerCase().substring(0, 4) === lS(0, 42) ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance27.exports;
            return __exports.data(a != null && a != lS(0, 41) ? 1 : 0);
        })();
        return b;
    },
    urlForMovie: function (b, a) {
        return this.generateUrl(b, a, true);
    },
    urlForTexture: function (b, a) {
        return this.generateUrl(b, a, false);
    },
    generateUrl: function (g, c, f) {
        var b = lS(0, 45);
        var d = lS(0, 46);
        var e = this.script.slides[c].assets[g];
        if (e === null) {
            return b;
        }
        (() => {
            const __ifInstance29 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var a = this.script.slides[c].assets[e.movie];
                            d = a.url;
                        }
                    },
                    impFunc2: () => {
                        {
                            d = e.url;
                        }
                    }
                }
            });
            const __exports = __ifInstance29.exports;
            return __exports.data(f ? 1 : 0);
        })();
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
                                                b = d;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                b = this.showUrl + (c ? c + lS(0, 49) : lS(0, 50)) + d;
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance31.exports;
                                return __exports.data(d.toLowerCase().substring(0, 4) === lS(0, 48) ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance30.exports;
            return __exports.data(d != null && d != lS(0, 47) ? 1 : 0);
        })();
        return b;
    },
    scenesInCache: function () {
        var a = lS(0, 51);
        for (var b in this.sceneCache) {
            (() => {
                const __ifInstance32 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                a += lS(0, 53);
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance32.exports;
                return __exports.data(a != lS(0, 52) ? 1 : 0);
            })();
            a += b;
        }
        return a;
    }
});