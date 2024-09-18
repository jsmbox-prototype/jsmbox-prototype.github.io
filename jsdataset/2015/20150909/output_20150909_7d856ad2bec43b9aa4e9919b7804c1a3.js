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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGpICAgAAHfwBBAQt/AEEIC38AQQ4LfwBBFgt/AEEgC38AQSQLfwBBLAsHwoCAgAAIBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYLyYCAgAAHAEEBCwYuLiUyRgAAQQgLBCUyRgAAQQ4LBi5qc29uAABBFgsIZmlsZSUzQQAAQSALAnAAAEEkCwdzY3JpcHQAAEEsCwRzcmMA'].map(__bytes => {
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
var SlideManager = Class.create({
    initialize: function (c) {
        this.header = c.header;
        this.slides = {};
        (() => {
            var a = 0, b = this.header.slideList.length;
            const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return a < b ? 1 : 0;
                    },
                    update: () => {
                        a++;
                    },
                    body: () => {
                        {
                            this.slides[this.header.slideList[a]] = {
                                downloaded: false,
                                script: {},
                                retry: 0
                            };
                        }
                    }
                }
            });
            const __exports = __forInstance0.exports;
            return __exports.data();
        })();
    },
    getSlides: function (d, b) {
        (() => {
            var a = 0, c = d.length;
            const __forInstance1 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return a < c ? 1 : 0;
                    },
                    update: () => {
                        a++;
                    },
                    body: () => {
                        {
                            var e = d[a];
                            this.slides[e].downloaded = true;
                            this.slides[e].script = JSON.parse(b.getKPFJsonStringForSlideIndex(a));
                            this.slides[e].originalScript = JSON.parse(b.getKPFJsonStringForSlideIndex(a));
                            (() => {
                                const __callInstance7 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            document.fire(kSlideDidDownloadEvent, { id: e });
                                        }
                                    }
                                });
                                const __exports = __callInstance7.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __forInstance1.exports;
            return __exports.data();
        })();
    },
    downloadSlides: function (c) {
        (() => {
            var a = 0, b = c.length;
            const __forInstance2 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return a < b ? 1 : 0;
                    },
                    update: () => {
                        a++;
                    },
                    body: () => {
                        {
                            (() => {
                                const __callInstance6 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.downloadSlide(c[a]);
                                        }
                                    }
                                });
                                const __exports = __callInstance6.exports;
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
    downloadSlide: function (b) {
        var c = lS(0, 0) + b + lS(0, 1) + b + lS(0, 2);
        (() => {
            const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            c = c + lS(0, 4);
                            (() => {
                                const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                window.local_slide = function (d) {
                                                    (() => {
                                                        const __callInstance5 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    this.slideDidDownload(null, d, true);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance5.exports;
                                                        return __exports.data();
                                                    })();
                                                }.bind(this);
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance1.exports;
                                return __exports.data(window.local_slide == null || window.local_slide == undefined ? 1 : 0);
                            })();
                            var a = document.createElement(lS(0, 5));
                            (() => {
                                const __callInstance4 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            a.setAttribute(lS(0, 6), c);
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
                                            document.head.appendChild(a);
                                        }
                                    }
                                });
                                const __exports = __callInstance3.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            new Ajax.Request(c, {
                                method: 'get',
                                onSuccess: this.slideDidDownload.bind(this, b),
                                onFailure: this.slideDidNotDownload.bind(this, b)
                            });
                        }
                    }
                }
            });
            const __exports = __ifInstance0.exports;
            return __exports.data(window.location.protocol === lS(0, 3) ? 1 : 0);
        })();
    },
    slideDidDownload: function (c, b, a) {
        (() => {
            const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            c = b.name;
                            this.slides[c].script = b.json;
                            this.slides[c].originalScript = JSON.parse(JSON.stringify(b.json));
                        }
                    },
                    impFunc2: () => {
                        {
                            this.slides[c].script = JSON.parse(b.responseText);
                            this.slides[c].originalScript = JSON.parse(b.responseText);
                        }
                    }
                }
            });
            const __exports = __ifInstance2.exports;
            return __exports.data(a ? 1 : 0);
        })();
        this.slides[c].downloaded = true;
        (() => {
            const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.fire(kSlideDidDownloadEvent, { id: c });
                    }
                }
            });
            const __exports = __callInstance2.exports;
            return __exports.data();
        })();
    },
    slideDidNotDownload: function () {
        var a = arguments[0];
        (() => {
            const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.downloadSlide(a);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance1.exports;
                                                    return __exports.data();
                                                })();
                                                this.slides[a].retry++;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                document.fire(kSlideDidNotDownloadEvent, { id: a });
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance0.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance4.exports;
                                return __exports.data(this.slides[a].retry < 1 ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance3.exports;
            return __exports.data(arguments[1].status != 200 ? 1 : 0);
        })();
    }
});