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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG9YaAgACUAX8AQQELfwBBEAt/AEEgC38AQS4LfwBBPAt/AEHKAAt/AEHWAAt/AEHmAAt/AEH8AAt/AEGSAQt/AEGmAQt/AEG8AQt/AEHSAQt/AEHcAQt/AEHoAQt/AEHyAQt/AEH8AQt/AEGEAgt/AEGKAgt/AEGWAgt/AEGeAgt/AEGsAgt/AEGyAgt/AEG8Agt/AEHGAgt/AEHOAgt/AEHcAgt/AEHyAgt/AEGIAwt/AEGUAwt/AEGgAwt/AEGoAwt/AEGwAwt/AEHOAwt/AEHsAwt/AEGQBAt/AEG0BAt/AEHSBAt/AEHwBAt/AEGUBQt/AEG4BQt/AEHSBQt/AEHsBQt/AEGEBgt/AEGcBgt/AEG4Bgt/AEHUBgt/AEHwBgt/AEGMBwt/AEG2Bwt/AEHgBwt/AEGUCAt/AEHICAt/AEGUCQt/AEGACgt/AEGICgt/AEG6Cgt/AEHcCgt/AEGoCwt/AEGyCwt/AEG8Cwt/AEHKCwt/AEHQCwt/AEHWCwt/AEHiCwt/AEHqCwt/AEH2Cwt/AEH6Cwt/AEH+Cwt/AEGEDAt/AEGKDAt/AEGQDAt/AEGWDAt/AEGaDAt/AEGgDAt/AEGkDAt/AEGqDAt/AEGwDAt/AEG8DAt/AEHADAt/AEHSDAt/AEHWDAt/AEHsDAt/AEHwDAt/AEGCDQt/AEGGDQt/AEGcDQt/AEGgDQt/AEG8DQt/AEHADQt/AEHcDQt/AEHgDQt/AEHsDQt/AEHwDQt/AEGEDgt/AEGIDgt/AEGeDgt/AEGiDgt/AEG4Dgt/AEG8Dgt/AEHSDgt/AEHWDgt/AEHoDgt/AEHsDgt/AEH6Dgt/AEGKDwt/AEGYDwt/AEGcDwt/AEGqDwt/AEGuDwt/AEHEDwt/AEHIDwt/AEHeDwt/AEHiDwt/AEHwDwt/AEH4Dwt/AEGKEAt/AEGcEAt/AEGkEAt/AEGqEAt/AEGwEAt/AEGiEgt/AEH4Ewt/AEHqFQt/AEH8FQt/AEGIFgt/AEGUFgt/AEGWFgt/AEGmFgt/AEG4Fgt/AEHwFgt/AEH+Fgt/AEGQFwt/AEHIFwt/AEHWFwt/AEHmFwt/AEGcGAt/AEGoGAt/AEG4GAt/AEHuGAt/AEGEGQt/AEGYGQt/AEGyGQt/AEH8GQt/AEGGGgt/AEGIGgt/AEGUGgt/AEGYGgsH+YqAgACVAQZtZW1vcnkCAAVkYXRhMAMABWRhdGExAwEFZGF0YTIDAgVkYXRhMwMDBWRhdGE0AwQFZGF0YTUDBQVkYXRhNgMGBWRhdGE3AwcFZGF0YTgDCAVkYXRhOQMJBmRhdGExMAMKBmRhdGExMQMLBmRhdGExMgMMBmRhdGExMwMNBmRhdGExNAMOBmRhdGExNQMPBmRhdGExNgMQBmRhdGExNwMRBmRhdGExOAMSBmRhdGExOQMTBmRhdGEyMAMUBmRhdGEyMQMVBmRhdGEyMgMWBmRhdGEyMwMXBmRhdGEyNAMYBmRhdGEyNQMZBmRhdGEyNgMaBmRhdGEyNwMbBmRhdGEyOAMcBmRhdGEyOQMdBmRhdGEzMAMeBmRhdGEzMQMfBmRhdGEzMgMgBmRhdGEzMwMhBmRhdGEzNAMiBmRhdGEzNQMjBmRhdGEzNgMkBmRhdGEzNwMlBmRhdGEzOAMmBmRhdGEzOQMnBmRhdGE0MAMoBmRhdGE0MQMpBmRhdGE0MgMqBmRhdGE0MwMrBmRhdGE0NAMsBmRhdGE0NQMtBmRhdGE0NgMuBmRhdGE0NwMvBmRhdGE0OAMwBmRhdGE0OQMxBmRhdGE1MAMyBmRhdGE1MQMzBmRhdGE1MgM0BmRhdGE1MwM1BmRhdGE1NAM2BmRhdGE1NQM3BmRhdGE1NgM4BmRhdGE1NwM5BmRhdGE1OAM6BmRhdGE1OQM7BmRhdGE2MAM8BmRhdGE2MQM9BmRhdGE2MgM+BmRhdGE2MwM/BmRhdGE2NANABmRhdGE2NQNBBmRhdGE2NgNCBmRhdGE2NwNDBmRhdGE2OANEBmRhdGE2OQNFBmRhdGE3MANGBmRhdGE3MQNHBmRhdGE3MgNIBmRhdGE3MwNJBmRhdGE3NANKBmRhdGE3NQNLBmRhdGE3NgNMBmRhdGE3NwNNBmRhdGE3OANOBmRhdGE3OQNPBmRhdGE4MANQBmRhdGE4MQNRBmRhdGE4MgNSBmRhdGE4MwNTBmRhdGE4NANUBmRhdGE4NQNVBmRhdGE4NgNWBmRhdGE4NwNXBmRhdGE4OANYBmRhdGE4OQNZBmRhdGE5MANaBmRhdGE5MQNbBmRhdGE5MgNcBmRhdGE5MwNdBmRhdGE5NANeBmRhdGE5NQNfBmRhdGE5NgNgBmRhdGE5NwNhBmRhdGE5OANiBmRhdGE5OQNjB2RhdGExMDADZAdkYXRhMTAxA2UHZGF0YTEwMgNmB2RhdGExMDMDZwdkYXRhMTA0A2gHZGF0YTEwNQNpB2RhdGExMDYDagdkYXRhMTA3A2sHZGF0YTEwOANsB2RhdGExMDkDbQdkYXRhMTEwA24HZGF0YTExMQNvB2RhdGExMTIDcAdkYXRhMTEzA3EHZGF0YTExNANyB2RhdGExMTUDcwdkYXRhMTE2A3QHZGF0YTExNwN1B2RhdGExMTgDdgdkYXRhMTE5A3cHZGF0YTEyMAN4B2RhdGExMjEDeQdkYXRhMTIyA3oHZGF0YTEyMwN7B2RhdGExMjQDfAdkYXRhMTI1A30HZGF0YTEyNgN+B2RhdGExMjcDfwdkYXRhMTI4A4ABB2RhdGExMjkDgQEHZGF0YTEzMAOCAQdkYXRhMTMxA4MBB2RhdGExMzIDhAEHZGF0YTEzMwOFAQdkYXRhMTM0A4YBB2RhdGExMzUDhwEHZGF0YTEzNgOIAQdkYXRhMTM3A4kBB2RhdGExMzgDigEHZGF0YTEzOQOLAQdkYXRhMTQwA4wBB2RhdGExNDEDjQEHZGF0YTE0MgOOAQdkYXRhMTQzA48BB2RhdGExNDQDkAEHZGF0YTE0NQORAQdkYXRhMTQ2A5IBB2RhdGExNDcDkwELsp+AgACUAQBBAQsOZGV2aWNlVW5rbm93bgAAQRALDmRldmljZURlc2t0b3AAAEEgCw1kZXZpY2VNb2JpbGUAAEEuCwxtb2RlVW5rbm93bgAAQTwLDG1vZGVEZXNrdG9wAABBygALC21vZGVNb2JpbGUAAEHWAAsPYnJvd3NlclVua25vd24AAEHmAAsVYnJvd3NlckRlc2t0b3BTYWZhcmkAAEH8AAsUYnJvd3Nlck1vYmlsZVNhZmFyaQAAQZIBCxNvcmllbnRhdGlvblVua25vd24AAEGmAQsVb3JpZW50YXRpb25MYW5kc2NhcGUAAEG8AQsUb3JpZW50YXRpb25Qb3J0cmFpdAAAQdIBCwhvcGFjaXR5AABB3AELC3Zpc2liaWxpdHkAAEHoAQsIei1pbmRleAAAQfIBCwhkaXNwbGF5AABB/AELBmJsb2NrAABBhAILBW5vbmUAAEGKAgsLdG9wJTIwbGVmdAAAQZYCCwdjZW50ZXIAAEGeAgsM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'].map(__bytes => {
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
var kDeviceUnknown = lS(0, 0);
var kDeviceDesktop = lS(0, 1);
var kDeviceMobile = lS(0, 2);
var kModeUnknown = lS(0, 3);
var kModeDesktop = lS(0, 4);
var kModeMobile = lS(0, 5);
var kBrowserUnknown = lS(0, 6);
var kBrowserDesktopSafari = lS(0, 7);
var kBrowserMobileSafari = lS(0, 8);
var kOrientationUnknown = lS(0, 9);
var kOrientationLandscape = lS(0, 10);
var kOrientationPortrait = lS(0, 11);
var kShowModeHyperlinksOnly = 2;
var kSoundTrackModePlayOnce = 0;
var kSoundTrackModeLooping = 1;
var kSoundTrackModeOff = 2;
var kOpacityPropertyName = lS(0, 12);
var kVisibilityPropertyName = lS(0, 13);
var kZIndexPropertyName = lS(0, 14);
var kDisplayPropertyName = lS(0, 15);
var kDisplayBlockPropertyValue = lS(0, 16);
var kDisplayNonePropertyValue = lS(0, 17);
var kTransformOriginTopLeftPropertyValue = lS(0, 18);
var kTransformOriginCenterPropertyValue = lS(0, 19);
var kTransformStylePreserve3DPropertyValue = lS(0, 20);
var kTransformStyleFlatPropertyValue = lS(0, 21);
var kPositionAbsolutePropertyValue = lS(0, 22);
var kPositionRelativePropertyValue = lS(0, 23);
var kBackfaceVisibilityHiddenPropertyValue = lS(0, 24);
var kiPhoneDeviceWidth = 320;
var kiPhoneDeviceHeight = 480;
var kiPhoneLandscapeButtonBarHeight = 32;
var kiPhonePortraitButtonBarHeight = 44;
var kiPhoneUrlBarHeight = 60;
var kiPhoneStatusBarHeight = 20;
var kiPadDeviceWidth = 768;
var kiPadDeviceHeight = 1024;
var kiPadLandscapeButtonBarHeight = 32;
var kiPadPortraitButtonBarHeight = 44;
var kiPadUrlBarHeight = 0;
var kiPadStatusBarHeight = 0;
var kiPadAddressBarHeight = 30;
var kiPadBookmarksBarHeight = 30;
var kiPadMaxMoviesPerScene = 20;
var kMaxSceneDownloadWaitTime = 15000;
var kMaxScriptDownloadWaitTime = 20000;
var kWaitingIndicatorFadeOutDuration = 2000;
var kHideAddressBarDelay = 3000;
var kSceneLoadPollInterval = 100;
var kSceneLoadDisplaySpinnerTime = 3000;
var kSceneLoadDisplaySpinnerPollCount = kSceneLoadDisplaySpinnerTime / kSceneLoadPollInterval;
var kSceneLoadGiveUpTime = 60000;
var kSceneLoadGiveUpPollCount = kSceneLoadGiveUpTime / kSceneLoadPollInterval;
var kPropertyName_currentSlide = lS(0, 25);
var kKeyCode_Plus = 107;
var kKeyCode_Minus = 109;
var kKeyCode_Dot = 110;
var kKeyCode_F11 = 122;
var kKeyCode_F12 = 123;
var kKeyCode_Hyphen = 189;
var kKeyCode_Equal = 187;
var kKeyCode_Period = 190;
var kKeyCode_Slash = 191;
var kKeyCode_Space = 32;
var kKeyCode_Escape = 27;
var kKeyCode_LeftArrow = 37;
var kKeyCode_UpArrow = 38;
var kKeyCode_RightArrow = 39;
var kKeyCode_DownArrow = 40;
var kKeyCode_OpenBracket = 219;
var kKeyCode_CloseBracket = 221;
var kKeyCode_Home = 36;
var kKeyCode_End = 35;
var kKeyCode_PageUp = 33;
var kKeyCode_PageDown = 34;
var kKeyCode_Return = 13;
var kKeyCode_N = 78;
var kKeyCode_P = 80;
var kKeyCode_Q = 81;
var kKeyCode_S = 83;
var kKeyCode_Delete = 8;
var kKeyCode_0 = 48;
var kKeyCode_9 = 57;
var kKeyCode_Numeric_0 = 96;
var kKeyCode_Numeric_9 = 105;
var kKeyModifier_Shift = 1000;
var kKeyModifier_Ctrl = 2000;
var kKeyModifier_Alt = 3000;
var kKeyModifier_Meta = 4000;
var kHelpPlacardMainTitle = CoreDocs.loc(lS(0, 26), lS(0, 27));
var kHelpPlacardNavigationTitle = CoreDocs.loc(lS(0, 28), lS(0, 29));
var kHelpPlacardOtherTitle = CoreDocs.loc(lS(0, 30), lS(0, 31));
var kHelpPlacardAdvanceToNextBuild = CoreDocs.loc(lS(0, 32), lS(0, 33));
var kHelpPlacardGoBackToPreviousBuild = CoreDocs.loc(lS(0, 34), lS(0, 35));
var kHelpPlacardAdvanceToNextSlide = CoreDocs.loc(lS(0, 36), lS(0, 37));
var kHelpPlacardGoBackToPreviousSlide = CoreDocs.loc(lS(0, 38), lS(0, 39));
var kHelpPlacardGoToFirstSlide = CoreDocs.loc(lS(0, 40), lS(0, 41));
var kHelpPlacardGoToLastSlide = CoreDocs.loc(lS(0, 42), lS(0, 43));
var kHelpPlacardQuitPresentationMode = CoreDocs.loc(lS(0, 44), lS(0, 45));
var kHelpPlacardGoToSpecificSlide = CoreDocs.loc(lS(0, 46), lS(0, 47));
var kHelpPlacardShowOrHideKeyboardShortcuts = CoreDocs.loc(lS(0, 48), lS(0, 49));
var kHelpPlacardShowOrHideTheCurrentSlideNumber = CoreDocs.loc(lS(0, 50), lS(0, 51));
var kUnableToReachiWorkTryAgain = CoreDocs.loc(lS(0, 52), lS(0, 53));
var kSlideLabel = CoreDocs.loc(lS(0, 54), lS(0, 55));
var kTapOrSwipeToAdvance = CoreDocs.loc(lS(0, 56), lS(0, 57));
var kOSUnknown = lS(0, 58);
var kOSWindows = lS(0, 59);
var kOSMacOSX = lS(0, 60);
var kOSiOS = lS(0, 61);
var gTheoreticalMaxPixelCount = 1024 * 1024 * 3;
var gSafeMaxPixelCount = gTheoreticalMaxPixelCount * 0.9;
var gShowController = null;
var gDevice = kDeviceUnknown;
var gBrowser = kBrowserUnknown;
var gMode = kModeUnknown;
var gIpad = false;
var gOS = kOSUnknown;
var browserPrefix, browserVersion;
var userAgentString = window.navigator.userAgent;
var isMacOS = window.navigator.platform.indexOf(lS(0, 62)) !== -1;
var isChrome = userAgentString.lastIndexOf(lS(0, 63)) > 0;
(() => {
    const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
        env: {
            impFunc1: () => {
                {
                    browserPrefix = lS(0, 64);
                }
            },
            impFunc2: () => {
                {
                    (() => {
                        const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var isIE = userAgentString.lastIndexOf(lS(0, 65)) > 0;
                                        (() => {
                                            const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                                                env: {
                                                    impFunc1: () => {
                                                        {
                                                            var revisionStringIE = userAgentString.substring(userAgentString.lastIndexOf(lS(0, 66)), userAgentString.lastIndexOf(lS(0, 67)));
                                                            var revisionIE = [];
                                                            (() => {
                                                                const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                                                                    env: {
                                                                        impFunc1: () => {
                                                                            {
                                                                                revisionIE = revisionStringIE.split(lS(0, 69));
                                                                                browserVersion = parseFloat(revisionIE[1]);
                                                                            }
                                                                        },
                                                                        impFunc2: () => {
                                                                            {
                                                                                (() => {
                                                                                    const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                        env: {
                                                                                            impFunc1: () => {
                                                                                                {
                                                                                                    revisionIE = revisionStringIE.split(lS(0, 71));
                                                                                                    browserVersion = parseFloat(revisionIE[1]);
                                                                                                }
                                                                                            },
                                                                                            impFunc2: () => {
                                                                                                {
                                                                                                    browserVersion = 11;
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    });
                                                                                    const __exports = __ifInstance4.exports;
                                                                                    return __exports.data(revisionStringIE.lastIndexOf(lS(0, 70)) > 0 ? 1 : 0);
                                                                                })();
                                                                            }
                                                                        }
                                                                    }
                                                                });
                                                                const __exports = __ifInstance3.exports;
                                                                return __exports.data(revisionStringIE.lastIndexOf(lS(0, 68)) > 0 ? 1 : 0);
                                                            })();
                                                            browserPrefix = lS(0, 72);
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                        {
                                                            browserPrefix = lS(0, 73);
                                                        }
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance2.exports;
                                            return __exports.data(isIE ? 1 : 0);
                                        })();
                                    }
                                },
                                impFunc2: () => {
                                    {
                                        (() => {
                                            const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                                                env: {
                                                    impFunc1: () => {
                                                        {
                                                            browserPrefix = lS(0, 74);
                                                            browserVersion = parseFloat(navigator.appVersion.split(lS(0, 75))[1]);
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance5.exports;
                                            return __exports.data(Prototype.Browser.IE ? 1 : 0);
                                        })();
                                    }
                                }
                            }
                        });
                        const __exports = __ifInstance1.exports;
                        return __exports.data(Prototype.Browser.Gecko ? 1 : 0);
                    })();
                }
            }
        }
    });
    const __exports = __ifInstance0.exports;
    return __exports.data(Prototype.Browser.WebKit ? 1 : 0);
})();
var kKeyframesPropertyName = lS(0, 76) + browserPrefix + lS(0, 77);
var kAnimationNamePropertyName = lS(0, 78) + browserPrefix + lS(0, 79);
var kAnimationDurationPropertyName = lS(0, 80) + browserPrefix + lS(0, 81);
var kAnimationDelayPropertyName = lS(0, 82) + browserPrefix + lS(0, 83);
var kAnimationFillModePropertyName = lS(0, 84) + browserPrefix + lS(0, 85);
var kAnimationTimingFunctionPropertyName = lS(0, 86) + browserPrefix + lS(0, 87);
var kAnimationIterationCountPropertyName = lS(0, 88) + browserPrefix + lS(0, 89);
var kTransformPropertyName = lS(0, 90) + browserPrefix + lS(0, 91);
var kTransformOriginPropertyName = lS(0, 92) + browserPrefix + lS(0, 93);
var kTransformOriginZPropertyName = lS(0, 94) + browserPrefix + lS(0, 95);
var kTransitionPropertyName = lS(0, 96) + browserPrefix + lS(0, 97);
var kTransitionDurationName = lS(0, 98) + browserPrefix + lS(0, 99);
var kTransformStylePropertyName = lS(0, 100) + browserPrefix + lS(0, 101);
var kTransitionPropertyName = lS(0, 102) + browserPrefix + lS(0, 103);
var kTransitionEndEventName = browserPrefix + lS(0, 104);
var kAnimationEndEventName = browserPrefix + lS(0, 105);
var kPerspectivePropertyName = lS(0, 106) + browserPrefix + lS(0, 107);
var kPerspectiveOriginPropertyName = lS(0, 108) + browserPrefix + lS(0, 109);
var kBackfaceVisibilityPropertyName = lS(0, 110) + browserPrefix + lS(0, 111);
var kBoxShadowPropertyName = lS(0, 112) + browserPrefix + lS(0, 113);
var kBorderPropertyName = lS(0, 114);
var kBackgroundImagePropertyName = lS(0, 115);
var kFullscreenChangeEventName = browserPrefix + lS(0, 116);
(() => {
    const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
        env: {
            impFunc1: () => {
                {
                    (() => {
                        const __callInstance20 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    window.attachEvent(lS(0, 117), setupShowController);
                                }
                            }
                        });
                        const __exports = __callInstance20.exports;
                        return __exports.data();
                    })();
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
                                            const __callInstance19 = new WebAssembly.Instance(__callWasmModule, {
                                                env: {
                                                    impFunc: () => {
                                                        window.addEventListener(lS(0, 118), setupShowController, false);
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
                                                        document.addEventListener(lS(0, 119), setupShowController, false);
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
                        const __exports = __ifInstance7.exports;
                        return __exports.data(window.addEventListener ? 1 : 0);
                    })();
                }
            }
        }
    });
    const __exports = __ifInstance6.exports;
    return __exports.data(window.attachEvent ? 1 : 0);
})();
function static_url(a) {
    return a;
}
function setupShowController() {
    var a = isMobileSafari();
    (() => {
        const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        gBrowser = kBrowserMobileSafari;
                        gDevice = kDeviceMobile;
                        gMode = kModeMobile;
                        gIpad = isiPad();
                    }
                },
                impFunc2: () => {
                    {
                        gBrowser = kBrowserDesktopSafari;
                        gDevice = kDeviceDesktop;
                        gMode = kModeDesktop;
                    }
                }
            }
        });
        const __exports = __ifInstance8.exports;
        return __exports.data(a ? 1 : 0);
    })();
    (() => {
        const __callInstance17 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    debugMessage(kDebugSetupShowController, lS(0, 120));
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
                    debugMessage(kDebugSetupShowController, lS(0, 121));
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
                    debugMessage(kDebugSetupShowController, lS(0, 122));
                }
            }
        });
        const __exports = __callInstance15.exports;
        return __exports.data();
    })();
    (() => {
        const __callInstance14 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    debugMessage(kDebugSetupShowController, lS(0, 123) + navigator.userAgent);
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
                    debugMessage(kDebugSetupShowController, lS(0, 124) + window.location.href);
                }
            }
        });
        const __exports = __callInstance13.exports;
        return __exports.data();
    })();
    (() => {
        const __ifInstance9 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        gOS = kOSWindows;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance9.exports;
        return __exports.data(navigator.userAgent.match(/Windows/) ? 1 : 0);
    })();
    var b = getUrlParameter(lS(0, 125));
    (() => {
        const __ifInstance10 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        gSafeMaxPixelCount = 1024 * 1024 * parseInt(b);
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance10.exports;
        return __exports.data(b != lS(0, 126) ? 1 : 0);
    })();
    (() => {
        const __ifInstance11 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        (() => {
                            const __callInstance12 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        debugMessage(kDebugSetupShowController, lS(0, 128) + gDevice + lS(0, 129));
                                    }
                                }
                            });
                            const __exports = __callInstance12.exports;
                            return __exports.data();
                        })();
                        gDevice = kDeviceDesktop;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance11.exports;
        return __exports.data(navigator.userAgent.indexOf(lS(0, 127)) != -1 ? 1 : 0);
    })();
    (() => {
        const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        (() => {
                            const __callInstance11 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        debugMessage(kDebugSetupShowController, lS(0, 131) + gDevice + lS(0, 132));
                                    }
                                }
                            });
                            const __exports = __callInstance11.exports;
                            return __exports.data();
                        })();
                        gDevice = kDeviceMobile;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance12.exports;
        return __exports.data(navigator.userAgent.indexOf(lS(0, 130)) != -1 ? 1 : 0);
    })();
    (() => {
        const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        (() => {
                            const __callInstance10 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        debugMessage(kDebugSetupShowController, lS(0, 134) + gMode + lS(0, 135));
                                    }
                                }
                            });
                            const __exports = __callInstance10.exports;
                            return __exports.data();
                        })();
                        gMode = kModeDesktop;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance13.exports;
        return __exports.data(navigator.userAgent.indexOf(lS(0, 133)) != -1 ? 1 : 0);
    })();
    (() => {
        const __ifInstance14 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        (() => {
                            const __callInstance9 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        debugMessage(kDebugSetupShowController, lS(0, 137) + gMode + lS(0, 138));
                                    }
                                }
                            });
                            const __exports = __callInstance9.exports;
                            return __exports.data();
                        })();
                        gMode = kModeMobile;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance14.exports;
        return __exports.data(navigator.userAgent.indexOf(lS(0, 136)) != -1 ? 1 : 0);
    })();
    (() => {
        const __callInstance8 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    debugMessage(kDebugSetupShowController, lS(0, 139) + gDevice);
                }
            }
        });
        const __exports = __callInstance8.exports;
        return __exports.data();
    })();
    (() => {
        const __callInstance7 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    debugMessage(kDebugSetupShowController, lS(0, 140) + gBrowser);
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
                    debugMessage(kDebugSetupShowController, lS(0, 141) + gMode);
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
                    debugMessage(kDebugSetupShowController, lS(0, 142) + gOS);
                }
            }
        });
        const __exports = __callInstance5.exports;
        return __exports.data();
    })();
    gShowController = new ShowController();
    (() => {
        const __callInstance4 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    gShowController.displayManager.showWaitingIndicator();
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
                    gShowController.delegate.setPlaybackReadyHandler(function () {
                        (() => {
                            const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        gShowController.startShow();
                                    }
                                }
                            });
                            const __exports = __callInstance2.exports;
                            return __exports.data();
                        })();
                    });
                }
            }
        });
        const __exports = __callInstance3.exports;
        return __exports.data();
    })();
}
function extractDelegateFromUrlParameter() {
    var d = getUrlParameter(lS(0, 143));
    var a;
    (() => {
        const __ifInstance15 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        a = new NullDelegate();
                    }
                },
                impFunc2: () => {
                    {
                        var c = d.indexOf(lS(0, 146));
                        a = window;
                        (() => {
                            const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                                env: {
                                    test: () => {
                                        return c != -1 ? 1 : 0;
                                    },
                                    update: () => {
                                    },
                                    body: () => {
                                        {
                                            var b = d.substring(0, c);
                                            a = a[b];
                                            d = d.substring(c + 1);
                                            c = d.indexOf(lS(0, 147));
                                        }
                                    }
                                }
                            });
                            const __exports = __forInstance0.exports;
                            return __exports.data();
                        })();
                        a = a[d];
                    }
                }
            }
        });
        const __exports = __ifInstance15.exports;
        return __exports.data(d == lS(0, 144) || d == null || typeof d == lS(0, 145) ? 1 : 0);
    })();
    return a;
}
var NullDelegate = Class.create({
    initialize: function () {
    },
    showDidLoad: function () {
    },
    showExited: function () {
        (() => {
            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        history.go(-1);
                    }
                }
            });
            const __exports = __callInstance1.exports;
            return __exports.data();
        })();
    },
    propertyChanged: function (b, a) {
    },
    setPlaybackReadyHandler: function (a) {
        (() => {
            const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        a();
                    }
                }
            });
            const __exports = __callInstance0.exports;
            return __exports.data();
        })();
    }
});