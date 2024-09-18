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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGuYOAgABKfwBBAQt/AEEsC38AQTILfwBBPgt/AEHGAAt/AEHWAAt/AEHoAAt/AEHyAAt/AEGCAQt/AEGOAQt/AEGcAQt/AEGoAQt/AEGsAQt/AEG0AQt/AEG8AQt/AEHIAQt/AEHOAQt/AEHQAQt/AEHWAQt/AEHcAQt/AEHmAQt/AEHsAQt/AEHyAQt/AEH6AQt/AEGGAgt/AEGQAgt/AEGkAgt/AEGuAgt/AEG2Agt/AEHOAgt/AEHWAgt/AEHuAgt/AEH2Agt/AEGKAwt/AEGSAwt/AEGmAwt/AEHEAwt/AEHYAwt/AEHiBAt/AEGQBQt/AEG8BQt/AEH0BQt/AEHcBgt/AEGSCAt/AEHACAt/AEH0CAt/AEGsCQt/AEGYCgt/AEHCCgt/AEHSCgt/AEHWCgt/AEGQCwt/AEG4Cwt/AEHICwt/AEHMCwt/AEGGDQt/AEHGDQt/AEGCDgt/AEG+Dgt/AEHoDgt/AEH4Dgt/AEH8Dgt/AEHGEAt/AEH+EAt/AEGCEQt/AEHCEQt/AEH6EQt/AEH+EQt/AEHUEgt/AEGMEwt/AEGQEwt/AEHQEwt/AEGIFAt/AEGMFAsHmoWAgABLBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0GZGF0YTE0Aw4GZGF0YTE1Aw8GZGF0YTE2AxAGZGF0YTE3AxEGZGF0YTE4AxIGZGF0YTE5AxMGZGF0YTIwAxQGZGF0YTIxAxUGZGF0YTIyAxYGZGF0YTIzAxcGZGF0YTI0AxgGZGF0YTI1AxkGZGF0YTI2AxoGZGF0YTI3AxsGZGF0YTI4AxwGZGF0YTI5Ax0GZGF0YTMwAx4GZGF0YTMxAx8GZGF0YTMyAyAGZGF0YTMzAyEGZGF0YTM0AyIGZGF0YTM1AyMGZGF0YTM2AyQGZGF0YTM3AyUGZGF0YTM4AyYGZGF0YTM5AycGZGF0YTQwAygGZGF0YTQxAykGZGF0YTQyAyoGZGF0YTQzAysGZGF0YTQ0AywGZGF0YTQ1Ay0GZGF0YTQ2Ay4GZGF0YTQ3Ay8GZGF0YTQ4AzAGZGF0YTQ5AzEGZGF0YTUwAzIGZGF0YTUxAzMGZGF0YTUyAzQGZGF0YTUzAzUGZGF0YTU0AzYGZGF0YTU1AzcGZGF0YTU2AzgGZGF0YTU3AzkGZGF0YTU4AzoGZGF0YTU5AzsGZGF0YTYwAzwGZGF0YTYxAz0GZGF0YTYyAz4GZGF0YTYzAz8GZGF0YTY0A0AGZGF0YTY1A0EGZGF0YTY2A0IGZGF0YTY3A0MGZGF0YTY4A0QGZGF0YTY5A0UGZGF0YTcwA0YGZGF0YTcxA0cGZGF0YTcyA0gGZGF0YTczA0kL8paAgABKAEEBCylEaXNwbGF5TWFuYWdlciUzQVN0YWdlU2l6ZURpZENoYW5nZUV2ZW50AABBLAsFYm9keQAAQTILCnN0YWdlQXJlYQAAQT4LBnN0YWdlAABBxgALD2h5cGVybGlua1BsYW5lAABB1gALEXdhaXRpbmdJbmRpY2F0b3IAAEHoAAsJaGVscFRleHQAAEHyAAsPcHJldmlvdXNCdXR0b24AAEGCAQsLbmV4dEJ1dHRvbgAAQY4BCw1zbGlkZUNvdW50ZXIAAEGcAQsLc3RhdGlzdGljcwAAQagBCwIxAABBrAELBmJsYWNrAABBtAELBmNsaWNrAABBvAELCm1vdXNlbW92ZQAAQcgBCwVub25lAABBzgELAQAAQdABCwQlMjAAAEHWAQsEJTJGAABB3AELCGRlZmF1bHQAAEHmAQsFbm9uZQAAQewBCwVub25lAABB8gELBmJsb2NrAABB+gELC2JhY2tncm91bmQAAEGGAgsIdmlzaWJsZQAAQZACCxJzdGF0aXN0aWNzRGlzcGxheQAAQaQCCwh2aXNpYmxlAABBrgILBmNsYXNzAABBtgILFnByZXZpb3VzQnV0dG9uRW5hYmxlZAAAQc4CCwZjbGFzcwAAQdYCCxdwcmV2aW91c0J1dHRvbkRpc2FibGVkAABB7gILBmNsYXNzAABB9gILEm5leHRCdXR0b25FbmFibGVkAABBigMLBmNsYXNzAABBkgMLE25leHRCdXR0b25EaXNhYmxlZAAAQaYDCx13aW5kb3cuc2Nyb2xsVG8oMCUyQyUyMDEpJTNCAABBxAMLEnN0YXRpc3RpY3NEaXNwbGF5AABB2AMLiAElM0NkaXYlMjBzdHlsZSUzRCdwb3NpdGlvbiUzQSUyMGFic29sdXRlJTNCJTIwbGVmdCUzQSUyMDBweCUzQiclM0UlM0NiJTNFQ2FjaGUlMjBTdGF0aXN0aWNzJTNBJTNDJTJGYiUzRSUzQ2JyJTNFLSUyMFNjZW5lcyUzQSUyMCUzQ2IlM0UAAEHiBAssJTNDJTJGYiUzRSUzQ2JyJTNFLSUyMFRleHR1cmVzJTNBJTIwJTNDYiUzRQAAQZAFCyolM0MlMkZiJTNFJTNDYnIlM0UtJTIwUGl4ZWxzJTNBJTIwJTNDYiUzRQAAQbwFCzYlMjBNUCUzQyUyRmIlM0UlM0NiciUzRS0lMjBQZWFrJTIwUGl4ZWxzJTNBJTIwJTNDYiUzRQAAQfQFC2YlMjBNUCUzQyUyRmIlM0UlM0NiciUzRSUyNW5ic3AlM0NiciUzRSUzQ2IlM0VMaW1pdHMlM0ElM0MlMkZiJTNFJTNDYnIlM0UtJTIwTWF4JTIwUGl4ZWxzJTNBJTIwJTNDYiUzRQAAQdwGC7QBJTIwTVAlM0MlMkZiJTNFJTNDYnIlM0UlM0MlMkZkaXYlM0UlM0NkaXYlMjBzdHlsZSUzRCdwb3NpdGlvbiUzQSUyMGFic29sdXRlJTNCJTIwbGVmdCUzQSUyMDE3NXB4JTNCJyUzRSUzQ2IlM0VTY2VuZSUyMFN0YXRpc3RpY3MlM0ElM0MlMkZiJTNFJTNDYnIlM0UtJTIwU2NlbmUlMjBJbmRleCUzQSUyMCUzQ2IlM0UAAEGSCAssJTNDJTJGYiUzRSUzQ2JyJTNFLSUyMFRleHR1cmVzJTNBJTIwJTNDYiUzRQAAQcAICzIlM0MlMkZiJTNFJTNDYnIlM0UtJTIwVG90YWwlMjBQaXhlbHMlM0ElMjAlM0NiJTNFAABB9AgLNiUyME1QJTNDJTJGYiUzRSUzQ2JyJTNFLSUyMFBlYWslMjBQaXhlbHMlM0ElMjAlM0NiJTNFAABBrAkLaiUyME1QJTNDJTJGYiUzRSUzQ2JyJTNFJTNDYiUzRVRleHR1cmUlMjBMb2FkZXIlM0ElM0MlMkZiJTNFJTNDYnIlM0UtJTIwTnVtJTIwTG9hZCUyMFJlcXVlc3RzJTNBJTIwJTNDYiUzRQAAQZgKCyklM0NzcGFuJTIwc3R5bGUlM0QnY29sb3IlM0F5ZWxsb3clM0InJTNFAABBwgoLDiUzQyUyRnNwYW4lM0UAAEHSCgsCMAAAQdYKCzklM0MlMkZiJTNFJTNDYnIlM0UtJTIwTnVtJTIwTG9hZCUyMEZhaWx1cmVzJTNBJTIwJTNDYiUzRQAAQZALCyYlM0NzcGFuJTIwc3R5bGUlM0QnY29sb3IlM0FyZWQlM0InJTNFAABBuAsLDiUzQyUyRnNwYW4lM0UAAEHICwsCMAAAQcwLC7kBJTNDJTJGYiUzRSUzQ2JyJTNFJTNDJTJGZGl2JTNFJTNDZGl2JTIwc3R5bGUlM0QncG9zaXRpb24lM0ElMjBhYnNvbHV0ZSUzQiUyMGxlZnQlM0ElMjAzNTBweCUzQiclM0UlM0NiJTNFRGVncmFkZSUyMFN0YXRpc3RpY3MlM0ElM0MlMkZiJTNFJTNDYnIlM0UtJTIwU2NlbmVzJTIwdyUyRkRlZ3JhZGVzJTNBJTIwJTNDYiUzRQAAQYYNCz8lM0MlMkZiJTNFJTNDYnIlM0UtJTIwVG90YWwlMjBUZXh0dXJlcyUyMERlZ3JhZGVkJTNBJTIwJTNDYiUzRQAAQcYNCzolM0MlMkZiJTNFJTNDYnIlM0UtJTIwTWF4JTIwVGV4dHVyZXMlMkZTY2VuZSUzQSUyMCUzQ2IlM0UAAEGCDgs7JTNDJTJGYiUzRSUzQ2JyJTNFLSUyMFRleHR1cmVzJTIwaW4lMjBDdXJyZW50JTNBJTIwJTNDYiUzRQAAQb4OCyklM0NzcGFuJTIwc3R5bGUlM0QnY29sb3IlM0F5ZWxsb3clM0InJTNFAABB6A4LDiUzQyUyRnNwYW4lM0UAAEH4DgsCMAAAQfwOC8gBJTNDJTJGYiUzRSUzQ2JyJTNFJTNDJTJGZGl2JTNFJTNDZGl2JTIwc3R5bGUlM0QncG9zaXRpb24lM0ElMjBhYnNvbHV0ZSUzQiUyMGxlZnQlM0ElMjA1NTBweCUzQiclM0UlM0NiJTNFU3VtbWFyeSUzQSUzQyUyRmIlM0UlM0NiciUzRS0lMjBDYWNoZSUzQSUyMCUzQ2JyJTNFLSUyME92ZXIlMjBQaXhlbCUyMExpbWl0JTIwTm93JTNBJTIwJTNDYiUzRQAAQcYQCzYlM0NzcGFuJTIwc3R5bGUlM0QnY29sb3IlM0FyZWQlM0InJTNFWUVTJTNDJTJGc3BhbiUzRQAAQf4QCwNOTwAAQYIRCz8lM0MlMkZiJTNFJTNDYnIlM0UtJTIwRXZlciUyME92ZXIlMjBQaXhlbCUyMExpbWl0JTNBJTIwJTNDYiUzRQAAQcIRCzYlM0NzcGFuJTIwc3R5bGUlM0QnY29sb3IlM0FyZWQlM0InJTNFWUVTJTNDJTJGc3BhbiUzRQAAQfoRCwNOTwAAQf4RC1UlM0MlMkZiJTNFJTNDYnIlM0UtJTIwU3RhZ2UlM0ElMjAlM0NiciUzRS0lMjBPdmVyJTIwUGl4ZWwlMjBMaW1pdCUyME5vdyUzQSUyMCUzQ2IlM0UAAEHUEgs2JTNDc3BhbiUyMHN0eWxlJTNEJ2NvbG9yJTNBcmVkJTNCJyUzRVlFUyUzQyUyRnNwYW4lM0UAAEGMEwsDTk8AAEGQEws/JTNDJTJGYiUzRSUzQ2JyJTNFLSUyMEV2ZXIlMjBPdmVyJTIwUGl4ZWwlMjBMaW1pdCUzQSUyMCUzQ2IlM0UAAEHQEws2JTNDc3BhbiUyMHN0eWxlJTNEJ2NvbG9yJTNBcmVkJTNCJyUzRVlFUyUzQyUyRnNwYW4lM0UAAEGIFAsDTk8AAEGMFAsfJTNDJTJGYiUzRSUzQ2JyJTNFJTNDJTJGZGl2JTNFAA=='].map(__bytes => {
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
var kStageSizeDidChangeEvent = lS(0, 0);
var kTimeoutValueForCursor = 1000;
var kMobilePortraitModeHorizontalMargin = 8;
var kMobilePortraitModeTopMargin = 47;
var kMobilePortraitModeVerticalCenterLine = 161;
var kMobilePortraitModeMaxStageHeight = 228;
var kMobilePortraitMaxStageHeight = 0;
var kMobilePortraitMaxStageWidth = 0;
var kMobileLandscapeModeVerticalMargin = 7;
var kMobileLandscapeModeHorizontallMargin = 15;
var kBottomButtonHeight = 50;
var kNavigationArrowSize = 27;
var kNavigationAreaHeight = kNavigationArrowSize;
var kHelpAreaHeight = 16;
var kMobilePortraitModeVerticalCenterLineToNavigationAreaGap = 148;
var kStageToNavigationAreaGap = 31;
var kNavigationAreaToHelpAreaGap = 52;
var kHelpAreaToBottomGap = 12;
var kMobilePortraitModeNavigationAreaSideMargin = 32;
var kMobilePortraitModeHelpAreaSideMargin = 16;
var kMobileLandscapeModeMinSideSpacerWidth = kNavigationArrowSize + 10;
var kPadPortraitModeHorizontalMargin = 8;
var kPadPortraitModeMaxStageHeight = 540;
var kPadPortraitModeVerticalCenterLine = 400;
var kPadLandscapeModeHorizontallMargin = 15;
var kPadLandscapeModeVerticalMargin = 7;
var DisplayManager = Class.create({
    initialize: function () {
        (() => {
            const __callInstance79 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kShowSizeDidChangeEvent, this.handleShowSizeDidChangeEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance79.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance78 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kOrientationChangedEvent, this.handleOrientationDidChangeEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance78.exports;
            return __exports.data();
        })();
        this.body = document.getElementById(lS(0, 1));
        this.stageArea = document.getElementById(lS(0, 2));
        this.stage = document.getElementById(lS(0, 3));
        this.hyperlinkPlane = document.getElementById(lS(0, 4));
        this.waitingIndicator = document.getElementById(lS(0, 5));
        this.helpText = document.getElementById(lS(0, 6));
        this.previousButton = document.getElementById(lS(0, 7));
        this.nextButton = document.getElementById(lS(0, 8));
        this.slideCounter = document.getElementById(lS(0, 9));
        this.waitingIndicatorTimeout = null;
        this.orientation = kOrientationUnknown;
        this.showWidth = 0;
        this.showHeight = 0;
        this.stageAreaWidth = 0;
        this.stageAreaHeight = 0;
        this.stageAreaTop = 0;
        this.stageAreaLeft = 0;
        this.usableDisplayWidth = 0;
        this.usableDisplayHeight = 0;
        this.inLaunchMode = true;
        this.initialAddressBarScrollPerformed = false;
        (() => {
            const __callInstance77 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.updateUsableDisplayArea();
                    }
                }
            });
            const __exports = __callInstance77.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance76 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.positionWaitingIndicator();
                    }
                }
            });
            const __exports = __callInstance76.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance75 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.showWaitingIndicator();
                    }
                }
            });
            const __exports = __callInstance75.exports;
            return __exports.data();
        })();
        this.hyperlinksOnly = false;
        this.showStatisticsDisplay = gIpad && getUrlParameter(lS(0, 10)) === lS(0, 11);
        this.hasCacheEverGoneOverPixelLimit = false;
        this.hhasStageEverGoneOverPixelLimit = false;
        this.cacheHighWaterMark = 0;
        this.stageHighWaterMark = 0;
        (() => {
            const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.stageArea.style.backgroundColor = lS(0, 12);
                            this.helpText.innerHTML = kTapOrSwipeToAdvance;
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __callInstance74 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            Event.observe(this.body, lS(0, 13), function (a) {
                                                (() => {
                                                    const __callInstance73 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                gShowController.handleClickEvent(a);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance73.exports;
                                                    return __exports.data();
                                                })();
                                            });
                                        }
                                    }
                                });
                                const __exports = __callInstance74.exports;
                                return __exports.data();
                            })();
                            (() => {
                                const __callInstance72 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            Event.observe(this.body, lS(0, 14), this.handleMouseMove.bind(this));
                                        }
                                    }
                                });
                                const __exports = __callInstance72.exports;
                                return __exports.data();
                            })();
                            this.lastMouseX = -1;
                            this.lastMouseY = -1;
                            this.cursorTimeout = null;
                            (() => {
                                const __callInstance71 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.setTimeoutForCursor();
                                        }
                                    }
                                });
                                const __exports = __callInstance71.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance0.exports;
            return __exports.data(gMode === kModeMobile ? 1 : 0);
        })();
    },
    setHyperlinksOnlyMode: function () {
        this.hyperlinksOnly = true;
        (() => {
            const __callInstance70 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.setPreviousButtonEnabled(false);
                    }
                }
            });
            const __exports = __callInstance70.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance69 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.setNextButtonEnabled(false);
                    }
                }
            });
            const __exports = __callInstance69.exports;
            return __exports.data();
        })();
        this.helpText.style.display = lS(0, 15);
    },
    handleMouseMove: function (a) {
        a = a || window.event;
        var b = Math.abs(this.lastMouseX - a.clientX) + Math.abs(this.lastMouseY - a.clientY);
        (() => {
            const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance68 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.showCursor();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance68.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance67 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    this.setTimeoutForCursor();
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance67.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance3.exports;
                                                    return __exports.data(!this.navigatorIsShowing ? 1 : 0);
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance2.exports;
                                return __exports.data(this.cursorIsShowing === false ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance66 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.setTimeoutForCursor();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance66.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance4.exports;
                                return __exports.data(!this.navigatorIsShowing ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance1.exports;
            return __exports.data(b > 10 ? 1 : 0);
        })();
        this.lastMouseX = a.clientX;
        this.lastMouseY = a.clientY;
    },
    updateSlideNumber: function (b, a) {
        var d = lS(0, 16);
        var c = null;
        (() => {
            const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            d = kSlideLabel + lS(0, 17) + b + lS(0, 18) + a;
                            c = this.slideCounter;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance5.exports;
            return __exports.data(gMode != kModeDesktop ? 1 : 0);
        })();
        (() => {
            const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            c.innerHTML = d;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance6.exports;
            return __exports.data(c != null ? 1 : 0);
        })();
    },
    handleShowSizeDidChangeEvent: function (a) {
        this.showWidth = a.memo.width;
        this.showHeight = a.memo.height;
        (() => {
            const __callInstance65 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.layoutDisplay();
                    }
                }
            });
            const __exports = __callInstance65.exports;
            return __exports.data();
        })();
    },
    handleOrientationDidChangeEvent: function (a) {
        this.orientation = a.memo.orientation;
        (() => {
            const __callInstance64 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        clearTimeout(this.resizeTimer);
                    }
                }
            });
            const __exports = __callInstance64.exports;
            return __exports.data();
        })();
        this.resizeTimer = setTimeout(this.handleOrientationDidChangeEvent_partTwo.bind(this), 300);
    },
    handleOrientationDidChangeEvent_partTwo: function () {
        (() => {
            const __callInstance63 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.layoutDisplay();
                    }
                }
            });
            const __exports = __callInstance63.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance62 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.showApplicableControls();
                                        }
                                    }
                                });
                                const __exports = __callInstance62.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance7.exports;
            return __exports.data(this.inLaunchMode === false ? 1 : 0);
        })();
    },
    showCursor: function () {
        if (this.inLaunchMode) {
            return;
        }
        this.body.style.cursor = lS(0, 19);
        this.cursorIsShowing = true;
        (() => {
            const __callInstance61 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.setTimeoutForCursor();
                    }
                }
            });
            const __exports = __callInstance61.exports;
            return __exports.data();
        })();
    },
    hideCursor: function () {
        this.body.style.cursor = lS(0, 20);
        this.cursorIsShowing = false;
    },
    setTimeoutForCursor: function () {
        (() => {
            const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance60 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            clearTimeout(this.cursorTimeout);
                                        }
                                    }
                                });
                                const __exports = __callInstance60.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance8.exports;
            return __exports.data(this.cursorTimeout ? 1 : 0);
        })();
        this.cursorTimeout = setTimeout(this.handleTimeoutForCursor.bind(this), kTimeoutValueForCursor);
    },
    clearTimeoutForCursor: function () {
        (() => {
            const __ifInstance9 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance59 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            clearTimeout(this.cursorTimeout);
                                        }
                                    }
                                });
                                const __exports = __callInstance59.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance9.exports;
            return __exports.data(this.cursorTimeout ? 1 : 0);
        })();
    },
    handleTimeoutForCursor: function () {
        (() => {
            const __callInstance58 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.hideCursor();
                    }
                }
            });
            const __exports = __callInstance58.exports;
            return __exports.data();
        })();
    },
    updateUsableDisplayArea: function () {
        (() => {
            const __ifInstance10 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var a = gIpad;
                            (() => {
                                const __ifInstance11 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                this.usableDisplayWidth = a ? kiPadDeviceHeight : kiPhoneDeviceHeight;
                                                this.usableDisplayHeight = (a ? kiPadDeviceWidth : kiPhoneDeviceWidth) - kiPhoneStatusBarHeight - kiPhoneLandscapeButtonBarHeight - (a ? kiPadAddressBarHeight + kiPadBookmarksBarHeight : 0);
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                this.usableDisplayWidth = a ? kiPadDeviceWidth : kiPhoneDeviceWidth;
                                                this.usableDisplayHeight = (a ? kiPadDeviceHeight : kiPhoneDeviceHeight) - kiPhoneStatusBarHeight - kiPhonePortraitButtonBarHeight - (a ? kiPadBookmarksBarHeight + 10 : 0);
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance11.exports;
                                return __exports.data(this.orientation === kOrientationLandscape ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            this.usableDisplayWidth = window.innerWidth;
                            this.usableDisplayHeight = window.innerHeight;
                        }
                    }
                }
            });
            const __exports = __ifInstance10.exports;
            return __exports.data(gMode === kModeMobile ? 1 : 0);
        })();
    },
    clearLaunchMode: function () {
        this.inLaunchMode = false;
        var a = this;
        (() => {
            const __callInstance57 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        runInNextEventLoop(this.showAll.bind(this));
                    }
                }
            });
            const __exports = __callInstance57.exports;
            return __exports.data();
        })();
    },
    positionWaitingIndicator: function () {
        var c = 110;
        var b = 32;
        var a;
        var d;
        (() => {
            const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            a = 1000;
                            d = 1000;
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                a = (this.usableDisplayWidth - c) / 2;
                                                (() => {
                                                    const __ifInstance14 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    d = kMobilePortraitModeVerticalCenterLine - c / 2;
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    d = kPadPortraitModeVerticalCenterLine - c / 2;
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance14.exports;
                                                    return __exports.data(gIpad === false ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                a = (this.usableDisplayWidth - c) / 2;
                                                d = (this.usableDisplayHeight - c) / 2;
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance13.exports;
                                return __exports.data(gMode === kModeMobile && this.orientation === kOrientationPortrait ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance12.exports;
            return __exports.data(gMode === kModeMobile && this.orientation === kOrientationUnknown ? 1 : 0);
        })();
        (() => {
            const __callInstance56 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        setElementPosition(this.waitingIndicator, d, a, c, c);
                    }
                }
            });
            const __exports = __callInstance56.exports;
            return __exports.data();
        })();
    },
    hideWaitingIndicator: function () {
        this.waitingIndicator.style.display = lS(0, 21);
    },
    showWaitingIndicator: function () {
        this.waitingIndicator.style.display = lS(0, 22);
    },
    convertDisplayCoOrdsToShowCoOrds: function (d) {
        var b = {};
        var c = this.stageAreaLeft + this.stageAreaWidth;
        var a = this.stageAreaTop + this.stageAreaHeight;
        (() => {
            const __ifInstance15 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            b.pointX = -1;
                            b.pointY = -1;
                        }
                    },
                    impFunc2: () => {
                        {
                            b.pointX = (d.pointX - this.stageAreaLeft) / this.stageAreaWidth * this.showWidth;
                            b.pointY = (d.pointY - this.stageAreaTop) / this.stageAreaHeight * this.showHeight;
                        }
                    }
                }
            });
            const __exports = __ifInstance15.exports;
            return __exports.data(d.pointX < this.stageAreaLeft || d.pointX > c || d.pointY < this.stageAreaTop || d.pointY > a ? 1 : 0);
        })();
        return b;
    },
    layoutDisplay: function () {
        (() => {
            const __callInstance55 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.updateUsableDisplayArea();
                    }
                }
            });
            const __exports = __callInstance55.exports;
            return __exports.data();
        })();
        var q;
        var k;
        (() => {
            const __ifInstance16 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            q = this.usableDisplayWidth;
                            k = this.usableDisplayHeight;
                            (() => {
                                const __ifInstance17 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __ifInstance18 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    q = this.showWidth;
                                                                    k = k;
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance18.exports;
                                                    return __exports.data(q > this.showWidth || k > k ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance17.exports;
                                return __exports.data(!gShowController.isFullscreen ? 1 : 0);
                            })();
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
                                                    const __ifInstance20 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    q = this.usableDisplayWidth - 2 * kMobilePortraitModeHorizontalMargin;
                                                                    k = kMobilePortraitModeMaxStageHeight;
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    q = this.usableDisplayWidth - 2 * kMobileLandscapeModeHorizontallMargin;
                                                                    k = this.usableDisplayHeight - 2 * kMobileLandscapeModeVerticalMargin;
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance20.exports;
                                                    return __exports.data(this.orientation === kOrientationPortrait ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __ifInstance21 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    q = this.usableDisplayWidth - 2 * kPadPortraitModeHorizontalMargin;
                                                                    k = kPadPortraitModeMaxStageHeight;
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    q = this.usableDisplayWidth - 2 * kPadLandscapeModeHorizontallMargin;
                                                                    k = this.usableDisplayHeight - 2 * kPadLandscapeModeVerticalMargin;
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance21.exports;
                                                    return __exports.data(this.orientation === kOrientationPortrait ? 1 : 0);
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance19.exports;
                                return __exports.data(gIpad === false ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance16.exports;
            return __exports.data(gMode === kModeDesktop ? 1 : 0);
        })();
        var o = scaleSizeWithinSize(this.showWidth, this.showHeight, q, k);
        this.stageAreaWidth = o.width;
        this.stageAreaHeight = o.height;
        this.stageAreaLeft = (this.usableDisplayWidth - this.stageAreaWidth) / 2;
        (() => {
            const __ifInstance22 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.stageAreaTop = (k - this.stageAreaHeight) / 2;
                        }
                    },
                    impFunc2: () => {
                        {
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
                                                                    this.stageAreaTop = Math.max(10, kMobilePortraitModeVerticalCenterLine - this.stageAreaHeight / 2);
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    this.stageAreaTop = Math.max(10, kPadPortraitModeVerticalCenterLine - this.stageAreaHeight / 2);
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance24.exports;
                                                    return __exports.data(gIpad === false ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                this.stageAreaTop = (this.usableDisplayHeight - this.stageAreaHeight) / 2;
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance23.exports;
                                return __exports.data(this.orientation === kOrientationPortrait ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance22.exports;
            return __exports.data(gMode === kModeDesktop ? 1 : 0);
        })();
        (() => {
            const __callInstance54 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        setElementPosition(this.stageArea, this.stageAreaTop, this.stageAreaLeft, this.stageAreaWidth, this.stageAreaHeight);
                    }
                }
            });
            const __exports = __callInstance54.exports;
            return __exports.data();
        })();
        var e = -1;
        var b = -1;
        var p = -1;
        var h = -1;
        var a = null;
        (() => {
            const __ifInstance25 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            a = false;
                            e = -1;
                            b = -1;
                            p = -1;
                            h = -1;
                        }
                    },
                    impFunc2: () => {
                        {
                            a = true;
                            p = 0;
                            h = 0;
                            (() => {
                                const __ifInstance26 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                b = kiPadDeviceHeight;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                b = kiPhoneDeviceHeight;
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance26.exports;
                                return __exports.data(gIpad ? 1 : 0);
                            })();
                            e = b;
                        }
                    }
                }
            });
            const __exports = __ifInstance25.exports;
            return __exports.data(gMode === kModeDesktop ? 1 : 0);
        })();
        (() => {
            const __ifInstance27 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var s = document.getElementById(lS(0, 23));
                            s.style.top = p;
                            s.style.left = h;
                            s.style.width = e;
                            s.style.height = b;
                            (() => {
                                const __ifInstance28 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                s.style.visibility = lS(0, 24);
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance28.exports;
                                return __exports.data(a === true ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance27.exports;
            return __exports.data(p != -1 && h != -1 && e != -1 && b != -1 ? 1 : 0);
        })();
        var g = {
            x: 0,
            y: 0,
            width: this.usableDisplayWidth,
            height: this.stageAreaTop
        };
        var d = {
            x: 0,
            y: this.stageAreaTop + this.stageAreaHeight,
            width: this.usableDisplayWidth,
            height: this.usableDisplayHeight - this.stageAreaTop - this.stageAreaHeight
        };
        var n = {
            x: 0,
            y: this.stageAreaTop,
            width: this.stageAreaLeft,
            height: this.stageAreaHeight
        };
        var i = {
            x: this.stageAreaLeft + this.stageAreaWidth,
            y: this.stageAreaTop,
            width: this.usableDisplayWidth - this.stageAreaWidth - n.width,
            height: this.stageAreaHeight
        };
        var l = document.getElementById(lS(0, 25));
        (() => {
            const __ifInstance29 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance53 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            setElementPosition(l, d.y + 70, 0, this.usableDisplayWidth, d.height - 105);
                                        }
                                    }
                                });
                                const __exports = __callInstance53.exports;
                                return __exports.data();
                            })();
                            l.style.visibility = lS(0, 26);
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance29.exports;
            return __exports.data(this.showStatisticsDisplay && gIpad && this.orientation === kOrientationPortrait ? 1 : 0);
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
                                                var m = kNavigationArrowSize + 2 * kMobilePortraitModeNavigationAreaSideMargin;
                                                var f = kNavigationArrowSize + 2 * kStageToNavigationAreaGap;
                                                var r = this.usableDisplayWidth - 2 * m;
                                                var c = d.y + 7;
                                                (() => {
                                                    const __callInstance52 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                setElementPosition(this.previousButton, c, 0, m, f);
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
                                                                setElementPosition(this.slideCounter, c + kStageToNavigationAreaGap, m, r, f);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance51.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __callInstance50 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                setElementPosition(this.nextButton, c, m + r - 5, m, f);
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
                                                                setElementPosition(this.helpText, d.y + d.height - kHelpAreaToBottomGap - kHelpAreaHeight, 0, this.usableDisplayWidth, kHelpAreaHeight);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance49.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __callInstance48 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                setElementPosition(this.infoPanelIcon, this.usableDisplayHeight - kInfoPanelButtonHeight, this.usableDisplayWidth - kInfoPanelButtonWidth - 5, kInfoPanelButtonWidth, kInfoPanelButtonHeight);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance48.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                var j = {
                                                    x: 0,
                                                    y: 0,
                                                    width: 0,
                                                    height: 0
                                                };
                                                (() => {
                                                    const __ifInstance32 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance47 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    setElementRect(this.previousButton, n);
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
                                                                                    setElementRect(this.nextButton, i);
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance46.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance45 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    setElementRect(this.previousButton, j);
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
                                                                                    setElementRect(this.nextButton, j);
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
                                                    const __exports = __ifInstance32.exports;
                                                    return __exports.data(n.width > kMobileLandscapeModeMinSideSpacerWidth ? 1 : 0);
                                                })();
                                                (() => {
                                                    const __callInstance43 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                setElementRect(this.slideCounter, j);
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
                                                                setElementRect(this.helpText, j);
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
                                                                setElementRect(this.infoPanelIcon, j);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance41.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance31.exports;
                                return __exports.data(this.orientation === kOrientationPortrait ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance30.exports;
            return __exports.data(gMode != kModeDesktop ? 1 : 0);
        })();
        (() => {
            const __callInstance40 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.positionWaitingIndicator();
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
                        this.hideAddressBar();
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
                        document.fire(kStageSizeDidChangeEvent, {
                            left: this.stageAreaLeft,
                            top: this.stageAreaTop,
                            width: this.stageAreaWidth,
                            height: this.stageAreaHeight
                        });
                    }
                }
            });
            const __exports = __callInstance38.exports;
            return __exports.data();
        })();
    },
    showApplicableControls: function () {
        (() => {
            const __ifInstance33 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance37 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            hideElement(this.previousButton);
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
                                            hideElement(this.nextButton);
                                        }
                                    }
                                });
                                const __exports = __callInstance36.exports;
                                return __exports.data();
                            })();
                            (() => {
                                const __callInstance35 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            hideElement(this.slideCounter);
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
                                            hideElement(this.helpText);
                                        }
                                    }
                                });
                                const __exports = __callInstance34.exports;
                                return __exports.data();
                            })();
                            (() => {
                                const __callInstance33 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            hideElement(this.infoPanelIcon);
                                        }
                                    }
                                });
                                const __exports = __callInstance33.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __ifInstance34 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance32 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                hideElement(this.previousButton);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance32.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __callInstance31 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                hideElement(this.nextButton);
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
                                                                hideElement(this.slideCounter);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance30.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __callInstance29 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                hideElement(this.helpText);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance29.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __callInstance28 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                hideElement(this.infoPanelIcon);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance28.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __ifInstance35 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance27 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    showElement(this.previousButton);
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
                                                                                    showElement(this.nextButton);
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance26.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                    (() => {
                                                                        const __callInstance25 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    showElement(this.slideCounter);
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
                                                                                    showElement(this.helpText);
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
                                                                                    showElement(this.infoPanelIcon);
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance23.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance22 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    hideElement(this.slideCounter);
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance22.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                    (() => {
                                                                        const __callInstance21 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    hideElement(this.helpText);
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
                                                                                    hideElement(this.infoPanelIcon);
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance20.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                    (() => {
                                                                        const __ifInstance36 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        (() => {
                                                                                            const __callInstance19 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                env: {
                                                                                                    impFunc: () => {
                                                                                                        showElement(this.previousButton);
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
                                                                                                        showElement(this.nextButton);
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __callInstance18.exports;
                                                                                            return __exports.data();
                                                                                        })();
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                    {
                                                                                        (() => {
                                                                                            const __callInstance17 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                env: {
                                                                                                    impFunc: () => {
                                                                                                        hideElement(this.previousButton);
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
                                                                                                        hideElement(this.nextButton);
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
                                                                        const __exports = __ifInstance36.exports;
                                                                        return __exports.data(this.stageAreaLeft > kMobileLandscapeModeMinSideSpacerWidth ? 1 : 0);
                                                                    })();
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance35.exports;
                                                    return __exports.data(this.orientation === kOrientationPortrait ? 1 : 0);
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance34.exports;
                                return __exports.data(gMode === kModeDesktop ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance33.exports;
            return __exports.data(this.inLaunchMode === true ? 1 : 0);
        })();
        (() => {
            const __callInstance15 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.hideAddressBar();
                    }
                }
            });
            const __exports = __callInstance15.exports;
            return __exports.data();
        })();
    },
    showAll: function () {
        (() => {
            const __callInstance14 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.hideWaitingIndicator();
                    }
                }
            });
            const __exports = __callInstance14.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance13 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        setTimeout(this.showAll_partTwo.bind(this));
                    }
                }
            });
            const __exports = __callInstance13.exports;
            return __exports.data();
        })();
    },
    showAll_partTwo: function () {
        (() => {
            const __ifInstance37 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance12 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            window.scrollTo(0, 1);
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
                                            setTimeout(this.showAll_partThree.bind(this));
                                        }
                                    }
                                });
                                const __exports = __callInstance11.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __callInstance10 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.showAll_partThree();
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
            const __exports = __ifInstance37.exports;
            return __exports.data(gDevice === kDeviceMobile ? 1 : 0);
        })();
    },
    showAll_partThree: function () {
        (() => {
            const __ifInstance38 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance9 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.showApplicableControls();
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
            const __exports = __ifInstance38.exports;
            return __exports.data(this.inLaunchMode === false ? 1 : 0);
        })();
        (() => {
            const __callInstance8 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        showElement(this.stageArea);
                    }
                }
            });
            const __exports = __callInstance8.exports;
            return __exports.data();
        })();
        var a = navigator.userAgent.match(/Windows/);
        (() => {
            const __ifInstance39 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __ifInstance40 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance7 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                gShowController.delegate.triggerReflow();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance7.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance40.exports;
                                return __exports.data(gShowController.delegate.triggerReflow ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance39.exports;
            return __exports.data(a ? 1 : 0);
        })();
        (() => {
            const __callInstance6 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        showElement(this.hyperlinkPlane);
                    }
                }
            });
            const __exports = __callInstance6.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance41 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance5 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            showElement(this.infoPanelIcon);
                                        }
                                    }
                                });
                                const __exports = __callInstance5.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance41.exports;
            return __exports.data(gMode === kModeMobile ? 1 : 0);
        })();
    },
    setPreviousButtonEnabled: function (a) {
        if (this.hyperlinksOnly) {
            return;
        }
        (() => {
            const __ifInstance42 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __ifInstance43 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance4 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.previousButton.setAttribute(lS(0, 27), lS(0, 28));
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
                                                (() => {
                                                    const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.previousButton.setAttribute(lS(0, 29), lS(0, 30));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance3.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance43.exports;
                                return __exports.data(a ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance42.exports;
            return __exports.data(gMode != kModeDesktop ? 1 : 0);
        })();
    },
    setNextButtonEnabled: function (a) {
        if (this.hyperlinksOnly) {
            return;
        }
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
                                                (() => {
                                                    const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.nextButton.setAttribute(lS(0, 31), lS(0, 32));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance2.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.nextButton.setAttribute(lS(0, 33), lS(0, 34));
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
                                const __exports = __ifInstance45.exports;
                                return __exports.data(a ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance44.exports;
            return __exports.data(gMode != kModeDesktop ? 1 : 0);
        })();
    },
    hideAddressBar: function () {
        if (this.inLaunchMode) {
            return;
        }
        (() => {
            const __ifInstance46 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var a = this.initialAddressBarScrollPerformed ? 0 : kHideAddressBarDelay;
                            (() => {
                                const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            setTimeout(lS(0, 35), a);
                                        }
                                    }
                                });
                                const __exports = __callInstance0.exports;
                                return __exports.data();
                            })();
                            this.initialAddressBarScrollPerformed = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance46.exports;
            return __exports.data(gDevice === kDeviceMobile ? 1 : 0);
        })();
    },
    updateStatisticsDisplay: function () {
        if (this.showStatisticsDisplay === false) {
            return;
        }
        var k = document.getElementById(lS(0, 36));
        var j = gShowController.textureManager.getCacheStatistics();
        var a = gShowController.scriptManager.degradeStatistics;
        var h = gShowController.stageManager.debugGetStageStatistics();
        var d = gShowController.textureManager.numLoadFailures;
        var c = gShowController.textureManager.numOutstandingLoadRequests;
        var i = 1024 * 1024;
        var b = gSafeMaxPixelCount / i;
        b = Math.floor(b * 100) / 100;
        j.numPixels /= i;
        h.numPixels /= i;
        j.numPixels = Math.floor(j.numPixels * 100) / 100;
        h.numPixels = Math.floor(h.numPixels * 100) / 100;
        var e = false;
        var g = false;
        (() => {
            const __ifInstance47 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            e = true;
                            this.hasCacheEverGoneOverPixelLimit = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance47.exports;
            return __exports.data(j.numPixels > b ? 1 : 0);
        })();
        (() => {
            const __ifInstance48 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            g = true;
                            this.hasStageEverGoneOverPixelLimit = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance48.exports;
            return __exports.data(h.numPixels > b ? 1 : 0);
        })();
        (() => {
            const __ifInstance49 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.cacheHighWaterMark = j.numPixels;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance49.exports;
            return __exports.data(j.numPixels > this.cacheHighWaterMark ? 1 : 0);
        })();
        (() => {
            const __ifInstance50 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.stageHighWaterMark = h.numPixels;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance50.exports;
            return __exports.data(h.numPixels > this.stageHighWaterMark ? 1 : 0);
        })();
        var f = lS(0, 37) + j.numScenes + lS(0, 38) + j.numTextures + lS(0, 39) + j.numPixels + lS(0, 40) + this.cacheHighWaterMark + lS(0, 41) + b + lS(0, 42) + gShowController.currentSceneIndex + lS(0, 43) + h.numTextures + lS(0, 44) + h.numPixels + lS(0, 45) + this.stageHighWaterMark + lS(0, 46) + (c > 0 ? lS(0, 47) + c + lS(0, 48) : lS(0, 49)) + lS(0, 50) + (d > 0 ? lS(0, 51) + d + lS(0, 52) : lS(0, 53)) + lS(0, 54) + a.numDegradedSlides + lS(0, 55) + a.numDegradedTextures + lS(0, 56) + a.maxNumDegradedTexturesPerSlide + lS(0, 57) + (h.numDegraded > 0 ? lS(0, 58) + h.numDegraded + lS(0, 59) : lS(0, 60)) + lS(0, 61) + (e ? lS(0, 62) : lS(0, 63)) + lS(0, 64) + (this.hasCacheEverGoneOverPixelLimit ? lS(0, 65) : lS(0, 66)) + lS(0, 67) + (g ? lS(0, 68) : lS(0, 69)) + lS(0, 70) + (this.hasStageEverGoneOverPixelLimit ? lS(0, 71) : lS(0, 72)) + lS(0, 73);
        k.innerHTML = f;
    }
});