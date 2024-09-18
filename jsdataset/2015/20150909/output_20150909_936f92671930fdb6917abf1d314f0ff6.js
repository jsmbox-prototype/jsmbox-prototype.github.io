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
var kTouchStartEventName = lS(0, 0);
var kTouchMoveEventName = lS(0, 1);
var kTouchEndEventName = lS(0, 2);
var kTouchCancelEventName = lS(0, 3);
var kGestureStartEventName = lS(0, 4);
var kGestureEndEventName = lS(0, 5);
var kSwipeEvent = lS(0, 6);
var kTapEvent = lS(0, 7);
var TouchController = Class.create({
    initialize: function () {
        (() => {
            const __callInstance46 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kTouchStartEventName, this.handleTouchStartEvent.bind(this));
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
                        document.observe(kTouchMoveEventName, this.handleTouchMoveEvent.bind(this));
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
                        document.observe(kTouchEndEventName, this.handleTouchEndEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance44.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance43 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kTouchCancelEventName, this.handleTouchCancelEvent.bind(this));
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
                        document.observe(kGestureStartEventName, this.handleGestureStartEvent.bind(this));
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
                        document.observe(kGestureEndEventName, this.handleGestureEndEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance41.exports;
            return __exports.data();
        })();
        this.swipeInProgress = false;
        this.swipeFingerCount = 0;
        this.swipeStartTime = 0;
        this.swipeStartX = 0;
        this.swipeStartY = 0;
        this.preventDefault = true;
        this.tapEventCallback = null;
        (() => {
            const __callInstance40 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.setTrackArea(0, 0, 0, 0);
                    }
                }
            });
            const __exports = __callInstance40.exports;
            return __exports.data();
        })();
        this.enableTouchTracking = true;
    },
    setTouchTrackingEnabled: function (a) {
        this.enableTouchTracking = a;
    },
    setTrackArea: function (d, c, b, a) {
        (() => {
            const __callInstance39 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        debugMessage(kDebugTouchController_SetTrackArea, lS(0, 8) + d + lS(0, 9) + c + lS(0, 10) + b + lS(0, 11) + a);
                    }
                }
            });
            const __exports = __callInstance39.exports;
            return __exports.data();
        })();
        this.trackAreaLeft = d;
        this.trackAreaTop = c;
        this.trackAreaRight = d + b;
        this.trackAreaBottom = c + a;
    },
    registerTapEventCallback: function (a) {
        this.tapEventCallback = a;
    },
    isTouchWithinTrackArea: function (a) {
        (() => {
            const __callInstance38 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        debugMessage(kDebugTouchController_IsTouchWithinTrackArea, lS(0, 12));
                    }
                }
            });
            const __exports = __callInstance38.exports;
            return __exports.data();
        })();
        if (this.enableTouchTracking === false) {
            (() => {
                const __callInstance37 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            debugMessage(kDebugTouchController_IsTouchWithinTrackArea, lS(0, 13));
                        }
                    }
                });
                const __exports = __callInstance37.exports;
                return __exports.data();
            })();
            return false;
        }
        if (a.clientX < this.trackAreaLeft) {
            (() => {
                const __callInstance36 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            debugMessage(kDebugTouchController_IsTouchWithinTrackArea, lS(0, 14));
                        }
                    }
                });
                const __exports = __callInstance36.exports;
                return __exports.data();
            })();
            return false;
        }
        if (a.clientX > this.trackAreaRight) {
            (() => {
                const __callInstance35 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            debugMessage(kDebugTouchController_IsTouchWithinTrackArea, lS(0, 15));
                        }
                    }
                });
                const __exports = __callInstance35.exports;
                return __exports.data();
            })();
            return false;
        }
        if (a.clientY < this.trackAreaTop) {
            (() => {
                const __callInstance34 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            debugMessage(kDebugTouchController_IsTouchWithinTrackArea, lS(0, 16));
                        }
                    }
                });
                const __exports = __callInstance34.exports;
                return __exports.data();
            })();
            return false;
        }
        if (a.clientY > this.trackAreaBottom) {
            (() => {
                const __callInstance33 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            debugMessage(kDebugTouchController_IsTouchWithinTrackArea, lS(0, 17));
                        }
                    }
                });
                const __exports = __callInstance33.exports;
                return __exports.data();
            })();
            return false;
        }
        (() => {
            const __callInstance32 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        debugMessage(kDebugTouchController_IsTouchWithinTrackArea, lS(0, 18));
                    }
                }
            });
            const __exports = __callInstance32.exports;
            return __exports.data();
        })();
        return true;
    },
    handleTouchStartEvent: function (b) {
        (() => {
            const __callInstance31 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        debugMessage(kDebugTouchController_HandleTouchStartEvent, lS(0, 19) + b.touches.length + lS(0, 20));
                    }
                }
            });
            const __exports = __callInstance31.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance30 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            debugMessage(kDebugTouchController_HandleTouchStartEvent, lS(0, 21));
                                        }
                                    }
                                });
                                const __exports = __callInstance30.exports;
                                return __exports.data();
                            })();
                            var a = b.touches[0];
                            (() => {
                                const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance29 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                debugMessage(kDebugTouchController_HandleTouchStartEvent, lS(0, 22));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance29.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance28 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    b.preventDefault();
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance28.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance2.exports;
                                                    return __exports.data(this.preventDefault ? 1 : 0);
                                                })();
                                                this.swipeInProgress = true;
                                                this.swipeFingerCount = b.touches.length;
                                                this.swipeStartTime = new Date();
                                                this.swipeStartX = a.clientX;
                                                this.swipeStartY = a.clientY;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __callInstance27 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                debugMessage(kDebugTouchController_HandleTouchStartEvent, lS(0, 23));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance27.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance1.exports;
                                return __exports.data(this.isTouchWithinTrackArea(a) ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __callInstance26 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            debugMessage(kDebugTouchController_HandleTouchStartEvent, lS(0, 24));
                                        }
                                    }
                                });
                                const __exports = __callInstance26.exports;
                                return __exports.data();
                            })();
                            (() => {
                                const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                this.swipeFingerCount = b.touches.length;
                                                (() => {
                                                    const __callInstance25 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                debugMessage(kDebugTouchController_HandleTouchStartEvent, lS(0, 25) + this.swipeFingerCount);
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
                                const __exports = __ifInstance3.exports;
                                return __exports.data(b.touches.length > this.swipeFingerCount ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance0.exports;
            return __exports.data(this.swipeInProgress === false ? 1 : 0);
        })();
    },
    handleTouchMoveEvent: function (a) {
        (() => {
            const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance24 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            a.preventDefault();
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
            const __exports = __ifInstance4.exports;
            return __exports.data(this.preventDefault ? 1 : 0);
        })();
        (() => {
            const __callInstance23 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        debugMessage(kDebugTouchController_HandleTouchCancelEvent, lS(0, 26));
                    }
                }
            });
            const __exports = __callInstance23.exports;
            return __exports.data();
        })();
    },
    handleTouchEndEvent: function (a) {
        (() => {
            const __callInstance22 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 27) + a.touches.length + lS(0, 28));
                    }
                }
            });
            const __exports = __callInstance22.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance21 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                a.preventDefault();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance21.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance6.exports;
                                return __exports.data(this.preventDefault ? 1 : 0);
                            })();
                            (() => {
                                const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance20 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 29) + this.swipeFingerCount + lS(0, 30));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance20.exports;
                                                    return __exports.data();
                                                })();
                                                var h = a.changedTouches[0];
                                                var m = document.viewport.getDimensions();
                                                var e = m.width / 3;
                                                var d = m.height / 3;
                                                var g = m.width / 3;
                                                var k = h.clientX - this.swipeStartX;
                                                var i = h.clientY - this.swipeStartY;
                                                var c = Math.abs(k);
                                                var b = Math.abs(i);
                                                var o = new Date();
                                                var q = o - this.swipeStartTime;
                                                var l = false;
                                                var p = false;
                                                var f = 400;
                                                var j = 20;
                                                (() => {
                                                    const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance19 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 31));
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance19.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                    (() => {
                                                                        const __ifInstance9 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        l = true;
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                    {
                                                                                        (() => {
                                                                                            const __callInstance18 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                env: {
                                                                                                    impFunc: () => {
                                                                                                        debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 32));
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
                                                                        const __exports = __ifInstance9.exports;
                                                                        return __exports.data(c < j && b < j ? 1 : 0);
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance17 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 33));
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance17.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance8.exports;
                                                    return __exports.data(q < f ? 1 : 0);
                                                })();
                                                (() => {
                                                    const __ifInstance10 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance16 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 34));
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance16.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
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
                                                                                                            (() => {
                                                                                                                const __callInstance15 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                                    env: {
                                                                                                                        impFunc: () => {
                                                                                                                            debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 35));
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
                                                                                                            p = true;
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __ifInstance12.exports;
                                                                                            return __exports.data(b > d ? 1 : 0);
                                                                                        })();
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                    {
                                                                                        (() => {
                                                                                            const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                env: {
                                                                                                    impFunc1: () => {
                                                                                                        {
                                                                                                            (() => {
                                                                                                                const __callInstance14 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                                    env: {
                                                                                                                        impFunc: () => {
                                                                                                                            debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 36));
                                                                                                                        }
                                                                                                                    }
                                                                                                                });
                                                                                                                const __exports = __callInstance14.exports;
                                                                                                                return __exports.data();
                                                                                                            })();
                                                                                                        }
                                                                                                    },
                                                                                                    impFunc2: () => {
                                                                                                        {
                                                                                                            p = true;
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __ifInstance13.exports;
                                                                                            return __exports.data(c > g ? 1 : 0);
                                                                                        })();
                                                                                    }
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance11.exports;
                                                                        return __exports.data(c > b ? 1 : 0);
                                                                    })();
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance10.exports;
                                                    return __exports.data(q > 800 ? 1 : 0);
                                                })();
                                                (() => {
                                                    const __ifInstance14 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance13 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 37) + this.swipeFingerCount + lS(0, 38));
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance13.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                    (() => {
                                                                        const __ifInstance15 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        var a = {};
                                                                                        a.memo = {};
                                                                                        a.memo.fingers = this.swipeFingerCount;
                                                                                        a.memo.pointX = h.clientX;
                                                                                        a.memo.pointY = h.clientY;
                                                                                        (() => {
                                                                                            const __callInstance12 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                env: {
                                                                                                    impFunc: () => {
                                                                                                        debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 39) + h.clientX + lS(0, 40) + h.clientY + lS(0, 41));
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
                                                                                                        this.tapEventCallback(a);
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
                                                                                                        debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 42));
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
                                                                                        (() => {
                                                                                            const __callInstance9 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                env: {
                                                                                                    impFunc: () => {
                                                                                                        debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 43));
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __callInstance9.exports;
                                                                                            return __exports.data();
                                                                                        })();
                                                                                        (() => {
                                                                                            const __callInstance8 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                env: {
                                                                                                    impFunc: () => {
                                                                                                        document.fire(kTapEvent, {
                                                                                                            fingers: this.swipeFingerCount,
                                                                                                            pointX: h.clientX,
                                                                                                            pointY: h.clientY
                                                                                                        });
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __callInstance8.exports;
                                                                                            return __exports.data();
                                                                                        })();
                                                                                    }
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance15.exports;
                                                                        return __exports.data(this.tapEventCallback ? 1 : 0);
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    (() => {
                                                                        const __ifInstance16 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        var n;
                                                                                        (() => {
                                                                                            const __ifInstance17 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                env: {
                                                                                                    impFunc1: () => {
                                                                                                        {
                                                                                                            n = k < 0 ? lS(0, 44) : lS(0, 45);
                                                                                                        }
                                                                                                    },
                                                                                                    impFunc2: () => {
                                                                                                        {
                                                                                                            n = i < 0 ? lS(0, 46) : lS(0, 47);
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __ifInstance17.exports;
                                                                                            return __exports.data(c > b ? 1 : 0);
                                                                                        })();
                                                                                        (() => {
                                                                                            const __callInstance7 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                env: {
                                                                                                    impFunc: () => {
                                                                                                        debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 48) + this.swipeFingerCount + lS(0, 49) + n + lS(0, 50));
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __callInstance7.exports;
                                                                                            return __exports.data();
                                                                                        })();
                                                                                        (() => {
                                                                                            const __callInstance6 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                env: {
                                                                                                    impFunc: () => {
                                                                                                        document.fire(kSwipeEvent, {
                                                                                                            direction: n,
                                                                                                            fingers: this.swipeFingerCount
                                                                                                        });
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __callInstance6.exports;
                                                                                            return __exports.data();
                                                                                        })();
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance16.exports;
                                                                        return __exports.data(p ? 1 : 0);
                                                                    })();
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance14.exports;
                                                    return __exports.data(l ? 1 : 0);
                                                })();
                                                this.swipeInProgress = false;
                                                this.swipeFingerCount = 0;
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance7.exports;
                                return __exports.data(a.touches.length === 0 ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __callInstance5 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            debugMessage(kDebugTouchController_HandleTouchEndEvent, lS(0, 51));
                                        }
                                    }
                                });
                                const __exports = __callInstance5.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance5.exports;
            return __exports.data(this.swipeInProgress ? 1 : 0);
        })();
    },
    handleTouchCancelEvent: function (a) {
        (() => {
            const __callInstance4 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        debugMessage(kDebugTouchController_HandleTouchCancelEvent, lS(0, 52));
                    }
                }
            });
            const __exports = __callInstance4.exports;
            return __exports.data();
        })();
        this.swipeInProgress = false;
    },
    handleGestureStartEvent: function (a) {
        (() => {
            const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        debugMessage(kDebugTouchController_HandleGestureStartEvent, lS(0, 53));
                    }
                }
            });
            const __exports = __callInstance3.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance18 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            a.preventDefault();
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
            const __exports = __ifInstance18.exports;
            return __exports.data(this.preventDefault ? 1 : 0);
        })();
    },
    handleGestureEndEvent: function (a) {
        (() => {
            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        debugMessage(kDebugTouchController_HandleGestureEndEvent, lS(0, 54));
                    }
                }
            });
            const __exports = __callInstance1.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance19 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            a.preventDefault();
                                        }
                                    }
                                });
                                const __exports = __callInstance0.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance19.exports;
            return __exports.data(this.preventDefault ? 1 : 0);
        })();
    }
});