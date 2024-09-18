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
var NavigatorController = Class.create({
    initialize: function (a) {
        this.domNode = a;
        this.thumbnailSidebar = new NavigatorThumbnailSidebar();
        this.thumbnailScroller = new NavigatorThumbnailScroller();
        this.thumbnailSelection = new NavigatorThumbnailSelection();
        this.thumbnailContainer = new NavigatorThumbnailContainer();
        (() => {
            const __callInstance47 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.thumbnailSidebar.domNode.appendChild(this.thumbnailScroller.domNode);
                    }
                }
            });
            const __exports = __callInstance47.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance46 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.thumbnailScroller.domNode.appendChild(this.thumbnailSelection.domNode);
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
                        this.thumbnailScroller.domNode.appendChild(this.thumbnailContainer.domNode);
                    }
                }
            });
            const __exports = __callInstance45.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance44 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.appendChild(this.thumbnailSidebar.domNode);
                    }
                }
            });
            const __exports = __callInstance44.exports;
            return __exports.data();
        })();
        this.leftSidebar = new NavigatorLeftSidebar();
        (() => {
            const __callInstance43 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.appendChild(this.leftSidebar.domNode);
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
                        Event.observe(this.domNode, lS(0, 0), this.handleClickEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance42.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance41 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        Event.observe(this.leftSidebar.domNode, lS(0, 1), this.handleMouseOverEvent.bind(this));
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
                        Event.observe(this.domNode, lS(0, 2), this.handleMouseOutEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance40.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance39 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kSlideIndexDidChangeEvent, this.handleSlideIndexDidChangeEvent.bind(this));
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
                        document.observe(kScriptDidDownloadEvent, this.handleScriptDidDownloadEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance38.exports;
            return __exports.data();
        })();
        this.slideThumbnail = null;
    },
    initScrollbar: function () {
        (() => {
            const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.thumbnailScroller.domNode.style.width = lS(0, 3);
                        }
                    },
                    impFunc2: () => {
                        {
                            this.thumbnailScroller.domNode.style.width = lS(0, 4);
                        }
                    }
                }
            });
            const __exports = __ifInstance0.exports;
            return __exports.data(this.thumbnailScroller.domNode.scrollHeight > this.thumbnailScroller.domNode.offsetHeight ? 1 : 0);
        })();
        (() => {
            const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.domNode.style.width = lS(0, 6);
                            this.thumbnailSidebar.domNode.style.left = lS(0, 7);
                            this.thumbnailSidebar.domNode.style.width = lS(0, 8);
                            this.thumbnailScroller.domNode.style.width = lS(0, 9);
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance1.exports;
            return __exports.data(browserPrefix === lS(0, 5) ? 1 : 0);
        })();
    },
    handleClickEvent: function (b) {
        if (gShowController.isRecording) {
            return;
        }
        b = b || window.event;
        var c = b.target || b.srcElement;
        var a;
        (() => {
            const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            b.cancelBubble = true;
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __callInstance37 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            b.stopPropagation();
                                        }
                                    }
                                });
                                const __exports = __callInstance37.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance2.exports;
            return __exports.data(browserPrefix === lS(0, 10) ? 1 : 0);
        })();
        (() => {
            const __forInstance1 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return c.slideNumber == null && c.nodeName.toLowerCase() != lS(0, 11) ? 1 : 0;
                    },
                    update: () => {
                    },
                    body: () => {
                        {
                            c = c.parentNode;
                        }
                    }
                }
            });
            const __exports = __forInstance1.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.selectedSlideIndex = c.slideNumber;
                            (() => {
                                const __callInstance36 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.select(this.selectedSlideIndex);
                                        }
                                    }
                                });
                                const __exports = __callInstance36.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance3.exports;
            return __exports.data(c.slideNumber ? 1 : 0);
        })();
    },
    select: function (a) {
        (() => {
            const __callInstance35 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        gShowController.jumpToSlide(a);
                    }
                }
            });
            const __exports = __callInstance35.exports;
            return __exports.data();
        })();
    },
    handleMouseOverEvent: function (e) {
        e = e || window.event;
        var c = 0;
        var g = 0;
        (() => {
            const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            c = e.pageX;
                            g = e.pageY;
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                c = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
                                                g = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance5.exports;
                                return __exports.data(e.clientX || e.clientY ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance4.exports;
            return __exports.data(e.pageX || e.pageY ? 1 : 0);
        })();
        if (c === 0 && g === 0) {
            return;
        }
        var b = this.selectedSlideIndex * 76;
        var f = this.thumbnailScroller.domNode.scrollTop;
        var a = this.thumbnailScroller.domNode.clientHeight;
        (() => {
            const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.thumbnailScroller.domNode.scrollTop = b;
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var d = b - f - a + 76;
                                                this.thumbnailScroller.domNode.scrollTop = this.thumbnailScroller.domNode.scrollTop + d;
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance7.exports;
                                return __exports.data(f + a < b + 76 ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance6.exports;
            return __exports.data(f > b ? 1 : 0);
        })();
        (() => {
            const __callInstance34 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        clearTimeout(this.navigatorTimeout);
                    }
                }
            });
            const __exports = __callInstance34.exports;
            return __exports.data();
        })();
        this.navigatorTimeout = setTimeout(this.thumbnailSidebar.show.bind(this.thumbnailSidebar, this.leftSidebar), 400);
    },
    handleMouseOutEvent: function (a) {
        (() => {
            const __callInstance33 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        clearTimeout(this.navigatorTimeout);
                    }
                }
            });
            const __exports = __callInstance33.exports;
            return __exports.data();
        })();
        this.navigatorTimeout = setTimeout(this.thumbnailSidebar.hide.bind(this.thumbnailSidebar, this.leftSidebar), 400);
    },
    handleSlideIndexDidChangeEvent: function (a) {
        this.selectedSlideIndex = a.memo.slideIndex;
        (() => {
            const __callInstance32 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.thumbnailSelection.select(this.selectedSlideIndex);
                    }
                }
            });
            const __exports = __callInstance32.exports;
            return __exports.data();
        })();
    },
    handleScriptDidDownloadEvent: function (g) {
        var c = g.memo.script;
        (() => {
            var e = 0, f = c.slideList.length;
            const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return e < f ? 1 : 0;
                    },
                    update: () => {
                        e++;
                    },
                    body: () => {
                        {
                            var d = c.slideList[e];
                            var b = new NavigatorThumbnailItem();
                            b.domNode.slideNumber = e + 1;
                            b.numberNode.innerHTML = e + 1;
                            (() => {
                                const __callInstance31 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            setElementProperty(b.domNode, lS(0, 12), e * 76 + lS(0, 13));
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
                                            this.thumbnailContainer.addItem(b);
                                        }
                                    }
                                });
                                const __exports = __callInstance30.exports;
                                return __exports.data();
                            })();
                            (() => {
                                const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var h = lS(0, 14) + d + lS(0, 15);
                                                var a = document.createElement(lS(0, 16));
                                                (() => {
                                                    const __callInstance29 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                Event.observe(a, lS(0, 17), this.updateThumbnail.bind(this, e, a));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance29.exports;
                                                    return __exports.data();
                                                })();
                                                a.src = h;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __callInstance28 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                gShowController.delegate.loadTextureBySlideIndex(e, {
                                                                    type: 'slideThumbnail',
                                                                    state: 'outgoing'
                                                                }, function (j, i) {
                                                                    (() => {
                                                                        const __callInstance27 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    this.updateThumbnail(j, i);
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance27.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }.bind(this, e));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance28.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance8.exports;
                                return __exports.data(gShowController.delegate.getKPFJsonStringForShow == null ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __forInstance0.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance26 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.initScrollbar();
                    }
                }
            });
            const __exports = __callInstance26.exports;
            return __exports.data();
        })();
    },
    updateThumbnail: function (g, d) {
        var h = this.thumbnailContainer.thumbnailItems[g].canvasContainer;
        (() => {
            const __ifInstance9 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var b = gShowController.script.originalSlideWidth;
                            var f = gShowController.script.originalSlideHeight;
                            var e = b / f;
                            var c, a;
                            (() => {
                                const __ifInstance10 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                c = 88;
                                                a = Math.ceil(88 * (1 / e));
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                c = Math.ceil(66 * e);
                                                a = 66;
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance10.exports;
                                return __exports.data(e >= 4 / 3 ? 1 : 0);
                            })();
                            this.slideThumbnail = {
                                width: c,
                                height: a,
                                top: Math.ceil((66 - a) / 2),
                                left: Math.ceil((88 - c) / 2),
                                scaleX: c / b,
                                scaleY: a / f
                            };
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance9.exports;
            return __exports.data(this.slideThumbnail == null ? 1 : 0);
        })();
        (() => {
            const __ifInstance11 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance25 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            d.firstElementChild.setAttribute(lS(0, 19), lS(0, 20) + this.slideThumbnail.scaleX + lS(0, 21) + this.slideThumbnail.scaleY + lS(0, 22));
                                        }
                                    }
                                });
                                const __exports = __callInstance25.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance11.exports;
            return __exports.data(d.nodeName.toLowerCase() === lS(0, 18) ? 1 : 0);
        })();
        (() => {
            const __callInstance24 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        d.setAttribute(lS(0, 23), kTransitionPropertyName + lS(0, 24) + kTransitionDurationName + lS(0, 25) + this.slideThumbnail.width + lS(0, 26) + this.slideThumbnail.height + lS(0, 27) + this.slideThumbnail.left + lS(0, 28) + this.slideThumbnail.top + lS(0, 29));
                    }
                }
            });
            const __exports = __callInstance24.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance23 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        d.setAttribute(lS(0, 30), false);
                    }
                }
            });
            const __exports = __callInstance23.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance22 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            Event.observe(d, lS(0, 32), function (i) {
                                                (() => {
                                                    const __callInstance21 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                i.preventDefault();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance21.exports;
                                                    return __exports.data();
                                                })();
                                            });
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
            const __exports = __ifInstance12.exports;
            return __exports.data(browserPrefix === lS(0, 31) ? 1 : 0);
        })();
        (() => {
            const __callInstance20 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        h.appendChild(d);
                    }
                }
            });
            const __exports = __callInstance20.exports;
            return __exports.data();
        })();
        d.style.opacity = 1;
    }
});
var NavigatorLeftSidebar = Class.create({
    initialize: function () {
        this.domNode = document.createElement(lS(0, 33));
        (() => {
            const __callInstance19 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.setAttribute(lS(0, 34), lS(0, 35));
                    }
                }
            });
            const __exports = __callInstance19.exports;
            return __exports.data();
        })();
    }
});
var NavigatorThumbnailSidebar = Class.create({
    initialize: function () {
        this.domNode = document.createElement(lS(0, 36));
        (() => {
            const __callInstance18 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.setAttribute(lS(0, 37), lS(0, 38));
                    }
                }
            });
            const __exports = __callInstance18.exports;
            return __exports.data();
        })();
    },
    show: function (a) {
        a.domNode.style.visibility = lS(0, 39);
        this.domNode.style.left = lS(0, 40);
        gShowController.displayManager.navigatorIsShowing = true;
        (() => {
            const __callInstance17 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        gShowController.displayManager.clearTimeoutForCursor();
                    }
                }
            });
            const __exports = __callInstance17.exports;
            return __exports.data();
        })();
    },
    hide: function (a) {
        a.domNode.style.visibility = lS(0, 41);
        this.domNode.style.left = lS(0, 42);
        gShowController.displayManager.navigatorIsShowing = false;
        (() => {
            const __callInstance16 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        gShowController.displayManager.setTimeoutForCursor();
                    }
                }
            });
            const __exports = __callInstance16.exports;
            return __exports.data();
        })();
    }
});
var NavigatorThumbnailScroller = Class.create({
    initialize: function () {
        this.domNode = document.createElement(lS(0, 43));
        (() => {
            const __callInstance15 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.setAttribute(lS(0, 44), lS(0, 45));
                    }
                }
            });
            const __exports = __callInstance15.exports;
            return __exports.data();
        })();
    }
});
var NavigatorThumbnailSelection = Class.create({
    initialize: function (a) {
        this.domNode = document.createElement(lS(0, 46));
        (() => {
            const __callInstance14 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.setAttribute(lS(0, 47), lS(0, 48));
                    }
                }
            });
            const __exports = __callInstance14.exports;
            return __exports.data();
        })();
    },
    select: function (a) {
        this.domNode.style.top = 76 * a + lS(0, 49);
        this.domNode.style.display = lS(0, 50);
    }
});
var NavigatorThumbnailContainer = Class.create({
    initialize: function () {
        this.domNode = document.createElement(lS(0, 51));
        (() => {
            const __callInstance13 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.setAttribute(lS(0, 52), lS(0, 53));
                    }
                }
            });
            const __exports = __callInstance13.exports;
            return __exports.data();
        })();
        this.thumbnailItems = [];
    },
    addItem: function (a) {
        (() => {
            const __callInstance12 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.thumbnailItems.push(a);
                    }
                }
            });
            const __exports = __callInstance12.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance11 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.appendChild(a.domNode);
                    }
                }
            });
            const __exports = __callInstance11.exports;
            return __exports.data();
        })();
    }
});
var NavigatorThumbnailItem = Class.create({
    initialize: function () {
        this.domNode = document.createElement(lS(0, 54));
        (() => {
            const __callInstance10 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.setAttribute(lS(0, 55), lS(0, 56));
                    }
                }
            });
            const __exports = __callInstance10.exports;
            return __exports.data();
        })();
        this.thumbnailContentNode = document.createElement(lS(0, 57));
        (() => {
            const __callInstance9 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.thumbnailContentNode.setAttribute(lS(0, 58), lS(0, 59));
                    }
                }
            });
            const __exports = __callInstance9.exports;
            return __exports.data();
        })();
        this.numberNode = document.createElement(lS(0, 60));
        (() => {
            const __callInstance8 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.numberNode.setAttribute(lS(0, 61), lS(0, 62));
                    }
                }
            });
            const __exports = __callInstance8.exports;
            return __exports.data();
        })();
        this.imageNode = document.createElement(lS(0, 63));
        (() => {
            const __callInstance7 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.imageNode.setAttribute(lS(0, 64), lS(0, 65));
                    }
                }
            });
            const __exports = __callInstance7.exports;
            return __exports.data();
        })();
        this.thumb = document.createElement(lS(0, 66));
        (() => {
            const __callInstance6 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.thumb.setAttribute(lS(0, 67), lS(0, 68));
                    }
                }
            });
            const __exports = __callInstance6.exports;
            return __exports.data();
        })();
        this.canvasContainer = document.createElement(lS(0, 69));
        (() => {
            const __callInstance5 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.canvasContainer.setAttribute(lS(0, 70), lS(0, 71));
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
                        this.thumb.appendChild(this.canvasContainer);
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
                        this.imageNode.appendChild(this.thumb);
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
                        this.thumbnailContentNode.appendChild(this.numberNode);
                    }
                }
            });
            const __exports = __callInstance2.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.thumbnailContentNode.appendChild(this.imageNode);
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
                        this.domNode.appendChild(this.thumbnailContentNode);
                    }
                }
            });
            const __exports = __callInstance0.exports;
            return __exports.data();
        })();
    }
});