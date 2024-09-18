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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGpYOAgABHfwBBAQt/AEEEC38AQQYLfwBBEAt/AEEeC38AQTQLfwBBxgALfwBB3AALfwBB8gALfwBBhgELfwBBoAELfwBBugELfwBB2gELfwBB/gELfwBBjgILfwBBnAILfwBBrgILfwBByAILfwBB5AILfwBB/gILfwBBlgMLfwBBrgMLfwBByAMLfwBB1gMLfwBB8AMLfwBBgAQLfwBBkAQLfwBBogQLfwBBrgQLfwBBxAQLfwBB4AQLfwBB/AQLfwBBmgULfwBBygULfwBB2gULfwBB6gULfwBB+gULfwBB/gULfwBBggYLfwBBhgYLfwBBjAYLfwBBjgYLfwBBkAYLfwBBlAYLfwBBnAYLfwBBpAYLfwBBqAYLfwBBsAYLfwBBsgYLfwBBugYLfwBB4gYLfwBB6AYLfwBB7AYLfwBB8AYLfwBB+AYLfwBBmgcLfwBBrgcLfwBBoggLfwBBpAgLfwBB+ggLfwBBlAkLfwBBngkLfwBBogkLfwBBqAkLfwBBtAkLfwBBugkLfwBBxgkLfwBBzAkLfwBB0AkLfwBB2AkLfwBB3gkLB/+EgIAASAZtZW1vcnkCAAVkYXRhMAMABWRhdGExAwEFZGF0YTIDAgVkYXRhMwMDBWRhdGE0AwQFZGF0YTUDBQVkYXRhNgMGBWRhdGE3AwcFZGF0YTgDCAVkYXRhOQMJBmRhdGExMAMKBmRhdGExMQMLBmRhdGExMgMMBmRhdGExMwMNBmRhdGExNAMOBmRhdGExNQMPBmRhdGExNgMQBmRhdGExNwMRBmRhdGExOAMSBmRhdGExOQMTBmRhdGEyMAMUBmRhdGEyMQMVBmRhdGEyMgMWBmRhdGEyMwMXBmRhdGEyNAMYBmRhdGEyNQMZBmRhdGEyNgMaBmRhdGEyNwMbBmRhdGEyOAMcBmRhdGEyOQMdBmRhdGEzMAMeBmRhdGEzMQMfBmRhdGEzMgMgBmRhdGEzMwMhBmRhdGEzNAMiBmRhdGEzNQMjBmRhdGEzNgMkBmRhdGEzNwMlBmRhdGEzOAMmBmRhdGEzOQMnBmRhdGE0MAMoBmRhdGE0MQMpBmRhdGE0MgMqBmRhdGE0MwMrBmRhdGE0NAMsBmRhdGE0NQMtBmRhdGE0NgMuBmRhdGE0NwMvBmRhdGE0OAMwBmRhdGE0OQMxBmRhdGE1MAMyBmRhdGE1MQMzBmRhdGE1MgM0BmRhdGE1MwM1BmRhdGE1NAM2BmRhdGE1NQM3BmRhdGE1NgM4BmRhdGE1NwM5BmRhdGE1OAM6BmRhdGE1OQM7BmRhdGE2MAM8BmRhdGE2MQM9BmRhdGE2MgM+BmRhdGE2MwM/BmRhdGE2NANABmRhdGE2NQNBBmRhdGE2NgNCBmRhdGE2NwNDBmRhdGE2OANEBmRhdGE2OQNFBmRhdGE3MANGC5yMgIAARwBBAQsBAABBBAsBAABBBgsJZnVuY3Rpb24AAEEQCwwhTm9PcF8hTm9PcAAAQR4LFV9zZXR1cFNob3dDb250cm9sbGVyAABBNAsQIVNob3dDb250cm9sbGVyAABBxgALFV8hYWR2YW5jZVRvTmV4dEJ1aWxkAABB3AALFV8hYWR2YW5jZVRvTmV4dFNsaWRlAABB8gALE18hZG9JZGxlUHJvY2Vzc2luZwAAQYYBCxhfIWdvQmFja1RvUHJldmlvdXNCdWlsZAAAQaABCxhfIWdvQmFja1RvUHJldmlvdXNTbGlkZQAAQboBCx9fIWhhbmRsZVNjcmlwdERpZERvd25sb2FkRXZlbnQAAEHaAQsiXyFoYW5kbGVTY3JpcHREaWROb3REb3dubG9hZEV2ZW50AABB/gELDl8hanVtcFRvU2NlbmUAAEGOAgsNXyFvbktleVByZXNzAABBnAILESFUb3VjaENvbnRyb2xsZXIAAEGuAgsYXyFoYW5kbGVHZXN0dXJlRW5kRXZlbnQAAEHIAgsaXyFoYW5kbGVHZXN0dXJlU3RhcnRFdmVudAAAQeQCCxlfIWhhbmRsZVRvdWNoQ2FuY2VsRXZlbnQAAEH+AgsXXyFoYW5kbGVUb3VjaE1vdmVFdmVudAAAQZYDCxZfIWhhbmRsZVRvdWNoRW5kRXZlbnQAAEGuAwsYXyFoYW5kbGVUb3VjaFN0YXJ0RXZlbnQAAEHIAwsNXyFpbml0aWFsaXplAABB1gMLGV8haXNUb3VjaFdpdGhpblRyYWNrQXJlYQAAQfADCw9fIXNldFRyYWNrQXJlYQAAQYAECw8hU2NyaXB0TWFuYWdlcgAAQZAECxFfIWRvd25sb2FkU2NyaXB0AABBogQLC0RlYnVnVGltZXIAAEGuBAsVXyFhZHZhbmNlVG9OZXh0QnVpbGQAAEHEBAsbXyFjcmVhdGVBbmltYXRpb25zRm9yU2NlbmUAAEHgBAsaXyFhcHBseUFuaW1hdGlvbnNGb3JTY2VuZQAAQfwECxxfIXByZVByb2Nlc3NTY2VuZUFuaW1hdGlvbnMAAEGaBQsvXyFwcmVQcm9jZXNzU2NlbmVBbmltYXRpb25zX3RvX0FwcGx5QW5pbWF0aW9ucwAAQcoFCw5fIWp1bXBUb1NjZW5lAABB2gULD18hZGlzcGxheVNjZW5lAABB6gULDldBUk5JTkclM0ElMjAAAEH6BQsCXwAAQf4FCwIhAABBggYLAiEAAEGGBgsEJTJCAABBjAYLAQAAQY4GCwEAAEGQBgsCLQAAQZQGCwclM0ElMjAAAEGcBgsGKCklMjAAAEGkBgsCLgAAQagGCwYoKSUyMAAAQbAGCwEAAEGyBgsHJTNBJTIwAABBugYLJiUyRmRlYnVnTWVzc2FnZS5yaHRtbCUzRm1lc3NhZ2UlM0QlMjIAAEHiBgsEJTIyAABB6AYLAl8AAEHsBgsCIQAAQfAGCwZTdGFydAAAQfgGCyBTdG9wJTIwLSUyMEVsYXBzZWQlMjBUaW1lJTNBJTIwAABBmgcLEl9kZWJ1Z0R1bXBEb21Gcm9tAABBrgcLcy0tLS0tLS0tLS0tLS0tLS0tLSUyMFMlMjBUJTIwQSUyMFIlMjBUJTIwJTIwJTIwTyUyMEYlMjAlMjAlMjBEJTIwTyUyME0lMjAlMjAlMjBEJTIwVSUyME0lMjBQJTIwLS0tJTIwQ29udGV4dCUzQSUyMAAAQaIICwEAAEGkCAtVLS0tLS0tLS0tLS0tLS0tLS0tJTIwRSUyME4lMjBEJTIwJTIwJTIwTyUyMEYlMjAlMjAlMjBEJTIwTyUyME0lMjAlMjAlMjBEJTIwVSUyME0lMjBQAABB+ggLGF9yZWN1cnNpdmVseUR1bXBEb21Gcm9tAABBlAkLCCUyM3RleHQAAEGeCQsCLQAAQaIJCwQlM0MAAEGoCQsKJTIwaWQlM0QnAABBtAkLBSclM0UAAEG6CQsKJTIwJTIwJTIwAABBxgkLBGltZwAAQcwJCwItAABB0AkLByUzQyUyRgAAQdgJCwQlM0UAAEHeCQsHZXNjYXBlAA=='].map(__bytes => {
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
var gDebug = false;
var gDebugOnMobile = false;
var gNumDebugMessagesSent = 0;
var gNumDebugMessagesQueued = 0;
var gDebugMessageQueue = new Array();
var gDebugMessageRequest = null;
var gDebugLastClassName = lS(0, 0);
var gDebugLastMethodName = lS(0, 1);
var gDebugSimulateSlowTextureDownload = false;
var gDebugSimulateTextureLoadFailure = false;
var gDebugSimulateScriptDownloadFailure = false;
var kDebugFunction = lS(0, 2);
var kDebugSurpressMessage = lS(0, 3);
var kDebugSetupShowController = kDebugFunction + lS(0, 4);
var kDebugShowController = lS(0, 5);
var kDebugShowController_AdvanceToNextBuild = kDebugShowController + lS(0, 6);
var kDebugShowController_AdvanceToNextSlide = kDebugShowController + lS(0, 7);
var kDebugShowController_DoIdleProcessing = kDebugShowController + lS(0, 8);
var kDebugShowController_GoBackToPreviousBuild = kDebugShowController + lS(0, 9);
var kDebugShowController_GoBackToPreviousSlide = kDebugShowController + lS(0, 10);
var kDebugShowController_HandleScriptDidDownloadEvent = kDebugShowController + lS(0, 11);
var kDebugShowController_HandleScriptDidNotDownloadEvent = kDebugShowController + lS(0, 12);
var kDebugShowController_JumpToScene = kDebugShowController + lS(0, 13);
var kDebugShowController_OnKeyPress = kDebugShowController + lS(0, 14);
var kDebugTouchController = lS(0, 15);
var kDebugTouchController_HandleGestureEndEvent = kDebugTouchController + lS(0, 16);
var kDebugTouchController_HandleGestureStartEvent = kDebugTouchController + lS(0, 17);
var kDebugTouchController_HandleTouchCancelEvent = kDebugTouchController + lS(0, 18);
var kDebugTouchController_HandleTouchCancelEvent = kDebugTouchController + lS(0, 19);
var kDebugTouchController_HandleTouchEndEvent = kDebugTouchController + lS(0, 20);
var kDebugTouchController_HandleTouchStartEvent = kDebugTouchController + lS(0, 21);
var kDebugTouchController_Initialize = kDebugTouchController + lS(0, 22);
var kDebugTouchController_IsTouchWithinTrackArea = kDebugTouchController + lS(0, 23);
var kDebugTouchController_SetTrackArea = kDebugTouchController + lS(0, 24);
var kDebugScriptMangaer = lS(0, 25);
var kDebugScriptMangaer_DownloadScript = kDebugScriptMangaer + lS(0, 26);
var kDebugTimer = lS(0, 27);
var kDebugTimer_AdvanceToNextBuild = kDebugTimer + lS(0, 28);
var kDebugTimer_CreateAnimationsForScene = kDebugTimer + lS(0, 29);
var kDebugTimer_ApplyAnimationsForScene = kDebugTimer + lS(0, 30);
var kDebugTimer_PreProcessSceneAnimations = kDebugTimer + lS(0, 31);
var kDebugTimer_AdvanceToNextBuild_to_ApplyAnimations = kDebugTimer + lS(0, 32);
var kDebugTimer_JumpToScene = kDebugTimer + lS(0, 33);
var kDebugTimer_DisplayScene = kDebugTimer + lS(0, 34);
function debugWarning(a, b) {
    if (gDebug === false) {
        return;
    }
    (() => {
        const __callInstance19 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    debugSendMessage(a, lS(0, 35) + b, true);
                }
            }
        });
        const __exports = __callInstance19.exports;
        return __exports.data();
    })();
}
function debugMessageAlways(a, b) {
    (() => {
        const __callInstance18 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    debugSendMessage(a, b, true);
                }
            }
        });
        const __exports = __callInstance18.exports;
        return __exports.data();
    })();
}
function debugMessage(a, b) {
    if (gDebug == false) {
        return;
    }
    if (gDevice == kDeviceMobile && gDebugOnMobile == false) {
        return;
    }
    (() => {
        const __callInstance17 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    debugSendMessage(a, b, false);
                }
            }
        });
        const __exports = __callInstance17.exports;
        return __exports.data();
    })();
}
function debugSendMessage(b, g, a) {
    var e = b.indexOf(lS(0, 36));
    var d = b.substring(0, e);
    var h = b.substring(e + 1);
    var f = false;
    (() => {
        const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        d = d.substring(1);
                        f = true;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance0.exports;
        return __exports.data(d[0] == lS(0, 37) ? 1 : 0);
    })();
    (() => {
        const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        h = h.substring(1);
                        f = true;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance1.exports;
        return __exports.data(h[0] == lS(0, 38) ? 1 : 0);
    })();
    (() => {
        const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        h = h.substring(1);
                        a = true;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance2.exports;
        return __exports.data(h[0] == lS(0, 39) ? 1 : 0);
    })();
    if (f == true && a == false) {
        return;
    }
    var c = lS(0, 40);
    (() => {
        const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        g = lS(0, 41);
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance3.exports;
        return __exports.data(g == null ? 1 : 0);
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
                                            c = b + lS(0, 43);
                                        }
                                    },
                                    impFunc2: () => {
                                        {
                                            (() => {
                                                const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
                                                    env: {
                                                        impFunc1: () => {
                                                            {
                                                                c = h + lS(0, 44);
                                                            }
                                                        },
                                                        impFunc2: () => {
                                                            {
                                                                c = d + lS(0, 45) + h + lS(0, 46);
                                                            }
                                                        }
                                                    }
                                                });
                                                const __exports = __ifInstance6.exports;
                                                return __exports.data(d == kDebugFunction ? 1 : 0);
                                            })();
                                        }
                                    }
                                }
                            });
                            const __exports = __ifInstance5.exports;
                            return __exports.data(d == kDebugTimer ? 1 : 0);
                        })();
                    }
                },
                impFunc2: () => {
                    {
                        c = lS(0, 47);
                    }
                }
            }
        });
        const __exports = __ifInstance4.exports;
        return __exports.data(g[0] != lS(0, 42) || d != gDebugLastClassName || h != gDebugLastMethodName ? 1 : 0);
    })();
    gDebugLastClassName = d;
    gDebugLastMethodName = h;
    (() => {
        const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        gNumDebugMessagesSent++;
                        var i = window[lS(0, 70, true)](gNumDebugMessagesSent + lS(0, 48) + c + g);
                        gDebugMessageQueue[gNumDebugMessagesQueued] = i;
                        gNumDebugMessagesQueued++;
                        (() => {
                            const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            (() => {
                                                const __callInstance16 = new WebAssembly.Instance(__callWasmModule, {
                                                    env: {
                                                        impFunc: () => {
                                                            debugCheckMessageQueue();
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
                            const __exports = __ifInstance8.exports;
                            return __exports.data(gNumDebugMessagesQueued == 1 ? 1 : 0);
                        })();
                    }
                },
                impFunc2: () => {
                    {
                        (() => {
                            const __ifInstance9 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            (() => {
                                                const __callInstance15 = new WebAssembly.Instance(__callWasmModule, {
                                                    env: {
                                                        impFunc: () => {
                                                            window.console.log(c + g);
                                                        }
                                                    }
                                                });
                                                const __exports = __callInstance15.exports;
                                                return __exports.data();
                                            })();
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance9.exports;
                            return __exports.data(window.console ? 1 : 0);
                        })();
                    }
                }
            }
        });
        const __exports = __ifInstance7.exports;
        return __exports.data(gDevice == kDeviceMobile ? 1 : 0);
    })();
}
function debugSendNextMessageInQueue() {
    var b = gDebugMessageQueue[0];
    gNumDebugMessagesQueued--;
    (() => {
        const __callInstance14 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    gDebugMessageQueue.splice(0, 1);
                }
            }
        });
        const __exports = __callInstance14.exports;
        return __exports.data();
    })();
    var a = lS(0, 49) + b + lS(0, 50);
    new Ajax.Request(a, {
        method: 'get',
        onSuccess: function (c) {
            (() => {
                const __callInstance13 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            debugMessageWasSent(c);
                        }
                    }
                });
                const __exports = __callInstance13.exports;
                return __exports.data();
            })();
        },
        onFailure: function (c) {
            (() => {
                const __callInstance12 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            debugMessageWasNotSent(c);
                        }
                    }
                });
                const __exports = __callInstance12.exports;
                return __exports.data();
            })();
        }
    });
}
function debugMessageWasSent(a) {
    (() => {
        const __callInstance11 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    debugCheckMessageQueue();
                }
            }
        });
        const __exports = __callInstance11.exports;
        return __exports.data();
    })();
}
function debugMessageWasNotSent(a) {
    (() => {
        const __callInstance10 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    debugCheckMessageQueue();
                }
            }
        });
        const __exports = __callInstance10.exports;
        return __exports.data();
    })();
}
function debugCheckMessageQueue() {
    (() => {
        const __ifInstance10 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        (() => {
                            const __callInstance9 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        setTimeout(debugSendNextMessageInQueue, 10);
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
        const __exports = __ifInstance10.exports;
        return __exports.data(gNumDebugMessagesQueued > 0 ? 1 : 0);
    })();
}
var DebugTimer = Class.create({
    initialize: function (a) {
        var b = a.indexOf(lS(0, 51));
        var c = a.substring(b + 1);
        (() => {
            const __ifInstance11 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.id = a;
                            this.startTime = new Date();
                            (() => {
                                const __callInstance8 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            debugMessageAlways(a, lS(0, 53));
                                        }
                                    }
                                });
                                const __exports = __callInstance8.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            this.startTime = null;
                        }
                    }
                }
            });
            const __exports = __ifInstance11.exports;
            return __exports.data(c[0] != lS(0, 52) ? 1 : 0);
        })();
    },
    stop: function () {
        (() => {
            const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var b = new Date();
                            var a = b - this.startTime;
                            (() => {
                                const __callInstance7 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            debugMessageAlways(this.id, lS(0, 54) + a);
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
            const __exports = __ifInstance12.exports;
            return __exports.data(this.startTime != null ? 1 : 0);
        })();
    }
});
function debugStopTimer(a) {
    (() => {
        const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        (() => {
                            const __callInstance6 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        a.stop();
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
        const __exports = __ifInstance13.exports;
        return __exports.data(a ? 1 : 0);
    })();
}
var debugDomDumpLineNumber = 0;
function debugDumpDomFrom(c, b) {
    var a = kDebugFunction + lS(0, 55);
    debugDomDumpLineNumber = 0;
    (() => {
        const __callInstance5 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    debugMessageAlways(a, lS(0, 56) + b);
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
                    debugRecursivelyDumpDomFrom(c, lS(0, 57));
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
                    debugMessageAlways(a, lS(0, 58));
                }
            }
        });
        const __exports = __callInstance3.exports;
        return __exports.data();
    })();
}
function debugRecursivelyDumpDomFrom(d, g) {
    var e = kDebugFunction + lS(0, 59);
    var b = d.id;
    var a = d.nodeName.toLowerCase();
    if (a == lS(0, 60)) {
        return;
    }
    (() => {
        const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    debugMessageAlways(e, lS(0, 61) + debugDomDumpLineNumber++ + g + lS(0, 62) + a + lS(0, 63) + b + lS(0, 64));
                }
            }
        });
        const __exports = __callInstance2.exports;
        return __exports.data();
    })();
    var c;
    (() => {
        c = 0;
        const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
            env: {
                test: () => {
                    return c < d.childNodes.length ? 1 : 0;
                },
                update: () => {
                    c++;
                },
                body: () => {
                    {
                        var f = d.childNodes[c];
                        (() => {
                            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        recursivelyDumpDomFrom(f, g + lS(0, 65));
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
        const __exports = __forInstance0.exports;
        return __exports.data();
    })();
    if (a == lS(0, 66)) {
        return;
    }
    (() => {
        const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    debugMessageAlways(e, lS(0, 67) + debugDomDumpLineNumber++ + g + lS(0, 68) + a + lS(0, 69));
                }
            }
        });
        const __exports = __callInstance0.exports;
        return __exports.data();
    })();
}
;