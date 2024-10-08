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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG3IGAgAAmfwBBAQt/AEEGC38AQQoLfwBBDgt/AEEWC38AQRwLfwBBKAt/AEE0C38AQT4LfwBBwgALfwBBxgALfwBB0gALfwBB3AALfwBB4gALfwBB6gALfwBBgAELfwBBhgELfwBBjgELfwBBpgELfwBBrAELfwBBtAELfwBBxgELfwBBzAELfwBB1AELfwBB7gELfwBB9AELfwBB/AELfwBBkAILfwBBlgILfwBBngILfwBBugILfwBBwgILfwBB1AILfwBB2gILfwBB4gILfwBB+AILfwBB/gILfwBBhgMLB9aCgIAAJwZtZW1vcnkCAAVkYXRhMAMABWRhdGExAwEFZGF0YTIDAgVkYXRhMwMDBWRhdGE0AwQFZGF0YTUDBQVkYXRhNgMGBWRhdGE3AwcFZGF0YTgDCAVkYXRhOQMJBmRhdGExMAMKBmRhdGExMQMLBmRhdGExMgMMBmRhdGExMwMNBmRhdGExNAMOBmRhdGExNQMPBmRhdGExNgMQBmRhdGExNwMRBmRhdGExOAMSBmRhdGExOQMTBmRhdGEyMAMUBmRhdGEyMQMVBmRhdGEyMgMWBmRhdGEyMwMXBmRhdGEyNAMYBmRhdGEyNQMZBmRhdGEyNgMaBmRhdGEyNwMbBmRhdGEyOAMcBmRhdGEyOQMdBmRhdGEzMAMeBmRhdGEzMQMfBmRhdGEzMgMgBmRhdGEzMwMhBmRhdGEzNAMiBmRhdGEzNQMjBmRhdGEzNgMkBmRhdGEzNwMlC7OEgIAAJgBBAQsDbXMAAEEGCwNweAAAQQoLA3B4AABBDgsGYmxvY2sAAEEWCwVub25lAABBHAsKbW91c2Vkb3duAABBKAsKbW91c2Vtb3ZlAABBNAsIbW91c2V1cAAAQT4LA3B4AABBwgALA3B4AABBxgALCm1vdXNlbW92ZQAAQdIACwhtb3VzZXVwAABB3AALBGRpdgAAQeIACwZjbGFzcwAAQeoACxRoZWxwUGxhY2FyZFRpdGxlQmFyAABBgAELBGRpdgAAQYYBCwZjbGFzcwAAQY4BCxdoZWxwUGxhY2FyZENsb3NlQnV0dG9uAABBpgELBGRpdgAAQawBCwZjbGFzcwAAQbQBCxFoZWxwUGxhY2FyZFRpdGxlAABBxgELBGRpdgAAQcwBCwZjbGFzcwAAQdQBCxhoZWxwUGxhY2FyZENvbnRlbnRQYW5lbAAAQe4BCwRkaXYAAEH0AQsGY2xhc3MAAEH8AQsSaGVscFBsYWNhcmRIZWFkZXIAAEGQAgsEZGl2AABBlgILBmNsYXNzAABBngILGmhlbHBQbGFjYXJkTGVmdEhlYWRlckl0ZW0AAEG6AgsGY2xhc3MAAEHCAgsQaGVscFBsYWNhcmRJdGVtAABB1AILBGRpdgAAQdoCCwZjbGFzcwAAQeICCxVoZWxwUGxhY2FyZFJpZ2h0SXRlbQAAQfgCCwRkaXYAAEH+AgsGY2xhc3MAAEGGAwsUaGVscFBsYWNhcmRMZWZ0SXRlbQA='].map(__bytes => {
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
var HelpPlacardController = Class.create({
    initialize: function (b) {
        this.domNode = b;
        this.width = 822;
        this.height = 603;
        var a = [
            {
                key: '&nbsp;',
                text: kHelpPlacardNavigationTitle,
                header: true
            },
            {
                key: 'return/enter &nbsp; space &nbsp; &#8594 &nbsp; &#8595 &nbsp; shift - &#8594 &nbsp; page down',
                text: kHelpPlacardAdvanceToNextBuild
            },
            {
                key: '[ &nbsp; shift - page up &nbsp; shift - &#8592',
                text: kHelpPlacardGoBackToPreviousBuild
            },
            {
                key: '] &nbsp; shift - page down &nbsp; shift - &#8595 &nbsp; + &nbsp; =',
                text: kHelpPlacardAdvanceToNextSlide
            },
            {
                key: '&#8592 &nbsp; &#8593 &nbsp; - &nbsp; shift - &#8593',
                text: kHelpPlacardGoBackToPreviousSlide
            },
            {
                key: 'home',
                text: kHelpPlacardGoToFirstSlide
            },
            {
                key: 'end',
                text: kHelpPlacardGoToLastSlide
            },
            {
                key: 'slide number + return/enter',
                text: kHelpPlacardGoToSpecificSlide
            },
            {
                key: '&nbsp;',
                text: kHelpPlacardOtherTitle,
                header: true
            },
            {
                key: '? &nbsp; /',
                text: kHelpPlacardShowOrHideKeyboardShortcuts
            },
            {
                key: 's',
                text: kHelpPlacardShowOrHideTheCurrentSlideNumber
            },
            {
                key: 'esc &nbsp; q',
                text: kHelpPlacardQuitPresentationMode
            }
        ];
        this.helpPlacardTitleBar = new HelpPlacardTitleBar();
        this.helpPlacardContentPanel = new HelpPlacardContentPanel(a);
        (() => {
            const __callInstance25 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.appendChild(this.helpPlacardTitleBar.domNode);
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
                        this.domNode.appendChild(this.helpPlacardContentPanel.domNode);
                    }
                }
            });
            const __exports = __callInstance24.exports;
            return __exports.data();
        })();
        this.isShowing = false;
    },
    handleClickEvent: function (a) {
        a = a || window.event;
        var b = a.target || a.srcElement;
        (() => {
            const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                a.cancelBubble = true;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __callInstance23 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                a.stopPropagation();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance23.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance1.exports;
                                return __exports.data(browserPrefix === lS(0, 0) ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance0.exports;
            return __exports.data(this.isShowing ? 1 : 0);
        })();
        (() => {
            const __callInstance22 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.hide();
                    }
                }
            });
            const __exports = __callInstance22.exports;
            return __exports.data();
        })();
    },
    setPosition: function (b, a) {
        this.domNode.style.left = b + lS(0, 1);
        this.domNode.style.top = a + lS(0, 2);
    },
    show: function () {
        this.isShowing = true;
        this.domNode.style.display = lS(0, 3);
        this.domNode.style.opacity = 1;
    },
    hide: function () {
        this.isShowing = false;
        this.domNode.style.display = lS(0, 4);
        this.domNode.style.opacity = 0;
    },
    registerDragEvents: function () {
        this.drag = this.dragging.bindAsEventListener(this);
        this.dragStop = this.stopDragging.bindAsEventListener(this);
        (() => {
            const __callInstance21 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        Event.observe(this.domNode, lS(0, 5), this.startDragging.bindAsEventListener(this));
                    }
                }
            });
            const __exports = __callInstance21.exports;
            return __exports.data();
        })();
    },
    startDragging: function (a) {
        this.startX = Event.pointerX(a);
        this.startY = Event.pointerY(a);
        this.left = parseInt(this.domNode.style.left);
        this.top = parseInt(this.domNode.style.top);
        (() => {
            const __callInstance20 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        Event.observe(document, lS(0, 6), this.drag);
                    }
                }
            });
            const __exports = __callInstance20.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance19 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        Event.observe(this.domNode, lS(0, 7), this.dragStop);
                    }
                }
            });
            const __exports = __callInstance19.exports;
            return __exports.data();
        })();
    },
    dragging: function (b) {
        var a = Event.pointerX(b);
        var c = Event.pointerY(b);
        this.domNode.style.left = a - this.startX + this.left + lS(0, 8);
        this.domNode.style.top = c - this.startY + this.top + lS(0, 9);
        (() => {
            const __callInstance18 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        Event.stop(b);
                    }
                }
            });
            const __exports = __callInstance18.exports;
            return __exports.data();
        })();
    },
    stopDragging: function (a) {
        (() => {
            const __callInstance17 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        Event.stopObserving(document, lS(0, 10), this.drag);
                    }
                }
            });
            const __exports = __callInstance17.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance16 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        Event.stopObserving(this.domNode, lS(0, 11), this.dragStop);
                    }
                }
            });
            const __exports = __callInstance16.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance15 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        Event.stop(a);
                    }
                }
            });
            const __exports = __callInstance15.exports;
            return __exports.data();
        })();
    }
});
var HelpPlacardTitleBar = Class.create({
    initialize: function () {
        this.domNode = document.createElement(lS(0, 12));
        (() => {
            const __callInstance14 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.setAttribute(lS(0, 13), lS(0, 14));
                    }
                }
            });
            const __exports = __callInstance14.exports;
            return __exports.data();
        })();
        this.closeButton = document.createElement(lS(0, 15));
        (() => {
            const __callInstance13 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.closeButton.setAttribute(lS(0, 16), lS(0, 17));
                    }
                }
            });
            const __exports = __callInstance13.exports;
            return __exports.data();
        })();
        this.title = document.createElement(lS(0, 18));
        (() => {
            const __callInstance12 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.title.setAttribute(lS(0, 19), lS(0, 20));
                    }
                }
            });
            const __exports = __callInstance12.exports;
            return __exports.data();
        })();
        this.title.innerHTML = kHelpPlacardMainTitle;
        (() => {
            const __callInstance11 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.appendChild(this.closeButton);
                    }
                }
            });
            const __exports = __callInstance11.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance10 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.appendChild(this.title);
                    }
                }
            });
            const __exports = __callInstance10.exports;
            return __exports.data();
        })();
    }
});
var HelpPlacardContentPanel = Class.create({
    initialize: function (a) {
        this.domNode = document.createElement(lS(0, 21));
        (() => {
            const __callInstance9 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.domNode.setAttribute(lS(0, 22), lS(0, 23));
                    }
                }
            });
            const __exports = __callInstance9.exports;
            return __exports.data();
        })();
        (() => {
            var c = 0, f = a.length;
            const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return c < f ? 1 : 0;
                    },
                    update: () => {
                        c++;
                    },
                    body: () => {
                        {
                            var e = a[c];
                            var g = document.createElement(lS(0, 24));
                            var b, d;
                            (() => {
                                const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance8 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                g.setAttribute(lS(0, 25), lS(0, 26));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance8.exports;
                                                    return __exports.data();
                                                })();
                                                b = document.createElement(lS(0, 27));
                                                (() => {
                                                    const __callInstance7 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                b.setAttribute(lS(0, 28), lS(0, 29));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance7.exports;
                                                    return __exports.data();
                                                })();
                                                b.innerHTML = e.text;
                                                (() => {
                                                    const __callInstance6 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                g.appendChild(b);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance6.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __callInstance5 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                g.setAttribute(lS(0, 30), lS(0, 31));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance5.exports;
                                                    return __exports.data();
                                                })();
                                                b = document.createElement(lS(0, 32));
                                                (() => {
                                                    const __callInstance4 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                b.setAttribute(lS(0, 33), lS(0, 34));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance4.exports;
                                                    return __exports.data();
                                                })();
                                                b.innerHTML = e.key;
                                                d = document.createElement(lS(0, 35));
                                                (() => {
                                                    const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                d.setAttribute(lS(0, 36), lS(0, 37));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance3.exports;
                                                    return __exports.data();
                                                })();
                                                d.innerHTML = e.text;
                                                (() => {
                                                    const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                g.appendChild(b);
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
                                                                g.appendChild(d);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance1.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance2.exports;
                                return __exports.data(e.header ? 1 : 0);
                            })();
                            (() => {
                                const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.domNode.appendChild(g);
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
            const __exports = __forInstance0.exports;
            return __exports.data();
        })();
    }
});