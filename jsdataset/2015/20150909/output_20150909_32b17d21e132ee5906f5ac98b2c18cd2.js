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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG0YSAgABjfwBBAQt/AEEqC38AQdIAC38AQf4AC38AQaQBC38AQc4BC38AQdIBC38AQdoBC38AQeYBC38AQewBC38AQfgBC38AQZYCC38AQZgCC38AQaACC38AQawCC38AQbICC38AQboCC38AQe4CC38AQfQCC38AQfoCC38AQYADC38AQZIDC38AQagDC38AQcwDC38AQdgDC38AQewDC38AQZAEC38AQZwEC38AQboEC38AQdAEC38AQeYEC38AQYQFC38AQZoFC38AQbAFC38AQdQFC38AQeYFC38AQfgFC38AQZAGC38AQaYGC38AQbAGC38AQcYGC38AQdwGC38AQeIGC38AQewGC38AQfYGC38AQYAHC38AQYoHC38AQZoHC38AQbQHC38AQc4HC38AQfAHC38AQfoHC38AQYQIC38AQZoIC38AQaoIC38AQboIC38AQcoIC38AQdoIC38AQfQIC38AQY4JC38AQaAJC38AQcQJC38AQdYJC38AQf4JC38AQZAKC38AQboKC38AQd4KC38AQYALC38AQYoLC38AQZQLC38AQaoLC38AQcQLC38AQd4LC38AQewLC38AQfgLC38AQZIMC38AQawMC38AQcYMC38AQdAMC38AQegMC38AQfQMC38AQfwMC38AQZANC38AQaQNC38AQbgNC38AQdwNC38AQYQOC38AQawOC38AQcIOC38AQdgOC38AQYAPC38AQaQPC38AQcwPC38AQfAPC38AQb4QC38AQcwQC38AQdYQC38AQdoQC38AQeIQCwf7hoCAAGQGbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwIFZGF0YTMDAwVkYXRhNAMEBWRhdGE1AwUFZGF0YTYDBgVkYXRhNwMHBWRhdGE4AwgFZGF0YTkDCQZkYXRhMTADCgZkYXRhMTEDCwZkYXRhMTIDDAZkYXRhMTMDDQZkYXRhMTQDDgZkYXRhMTUDDwZkYXRhMTYDEAZkYXRhMTcDEQZkYXRhMTgDEgZkYXRhMTkDEwZkYXRhMjADFAZkYXRhMjEDFQZkYXRhMjIDFgZkYXRhMjMDFwZkYXRhMjQDGAZkYXRhMjUDGQZkYXRhMjYDGgZkYXRhMjcDGwZkYXRhMjgDHAZkYXRhMjkDHQZkYXRhMzADHgZkYXRhMzEDHwZkYXRhMzIDIAZkYXRhMzMDIQZkYXRhMzQDIgZkYXRhMzUDIwZkYXRhMzYDJAZkYXRhMzcDJQZkYXRhMzgDJgZkYXRhMzkDJwZkYXRhNDADKAZkYXRhNDEDKQZkYXRhNDIDKgZkYXRhNDMDKwZkYXRhNDQDLAZkYXRhNDUDLQZkYXRhNDYDLgZkYXRhNDcDLwZkYXRhNDgDMAZkYXRhNDkDMQZkYXRhNTADMgZkYXRhNTEDMwZkYXRhNTIDNAZkYXRhNTMDNQZkYXRhNTQDNgZkYXRhNTUDNwZkYXRhNTYDOAZkYXRhNTcDOQZkYXRhNTgDOgZkYXRhNTkDOwZkYXRhNjADPAZkYXRhNjEDPQZkYXRhNjIDPgZkYXRhNjMDPwZkYXRhNjQDQAZkYXRhNjUDQQZkYXRhNjYDQgZkYXRhNjcDQwZkYXRhNjgDRAZkYXRhNjkDRQZkYXRhNzADRgZkYXRhNzEDRwZkYXRhNzIDSAZkYXRhNzMDSQZkYXRhNzQDSgZkYXRhNzUDSwZkYXRhNzYDTAZkYXRhNzcDTQZkYXRhNzgDTgZkYXRhNzkDTwZkYXRhODADUAZkYXRhODEDUQZkYXRhODIDUgZkYXRhODMDUwZkYXRhODQDVAZkYXRhODUDVQZkYXRhODYDVgZkYXRhODcDVwZkYXRhODgDWAZkYXRhODkDWQZkYXRhOTADWgZkYXRhOTEDWwZkYXRhOTIDXAZkYXRhOTMDXQZkYXRhOTQDXgZkYXRhOTUDXwZkYXRhOTYDYAZkYXRhOTcDYQZkYXRhOTgDYguWlICAAGMAQQELJ1NjcmlwdE1hbmFnZXIlM0FTaG93U2l6ZURpZENoYW5nZUV2ZW50AABBKgsnU2NyaXB0TWFuYWdlciUzQVNjcmlwdERpZERvd25sb2FkRXZlbnQAAEHSAAsqU2NyaXB0TWFuYWdlciUzQVNjcmlwdERpZE5vdERvd25sb2FkRXZlbnQAAEH+AAslU2xpZGVNYW5hZ2VyJTNBU2xpZGVEaWREb3dubG9hZEV2ZW50AABBpAELKFNsaWRlTWFuYWdlciUzQVNsaWRlRGlkTm90RG93bmxvYWRFdmVudAAAQc4BCwNtcwAAQdIBCwZzdHlsZQAAQdoBCwt0ZXh0JTJGY3NzAABB5gELBWhlYWQAAEHsAQsKdW5kZWZpbmVkAABB+AELHWh0dHBzJTNBJTJGJTJGd3d3LmljbG91ZC5jb20AAEGWAgsBAABBmAILBnN0eWxlAABBoAILC3RleHQlMkZjc3MAAEGsAgsFaGVhZAAAQbICCwdzY3JpcHQAAEG6AgszJTJGaXclMkZmb250cyUyRmZvbnRfZmFtaWx5X2RlZmluaXRpb25zX2pzb25wLmpzb24AAEHuAgsFaGVhZAAAQfQCCwRtb3oAAEH6AgsEbW96AABBgAMLEGFwcGxlJTNBZG9vcndheQAAQZIDCxVhcHBsZSUzQWNhLWlzb21ldHJpYwAAQagDCyJjb20uYXBwbGUuaVdvcmsuS2V5bm90ZS5CTFRCbGluZHMAAEHMAwsLdHJhbnNpdGlvbgAAQdgDCxNhcHBsZSUzQWFwcGxlLWdyaWQAAEHsAwsiY29tLmFwcGxlLmlXb3JrLktleW5vdGUuQkxUU3dvb3NoAABBkAQLC3RyYW5zaXRpb24AAEGcBAsdc3VibGF5ZXJUcmFuc2Zvcm0ucm90YXRpb24ueAAAQboECxV0cmFuc2Zvcm0ucm90YXRpb24ueAAAQdAECxV0cmFuc2Zvcm0ucm90YXRpb24ueAAAQeYECx1zdWJsYXllclRyYW5zZm9ybS5yb3RhdGlvbi55AABBhAULFXRyYW5zZm9ybS5yb3RhdGlvbi55AABBmgULFXRyYW5zZm9ybS5yb3RhdGlvbi55AABBsAULInN1YmxheWVyVHJhbnNmb3JtLnRyYW5zZm9ybS5zY2FsZQAAQdQFCxB0cmFuc2Zvcm0uc2NhbGUAAEHmBQsQdHJhbnNmb3JtLnNjYWxlAABB+AULFmFwcGxlJTNBYWN0aW9uLWppZ2dsZQAAQZAGCxV0cmFuc2Zvcm0ucm90YXRpb24uegAAQaYGCwlwb3NpdGlvbgAAQbAGCxVhcHBsZSUzQWFjdGlvbi1ibGluawAAQcYGCxVhcHBsZSUzQWFjdGlvbi1wdWxzZQAAQdwGCwVub25lAABB4gYLCG9wYWNpdHkAAEHsBgsIb3BhY2l0eQAAQfYGCwhvcGFjaXR5AABBgAcLCG9wYWNpdHkAAEGKBwsOYXBwbGUlM0FzY2FsZQAAQZoHCxh0cmFuc2Zvcm0udHJhbnNsYXRpb24uegAAQbQHCxh0cmFuc2Zvcm0udHJhbnNsYXRpb24uegAAQc4HCyBjb20uYXBwbGUuaVdvcmsuS2V5bm90ZS5LTE5Td2FwAABB8AcLCG9wYWNpdHkAAEH6BwsIb3BhY2l0eQAAQYQICxVhcHBsZSUzQWNhLWlzb21ldHJpYwAAQZoICw9hcHBsZSUzQWJvdW5jZQAAQaoICw5hcHBsZSUzQXNsaWRlAABBuggLDmFwcGxlJTNBcGl2b3QAAEHKCAsOYXBwbGUlM0FzY2FsZQAAQdoICxh0cmFuc2Zvcm0udHJhbnNsYXRpb24uegAAQfQICxh0cmFuc2Zvcm0udHJhbnNsYXRpb24uegAAQY4JCxBhcHBsZSUzQWRvb3J3YXkAAEGgCQsiY29tLmFwcGxlLmlXb3JrLktleW5vdGUuQkxUQmxpbmRzAABBxAkLEGFwcGxlJTNBM0QtY3ViZQAAQdYJCyZjb20uYXBwbGUuaVdvcmsuS2V5bm90ZS5CTFRSZWZsZWN0aW9uAABB/gkLEGFwcGxlJTNBcmV2b2x2ZQAAQZAKCyljb20uYXBwbGUuaVdvcmsuS2V5bm90ZS5CTFRSZXZvbHZpbmdEb29yAABBugoLImNvbS5hcHBsZS5pV29yay5LZXlub3RlLkJMVEJsaW5kcwAAQd4KCyBjb20uYXBwbGUuaVdvcmsuS2V5bm90ZS5LTE5Td2FwAABBgAsLCG9wYWNpdHkAAEGKCwsIb3BhY2l0eQAAQZQLCxRhcHBsZSUzQUZsaXBUaHJvdWdoAABBqgsLGHRyYW5zZm9ybS50cmFuc2xhdGlvbi56AABBxAsLGHRyYW5zZm9ybS50cmFuc2xhdGlvbi56AABB3gsLDWFuY2hvclBvaW50WgAAQewLCwp6UG9zaXRpb24AAEH4CwsYdHJhbnNmb3JtLnRyYW5zbGF0aW9uLngAAEGSDAsYdHJhbnNmb3JtLnRyYW5zbGF0aW9uLnkAAEGsDAsYdHJhbnNmb3JtLnRyYW5zbGF0aW9uLnoAAEHGDAsJcG9zaXRpb24AAEHQDAsWdHJhbnNmb3JtLnRyYW5zbGF0aW9uAABB6AwLCnRyYW5zZm9ybQAAQfQMCwdib3VuZHMAAEH8DAsTdHJhbnNmb3JtLnNjYWxlLnh5AABBkA0LEnRyYW5zZm9ybS5zY2FsZS54AABBpA0LEnRyYW5zZm9ybS5zY2FsZS55AABBuA0LImNvbS5hcHBsZS5pV29yay5LZXlub3RlLkJMVEJsaW5kcwAAQdwNCyZjb20uYXBwbGUuaVdvcmsuS2V5bm90ZS5CTFRNb3NhaWNGbGlwAABBhA4LJmNvbS5hcHBsZS5pV29yay5LZXlub3RlLkJMVFJlZmxlY3Rpb24AAEGsDgsUaW5jb21pbmctcmVmbGVjdGlvbgAAQcIOCxRvdXRnb2luZy1yZWZsZWN0aW9uAABB2A4LJmNvbS5hcHBsZS5pV29yay5LZXlub3RlLkJMVE1vc2FpY0ZsaXAAAEGADwsiY29tLmFwcGxlLmlXb3JrLktleW5vdGUuQkxUQmxpbmRzAABBpA8LJmNvbS5hcHBsZS5pV29yay5LZXlub3RlLkJMVE1vc2FpY0ZsaXAAAEHMDwsiY29tLmFwcGxlLmlXb3JrLktleW5vdGUuQkxUQmxpbmRzAABB8A8LTUFuJTIwZXJyb3IlMjBvY2N1cmVkJTIwb24lMjB0aGUlMjBzZXJ2ZXIuJTIwS1BGJTIwaGVhZGVyJTIwanNvbiUyMGlzJTIwbnVsbC4AAEG+EAsMaGVhZGVyLmpzb24AAEHMEAsIZmlsZSUzQQAAQdYQCwJwAABB2hALB3NjcmlwdAAAQeIQCwRzcmMA'].map(__bytes => {
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
var kShowSizeDidChangeEvent = lS(0, 0);
var kScriptDidDownloadEvent = lS(0, 1);
var kScriptDidNotDownloadEvent = lS(0, 2);
var kSlideDidDownloadEvent = lS(0, 3);
var kSlideDidNotDownloadEvent = lS(0, 4);
var ScriptManager = Class.create({
    initialize: function (a) {
        this.script = null;
        this.showUrl = a;
        this.slideManager = null;
        (() => {
            const __callInstance95 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kSlideDidDownloadEvent, this.handleSlideDidDownloadEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance95.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance94 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kSlideDidNotDownloadEvent, this.handleSlideDidDownloadEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance94.exports;
            return __exports.data();
        })();
    },
    handleSlideDidDownloadEvent: function (d) {
        var l = true;
        for (var m in this.slideManager.slides) {
            if (this.slideManager.slides.hasOwnProperty(m)) {
                if (!this.slideManager.slides[m].downloaded) {
                    l = false;
                    break;
                }
            }
        }
        (() => {
            const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.script.events = [];
                            this.script.originalEvents = [];
                            this.script.slideIndexFromSceneIndexLookup = {};
                            this.script.sceneIndexFromSlideIndexLookup = {};
                            this.script.slides = {};
                            this.script.originalSlides = {};
                            var n, h, j, g, k = 0, b = 0, a = 0;
                            for (var m in this.slideManager.slides) {
                                (() => {
                                    const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    j = this.slideManager.slides[m].script;
                                                    g = this.slideManager.slides[m].originalScript;
                                                    n = j.events;
                                                    h = g.events;
                                                    this.script.slides[m] = j;
                                                    this.script.originalSlides[m] = g;
                                                    this.script.sceneIndexFromSlideIndexLookup[k] = b;
                                                    (() => {
                                                        var f = 0, e = n.length;
                                                        const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                                                            env: {
                                                                test: () => {
                                                                    return f < e ? 1 : 0;
                                                                },
                                                                update: () => {
                                                                    f++;
                                                                },
                                                                body: () => {
                                                                    {
                                                                        (() => {
                                                                            const __callInstance93 = new WebAssembly.Instance(__callWasmModule, {
                                                                                env: {
                                                                                    impFunc: () => {
                                                                                        this.script.events.push(n[f]);
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __callInstance93.exports;
                                                                            return __exports.data();
                                                                        })();
                                                                        (() => {
                                                                            const __callInstance92 = new WebAssembly.Instance(__callWasmModule, {
                                                                                env: {
                                                                                    impFunc: () => {
                                                                                        this.script.originalEvents.push(h[f]);
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __callInstance92.exports;
                                                                            return __exports.data();
                                                                        })();
                                                                        this.script.slideIndexFromSceneIndexLookup[a] = k;
                                                                        a += 1;
                                                                    }
                                                                }
                                                            }
                                                        });
                                                        const __exports = __forInstance0.exports;
                                                        return __exports.data();
                                                    })();
                                                    k += 1;
                                                    b = a;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance1.exports;
                                    return __exports.data(this.slideManager.slides.hasOwnProperty(m) ? 1 : 0);
                                })();
                            }
                            this.script.numScenes = this.script.events.length;
                            this.script.lastSceneIndex = this.script.numScenes - 1;
                            this.script.lastSlideIndex = this.script.slideList.length - 1;
                            this.script.originalSlideWidth = this.script.slideWidth;
                            this.script.originalSlideHeight = this.script.slideHeight;
                            (() => {
                                const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance91 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.adjustScriptForIE();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance91.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __callInstance90 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.adjustScript();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance90.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance2.exports;
                                return __exports.data(browserPrefix === lS(0, 5) ? 1 : 0);
                            })();
                            (() => {
                                const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance89 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.applyScaleFactor();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance89.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __callInstance88 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.delegate.setViewScale(this.scaleFactor);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance88.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance3.exports;
                                return __exports.data(this.delegate.setViewScale ? 1 : 0);
                            })();
                            (() => {
                                const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var c = document.createElement(lS(0, 6));
                                                c.type = lS(0, 7);
                                                (() => {
                                                    const __callInstance87 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                c.appendChild(document.createTextNode(this.delegate.getFontFamilyDefinitionsCssString()));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance87.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __callInstance86 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                document.getElementsByTagName(lS(0, 8))[0].appendChild(c);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance86.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __callInstance85 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.getFontFamilyDefinitionsCssString();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance85.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance4.exports;
                                return __exports.data(this.delegate.isUsingPreloadedFont && this.delegate.isUsingPreloadedFont() ? 1 : 0);
                            })();
                            (() => {
                                const __callInstance84 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            document.fire(kScriptDidDownloadEvent, {
                                                script: this.script,
                                                delegate: this.delegate
                                            });
                                        }
                                    }
                                });
                                const __exports = __callInstance84.exports;
                                return __exports.data();
                            })();
                            (() => {
                                const __callInstance83 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            document.fire(kShowSizeDidChangeEvent, {
                                                width: this.script.slideWidth,
                                                height: this.script.slideHeight
                                            });
                                        }
                                    }
                                });
                                const __exports = __callInstance83.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance0.exports;
            return __exports.data(l ? 1 : 0);
        })();
    },
    getFontFamilyDefinitionsCssString: function () {
        (() => {
            const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            GSFT = {};
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance5.exports;
            return __exports.data(typeof GSFT === lS(0, 9) ? 1 : 0);
        })();
        GSFT.FontFamilyDefinitionsJsonp = GSFT.FontFamilyDefinitionsJsonp || {};
        GSFT.FontFamilyDefinitionsJsonp.urlPrefix = lS(0, 10);
        GSFT.FontFamilyDefinitionsJsonp.cssStringDictReady = function (d) {
            var g = lS(0, 11);
            var f = gShowController.scriptManager.script.fonts;
            var c = document.createElement(lS(0, 12));
            c.type = lS(0, 13);
            (() => {
                var b = 0, e = f.length;
                const __forInstance1 = new WebAssembly.Instance(__forWasmModule, {
                    env: {
                        test: () => {
                            return b < e ? 1 : 0;
                        },
                        update: () => {
                            b++;
                        },
                        body: () => {
                            {
                                var a = f[b];
                                (() => {
                                    const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    g = g + d[a];
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance6.exports;
                                    return __exports.data(d[a] ? 1 : 0);
                                })();
                            }
                        }
                    }
                });
                const __exports = __forInstance1.exports;
                return __exports.data();
            })();
            (() => {
                const __callInstance82 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            c.appendChild(document.createTextNode(g));
                        }
                    }
                });
                const __exports = __callInstance82.exports;
                return __exports.data();
            })();
            (() => {
                const __callInstance81 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            document.getElementsByTagName(lS(0, 14))[0].appendChild(c);
                        }
                    }
                });
                const __exports = __callInstance81.exports;
                return __exports.data();
            })();
        };
        (() => {
            const __callInstance80 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        (function () {
                            var a = document.createElement(lS(0, 15));
                            a.src = GSFT.FontFamilyDefinitionsJsonp.urlPrefix + lS(0, 16);
                            (() => {
                                const __callInstance79 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            document.getElementsByTagName(lS(0, 17))[0].appendChild(a);
                                        }
                                    }
                                });
                                const __exports = __callInstance79.exports;
                                return __exports.data();
                            })();
                        }());
                    }
                }
            });
            const __exports = __callInstance80.exports;
            return __exports.data();
        })();
    },
    adjustScript: function () {
        (() => {
            var c = 0, f = this.script.events.length;
            const __forInstance2 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return c < f ? 1 : 0;
                    },
                    update: () => {
                        c++;
                    },
                    body: () => {
                        {
                            var d = this.script.events[c];
                            var e = this.script.originalEvents[c];
                            (() => {
                                var h = 0, o = d.effects.length;
                                const __forInstance3 = new WebAssembly.Instance(__forWasmModule, {
                                    env: {
                                        test: () => {
                                            return h < o ? 1 : 0;
                                        },
                                        update: () => {
                                            h++;
                                        },
                                        body: () => {
                                            {
                                                var s = d.effects[h];
                                                var m = e.effects[h];
                                                (() => {
                                                    const __callInstance78 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.adjustEffects(s, m);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance78.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __callInstance77 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.adjustEmphasisBuilds(s, m);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance77.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance76 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    this.adjustEffectsForChrome(s, m);
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance76.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance7.exports;
                                                    return __exports.data(isMacOS && isChrome ? 1 : 0);
                                                })();
                                                (() => {
                                                    const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance75 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    this.adjustEffectsForFirefox(s, m);
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance75.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance8.exports;
                                                    return __exports.data(browserPrefix === lS(0, 18) ? 1 : 0);
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __forInstance3.exports;
                                return __exports.data();
                            })();
                            (() => {
                                var h = 0, b = d.hyperlinks.length;
                                const __forInstance4 = new WebAssembly.Instance(__forWasmModule, {
                                    env: {
                                        test: () => {
                                            return h < b ? 1 : 0;
                                        },
                                        update: () => {
                                            h++;
                                        },
                                        body: () => {
                                            {
                                                var q = d.hyperlinks[h];
                                                var n = e.hyperlinks[h];
                                                for (var r in q.events) {
                                                    var k = q.events[r];
                                                    var l = n.events[r];
                                                    (() => {
                                                        var g = 0, o = k.effects.length;
                                                        const __forInstance5 = new WebAssembly.Instance(__forWasmModule, {
                                                            env: {
                                                                test: () => {
                                                                    return g < o ? 1 : 0;
                                                                },
                                                                update: () => {
                                                                    g++;
                                                                },
                                                                body: () => {
                                                                    {
                                                                        var p = k.effects[g];
                                                                        var a = l.effects[g];
                                                                        (() => {
                                                                            const __callInstance74 = new WebAssembly.Instance(__callWasmModule, {
                                                                                env: {
                                                                                    impFunc: () => {
                                                                                        this.adjustEffects(p, a);
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __callInstance74.exports;
                                                                            return __exports.data();
                                                                        })();
                                                                        (() => {
                                                                            const __callInstance73 = new WebAssembly.Instance(__callWasmModule, {
                                                                                env: {
                                                                                    impFunc: () => {
                                                                                        this.adjustEmphasisBuilds(p, a);
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __callInstance73.exports;
                                                                            return __exports.data();
                                                                        })();
                                                                        (() => {
                                                                            const __ifInstance9 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                env: {
                                                                                    impFunc1: () => {
                                                                                        {
                                                                                            (() => {
                                                                                                const __callInstance72 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            this.adjustEffectsForChrome(s, m);
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __callInstance72.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                        }
                                                                                    },
                                                                                    impFunc2: () => {
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __ifInstance9.exports;
                                                                            return __exports.data(isMacOS && isChrome ? 1 : 0);
                                                                        })();
                                                                        (() => {
                                                                            const __ifInstance10 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                env: {
                                                                                    impFunc1: () => {
                                                                                        {
                                                                                            (() => {
                                                                                                const __callInstance71 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            this.adjustEffectsForFirefox(s, m);
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __callInstance71.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                        }
                                                                                    },
                                                                                    impFunc2: () => {
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __ifInstance10.exports;
                                                                            return __exports.data(browserPrefix === lS(0, 19) ? 1 : 0);
                                                                        })();
                                                                    }
                                                                }
                                                            }
                                                        });
                                                        const __exports = __forInstance5.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                });
                                const __exports = __forInstance4.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __forInstance2.exports;
            return __exports.data();
        })();
    },
    adjustEffects: function (k, h) {
        switch (k.name) {
        case lS(0, 20):
            var j = h.baseLayer.layers[0];
            var c = k.baseLayer.layers[0];
            var d = j.layers[1];
            j.layers[1] = j.layers[2];
            j.layers[2] = d;
            var b = c.layers[1];
            c.layers[1] = c.layers[2];
            c.layers[2] = b;
            (() => {
                const __ifInstance11 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                j.layers[1].layers[0].initialState.masksToBounds = true;
                                j.layers[1].layers[1].initialState.masksToBounds = true;
                                c.layers[1].layers[0].initialState.masksToBounds = true;
                                c.layers[1].layers[1].initialState.masksToBounds = true;
                                j.layers[1].layers[0].layers[0].initialState.masksToBounds = true;
                                j.layers[1].layers[1].layers[0].initialState.masksToBounds = true;
                                c.layers[1].layers[0].layers[0].initialState.masksToBounds = true;
                                c.layers[1].layers[1].layers[0].initialState.masksToBounds = true;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance11.exports;
                return __exports.data(isChrome ? 1 : 0);
            })();
            break;
        case lS(0, 21):
            (() => {
                var e = 0, a = k.baseLayer.layers.length;
                const __forInstance6 = new WebAssembly.Instance(__forWasmModule, {
                    env: {
                        test: () => {
                            return e < a ? 1 : 0;
                        },
                        update: () => {
                            e++;
                        },
                        body: () => {
                            {
                                var g = k.baseLayer.layers[e];
                                var f = k.baseLayer.layers[e];
                                (() => {
                                    const __callInstance70 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.adjustPerspective(g, f);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance70.exports;
                                    return __exports.data();
                                })();
                            }
                        }
                    }
                });
                const __exports = __forInstance6.exports;
                return __exports.data();
            })();
            break;
        case lS(0, 22):
            (() => {
                const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                var j = h.baseLayer.layers[0];
                                var c = k.baseLayer.layers[0];
                                (() => {
                                    const __callInstance69 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                c.layers.splice(0, 2);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance69.exports;
                                    return __exports.data();
                                })();
                                (() => {
                                    const __callInstance68 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                j.layers.splice(0, 2);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance68.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance12.exports;
                return __exports.data(k.type === lS(0, 23) ? 1 : 0);
            })();
            break;
        case lS(0, 24):
            var j = h.baseLayer.layers[0];
            var c = k.baseLayer.layers[0];
            (() => {
                const __callInstance67 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            c.layers.splice(0, 2);
                        }
                    }
                });
                const __exports = __callInstance67.exports;
                return __exports.data();
            })();
            (() => {
                const __callInstance66 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            j.layers.splice(0, 2);
                        }
                    }
                });
                const __exports = __callInstance66.exports;
                return __exports.data();
            })();
            break;
        case lS(0, 25):
            var j = h.baseLayer.layers[0];
            var c = k.baseLayer.layers[0];
            (() => {
                const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __callInstance65 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                c.layers[1].layers[0].layers.splice(0, 1);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance65.exports;
                                    return __exports.data();
                                })();
                                (() => {
                                    const __callInstance64 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                j.layers[1].layers[0].layers.splice(0, 1);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance64.exports;
                                    return __exports.data();
                                })();
                                var d = j.layers[1];
                                j.layers[1] = j.layers[2];
                                j.layers[2] = d;
                                var b = c.layers[1];
                                c.layers[1] = c.layers[2];
                                c.layers[2] = b;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance13.exports;
                return __exports.data(k.type === lS(0, 26) ? 1 : 0);
            })();
            break;
        default:
            break;
        }
    },
    adjustPerspective: function (c, g) {
        (() => {
            const __ifInstance14 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var e = c.animations[0].beginTime;
                            var a = c.animations[0].animations[0].beginTime;
                            var h = e === a ? c.animations[0].animations : c.animations[0].animations[0].animations;
                            var b = e === a ? g.animations[0].animations : g.animations[0].animations[0].animations;
                            (() => {
                                i = 0, length = h.length;
                                const __forInstance7 = new WebAssembly.Instance(__forWasmModule, {
                                    env: {
                                        test: () => {
                                            return i < length ? 1 : 0;
                                        },
                                        update: () => {
                                            i++;
                                        },
                                        body: () => {
                                            {
                                                var d = h[i];
                                                var f = b[i];
                                                (() => {
                                                    const __ifInstance15 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    d.property = lS(0, 28);
                                                                    f.property = lS(0, 29);
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    (() => {
                                                                        const __ifInstance16 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        d.property = lS(0, 31);
                                                                                        f.property = lS(0, 32);
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                    {
                                                                                        (() => {
                                                                                            const __ifInstance17 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                env: {
                                                                                                    impFunc1: () => {
                                                                                                        {
                                                                                                            d.property = lS(0, 34);
                                                                                                            f.property = lS(0, 35);
                                                                                                        }
                                                                                                    },
                                                                                                    impFunc2: () => {
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __ifInstance17.exports;
                                                                                            return __exports.data(d.property === lS(0, 33) ? 1 : 0);
                                                                                        })();
                                                                                    }
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance16.exports;
                                                                        return __exports.data(d.property === lS(0, 30) ? 1 : 0);
                                                                    })();
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance15.exports;
                                                    return __exports.data(d.property === lS(0, 27) ? 1 : 0);
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __forInstance7.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance14.exports;
            return __exports.data(c.animations[0] && c.animations[0].animations.length > 0 ? 1 : 0);
        })();
    },
    adjustEmphasisBuilds: function (t, o) {
        switch (t.name) {
        case lS(0, 36):
            var m = o.baseLayer.layers[0];
            var n = t.baseLayer.layers[0];
            var b = m.animations[0];
            var f = n.animations[0];
            var a = f.animations.length;
            (() => {
                var h = 0;
                const __forInstance8 = new WebAssembly.Instance(__forWasmModule, {
                    env: {
                        test: () => {
                            return h < a ? 1 : 0;
                        },
                        update: () => {
                            h++;
                        },
                        body: () => {
                            {
                                var l = Math.ceil(f.duration / f.animations[h].duration);
                                (() => {
                                    var g = 0;
                                    const __forInstance9 = new WebAssembly.Instance(__forWasmModule, {
                                        env: {
                                            test: () => {
                                                return g < l - 1 ? 1 : 0;
                                            },
                                            update: () => {
                                                g++;
                                            },
                                            body: () => {
                                                {
                                                    var r = JSON.parse(JSON.stringify(b.animations[h]));
                                                    var e = JSON.parse(JSON.stringify(f.animations[h]));
                                                    r.beginTime = b.animations[h].duration * (g + 1);
                                                    e.beginTime = f.animations[h].duration * (g + 1);
                                                    (() => {
                                                        const __callInstance63 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    m.animations[0].animations.push(r);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance63.exports;
                                                        return __exports.data();
                                                    })();
                                                    (() => {
                                                        const __callInstance62 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    n.animations[0].animations.push(e);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance62.exports;
                                                        return __exports.data();
                                                    })();
                                                    (() => {
                                                        const __ifInstance18 = new WebAssembly.Instance(__ifWasmModule, {
                                                            env: {
                                                                impFunc1: () => {
                                                                    {
                                                                        r.duration = f.duration - r.beginTime;
                                                                        e.duration = f.duration - e.beginTime;
                                                                        (() => {
                                                                            const __ifInstance19 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                env: {
                                                                                    impFunc1: () => {
                                                                                        {
                                                                                            r.to.scalar = 0;
                                                                                            e.to.scalar = 0;
                                                                                        }
                                                                                    },
                                                                                    impFunc2: () => {
                                                                                        {
                                                                                            (() => {
                                                                                                const __ifInstance20 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc1: () => {
                                                                                                            {
                                                                                                                r.to.pointX = (r.from.pointX + r.to.pointX) / 2;
                                                                                                                e.to.pointX = (e.from.pointX + e.to.pointX) / 2;
                                                                                                            }
                                                                                                        },
                                                                                                        impFunc2: () => {
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __ifInstance20.exports;
                                                                                                return __exports.data(f.animations[h].property === lS(0, 38) ? 1 : 0);
                                                                                            })();
                                                                                        }
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __ifInstance19.exports;
                                                                            return __exports.data(f.animations[h].property === lS(0, 37) ? 1 : 0);
                                                                        })();
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance18.exports;
                                                        return __exports.data(g === l - 2 ? 1 : 0);
                                                    })();
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __forInstance9.exports;
                                    return __exports.data();
                                })();
                            }
                        }
                    }
                });
                const __exports = __forInstance8.exports;
                return __exports.data();
            })();
            break;
        case lS(0, 39):
        case lS(0, 40):
            var m = o.baseLayer.layers[0];
            var n = t.baseLayer.layers[0];
            var b = m.animations[0];
            var f = n.animations[0];
            var q = [];
            var p = [];
            var s = 0;
            var l = 1;
            (() => {
                const __ifInstance21 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                l = Math.floor(f.repeatCount);
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance21.exports;
                return __exports.data(f.repeatCount ? 1 : 0);
            })();
            m.animations[0].duration = f.duration * l;
            n.animations[0].duration = f.duration * l;
            (() => {
                var h = 0, a = f.animations.length;
                const __forInstance10 = new WebAssembly.Instance(__forWasmModule, {
                    env: {
                        test: () => {
                            return h < a ? 1 : 0;
                        },
                        update: () => {
                            h++;
                        },
                        body: () => {
                            {
                                (() => {
                                    const __callInstance61 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                p.push(JSON.stringify(f.animations[h]));
                                            }
                                        }
                                    });
                                    const __exports = __callInstance61.exports;
                                    return __exports.data();
                                })();
                                (() => {
                                    const __callInstance60 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                q.push(JSON.stringify(b.animations[h]));
                                            }
                                        }
                                    });
                                    const __exports = __callInstance60.exports;
                                    return __exports.data();
                                })();
                                s = f.animations[h].beginTime + f.animations[h].duration;
                            }
                        }
                    }
                });
                const __exports = __forInstance10.exports;
                return __exports.data();
            })();
            (() => {
                var h = 0;
                const __forInstance11 = new WebAssembly.Instance(__forWasmModule, {
                    env: {
                        test: () => {
                            return h < l - 1 ? 1 : 0;
                        },
                        update: () => {
                            h++;
                        },
                        body: () => {
                            {
                                (() => {
                                    var g = 0, a = p.length;
                                    const __forInstance12 = new WebAssembly.Instance(__forWasmModule, {
                                        env: {
                                            test: () => {
                                                return g < a ? 1 : 0;
                                            },
                                            update: () => {
                                                g++;
                                            },
                                            body: () => {
                                                {
                                                    var r = JSON.parse(q[g]);
                                                    var e = JSON.parse(p[g]);
                                                    r.beginTime = s;
                                                    e.beginTime = s;
                                                    (() => {
                                                        const __callInstance59 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    m.animations[0].animations.push(r);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance59.exports;
                                                        return __exports.data();
                                                    })();
                                                    (() => {
                                                        const __callInstance58 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    n.animations[0].animations.push(e);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance58.exports;
                                                        return __exports.data();
                                                    })();
                                                    s = r.beginTime + r.duration;
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __forInstance12.exports;
                                    return __exports.data();
                                })();
                            }
                        }
                    }
                });
                const __exports = __forInstance11.exports;
                return __exports.data();
            })();
            break;
        default:
            break;
        }
        (() => {
            var d = 0, c = t.effects.length;
            const __forInstance13 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return d < c ? 1 : 0;
                    },
                    update: () => {
                        d++;
                    },
                    body: () => {
                        {
                            (() => {
                                const __callInstance57 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.adjustEmphasisBuilds(t.effects[d], o.effects[d]);
                                        }
                                    }
                                });
                                const __exports = __callInstance57.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __forInstance13.exports;
            return __exports.data();
        })();
    },
    adjustEffectsForChrome: function (c, a) {
        (() => {
            const __ifInstance22 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var b = a.baseLayer.layers[0];
                            var d = c.baseLayer.layers[0];
                            (() => {
                                const __ifInstance23 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                b.layers[1].animations[0].animations[0].property = lS(0, 42);
                                                d.layers[1].animations[0].animations[0].property = lS(0, 43);
                                                b.layers[1].animations[0].animations[0].from = { scalar: 1 };
                                                b.layers[1].animations[0].animations[0].to = { scalar: 0 };
                                                d.layers[1].animations[0].animations[0].from = { scalar: 1 };
                                                d.layers[1].animations[0].animations[0].to = { scalar: 0 };
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                b.layers[1].animations[0].property = lS(0, 44);
                                                d.layers[1].animations[0].property = lS(0, 45);
                                                b.layers[1].animations[0].from = { scalar: 1 };
                                                b.layers[1].animations[0].to = { scalar: 0 };
                                                d.layers[1].animations[0].from = { scalar: 1 };
                                                d.layers[1].animations[0].to = { scalar: 0 };
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance23.exports;
                                return __exports.data(b.layers[1].animations[0].animations && b.layers[1].animations[0].animations.length > 0 ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance22.exports;
            return __exports.data(c.name === lS(0, 41) ? 1 : 0);
        })();
    },
    adjustEffectsForFirefox: function (s, n) {
        switch (s.name) {
        case lS(0, 46):
            var r = n.baseLayer.layers[0];
            var l = s.baseLayer.layers[0];
            (() => {
                const __ifInstance24 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                var m = r.layers[0];
                                r.layers[0] = r.layers[1];
                                r.layers[1] = m;
                                r.layers[1].initialState.hidden = true;
                                var f = l.layers[0];
                                l.layers[0] = l.layers[1];
                                l.layers[1] = f;
                                l.layers[1].initialState.hidden = true;
                                var a = r.layers[1].animations[0].beginTime;
                                var c = r.layers[1].animations[0].duration;
                                var h = r.layers[1].animations[0].animations[0].beginTime;
                                var e = r.layers[1].animations[0].animations[0].duration;
                                var k;
                                (() => {
                                    const __ifInstance25 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    (() => {
                                                        var g = 0, p = r.layers[1].animations[0].animations.length;
                                                        const __forInstance14 = new WebAssembly.Instance(__forWasmModule, {
                                                            env: {
                                                                test: () => {
                                                                    return g < p ? 1 : 0;
                                                                },
                                                                update: () => {
                                                                    g++;
                                                                },
                                                                body: () => {
                                                                    {
                                                                        (() => {
                                                                            const __ifInstance26 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                env: {
                                                                                    impFunc1: () => {
                                                                                        {
                                                                                            (() => {
                                                                                                const __callInstance56 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            r.layers[1].animations[0].animations.splice(g, 1);
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __callInstance56.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                            (() => {
                                                                                                const __callInstance55 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            l.layers[1].animations[0].animations.splice(g, 1);
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __callInstance55.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                        }
                                                                                    },
                                                                                    impFunc2: () => {
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __ifInstance26.exports;
                                                                            return __exports.data(r.layers[1].animations[0].animations[g].property === lS(0, 47) ? 1 : 0);
                                                                        })();
                                                                    }
                                                                }
                                                            }
                                                        });
                                                        const __exports = __forInstance14.exports;
                                                        return __exports.data();
                                                    })();
                                                    k = {
                                                        animations: [],
                                                        beginTime: a,
                                                        duration: c,
                                                        fillMode: 'forwards',
                                                        from: { scalar: false },
                                                        property: 'hidden',
                                                        timingFunction: 'linear',
                                                        to: { scalar: false }
                                                    };
                                                    (() => {
                                                        const __callInstance54 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    r.layers[1].animations[0].animations.push(k);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance54.exports;
                                                        return __exports.data();
                                                    })();
                                                    (() => {
                                                        const __callInstance53 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    l.layers[1].animations[0].animations.push(k);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance53.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                                {
                                                    (() => {
                                                        var g = 0, p = r.layers[1].animations[0].animations[0].animations.length;
                                                        const __forInstance15 = new WebAssembly.Instance(__forWasmModule, {
                                                            env: {
                                                                test: () => {
                                                                    return g < p ? 1 : 0;
                                                                },
                                                                update: () => {
                                                                    g++;
                                                                },
                                                                body: () => {
                                                                    {
                                                                        (() => {
                                                                            const __ifInstance27 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                env: {
                                                                                    impFunc1: () => {
                                                                                        {
                                                                                            (() => {
                                                                                                const __callInstance52 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            r.layers[1].animations[0].animations[0].animations.splice(g, 1);
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __callInstance52.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                            (() => {
                                                                                                const __callInstance51 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            l.layers[1].animations[0].animations[0].animations.splice(g, 1);
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __callInstance51.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                        }
                                                                                    },
                                                                                    impFunc2: () => {
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __ifInstance27.exports;
                                                                            return __exports.data(r.layers[1].animations[0].animations[0].animations[g].property === lS(0, 48) ? 1 : 0);
                                                                        })();
                                                                    }
                                                                }
                                                            }
                                                        });
                                                        const __exports = __forInstance15.exports;
                                                        return __exports.data();
                                                    })();
                                                    k = {
                                                        animations: [],
                                                        beginTime: r.layers[1].animations[0].animations[0].animations[0].beginTime + 0.03,
                                                        duration: r.layers[1].animations[0].animations[0].animations[0].duration,
                                                        fillMode: 'forwards',
                                                        from: { scalar: false },
                                                        property: 'hidden',
                                                        timingFunction: 'linear',
                                                        to: { scalar: false }
                                                    };
                                                    (() => {
                                                        const __callInstance50 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    r.layers[1].animations[0].animations[0].animations.push(k);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance50.exports;
                                                        return __exports.data();
                                                    })();
                                                    (() => {
                                                        const __callInstance49 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    l.layers[1].animations[0].animations[0].animations.push(k);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance49.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance25.exports;
                                    return __exports.data(a == h ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance24.exports;
                return __exports.data(r.layers[0].animations.length > 0 ? 1 : 0);
            })();
            break;
        case lS(0, 49):
            var r = n.baseLayer.layers[0];
            var l = s.baseLayer.layers[0];
            var e, d, o, b, q;
            if (r.layers[1].animations[0].animations.length > 1) {
                for (var g = 0, p = r.layers[1].animations[0].animations.length; g < p; g++) {
                    b = r.layers[1].animations[0].animations[g];
                    q = l.layers[1].animations[0].animations[g];
                    if (b.property === lS(0, 50)) {
                        break;
                    }
                }
                e = r.layers[1].animations[0].duration;
            } else {
                for (var g = 0, p = r.layers[1].animations[0].animations[0].animations.length; g < p; g++) {
                    b = r.layers[1].animations[0].animations[0].animations[g];
                    q = l.layers[1].animations[0].animations[0].animations[g];
                    if (b.property === lS(0, 51)) {
                        break;
                    }
                }
                e = r.layers[1].animations[0].animations[0].duration;
            }
            d = e * 0.4;
            o = e * 0.4;
            b.to.scalar = 0;
            b.beginTime = d;
            b.duration = o;
            q.to.scalar = 0;
            q.beginTime = d;
            q.duration = o;
            break;
        default:
            break;
        }
    },
    adjustScriptForIE: function () {
        (() => {
            var c = 0, f = this.script.events.length;
            const __forInstance16 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return c < f ? 1 : 0;
                    },
                    update: () => {
                        c++;
                    },
                    body: () => {
                        {
                            var d = this.script.events[c];
                            var e = this.script.originalEvents[c];
                            (() => {
                                var h = 0, o = d.effects.length;
                                const __forInstance17 = new WebAssembly.Instance(__forWasmModule, {
                                    env: {
                                        test: () => {
                                            return h < o ? 1 : 0;
                                        },
                                        update: () => {
                                            h++;
                                        },
                                        body: () => {
                                            {
                                                var s = d.effects[h];
                                                var m = e.effects[h];
                                                (() => {
                                                    const __callInstance48 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.adjustEffectsForIE(s, m);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance48.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __callInstance47 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.adjustEmphasisBuilds(s, m);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance47.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __forInstance17.exports;
                                return __exports.data();
                            })();
                            (() => {
                                var h = 0, b = d.hyperlinks.length;
                                const __forInstance18 = new WebAssembly.Instance(__forWasmModule, {
                                    env: {
                                        test: () => {
                                            return h < b ? 1 : 0;
                                        },
                                        update: () => {
                                            h++;
                                        },
                                        body: () => {
                                            {
                                                var q = d.hyperlinks[h];
                                                var n = e.hyperlinks[h];
                                                for (var r in q.events) {
                                                    var k = q.events[r];
                                                    var l = n.events[r];
                                                    (() => {
                                                        var g = 0, o = k.effects.length;
                                                        const __forInstance19 = new WebAssembly.Instance(__forWasmModule, {
                                                            env: {
                                                                test: () => {
                                                                    return g < o ? 1 : 0;
                                                                },
                                                                update: () => {
                                                                    g++;
                                                                },
                                                                body: () => {
                                                                    {
                                                                        var p = k.effects[g];
                                                                        var a = l.effects[g];
                                                                        (() => {
                                                                            const __callInstance46 = new WebAssembly.Instance(__callWasmModule, {
                                                                                env: {
                                                                                    impFunc: () => {
                                                                                        this.adjustEffectsForIE(p, a);
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __callInstance46.exports;
                                                                            return __exports.data();
                                                                        })();
                                                                        (() => {
                                                                            const __callInstance45 = new WebAssembly.Instance(__callWasmModule, {
                                                                                env: {
                                                                                    impFunc: () => {
                                                                                        this.adjustEmphasisBuilds(p, a);
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __callInstance45.exports;
                                                                            return __exports.data();
                                                                        })();
                                                                    }
                                                                }
                                                            }
                                                        });
                                                        const __exports = __forInstance19.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                });
                                const __exports = __forInstance18.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __forInstance16.exports;
            return __exports.data();
        })();
    },
    adjustEffectsForIE: function (o, p) {
        switch (o.name) {
        case lS(0, 52):
            (() => {
                var t = 0, c = o.baseLayer.layers.length;
                const __forInstance20 = new WebAssembly.Instance(__forWasmModule, {
                    env: {
                        test: () => {
                            return t < c ? 1 : 0;
                        },
                        update: () => {
                            t++;
                        },
                        body: () => {
                            {
                                var w = o.baseLayer.layers[t];
                                var d = o.baseLayer.layers[t];
                                (() => {
                                    const __callInstance44 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.adjustPerspective(w, d);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance44.exports;
                                    return __exports.data();
                                })();
                            }
                        }
                    }
                });
                const __exports = __forInstance20.exports;
                return __exports.data();
            })();
            break;
        case lS(0, 53):
        case lS(0, 54):
        case lS(0, 55):
        case lS(0, 56):
            var m = p.baseLayer.layers[0];
            var h = o.baseLayer.layers[0];
            (() => {
                const __ifInstance28 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                var v = m.layers[0];
                                m.layers[0] = m.layers[1];
                                m.layers[1] = v;
                                m.layers[1].initialState.hidden = true;
                                var q = h.layers[0];
                                h.layers[0] = h.layers[1];
                                h.layers[1] = q;
                                h.layers[1].initialState.hidden = true;
                                var n = m.layers[1].animations[0].beginTime;
                                var l = m.layers[1].animations[0].duration;
                                var r = m.layers[1].animations[0].animations[0].beginTime;
                                var a = m.layers[1].animations[0].animations[0].duration;
                                var e;
                                (() => {
                                    const __ifInstance29 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    (() => {
                                                        var s = 0, k = m.layers[1].animations[0].animations.length;
                                                        const __forInstance21 = new WebAssembly.Instance(__forWasmModule, {
                                                            env: {
                                                                test: () => {
                                                                    return s < k ? 1 : 0;
                                                                },
                                                                update: () => {
                                                                    s++;
                                                                },
                                                                body: () => {
                                                                    {
                                                                        (() => {
                                                                            const __ifInstance30 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                env: {
                                                                                    impFunc1: () => {
                                                                                        {
                                                                                            (() => {
                                                                                                const __callInstance43 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            m.layers[1].animations[0].animations.splice(s, 1);
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __callInstance43.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                            (() => {
                                                                                                const __callInstance42 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            h.layers[1].animations[0].animations.splice(s, 1);
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __callInstance42.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                        }
                                                                                    },
                                                                                    impFunc2: () => {
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __ifInstance30.exports;
                                                                            return __exports.data(m.layers[1].animations[0].animations[s].property === lS(0, 57) ? 1 : 0);
                                                                        })();
                                                                    }
                                                                }
                                                            }
                                                        });
                                                        const __exports = __forInstance21.exports;
                                                        return __exports.data();
                                                    })();
                                                    e = {
                                                        animations: [],
                                                        beginTime: n,
                                                        duration: l,
                                                        fillMode: 'forwards',
                                                        from: { scalar: false },
                                                        property: 'hidden',
                                                        timingFunction: 'linear',
                                                        to: { scalar: false }
                                                    };
                                                    (() => {
                                                        const __callInstance41 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    m.layers[1].animations[0].animations.push(e);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance41.exports;
                                                        return __exports.data();
                                                    })();
                                                    (() => {
                                                        const __callInstance40 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    h.layers[1].animations[0].animations.push(e);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance40.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                                {
                                                    (() => {
                                                        var s = 0, k = m.layers[1].animations[0].animations[0].animations.length;
                                                        const __forInstance22 = new WebAssembly.Instance(__forWasmModule, {
                                                            env: {
                                                                test: () => {
                                                                    return s < k ? 1 : 0;
                                                                },
                                                                update: () => {
                                                                    s++;
                                                                },
                                                                body: () => {
                                                                    {
                                                                        (() => {
                                                                            const __ifInstance31 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                env: {
                                                                                    impFunc1: () => {
                                                                                        {
                                                                                            (() => {
                                                                                                const __callInstance39 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            m.layers[1].animations[0].animations[0].animations.splice(s, 1);
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __callInstance39.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                            (() => {
                                                                                                const __callInstance38 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            h.layers[1].animations[0].animations[0].animations.splice(s, 1);
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __callInstance38.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                        }
                                                                                    },
                                                                                    impFunc2: () => {
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __ifInstance31.exports;
                                                                            return __exports.data(m.layers[1].animations[0].animations[0].animations[s].property === lS(0, 58) ? 1 : 0);
                                                                        })();
                                                                    }
                                                                }
                                                            }
                                                        });
                                                        const __exports = __forInstance22.exports;
                                                        return __exports.data();
                                                    })();
                                                    e = {
                                                        animations: [],
                                                        beginTime: m.layers[1].animations[0].animations[0].animations[0].beginTime + 0.03,
                                                        duration: m.layers[1].animations[0].animations[0].animations[0].duration,
                                                        fillMode: 'forwards',
                                                        from: { scalar: false },
                                                        property: 'hidden',
                                                        timingFunction: 'linear',
                                                        to: { scalar: false }
                                                    };
                                                    (() => {
                                                        const __callInstance37 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    m.layers[1].animations[0].animations[0].animations.push(e);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance37.exports;
                                                        return __exports.data();
                                                    })();
                                                    (() => {
                                                        const __callInstance36 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    h.layers[1].animations[0].animations[0].animations.push(e);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance36.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance29.exports;
                                    return __exports.data(n == r ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance28.exports;
                return __exports.data(m.layers[0].animations.length > 0 ? 1 : 0);
            })();
            break;
        case lS(0, 59):
            var m = p.baseLayer.layers[0];
            var h = o.baseLayer.layers[0];
            var n = m.layers[0].animations[0].beginTime;
            var l = m.layers[0].animations[0].duration;
            var r = m.layers[0].animations[0].animations[0].beginTime;
            var a = m.layers[0].animations[0].animations[0].duration;
            m.layers[0].layers = [];
            m.layers[0].animations = [];
            h.layers[0].layers = [];
            h.layers[0].animations = [];
            (() => {
                const __ifInstance32 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                m.layers[1].animations[0].animations[0].beginTime = r;
                                m.layers[1].animations[0].animations[0].duration = a;
                                h.layers[1].animations[0].animations[0].beginTime = r;
                                h.layers[1].animations[0].animations[0].duration = a;
                            }
                        },
                        impFunc2: () => {
                            {
                                m.layers[1].animations[0].animations[0].animations[0].duration = a;
                                h.layers[1].animations[0].animations[0].animations[0].duration = a;
                            }
                        }
                    }
                });
                const __exports = __ifInstance32.exports;
                return __exports.data(n == r ? 1 : 0);
            })();
            (() => {
                const __callInstance35 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            m.layers.splice(2, 1);
                        }
                    }
                });
                const __exports = __callInstance35.exports;
                return __exports.data();
            })();
            (() => {
                const __callInstance34 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            h.layers.splice(2, 1);
                        }
                    }
                });
                const __exports = __callInstance34.exports;
                return __exports.data();
            })();
            break;
        case lS(0, 60):
        case lS(0, 61):
        case lS(0, 62):
        case lS(0, 63):
        case lS(0, 64):
            var m = p.baseLayer.layers[0];
            var h = o.baseLayer.layers[0];
            var f;
            f = {
                animations: [],
                beginTime: 0,
                duration: p.duration,
                fillMode: 'both',
                from: { scalar: 1 },
                property: 'opacity',
                timingFunction: 'easeInEaseOut',
                to: { scalar: 0 }
            };
            m.layers[0].layers = [];
            m.layers[0].animations = [];
            m.layers[1].layers = [];
            m.layers[1].animations = [];
            (() => {
                const __callInstance33 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            m.layers[1].animations.push(f);
                        }
                    }
                });
                const __exports = __callInstance33.exports;
                return __exports.data();
            })();
            h.layers[0].layers = [];
            h.layers[0].animations = [];
            h.layers[1].layers = [];
            h.layers[1].animations = [];
            (() => {
                const __callInstance32 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            h.layers[1].animations.push(f);
                        }
                    }
                });
                const __exports = __callInstance32.exports;
                return __exports.data();
            })();
            (() => {
                const __ifInstance33 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                m.layers[0].initialState.hidden = false;
                                m.layers[1].initialState.hidden = false;
                                h.layers[0].initialState.hidden = false;
                                h.layers[1].initialState.hidden = false;
                                (() => {
                                    const __callInstance31 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                m.layers.splice(2, m.layers.length - 2);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance31.exports;
                                    return __exports.data();
                                })();
                                (() => {
                                    const __callInstance30 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                h.layers.splice(2, h.layers.length - 2);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance30.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance33.exports;
                return __exports.data(o.name === lS(0, 65) ? 1 : 0);
            })();
            break;
        case lS(0, 66):
            var m = p.baseLayer.layers[0];
            var h = o.baseLayer.layers[0];
            var a, g, u, b, f;
            if (m.layers[1].animations[0].animations.length > 1) {
                for (var s = 0, k = m.layers[1].animations[0].animations.length; s < k; s++) {
                    b = m.layers[1].animations[0].animations[s];
                    f = h.layers[1].animations[0].animations[s];
                    if (b.property === lS(0, 67)) {
                        break;
                    }
                }
                a = m.layers[1].animations[0].duration;
            } else {
                for (var s = 0, k = m.layers[1].animations[0].animations[0].animations.length; s < k; s++) {
                    b = m.layers[1].animations[0].animations[0].animations[s];
                    f = h.layers[1].animations[0].animations[0].animations[s];
                    if (b.property === lS(0, 68)) {
                        break;
                    }
                }
                a = m.layers[1].animations[0].animations[0].duration;
            }
            g = a * 0.4;
            u = a * 0.4;
            b.to.scalar = 0;
            b.beginTime = g;
            b.duration = u;
            f.to.scalar = 0;
            f.beginTime = g;
            f.duration = u;
            break;
        case lS(0, 69):
            var m = p.baseLayer.layers[0];
            var h = o.baseLayer.layers[0];
            (() => {
                const __ifInstance34 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                var v = JSON.parse(JSON.stringify(m.layers[1]));
                                (() => {
                                    const __callInstance29 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                m.layers.splice(0, 0, v);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance29.exports;
                                    return __exports.data();
                                })();
                                var q = JSON.parse(JSON.stringify(h.layers[1]));
                                (() => {
                                    const __callInstance28 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                h.layers.splice(0, 0, q);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance28.exports;
                                    return __exports.data();
                                })();
                                var n = m.layers[1].animations[0].beginTime;
                                var l = m.layers[1].animations[0].duration;
                                var r = m.layers[1].animations[0].animations[0].beginTime;
                                var a = m.layers[1].animations[0].animations[0].duration;
                                var e;
                                (() => {
                                    const __ifInstance35 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    (() => {
                                                        var s = 0, k = m.layers[1].animations[0].animations.length;
                                                        const __forInstance23 = new WebAssembly.Instance(__forWasmModule, {
                                                            env: {
                                                                test: () => {
                                                                    return s < k ? 1 : 0;
                                                                },
                                                                update: () => {
                                                                    s++;
                                                                },
                                                                body: () => {
                                                                    {
                                                                        (() => {
                                                                            const __ifInstance36 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                env: {
                                                                                    impFunc1: () => {
                                                                                        {
                                                                                            (() => {
                                                                                                const __callInstance27 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            m.layers[1].animations[0].animations.splice(s, 1);
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __callInstance27.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                            (() => {
                                                                                                const __callInstance26 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            h.layers[1].animations[0].animations.splice(s, 1);
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __callInstance26.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                        }
                                                                                    },
                                                                                    impFunc2: () => {
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __ifInstance36.exports;
                                                                            return __exports.data(m.layers[1].animations[0].animations[s].property === lS(0, 70) ? 1 : 0);
                                                                        })();
                                                                    }
                                                                }
                                                            }
                                                        });
                                                        const __exports = __forInstance23.exports;
                                                        return __exports.data();
                                                    })();
                                                    e = {
                                                        animations: [],
                                                        beginTime: n + l / 2,
                                                        duration: l / 2,
                                                        fillMode: 'forwards',
                                                        from: { scalar: true },
                                                        property: 'hidden',
                                                        timingFunction: 'linear',
                                                        to: { scalar: true }
                                                    };
                                                    (() => {
                                                        const __callInstance25 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    m.layers[2].animations[0].animations.push(e);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance25.exports;
                                                        return __exports.data();
                                                    })();
                                                    (() => {
                                                        const __callInstance24 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    h.layers[2].animations[0].animations.push(e);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance24.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                                {
                                                    (() => {
                                                        var s = 0, k = m.layers[1].animations[0].animations[0].animations.length;
                                                        const __forInstance24 = new WebAssembly.Instance(__forWasmModule, {
                                                            env: {
                                                                test: () => {
                                                                    return s < k ? 1 : 0;
                                                                },
                                                                update: () => {
                                                                    s++;
                                                                },
                                                                body: () => {
                                                                    {
                                                                        (() => {
                                                                            const __ifInstance37 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                env: {
                                                                                    impFunc1: () => {
                                                                                        {
                                                                                            (() => {
                                                                                                const __callInstance23 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            m.layers[1].animations[0].animations[0].animations.splice(s, 1);
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __callInstance23.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                            (() => {
                                                                                                const __callInstance22 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                    env: {
                                                                                                        impFunc: () => {
                                                                                                            h.layers[1].animations[0].animations[0].animations.splice(s, 1);
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
                                                                            const __exports = __ifInstance37.exports;
                                                                            return __exports.data(m.layers[1].animations[0].animations[0].animations[s].property === lS(0, 71) ? 1 : 0);
                                                                        })();
                                                                    }
                                                                }
                                                            }
                                                        });
                                                        const __exports = __forInstance24.exports;
                                                        return __exports.data();
                                                    })();
                                                    e = {
                                                        animations: [],
                                                        beginTime: m.layers[2].animations[0].animations[0].animations[0].beginTime + m.layers[2].animations[0].animations[0].animations[0].duration / 2,
                                                        duration: m.layers[2].animations[0].animations[0].animations[0].duration / 2,
                                                        fillMode: 'forwards',
                                                        from: { scalar: true },
                                                        property: 'hidden',
                                                        timingFunction: 'linear',
                                                        to: { scalar: true }
                                                    };
                                                    (() => {
                                                        const __callInstance21 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    m.layers[2].animations[0].animations[0].animations.push(e);
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
                                                                    h.layers[2].animations[0].animations[0].animations.push(e);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance20.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance35.exports;
                                    return __exports.data(n == r ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance34.exports;
                return __exports.data(m.layers[0].animations.length > 0 ? 1 : 0);
            })();
            break;
        default:
            break;
        }
    },
    handleSlideDidNotDownloadEvent: function (a) {
        (() => {
            const __callInstance19 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.scriptDidNotDownload.bind(this);
                    }
                }
            });
            const __exports = __callInstance19.exports;
            return __exports.data();
        })();
    },
    reapplyScaleFactor: function () {
        (() => {
            const __ifInstance38 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance18 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.applyScaleFactor();
                                        }
                                    }
                                });
                                const __exports = __callInstance18.exports;
                                return __exports.data();
                            })();
                            (() => {
                                const __callInstance17 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.delegate.setViewScale(this.scaleFactor);
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
            const __exports = __ifInstance38.exports;
            return __exports.data(this.delegate.setViewScale ? 1 : 0);
        })();
    },
    applyScaleFactorForAnimation: function (c, b, g) {
        var h = c.property;
        (() => {
            const __ifInstance39 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                var e = 0, k = c.path.length;
                                const __forInstance25 = new WebAssembly.Instance(__forWasmModule, {
                                    env: {
                                        test: () => {
                                            return e < k ? 1 : 0;
                                        },
                                        update: () => {
                                            e++;
                                        },
                                        body: () => {
                                            {
                                                var j = c.path[e].points;
                                                var d = b.path[e].points;
                                                j[0][0] = d[0][0] * g;
                                                j[0][1] = d[0][1] * g;
                                            }
                                        }
                                    }
                                });
                                const __exports = __forInstance25.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance39.exports;
            return __exports.data(c.path ? 1 : 0);
        })();
        switch (h) {
        case lS(0, 72):
        case lS(0, 73):
        case lS(0, 74):
        case lS(0, 75):
            (() => {
                const __ifInstance40 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                c.from.scalar = b.from.scalar * g;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance40.exports;
                return __exports.data(c.from ? 1 : 0);
            })();
            (() => {
                const __ifInstance41 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                c.to.scalar = b.to.scalar * g;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance41.exports;
                return __exports.data(c.to ? 1 : 0);
            })();
            (() => {
                const __ifInstance42 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    var e = 0, f = c.values.length;
                                    const __forInstance26 = new WebAssembly.Instance(__forWasmModule, {
                                        env: {
                                            test: () => {
                                                return e < f ? 1 : 0;
                                            },
                                            update: () => {
                                                e++;
                                            },
                                            body: () => {
                                                {
                                                    c.values[e].scalar = b.values[e].scalar * g;
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __forInstance26.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance42.exports;
                return __exports.data(c.values ? 1 : 0);
            })();
            break;
        case lS(0, 76):
            (() => {
                const __ifInstance43 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                c.from.scalar = b.from.scalar * g;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance43.exports;
                return __exports.data(c.from && c.from.scalar != 1 && c.from.scalar != 0.01 ? 1 : 0);
            })();
            (() => {
                const __ifInstance44 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                c.to.scalar = b.to.scalar * g;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance44.exports;
                return __exports.data(c.to && c.to.scalar != 1 && c.to.scalar != 0.01 ? 1 : 0);
            })();
            (() => {
                const __ifInstance45 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    var e = 0, f = c.values.length;
                                    const __forInstance27 = new WebAssembly.Instance(__forWasmModule, {
                                        env: {
                                            test: () => {
                                                return e < f ? 1 : 0;
                                            },
                                            update: () => {
                                                e++;
                                            },
                                            body: () => {
                                                {
                                                    c.values[e].scalar = b.values[e].scalar * g;
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __forInstance27.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance45.exports;
                return __exports.data(c.values ? 1 : 0);
            })();
            break;
        case lS(0, 77):
        case lS(0, 78):
            (() => {
                const __ifInstance46 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                c.from.pointX = b.from.pointX * g;
                                c.from.pointY = b.from.pointY * g;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance46.exports;
                return __exports.data(c.from ? 1 : 0);
            })();
            (() => {
                const __ifInstance47 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                c.to.pointX = b.to.pointX * g;
                                c.to.pointY = b.to.pointY * g;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance47.exports;
                return __exports.data(c.to ? 1 : 0);
            })();
            (() => {
                const __ifInstance48 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    var e = 0, f = c.values.length;
                                    const __forInstance28 = new WebAssembly.Instance(__forWasmModule, {
                                        env: {
                                            test: () => {
                                                return e < f ? 1 : 0;
                                            },
                                            update: () => {
                                                e++;
                                            },
                                            body: () => {
                                                {
                                                    c.values[e].pointX = b.values[e].pointX * g;
                                                    c.values[e].pointY = b.values[e].pointY * g;
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __forInstance28.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance48.exports;
                return __exports.data(c.values ? 1 : 0);
            })();
            break;
        case lS(0, 79):
            (() => {
                const __ifInstance49 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                c.from.transform[12] = b.from.transform[12] * g;
                                c.from.transform[13] = b.from.transform[13] * g;
                                c.from.transform[14] = b.from.transform[14] * g;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance49.exports;
                return __exports.data(c.from ? 1 : 0);
            })();
            (() => {
                const __ifInstance50 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                c.to.transform[12] = b.to.transform[12] * g;
                                c.to.transform[13] = b.to.transform[13] * g;
                                c.to.transform[14] = b.to.transform[14] * g;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance50.exports;
                return __exports.data(c.to ? 1 : 0);
            })();
            (() => {
                const __ifInstance51 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    var e = 0, f = c.values.length;
                                    const __forInstance29 = new WebAssembly.Instance(__forWasmModule, {
                                        env: {
                                            test: () => {
                                                return e < f ? 1 : 0;
                                            },
                                            update: () => {
                                                e++;
                                            },
                                            body: () => {
                                                {
                                                    c.values[e].transform[12] = b.values[e].transform[12] * g;
                                                    c.values[e].transform[13] = b.values[e].transform[13] * g;
                                                    c.values[e].transform[14] = b.values[e].transform[14] * g;
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __forInstance29.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance51.exports;
                return __exports.data(c.values ? 1 : 0);
            })();
            break;
        case lS(0, 80):
            (() => {
                const __ifInstance52 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                c.from.width = b.from.width * g;
                                c.from.height = b.from.height * g;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance52.exports;
                return __exports.data(c.from ? 1 : 0);
            })();
            (() => {
                const __ifInstance53 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                c.to.width = b.to.width * g;
                                c.to.height = b.to.height * g;
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance53.exports;
                return __exports.data(c.to ? 1 : 0);
            })();
            break;
        case lS(0, 81):
        case lS(0, 82):
        case lS(0, 83):
            break;
        }
        (() => {
            const __ifInstance54 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                var e = 0, a = c.animations.length;
                                const __forInstance30 = new WebAssembly.Instance(__forWasmModule, {
                                    env: {
                                        test: () => {
                                            return e < a ? 1 : 0;
                                        },
                                        update: () => {
                                            e++;
                                        },
                                        body: () => {
                                            {
                                                (() => {
                                                    const __callInstance16 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.applyScaleFactorForAnimation(c.animations[e], b.animations[e], g);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance16.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __forInstance30.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance54.exports;
            return __exports.data(c.animations ? 1 : 0);
        })();
    },
    applyScaleFactorForLayer: function (h, g, n, m, l, j) {
        var c = h.initialState;
        var e = g.initialState;
        var d = e.contentsRect;
        c.affineTransform[4] = e.affineTransform[4] * n;
        c.affineTransform[5] = e.affineTransform[5] * n;
        c.width = e.width * n;
        c.height = e.height * n;
        c.position.pointX = e.position.pointX * n;
        c.position.pointY = e.position.pointY * n;
        switch (m) {
        case lS(0, 84):
        case lS(0, 85):
            (() => {
                const __callInstance15 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.adjustForCropAnimation(c, d, j.particleCount.x, j.particleCount.y);
                        }
                    }
                });
                const __exports = __callInstance15.exports;
                return __exports.data();
            })();
            break;
        case lS(0, 86):
            var a = h.texture;
            (() => {
                const __ifInstance55 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                var k = this.script.slides[l].assets[a];
                                (() => {
                                    const __ifInstance56 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    c.height = c.height / 2;
                                                    c.position.pointY = c.position.pointY - c.height / 2;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance56.exports;
                                    return __exports.data(k.assetRequest.state === lS(0, 87) || k.assetRequest.state === lS(0, 88) ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance55.exports;
                return __exports.data(a != null ? 1 : 0);
            })();
            break;
        default:
            break;
        }
        (() => {
            const __ifInstance57 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                var f = 0, b = h.animations.length;
                                const __forInstance31 = new WebAssembly.Instance(__forWasmModule, {
                                    env: {
                                        test: () => {
                                            return f < b ? 1 : 0;
                                        },
                                        update: () => {
                                            f++;
                                        },
                                        body: () => {
                                            {
                                                (() => {
                                                    const __callInstance14 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.applyScaleFactorForAnimation(h.animations[f], g.animations[f], n);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance14.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __forInstance31.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance57.exports;
            return __exports.data(h.animations ? 1 : 0);
        })();
        (() => {
            var f = 0, b = h.layers.length;
            const __forInstance32 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return f < b ? 1 : 0;
                    },
                    update: () => {
                        f++;
                    },
                    body: () => {
                        {
                            (() => {
                                const __callInstance13 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.applyScaleFactorForLayer(h.layers[f], g.layers[f], n, m, l, j);
                                        }
                                    }
                                });
                                const __exports = __callInstance13.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __forInstance32.exports;
            return __exports.data();
        })();
    },
    applyScaleFactorForBaseLayer: function (b, c, f) {
        var a = b.initialState;
        var g = c.initialState;
        a.affineTransform[4] = g.affineTransform[4] * f;
        a.affineTransform[5] = g.affineTransform[5] * f;
        a.width = g.width * f;
        a.height = g.height * f;
        a.position.pointX = g.position.pointX * f;
        a.position.pointY = g.position.pointY * f;
        (() => {
            var d = 0, e = b.layers.length;
            const __forInstance33 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return d < e ? 1 : 0;
                    },
                    update: () => {
                        d++;
                    },
                    body: () => {
                        {
                            (() => {
                                const __callInstance12 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.applyScaleFactorForBaseLayer(b.layers[d], c.layers[d], f);
                                        }
                                    }
                                });
                                const __exports = __callInstance12.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __forInstance33.exports;
            return __exports.data();
        })();
    },
    applyScaleFactor: function () {
        var y = this.script.originalSlideWidth;
        var F = this.script.originalSlideHeight;
        var s = window.innerWidth;
        var B = window.innerHeight;
        var L = scaleSizeWithinSize(y, F, s, B);
        var f = L.width;
        var o = L.height;
        var k = o / F;
        this.scaleFactor = k;
        this.script.slideWidth = this.script.originalSlideWidth * k;
        this.script.slideHeight = this.script.originalSlideHeight * k;
        (() => {
            var Q = 0, q = this.script.events.length;
            const __forInstance34 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return Q < q ? 1 : 0;
                    },
                    update: () => {
                        Q++;
                    },
                    body: () => {
                        {
                            var T = this.script.events[Q];
                            var u = this.script.originalEvents[Q];
                            var K = this.script.slideIndexFromSceneIndexLookup[Q];
                            var I = this.script.slideList[K];
                            (() => {
                                const __callInstance11 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.applyScaleFactorForBaseLayer(T.baseLayer, u.baseLayer, k);
                                        }
                                    }
                                });
                                const __exports = __callInstance11.exports;
                                return __exports.data();
                            })();
                            (() => {
                                var O = 0, c = T.effects.length;
                                const __forInstance35 = new WebAssembly.Instance(__forWasmModule, {
                                    env: {
                                        test: () => {
                                            return O < c ? 1 : 0;
                                        },
                                        update: () => {
                                            O++;
                                        },
                                        body: () => {
                                            {
                                                var M = T.effects[O];
                                                var n = u.effects[O];
                                                var C = {};
                                                (() => {
                                                    const __ifInstance58 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    var G = 0, g = 0;
                                                                    (() => {
                                                                        var b = 0, J = M.baseLayer.layers[0].layers.length;
                                                                        const __forInstance36 = new WebAssembly.Instance(__forWasmModule, {
                                                                            env: {
                                                                                test: () => {
                                                                                    return b < J ? 1 : 0;
                                                                                },
                                                                                update: () => {
                                                                                    b++;
                                                                                },
                                                                                body: () => {
                                                                                    {
                                                                                        var d = n.baseLayer.layers[0].layers[b];
                                                                                        var e = d.initialState.contentsRect;
                                                                                        var l = Math.round(e.x / e.width);
                                                                                        var z = Math.round(e.y / e.height);
                                                                                        (() => {
                                                                                            const __ifInstance59 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                env: {
                                                                                                    impFunc1: () => {
                                                                                                        {
                                                                                                            G = l;
                                                                                                        }
                                                                                                    },
                                                                                                    impFunc2: () => {
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __ifInstance59.exports;
                                                                                            return __exports.data(l > G ? 1 : 0);
                                                                                        })();
                                                                                        (() => {
                                                                                            const __ifInstance60 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                env: {
                                                                                                    impFunc1: () => {
                                                                                                        {
                                                                                                            g = z;
                                                                                                        }
                                                                                                    },
                                                                                                    impFunc2: () => {
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __ifInstance60.exports;
                                                                                            return __exports.data(z > g ? 1 : 0);
                                                                                        })();
                                                                                    }
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __forInstance36.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                    C.particleCount = {
                                                                        x: G + 1,
                                                                        y: g + 1
                                                                    };
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance58.exports;
                                                    return __exports.data(M.name === lS(0, 89) || M.name === lS(0, 90) ? 1 : 0);
                                                })();
                                                (() => {
                                                    const __callInstance10 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.applyScaleFactorForLayer(M.baseLayer, n.baseLayer, k, M.name, I, C);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance10.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __forInstance35.exports;
                                return __exports.data();
                            })();
                            (() => {
                                var O = 0, t = T.hyperlinks.length;
                                const __forInstance37 = new WebAssembly.Instance(__forWasmModule, {
                                    env: {
                                        test: () => {
                                            return O < t ? 1 : 0;
                                        },
                                        update: () => {
                                            O++;
                                        },
                                        body: () => {
                                            {
                                                var h = T.hyperlinks[O];
                                                var w = u.hyperlinks[O];
                                                var A = h.targetRectangle;
                                                var D = w.targetRectangle;
                                                A.y = D.y * k;
                                                A.x = D.x * k;
                                                A.width = D.width * k;
                                                A.height = D.height * k;
                                                for (var H in h.events) {
                                                    var m = h.events[H];
                                                    var x = w.events[H];
                                                    (() => {
                                                        var N = 0, c = m.effects.length;
                                                        const __forInstance38 = new WebAssembly.Instance(__forWasmModule, {
                                                            env: {
                                                                test: () => {
                                                                    return N < c ? 1 : 0;
                                                                },
                                                                update: () => {
                                                                    N++;
                                                                },
                                                                body: () => {
                                                                    {
                                                                        var R = m.effects[N];
                                                                        var S = x.effects[N];
                                                                        var C = {};
                                                                        (() => {
                                                                            const __ifInstance61 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                env: {
                                                                                    impFunc1: () => {
                                                                                        {
                                                                                            var G = 0, g = 0;
                                                                                            (() => {
                                                                                                var b = 0, J = R.baseLayer.layers[0].layers.length;
                                                                                                const __forInstance39 = new WebAssembly.Instance(__forWasmModule, {
                                                                                                    env: {
                                                                                                        test: () => {
                                                                                                            return b < J ? 1 : 0;
                                                                                                        },
                                                                                                        update: () => {
                                                                                                            b++;
                                                                                                        },
                                                                                                        body: () => {
                                                                                                            {
                                                                                                                var d = R.baseLayer.layers[0].layers[b];
                                                                                                                var e = d.initialState.contentsRect;
                                                                                                                var l = Math.round(e.x / e.width);
                                                                                                                var z = Math.round(e.y / e.height);
                                                                                                                (() => {
                                                                                                                    const __ifInstance62 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                                        env: {
                                                                                                                            impFunc1: () => {
                                                                                                                                {
                                                                                                                                    G = l;
                                                                                                                                }
                                                                                                                            },
                                                                                                                            impFunc2: () => {
                                                                                                                            }
                                                                                                                        }
                                                                                                                    });
                                                                                                                    const __exports = __ifInstance62.exports;
                                                                                                                    return __exports.data(l > G ? 1 : 0);
                                                                                                                })();
                                                                                                                (() => {
                                                                                                                    const __ifInstance63 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                                        env: {
                                                                                                                            impFunc1: () => {
                                                                                                                                {
                                                                                                                                    g = z;
                                                                                                                                }
                                                                                                                            },
                                                                                                                            impFunc2: () => {
                                                                                                                            }
                                                                                                                        }
                                                                                                                    });
                                                                                                                    const __exports = __ifInstance63.exports;
                                                                                                                    return __exports.data(z > g ? 1 : 0);
                                                                                                                })();
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                                const __exports = __forInstance39.exports;
                                                                                                return __exports.data();
                                                                                            })();
                                                                                            C.particleCount = {
                                                                                                x: G + 1,
                                                                                                y: g + 1
                                                                                            };
                                                                                        }
                                                                                    },
                                                                                    impFunc2: () => {
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __ifInstance61.exports;
                                                                            return __exports.data(R.name === lS(0, 91) || R.name === lS(0, 92) ? 1 : 0);
                                                                        })();
                                                                        (() => {
                                                                            const __callInstance9 = new WebAssembly.Instance(__callWasmModule, {
                                                                                env: {
                                                                                    impFunc: () => {
                                                                                        this.applyScaleFactorForLayer(R.baseLayer, S.baseLayer, k, R.name, I, C);
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __callInstance9.exports;
                                                                            return __exports.data();
                                                                        })();
                                                                    }
                                                                }
                                                            }
                                                        });
                                                        const __exports = __forInstance38.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                });
                                const __exports = __forInstance37.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __forInstance34.exports;
            return __exports.data();
        })();
        for (var p in this.script.slides) {
            (() => {
                const __ifInstance64 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                var a = this.script.slides[p];
                                var v = this.script.originalSlides[p];
                                for (var E in a.assets) {
                                    (() => {
                                        const __ifInstance65 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        var r = a.assets[E];
                                                        var P = v.assets[E];
                                                        r.width = P.width * k;
                                                        r.height = P.height * k;
                                                    }
                                                },
                                                impFunc2: () => {
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance65.exports;
                                        return __exports.data(a.assets.hasOwnProperty(E) ? 1 : 0);
                                    })();
                                }
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance64.exports;
                return __exports.data(this.script.slides.hasOwnProperty(p) ? 1 : 0);
            })();
        }
    },
    adjustForCropAnimation: function (a, b, j, h) {
        var d = this.script.slideWidth;
        var f = this.script.slideHeight;
        var k = Math.floor(d / j);
        var g = Math.floor(f / h);
        var e = Math.round(b.x / b.width);
        var c = Math.round(b.y / b.height);
        (() => {
            const __ifInstance66 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __ifInstance67 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                a.width = k;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                a.width = d - k * (j - 1);
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance67.exports;
                                return __exports.data(e != j - 1 ? 1 : 0);
                            })();
                            (() => {
                                const __ifInstance68 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                a.height = g;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                a.height = f - g * (h - 1);
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance68.exports;
                                return __exports.data(c != h - 1 ? 1 : 0);
                            })();
                            a.position.pointX = k * e + a.width / 2;
                            a.position.pointY = g * c + a.height / 2;
                            a.contentsRect.x = k * e / d;
                            a.contentsRect.y = g * c / f;
                            a.contentsRect.width = a.width / d;
                            a.contentsRect.height = a.height / f;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance66.exports;
            return __exports.data(b.width != 1 || b.height != 1 ? 1 : 0);
        })();
    },
    downloadScript: function (b) {
        this.delegate = b;
        if (this.delegate.getKPFJsonStringForShow) {
            this.script = JSON.parse(this.delegate.getKPFJsonStringForShow());
            if (this.script == null) {
                (() => {
                    const __callInstance8 = new WebAssembly.Instance(__callWasmModule, {
                        env: {
                            impFunc: () => {
                                debugMessageAlways(kDebugScriptMangaer_DownloadScript, lS(0, 93));
                            }
                        }
                    });
                    const __exports = __callInstance8.exports;
                    return __exports.data();
                })();
                return;
            }
            this.slideManager = new SlideManager({ header: this.script });
            (() => {
                const __callInstance7 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.slideManager.getSlides(this.script.slideList, this.delegate);
                        }
                    }
                });
                const __exports = __callInstance7.exports;
                return __exports.data();
            })();
            return;
        }
        this.downloadTimeout = setTimeout(this.scriptDidNotDownload.bind(this), kMaxScriptDownloadWaitTime);
        this.downloadAlreadyFailed = false;
        var c = this.showUrl + lS(0, 94);
        (() => {
            const __ifInstance69 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            c = c + lS(0, 96);
                            window.local_header = function (d) {
                                (() => {
                                    const __callInstance6 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.scriptDidDownload(d, true);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance6.exports;
                                    return __exports.data();
                                })();
                            }.bind(this);
                            var a = document.createElement(lS(0, 97));
                            (() => {
                                const __callInstance5 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            a.setAttribute(lS(0, 98), c);
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
                                            document.head.appendChild(a);
                                        }
                                    }
                                });
                                const __exports = __callInstance4.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            new Ajax.Request(c, {
                                method: 'get',
                                onSuccess: this.scriptDidDownload.bind(this),
                                onFailure: this.scriptDidNotDownload.bind(this)
                            });
                        }
                    }
                }
            });
            const __exports = __ifInstance69.exports;
            return __exports.data(window.location.protocol === lS(0, 95) ? 1 : 0);
        })();
    },
    scriptDidDownload: function (b, a) {
        (() => {
            const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        clearTimeout(this.downloadTimeout);
                    }
                }
            });
            const __exports = __callInstance3.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance70 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.script = b;
                        }
                    },
                    impFunc2: () => {
                        {
                            this.script = JSON.parse(b.responseText);
                        }
                    }
                }
            });
            const __exports = __ifInstance70.exports;
            return __exports.data(a ? 1 : 0);
        })();
        this.slideManager = new SlideManager({ header: this.script });
        (() => {
            const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.slideManager.downloadSlides(this.script.slideList);
                    }
                }
            });
            const __exports = __callInstance2.exports;
            return __exports.data();
        })();
    },
    scriptDidNotDownload: function (a) {
        this.downloadAlreadyFailed = true;
        (() => {
            const __ifInstance71 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            clearTimeout(this.downloadTimeout);
                                        }
                                    }
                                });
                                const __exports = __callInstance1.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance71.exports;
            return __exports.data(a ? 1 : 0);
        })();
        (() => {
            const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.fire(kScriptDidNotDownloadEvent, {});
                    }
                }
            });
            const __exports = __callInstance0.exports;
            return __exports.data();
        })();
    },
    sceneIndexFromSlideIndex: function (a) {
        if (this.script == null || a < 0 || a >= this.script.slideList.length) {
            return -1;
        }
        return this.script.sceneIndexFromSlideIndexLookup[a];
    },
    slideIndexFromSceneIndex: function (a) {
        if (this.script == null || a < 0 || a >= this.script.events.length) {
            return -1;
        }
        return this.script.slideIndexFromSceneIndexLookup[a];
    }
});