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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG2oSAgABlfwBBAQt/AEEKC38AQRQLfwBBJgt/AEE2C38AQcgAC38AQdwAC38AQewAC38AQfoAC38AQYwBC38AQZwBC38AQawBC38AQboBC38AQcQBC38AQc4BC38AQfoBC38AQYICC38AQYQCC38AQYYCC38AQYgCC38AQYwCC38AQZQCC38AQagCC38AQbwCC38AQdACC38AQd4CC38AQeICC38AQfACC38AQfgCC38AQYwDC38AQZQDC38AQaQDC38AQboDC38AQcADC38AQcYDC38AQdQDC38AQeADC38AQbYEC38AQboEC38AQcIEC38AQeQEC38AQeoEC38AQfwEC38AQY4FC38AQZYFC38AQagFC38AQboFC38AQcgFC38AQdYFC38AQZYGC38AQaIGC38AQa4GC38AQboGC38AQcYGC38AQYYHC38AQcYHC38AQcoHC38AQdAHC38AQeoHC38AQYAIC38AQdIIC38AQZwJC38AQewJC38AQbYKC38AQYgLC38AQZQLC38AQeYLC38AQfILC38AQdYMC38AQeoMC38AQfIMC38AQfgMC38AQYANC38AQawNC38AQeQNC38AQf4NC38AQZoOC38AQaYOC38AQbIOC38AQdYOC38AQfAOC38AQfwOC38AQYIPC38AQYgPC38AQZIPC38AQZgPC38AQZ4PC38AQaAPC38AQagPC38AQbAPC38AQbgPC38AQcYPC38AQc4PC38AQdQPC38AQdoPC38AQeQPC38AQfQPC38AQYoQC38AQagQC38AQbIQC38AQboQCweOh4CAAGYGbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwIFZGF0YTMDAwVkYXRhNAMEBWRhdGE1AwUFZGF0YTYDBgVkYXRhNwMHBWRhdGE4AwgFZGF0YTkDCQZkYXRhMTADCgZkYXRhMTEDCwZkYXRhMTIDDAZkYXRhMTMDDQZkYXRhMTQDDgZkYXRhMTUDDwZkYXRhMTYDEAZkYXRhMTcDEQZkYXRhMTgDEgZkYXRhMTkDEwZkYXRhMjADFAZkYXRhMjEDFQZkYXRhMjIDFgZkYXRhMjMDFwZkYXRhMjQDGAZkYXRhMjUDGQZkYXRhMjYDGgZkYXRhMjcDGwZkYXRhMjgDHAZkYXRhMjkDHQZkYXRhMzADHgZkYXRhMzEDHwZkYXRhMzIDIAZkYXRhMzMDIQZkYXRhMzQDIgZkYXRhMzUDIwZkYXRhMzYDJAZkYXRhMzcDJQZkYXRhMzgDJgZkYXRhMzkDJwZkYXRhNDADKAZkYXRhNDEDKQZkYXRhNDIDKgZkYXRhNDMDKwZkYXRhNDQDLAZkYXRhNDUDLQZkYXRhNDYDLgZkYXRhNDcDLwZkYXRhNDgDMAZkYXRhNDkDMQZkYXRhNTADMgZkYXRhNTEDMwZkYXRhNTIDNAZkYXRhNTMDNQZkYXRhNTQDNgZkYXRhNTUDNwZkYXRhNTYDOAZkYXRhNTcDOQZkYXRhNTgDOgZkYXRhNTkDOwZkYXRhNjADPAZkYXRhNjEDPQZkYXRhNjIDPgZkYXRhNjMDPwZkYXRhNjQDQAZkYXRhNjUDQQZkYXRhNjYDQgZkYXRhNjcDQwZkYXRhNjgDRAZkYXRhNjkDRQZkYXRhNzADRgZkYXRhNzEDRwZkYXRhNzIDSAZkYXRhNzMDSQZkYXRhNzQDSgZkYXRhNzUDSwZkYXRhNzYDTAZkYXRhNzcDTQZkYXRhNzgDTgZkYXRhNzkDTwZkYXRhODADUAZkYXRhODEDUQZkYXRhODIDUgZkYXRhODMDUwZkYXRhODQDVAZkYXRhODUDVQZkYXRhODYDVgZkYXRhODcDVwZkYXRhODgDWAZkYXRhODkDWQZkYXRhOTADWgZkYXRhOTEDWwZkYXRhOTIDXAZkYXRhOTMDXQZkYXRhOTQDXgZkYXRhOTUDXwZkYXRhOTYDYAZkYXRhOTcDYQZkYXRhOTgDYgZkYXRhOTkDYwdkYXRhMTAwA2QLipSAgABlAEEBCwhTdG9wcGVkAABBCgsJU3RhcnRpbmcAAEEUCxFEb3dubG9hZGluZ1NjaXB0AABBJgsPU2V0dGluZ1VwU2NlbmUAAEE2CxFJZGxlQXRGaW5hbFN0YXRlAABByAALE0lkbGVBdEluaXRpYWxTdGF0ZQAAQdwACw5XYWl0aW5nVG9KdW1wAABB7AALDFJlYWR5VG9KdW1wAABB+gALEVdhaXRpbmdUb0Rpc3BsYXkAAEGMAQsPUmVhZHlUb0Rpc3BsYXkAAEGcAQsOV2FpdGluZ1RvUGxheQAAQawBCwxSZWFkeVRvUGxheQAAQboBCwhQbGF5aW5nAABBxAELCGtleWRvd24AAEHOAQsqU2hvd0NvbnRyb2xsZXIlM0FTbGlkZUluZGV4RGlkQ2hhbmdlRXZlbnQAAEH6AQsGLi4lMkYAAEGCAgsBAABBhAILAQAAQYYCCwEAAEGIAgsDRU4AAEGMAgsHcmVzaXplAABBlAILE3NsaWRlc2hvd05hdmlnYXRvcgAAQagCCxNzbGlkZU51bWJlckNvbnRyb2wAAEG8AgsTc2xpZGVOdW1iZXJEaXNwbGF5AABB0AILDGhlbHBQbGFjYXJkAABB3gILA21zAABB4gILDGNvbnRleHRtZW51AABB8AILBmNsaWNrAABB+AILEnRhcFByZXZpb3VzQnV0dG9uAABBjAMLBmNsaWNrAABBlAMLDnRhcE5leHRCdXR0b24AAEGkAwsVcmVzdGFydGluZ1NjZW5lSW5kZXgAAEG6AwsEJTNGAABBwAMLBCUyMwAAQcYDCw1jdXJyZW50U2xpZGUAAEHUAwsLbmF2aWdhdGlvbgAAQeADC1QtJTIwaG1tbSUyMHdlJTIwc2VlbSUyMHRvJTIwaGF2ZSUyMGFycml2ZWQlMjBoZXJlJTIwZnJvbSUyMGFuJTIwdW5wcmVkaWN0ZWQlMjBzdGF0ZQAAQbYECwNtcwAAQboECwZ2aWRlbwAAQcIECyFwcm9jZXNzQ2xpY2tPclRhcEF0RGlzcGxheUNvT3JkcwAAQeQECwVsZWZ0AABB6gQLEWhhbmRsZVN3aXBlRXZlbnQAAEH8BAsRaGFuZGxlU3dpcGVFdmVudAAAQY4FCwZyaWdodAAAQZYFCxFoYW5kbGVTd2lwZUV2ZW50AABBqAULEWhhbmRsZVN3aXBlRXZlbnQAAEG6BQsMb25Nb3VzZURvd24AAEHIBQsMb25Nb3VzZURvd24AAEHWBQs/LSUyMGNhbid0JTIwZG8lMjBpdCUyQyUyMHdlJ3JlJTIwaW4lMjBoeXBlcmxpbmtzJTIwb25seSUyMG1vZGUAAEGWBgsLb25LZXlQcmVzcwAAQaIGCwtvbktleVByZXNzAABBrgYLC29uS2V5UHJlc3MAAEG6BgsLb25LZXlQcmVzcwAAQcYGCz8tJTIwY2FuJ3QlMjBkbyUyMGl0JTJDJTIwd2UncmUlMjBpbiUyMGh5cGVybGlua3MlMjBvbmx5JTIwbW9kZQAAQYYHCz8tJTIwY2FuJ3QlMjBkbyUyMGl0JTJDJTIwd2UncmUlMjBpbiUyMGh5cGVybGlua3MlMjBvbmx5JTIwbW9kZQAAQcYHCwNtcwAAQcoHCwVpZGxlAABB0AcLGGN1cnJlbnRTY2VuZURpZENvbXBsZXRlAABB6gcLFW5leHRTY2VuZUluZGV4JTNBJTIwAABBgAgLUSUyMGNhbid0JTIwYWR2YW5jZSUyMG5vdyUyQyUyMG5vdCUyMGluJTIwYW4lMjBpZGxlJTIwc3RhdGUlMjAoY3VycmVudGx5JTIwaW4lMjAnAABB0ggLSSclMjBzdGF0ZSklMkMlMjBxdWV1ZSUyMHVwJTIwYWN0aW9uJTIwdG8lMjBydW4lMjBpbiUyMG5leHQlMjBpZGxlJTIwdGltZQAAQZwJC05jYW4ndCUyMGFkdmFuY2UlMjBub3clMkMlMjBub3QlMjBpbiUyMGFuJTIwaWRsZSUyMHN0YXRlJTIwKGN1cnJlbnRseSUyMGluJTIwJwAAQewJC0knJTIwc3RhdGUpJTJDJTIwcXVldWUlMjB1cCUyMGFjdGlvbiUyMHRvJTIwcnVuJTIwaW4lMjBuZXh0JTIwaWRsZSUyMHRpbWUAAEG2CgtQY2FuJ3QlMjBnbyUyMGJhY2slMjBub3clMkMlMjBub3QlMjBpbiUyMGFuJTIwaWRsZSUyMHN0YXRlJTIwKGN1cnJlbnRseSUyMGluJTIwJwAAQYgLCwsnJTIwc3RhdGUpAABBlAsLUGNhbid0JTIwZ28lMjBiYWNrJTIwbm93JTJDJTIwbm90JTIwaW4lMjBhbiUyMGlkbGUlMjBzdGF0ZSUyMChjdXJyZW50bHklMjBpbiUyMCcAAEHmCwsLJyUyMHN0YXRlKQAAQfILC2Jwb3NpdGlvbiUzQWFic29sdXRlJTNCYmFja2dyb3VuZC1jb2xvciUzQXRyYW5zcGFyZW50JTNCJTIwbGVmdCUzQTBweCUzQiUyMHRvcCUzQTBweCUzQiUyMHdpZHRoJTNBAABB1gwLEnB4JTNCJTIwaGVpZ2h0JTNBAABB6gwLBnB4JTNCAABB8gwLBGRpdgAAQfgMCwZzdHlsZQAAQYANCytjYW4ndCUyMGp1bXAlMjBub3clMkMlMjBjdXJyZW50bHklMjBpbiUyMCcAAEGsDQs3JyUyMHN0YXRlJTIwd2hpY2glMjBkb2VzJTIwbm90JTIwc3VwcG9ydHMlMjBqdW1waW5nLi4uAABB5A0LGCUyNnJlc3RhcnRpbmdTY2VuZUluZGV4AABB/g0LGyUyNnJlc3RhcnRpbmdTY2VuZUluZGV4JTNEAABBmg4LC3RyYW5zaXRpb24AAEGmDgsLdHJhbnNpdGlvbgAAQbIOCyJjb20uYXBwbGUuaVdvcmsuS2V5bm90ZS5CTFRCbGluZHMAAEHWDgsYY3VycmVudFNjZW5lRGlkQ29tcGxldGUAAEHwDgsKdW5kZWZpbmVkAABB/A4LBCUzRgAAQYIPCwQlMjMAAEGIDwsIS2V5bm90ZQAAQZIPCwQlMjMAAEGYDwsEJTNGAABBng8LAQAAQaAPCwZlbmRlZAAAQagPCwYuLiUyRgAAQbAPCwZlbmRlZAAAQbgPCwwlM0ZzbGlkZSUzRAAAQcYPCwZmaXJzdAAAQc4PCwVsYXN0AABB1A8LBW5leHQAAEHaDwsJcHJldmlvdXMAAEHkDwsOJTNGc2xpZGVpZCUzRAAAQfQPCxQlM0ZhY3Rpb24lM0RyZXRyZWF0AABBihALHSUzRmFjdGlvbiUzRGV4aXRwcmVzZW50YXRpb24AAEGoEAsIaHR0cCUzQQAAQbIQCwdfYmxhbmsAAEG6EAsKbWFpbHRvJTNBAA=='].map(__bytes => {
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
var kShowControllerState_Stopped = lS(0, 0);
var kShowControllerState_Starting = lS(0, 1);
var kShowControllerState_DownloadingScript = lS(0, 2);
var kShowControllerState_SettingUpScene = lS(0, 3);
var kShowControllerState_IdleAtFinalState = lS(0, 4);
var kShowControllerState_IdleAtInitialState = lS(0, 5);
var kShowControllerState_WaitingToJump = lS(0, 6);
var kShowControllerState_ReadyToJump = lS(0, 7);
var kShowControllerState_WaitingToDisplay = lS(0, 8);
var kShowControllerState_ReadyToDisplay = lS(0, 9);
var kShowControllerState_WaitingToPlay = lS(0, 10);
var kShowControllerState_ReadyToPlay = lS(0, 11);
var kShowControllerState_Playing = lS(0, 12);
var kKeyDownEvent = lS(0, 13);
var kSlideIndexDidChangeEvent = lS(0, 14);
var ShowController = Class.create({
    initialize: function () {
        this.delegate = extractDelegateFromUrlParameter();
        (() => {
            const __callInstance217 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.delegate.showDidLoad();
                    }
                }
            });
            const __exports = __callInstance217.exports;
            return __exports.data();
        })();
        this.showUrl = lS(0, 15);
        this.displayManager = new DisplayManager();
        this.scriptManager = new ScriptManager(this.showUrl);
        this.textureManager = new TextureManager(this.showUrl);
        this.stageManager = new StageManager(this.textureManager, this.scriptManager);
        this.touchController = new TouchController();
        this.animationManager = new AnimationManager();
        this.orientationController = new OrientationController();
        this.activeHyperlinks = new Array();
        this.movieHyperlinks = new Array();
        this.script = null;
        this.currentSceneIndex = -1;
        this.nextSceneIndex = -1;
        this.currentSlideIndex = -1;
        this.previousSlideIndex = -1;
        this.currentSoundTrackIndex = 0;
        this.transformOriginValue = lS(0, 16);
        this.accumulatingDigits = false;
        this.digitAccumulator = 0;
        this.firstSlide = true;
        this.lastSlideViewedIndex = -1;
        this.accountID = lS(0, 17);
        this.guid = lS(0, 18);
        this.locale = lS(0, 19);
        this.isNavigationBarVisible = false;
        this.isFullscreen = false;
        this.volume = 3;
        this.muted = false;
        this.soundTrackPlayer = null;
        this.sceneIndexOfPrebuiltAnimations = -1;
        this.queuedUserAction = null;
        (() => {
            const __callInstance216 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kScriptDidDownloadEvent, this.handleScriptDidDownloadEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance216.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance215 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kScriptDidNotDownloadEvent, this.handleScriptDidNotDownloadEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance215.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance214 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kStageIsReadyEvent, this.handleStageIsReadyEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance214.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance213 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kStageSizeDidChangeEvent, this.handleStageSizeDidChangeEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance213.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance212 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kFullscreenChangeEventName, this.handleFullscreenChangeEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance212.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance211 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        Event.observe(window, lS(0, 20), this.handleWindowResizeEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance211.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance210 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.touchController.registerTapEventCallback(this.handleTapEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance210.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance209 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.changeState(kShowControllerState_Stopped);
                    }
                }
            });
            const __exports = __callInstance209.exports;
            return __exports.data();
        })();
        this.movieCache = null;
        this.movieCacheInfo = null;
        this.audioCache = null;
        this.playbackController = new KPFPlaybackController({}, this.stageManager.stage);
        this.navigatorController = new NavigatorController(document.getElementById(lS(0, 21)));
        this.slideNumberController = new SlideNumberController(document.getElementById(lS(0, 22)));
        this.slideNumberDisplay = new SlideNumberDisplay(document.getElementById(lS(0, 23)));
        this.helpPlacard = new HelpPlacardController(document.getElementById(lS(0, 24)));
        this.isRecording = false;
        this.isRecordingStarted = false;
        (() => {
            const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.animationSupported = false;
                        }
                    },
                    impFunc2: () => {
                        {
                            this.animationSupported = true;
                        }
                    }
                }
            });
            const __exports = __ifInstance0.exports;
            return __exports.data(browserPrefix == lS(0, 25) && browserVersion < 10 ? 1 : 0);
        })();
        (() => {
            const __callInstance208 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(lS(0, 26), this.handleContextMenuEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance208.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance207 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kKeyDownEvent, this.handleKeyDownEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance207.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance206 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.observe(kSwipeEvent, this.handleSwipeEvent.bind(this));
                    }
                }
            });
            const __exports = __callInstance206.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance205 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        Event.observe(this.displayManager.previousButton, lS(0, 27), this.goBackToPreviousSlide.bind(this, lS(0, 28)));
                    }
                }
            });
            const __exports = __callInstance205.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance204 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        Event.observe(this.displayManager.nextButton, lS(0, 29), this.advanceToNextBuild.bind(this, lS(0, 30)));
                    }
                }
            });
            const __exports = __callInstance204.exports;
            return __exports.data();
        })();
    },
    startShow: function () {
        (() => {
            const __callInstance203 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.changeState(kShowControllerState_DownloadingScript);
                    }
                }
            });
            const __exports = __callInstance203.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance202 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.scriptManager.downloadScript(this.delegate);
                    }
                }
            });
            const __exports = __callInstance202.exports;
            return __exports.data();
        })();
    },
    exitShow: function (a) {
        (() => {
            const __callInstance201 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        clearTimeout(this.exitTimeout);
                    }
                }
            });
            const __exports = __callInstance201.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance200 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.delegate.showExited();
                                        }
                                    }
                                });
                                const __exports = __callInstance200.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            this.exitTimeout = setTimeout(function () {
                                (() => {
                                    const __callInstance199 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.delegate.showExited();
                                            }
                                        }
                                    });
                                    const __exports = __callInstance199.exports;
                                    return __exports.data();
                                })();
                            }.bind(this), 750);
                        }
                    }
                }
            });
            const __exports = __ifInstance1.exports;
            return __exports.data(a ? 1 : 0);
        })();
    },
    promptUserToTryAgain: function (b) {
        var a = false;
        a = confirm(b);
        return a;
    },
    handleScriptDidDownloadEvent: function (e) {
        switch (this.state) {
        case kShowControllerState_DownloadingScript:
            this.script = e.memo.script;
            (() => {
                const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __callInstance198 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.displayManager.setHyperlinksOnlyMode();
                                            }
                                        }
                                    });
                                    const __exports = __callInstance198.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance2.exports;
                return __exports.data(this.script.showMode == kShowModeHyperlinksOnly ? 1 : 0);
            })();
            (() => {
                const __callInstance197 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.changeState(kShowControllerState_Starting);
                        }
                    }
                });
                const __exports = __callInstance197.exports;
                return __exports.data();
            })();
            var h;
            var c = parseInt(getUrlParameter(lS(0, 31)));
            var f = document.URL.split(lS(0, 32));
            var a = f[0].split(lS(0, 33));
            (() => {
                const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                c = parseInt(a[1]);
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance3.exports;
                return __exports.data(a[1] ? 1 : 0);
            })();
            (() => {
                const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                h = c;
                            }
                        },
                        impFunc2: () => {
                            {
                                var d = getUrlParameter(lS(0, 34));
                                var g;
                                (() => {
                                    const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    g = parseInt(d);
                                                }
                                            },
                                            impFunc2: () => {
                                                {
                                                    g = 1;
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance5.exports;
                                    return __exports.data(d ? 1 : 0);
                                })();
                                h = this.scriptManager.sceneIndexFromSlideIndex(g - 1);
                            }
                        }
                    }
                });
                const __exports = __ifInstance4.exports;
                return __exports.data(c ? 1 : 0);
            })();
            if (this.script.recording) {
                if (this.script.recording.eventTracks[0].type === lS(0, 35)) {
                    this.narrationManager = new NarrationManager(this.script.recording);
                    h = this.narrationManager.sceneIndexFromNavigationEvent(this.narrationManager.navigationEvents[0]);
                    this.isRecording = true;
                    (() => {
                        const __callInstance196 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    this.jumpToScene(h, false);
                                }
                            }
                        });
                        const __exports = __callInstance196.exports;
                        return __exports.data();
                    })();
                    break;
                }
            }
            if (h > this.script.lastSceneIndex) {
                break;
            }
            var e = this.script.events[h];
            var b = e.automaticPlay == 1 || e.automaticPlay == true;
            (() => {
                const __callInstance195 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.jumpToScene(h, b);
                        }
                    }
                });
                const __exports = __callInstance195.exports;
                return __exports.data();
            })();
            break;
        default:
            (() => {
                const __callInstance194 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            debugMessage(kDebugShowController_HandleScriptDidDownloadEvent, lS(0, 36));
                        }
                    }
                });
                const __exports = __callInstance194.exports;
                return __exports.data();
            })();
            break;
        }
    },
    handleScriptDidNotDownloadEvent: function (b) {
        (() => {
            const __callInstance193 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        debugMessage(kDebugShowController_HandleScriptDidNotDownloadEvent);
                    }
                }
            });
            const __exports = __callInstance193.exports;
            return __exports.data();
        })();
        var a = this.promptUserToTryAgain(kUnableToReachiWorkTryAgain);
        (() => {
            const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance192 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.scriptManager.downloadScript();
                                        }
                                    }
                                });
                                const __exports = __callInstance192.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __callInstance191 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.displayManager.clearLaunchMode();
                                        }
                                    }
                                });
                                const __exports = __callInstance191.exports;
                                return __exports.data();
                            })();
                            (() => {
                                const __callInstance190 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.displayManager.hideWaitingIndicator();
                                        }
                                    }
                                });
                                const __exports = __callInstance190.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance6.exports;
            return __exports.data(a ? 1 : 0);
        })();
    },
    handleStageIsReadyEvent: function (a) {
        (() => {
            const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance189 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            setTimeout(function () {
                                                this.displayManager.stageArea.style.opacity = 1;
                                            }.bind(this), 50);
                                        }
                                    }
                                });
                                const __exports = __callInstance189.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __callInstance188 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            setTimeout(function () {
                                                this.displayManager.stageArea.style.opacity = 1;
                                            }.bind(this), 500);
                                        }
                                    }
                                });
                                const __exports = __callInstance188.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance7.exports;
            return __exports.data(this.isFullscreen ? 1 : 0);
        })();
        (() => {
            const __callInstance187 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.positionSlideNumberControl();
                    }
                }
            });
            const __exports = __callInstance187.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance186 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.positionSlideNumberDisplay();
                    }
                }
            });
            const __exports = __callInstance186.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance185 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.positionHelpPlacard();
                    }
                }
            });
            const __exports = __callInstance185.exports;
            return __exports.data();
        })();
    },
    positionSlideNumberControl: function () {
        var b = (this.displayManager.usableDisplayWidth - this.slideNumberController.width) / 2;
        var a = this.displayManager.stageAreaTop + this.displayManager.stageAreaHeight - (this.slideNumberController.height + 16);
        (() => {
            const __callInstance184 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.slideNumberController.setPosition(b, a);
                    }
                }
            });
            const __exports = __callInstance184.exports;
            return __exports.data();
        })();
    },
    positionSlideNumberDisplay: function () {
        var b = (this.displayManager.usableDisplayWidth - this.slideNumberDisplay.width) / 2;
        var a = this.displayManager.stageAreaTop + this.displayManager.stageAreaHeight - (this.slideNumberDisplay.height + 16);
        (() => {
            const __callInstance183 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.slideNumberDisplay.setPosition(b, a);
                    }
                }
            });
            const __exports = __callInstance183.exports;
            return __exports.data();
        })();
    },
    positionHelpPlacard: function () {
        var b = (this.displayManager.usableDisplayWidth - this.helpPlacard.width) / 2;
        var a = (this.displayManager.usableDisplayHeight - this.helpPlacard.height) / 2;
        (() => {
            const __callInstance182 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.helpPlacard.setPosition(b, a);
                    }
                }
            });
            const __exports = __callInstance182.exports;
            return __exports.data();
        })();
    },
    handleFullscreenChangeEvent: function () {
        (() => {
            const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.isFullscreen = true;
                        }
                    },
                    impFunc2: () => {
                        {
                            this.isFullscreen = false;
                        }
                    }
                }
            });
            const __exports = __ifInstance8.exports;
            return __exports.data(document.webkitIsFullScreen || document.mozFullScreen ? 1 : 0);
        })();
        (() => {
            const __callInstance181 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        setTimeout(function () {
                            (() => {
                                const __callInstance180 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.displayManager.layoutDisplay();
                                        }
                                    }
                                });
                                const __exports = __callInstance180.exports;
                                return __exports.data();
                            })();
                        }.bind(this), 0);
                    }
                }
            });
            const __exports = __callInstance181.exports;
            return __exports.data();
        })();
    },
    handleWindowResizeEvent: function () {
        (() => {
            const __callInstance179 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        clearTimeout(this.resizeTimer);
                    }
                }
            });
            const __exports = __callInstance179.exports;
            return __exports.data();
        })();
        this.resizeTimer = setTimeout(this.changeWindowSize.bind(this), 1000);
    },
    changeWindowSize: function () {
        (() => {
            const __ifInstance9 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance178 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.scriptManager.reapplyScaleFactor();
                                        }
                                    }
                                });
                                const __exports = __callInstance178.exports;
                                return __exports.data();
                            })();
                            this.textureManager.slideCache = null;
                            this.textureManager.slideCache = {};
                            var a = this.currentSceneIndex;
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
                                                                    a = this.currentSceneIndex + 1;
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    (() => {
                                                                        const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        a = 0;
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance12.exports;
                                                                        return __exports.data(this.script.loopSlideshow ? 1 : 0);
                                                                    })();
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance11.exports;
                                                    return __exports.data(this.currentSceneIndex < this.script.numScenes - 1 ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance10.exports;
                                return __exports.data(this.state === kShowControllerState_IdleAtFinalState ? 1 : 0);
                            })();
                            (() => {
                                const __callInstance177 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.jumpToScene(a, false);
                                        }
                                    }
                                });
                                const __exports = __callInstance177.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance9.exports;
            return __exports.data(this.delegate.setViewScale ? 1 : 0);
        })();
        (() => {
            const __callInstance176 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        document.fire(kShowSizeDidChangeEvent, {
                            width: this.script.slideWidth,
                            height: this.script.slideHeight
                        });
                    }
                }
            });
            const __exports = __callInstance176.exports;
            return __exports.data();
        })();
    },
    handleStageSizeDidChangeEvent: function (a) {
        (() => {
            const __callInstance175 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.touchController.setTrackArea(a.memo.left, a.memo.top, a.memo.width, a.memo.height);
                    }
                }
            });
            const __exports = __callInstance175.exports;
            return __exports.data();
        })();
    },
    handleKeyDownEvent: function (c) {
        var b = c.charCode || c.keyCode;
        if (b === kKeyCode_F11 || b === kKeyCode_F12) {
            return;
        }
        var a = {
            altKey: !!c.altKey,
            ctrlKey: !!c.ctrlKey,
            shiftKey: !!c.shiftKey,
            metaKey: !!c.metaKey
        };
        if (a.metaKey) {
            if (b === kKeyCode_Period || b === kKeyCode_Dot) {
                (() => {
                    const __callInstance174 = new WebAssembly.Instance(__callWasmModule, {
                        env: {
                            impFunc: () => {
                                this.exitShow(true);
                            }
                        }
                    });
                    const __exports = __callInstance174.exports;
                    return __exports.data();
                })();
            } else {
                if (b != kKeyCode_Return) {
                    return;
                }
            }
        } else {
            if (a.ctrlKey) {
                return;
            }
        }
        (() => {
            const __callInstance173 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        c.stop();
                    }
                }
            });
            const __exports = __callInstance173.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance172 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.onKeyPress(b, a);
                    }
                }
            });
            const __exports = __callInstance172.exports;
            return __exports.data();
        })();
    },
    handleContextMenuEvent: function (a) {
        (() => {
            const __callInstance171 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        a.stop();
                    }
                }
            });
            const __exports = __callInstance171.exports;
            return __exports.data();
        })();
    },
    handleClickEvent: function (b) {
        if (this.isRecording) {
            return;
        }
        var a, d;
        (() => {
            const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            a = b.pageX;
                            d = b.pageY;
                        }
                    },
                    impFunc2: () => {
                        {
                            a = b.clientX;
                            d = b.clientY;
                        }
                    }
                }
            });
            const __exports = __ifInstance13.exports;
            return __exports.data(b.pageX || b.pageY ? 1 : 0);
        })();
        var c = {
            pointX: a,
            pointY: d
        };
        (() => {
            const __ifInstance14 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance170 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            window.focus();
                                        }
                                    }
                                });
                                const __exports = __callInstance170.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance14.exports;
            return __exports.data(browserPrefix === lS(0, 37) ? 1 : 0);
        })();
        if (b.target.nodeName.toLowerCase() === lS(0, 38)) {
            return;
        }
        (() => {
            const __callInstance169 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.processClickOrTapAtDisplayCoOrds(c);
                    }
                }
            });
            const __exports = __callInstance169.exports;
            return __exports.data();
        })();
    },
    handleTapEvent: function (a) {
        var b = {
            pointX: a.memo.pointX,
            pointY: a.memo.pointY
        };
        (() => {
            const __callInstance168 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.processClickOrTapAtDisplayCoOrds(b);
                    }
                }
            });
            const __exports = __callInstance168.exports;
            return __exports.data();
        })();
    },
    processClickOrTapAtDisplayCoOrds: function (c) {
        var b = false;
        var d;
        if (this.slideNumberController.isShowing) {
            (() => {
                const __ifInstance15 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __callInstance167 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                clearTimeout(this.slideNumberTimeout);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance167.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance15.exports;
                return __exports.data(this.slideNumberTimeout ? 1 : 0);
            })();
            this.slideNumberTimeout = setTimeout(this.hideAndResetSlideNumberController.bind(this), 0);
            return;
        }
        if (this.helpPlacard.isShowing) {
            (() => {
                const __callInstance166 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.helpPlacard.hide();
                        }
                    }
                });
                const __exports = __callInstance166.exports;
                return __exports.data();
            })();
            return;
        }
        var a = this.displayManager.convertDisplayCoOrdsToShowCoOrds(c);
        (() => {
            const __ifInstance16 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            d = this.findHyperlinkAtCoOrds(a);
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance16.exports;
            return __exports.data(a.pointX != -1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance17 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance165 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.processHyperlink(d);
                                        }
                                    }
                                });
                                const __exports = __callInstance165.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __callInstance164 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.advanceToNextBuild(lS(0, 39));
                                        }
                                    }
                                });
                                const __exports = __callInstance164.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance17.exports;
            return __exports.data(d ? 1 : 0);
        })();
    },
    handleSwipeEvent: function (a) {
        if (a.memo.direction === lS(0, 40)) {
            switch (a.memo.fingers) {
            case 1:
                (() => {
                    const __callInstance163 = new WebAssembly.Instance(__callWasmModule, {
                        env: {
                            impFunc: () => {
                                this.advanceToNextBuild(lS(0, 41));
                            }
                        }
                    });
                    const __exports = __callInstance163.exports;
                    return __exports.data();
                })();
                break;
            case 2:
                (() => {
                    const __callInstance162 = new WebAssembly.Instance(__callWasmModule, {
                        env: {
                            impFunc: () => {
                                this.advanceToNextSlide(lS(0, 42));
                            }
                        }
                    });
                    const __exports = __callInstance162.exports;
                    return __exports.data();
                })();
                break;
            default:
                break;
            }
        } else {
            if (a.memo.direction === lS(0, 43)) {
                switch (a.memo.fingers) {
                case 1:
                    (() => {
                        const __callInstance161 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    this.goBackToPreviousSlide(lS(0, 44));
                                }
                            }
                        });
                        const __exports = __callInstance161.exports;
                        return __exports.data();
                    })();
                    break;
                case 2:
                    (() => {
                        const __callInstance160 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    this.goBackToPreviousBuild(lS(0, 45));
                                }
                            }
                        });
                        const __exports = __callInstance160.exports;
                        return __exports.data();
                    })();
                    break;
                default:
                    break;
                }
            }
        }
    },
    onMouseDown: function (a) {
        (() => {
            const __ifInstance18 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance159 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.advanceToNextBuild(lS(0, 46));
                                        }
                                    }
                                });
                                const __exports = __callInstance159.exports;
                                return __exports.data();
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
                                                    const __callInstance158 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.goBackToPreviousBuild(lS(0, 47));
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance158.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance19.exports;
                                return __exports.data(a.rightClick ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance18.exports;
            return __exports.data(a.leftClick ? 1 : 0);
        })();
    },
    onKeyPress: function (c, a) {
        (() => {
            const __ifInstance20 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            c = kKeyCode_0 + (c - kKeyCode_Numeric_0);
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance20.exports;
            return __exports.data(c >= kKeyCode_Numeric_0 && c <= kKeyCode_Numeric_9 ? 1 : 0);
        })();
        c += a.shiftKey ? kKeyModifier_Shift : 0;
        c += a.altKey ? kKeyModifier_Alt : 0;
        c += a.ctrlKey ? kKeyModifier_Ctrl : 0;
        c += a.metaKey ? kKeyModifier_Meta : 0;
        if (this.isRecording) {
            return;
        }
        var b = false;
        switch (c) {
        case kKeyCode_Escape:
            (() => {
                const __callInstance157 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.exitShow(true);
                        }
                    }
                });
                const __exports = __callInstance157.exports;
                return __exports.data();
            })();
            break;
        case kKeyCode_Slash:
        case kKeyCode_Slash + kKeyModifier_Shift:
            (() => {
                const __ifInstance21 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __callInstance156 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.helpPlacard.hide();
                                            }
                                        }
                                    });
                                    const __exports = __callInstance156.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                            {
                                (() => {
                                    const __callInstance155 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.helpPlacard.show();
                                            }
                                        }
                                    });
                                    const __exports = __callInstance155.exports;
                                    return __exports.data();
                                })();
                            }
                        }
                    }
                });
                const __exports = __ifInstance21.exports;
                return __exports.data(this.helpPlacard.isShowing ? 1 : 0);
            })();
            break;
        case kKeyCode_Q:
            (() => {
                const __callInstance154 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.exitShow(true);
                        }
                    }
                });
                const __exports = __callInstance154.exports;
                return __exports.data();
            })();
            break;
        case kKeyCode_S:
            (() => {
                const __ifInstance22 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __ifInstance23 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    (() => {
                                                        const __callInstance153 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    clearTimeout(this.slideNumberTimeout);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance153.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance23.exports;
                                    return __exports.data(this.slideNumberTimeout ? 1 : 0);
                                })();
                                this.slideNumberTimeout = setTimeout(this.hideAndResetSlideNumberController.bind(this), 0);
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance22.exports;
                return __exports.data(this.slideNumberController.isShowing ? 1 : 0);
            })();
            (() => {
                const __ifInstance24 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __callInstance152 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.slideNumberDisplay.hide();
                                            }
                                        }
                                    });
                                    const __exports = __callInstance152.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                            {
                                (() => {
                                    const __callInstance151 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.slideNumberDisplay.setSlideNumber(this.currentSlideIndex + 1);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance151.exports;
                                    return __exports.data();
                                })();
                                (() => {
                                    const __callInstance150 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.slideNumberDisplay.show();
                                            }
                                        }
                                    });
                                    const __exports = __callInstance150.exports;
                                    return __exports.data();
                                })();
                            }
                        }
                    }
                });
                const __exports = __ifInstance24.exports;
                return __exports.data(this.slideNumberDisplay.isShowing ? 1 : 0);
            })();
            break;
        case kKeyCode_Return:
            if (this.accumulatingDigits) {
                this.accumulatingDigits = false;
                (() => {
                    const __ifInstance25 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    (() => {
                                        const __ifInstance26 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        this.digitAccumulator = this.script.slideCount;
                                                    }
                                                },
                                                impFunc2: () => {
                                                    {
                                                        (() => {
                                                            const __ifInstance27 = new WebAssembly.Instance(__ifWasmModule, {
                                                                env: {
                                                                    impFunc1: () => {
                                                                        {
                                                                            this.digitAccumulator = 1;
                                                                        }
                                                                    },
                                                                    impFunc2: () => {
                                                                    }
                                                                }
                                                            });
                                                            const __exports = __ifInstance27.exports;
                                                            return __exports.data(this.digitAccumulator < 1 ? 1 : 0);
                                                        })();
                                                    }
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance26.exports;
                                        return __exports.data(this.digitAccumulator > this.script.slideCount ? 1 : 0);
                                    })();
                                    (() => {
                                        const __callInstance149 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    this.slideNumberController.setSlideNumber(this.digitAccumulator);
                                                }
                                            }
                                        });
                                        const __exports = __callInstance149.exports;
                                        return __exports.data();
                                    })();
                                    (() => {
                                        const __callInstance148 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    this.jumpToSlide(this.digitAccumulator);
                                                }
                                            }
                                        });
                                        const __exports = __callInstance148.exports;
                                        return __exports.data();
                                    })();
                                }
                            },
                            impFunc2: () => {
                                {
                                    (() => {
                                        const __callInstance147 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    debugMessage(kDebugShowController_OnKeyPress, lS(0, 48));
                                                }
                                            }
                                        });
                                        const __exports = __callInstance147.exports;
                                        return __exports.data();
                                    })();
                                }
                            }
                        }
                    });
                    const __exports = __ifInstance25.exports;
                    return __exports.data(this.script.showMode != kShowModeHyperlinksOnly ? 1 : 0);
                })();
                break;
            }
        case kKeyCode_N:
        case kKeyCode_Space:
        case kKeyCode_DownArrow:
        case kKeyCode_RightArrow:
        case kKeyCode_PageDown:
        case kKeyCode_RightArrow + kKeyModifier_Shift:
            (() => {
                const __callInstance146 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.advanceToNextBuild(lS(0, 49));
                        }
                    }
                });
                const __exports = __callInstance146.exports;
                return __exports.data();
            })();
            break;
        case kKeyCode_DownArrow + kKeyModifier_Shift:
        case kKeyCode_PageDown + kKeyModifier_Shift:
        case kKeyCode_CloseBracket:
        case kKeyCode_Equal + kKeyModifier_Shift:
        case kKeyCode_Equal:
        case kKeyCode_Plus:
            (() => {
                const __callInstance145 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.advanceToNextSlide(lS(0, 50));
                        }
                    }
                });
                const __exports = __callInstance145.exports;
                return __exports.data();
            })();
            break;
        case kKeyCode_LeftArrow + kKeyModifier_Shift:
        case kKeyCode_PageUp + kKeyModifier_Shift:
        case kKeyCode_OpenBracket:
            (() => {
                const __callInstance144 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.goBackToPreviousBuild(lS(0, 51));
                        }
                    }
                });
                const __exports = __callInstance144.exports;
                return __exports.data();
            })();
            break;
        case kKeyCode_P:
        case kKeyCode_PageUp:
        case kKeyCode_LeftArrow:
        case kKeyCode_UpArrow:
        case kKeyCode_UpArrow + kKeyModifier_Shift:
        case kKeyCode_Hyphen:
        case kKeyCode_Minus:
            (() => {
                const __callInstance143 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.goBackToPreviousSlide(lS(0, 52));
                        }
                    }
                });
                const __exports = __callInstance143.exports;
                return __exports.data();
            })();
            break;
        case kKeyCode_Delete:
            b = true;
            (() => {
                const __ifInstance28 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __ifInstance29 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    (() => {
                                                        const __ifInstance30 = new WebAssembly.Instance(__ifWasmModule, {
                                                            env: {
                                                                impFunc1: () => {
                                                                    {
                                                                        (() => {
                                                                            const __callInstance142 = new WebAssembly.Instance(__callWasmModule, {
                                                                                env: {
                                                                                    impFunc: () => {
                                                                                        clearTimeout(this.slideNumberTimeout);
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __callInstance142.exports;
                                                                            return __exports.data();
                                                                        })();
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance30.exports;
                                                        return __exports.data(this.slideNumberTimeout ? 1 : 0);
                                                    })();
                                                    this.slideNumberTimeout = setTimeout(this.hideAndResetSlideNumberController.bind(this), 0);
                                                }
                                            },
                                            impFunc2: () => {
                                                {
                                                    (() => {
                                                        const __ifInstance31 = new WebAssembly.Instance(__ifWasmModule, {
                                                            env: {
                                                                impFunc1: () => {
                                                                    {
                                                                        (() => {
                                                                            const __callInstance141 = new WebAssembly.Instance(__callWasmModule, {
                                                                                env: {
                                                                                    impFunc: () => {
                                                                                        clearTimeout(this.slideNumberTimeout);
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __callInstance141.exports;
                                                                            return __exports.data();
                                                                        })();
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance31.exports;
                                                        return __exports.data(this.slideNumberTimeout ? 1 : 0);
                                                    })();
                                                    this.slideNumberTimeout = setTimeout(this.hideAndResetSlideNumberController.bind(this), 7000);
                                                    var d = this.digitAccumulator.toString();
                                                    this.digitAccumulator = parseInt(d.substring(0, d.length - 1));
                                                    (() => {
                                                        const __callInstance140 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    this.slideNumberController.setSlideNumber(this.digitAccumulator);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance140.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance29.exports;
                                    return __exports.data(this.digitAccumulator < 10 ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance28.exports;
                return __exports.data(this.accumulatingDigits ? 1 : 0);
            })();
            break;
        case kKeyCode_Home:
            (() => {
                const __ifInstance32 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __callInstance139 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.jumpToSlide(1);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance139.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                            {
                                (() => {
                                    const __callInstance138 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                debugMessage(kDebugShowController_OnKeyPress, lS(0, 53));
                                            }
                                        }
                                    });
                                    const __exports = __callInstance138.exports;
                                    return __exports.data();
                                })();
                            }
                        }
                    }
                });
                const __exports = __ifInstance32.exports;
                return __exports.data(this.script.showMode != kShowModeHyperlinksOnly ? 1 : 0);
            })();
            break;
        case kKeyCode_End:
            (() => {
                const __ifInstance33 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __callInstance137 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.jumpToSlide(this.script.slideCount);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance137.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                            {
                                (() => {
                                    const __callInstance136 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                debugMessage(kDebugShowController_OnKeyPress, lS(0, 54));
                                            }
                                        }
                                    });
                                    const __exports = __callInstance136.exports;
                                    return __exports.data();
                                })();
                            }
                        }
                    }
                });
                const __exports = __ifInstance33.exports;
                return __exports.data(this.script.showMode != kShowModeHyperlinksOnly ? 1 : 0);
            })();
            break;
        default:
            (() => {
                const __ifInstance34 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __callInstance135 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                clearTimeout(this.slideNumberTimeout);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance135.exports;
                                    return __exports.data();
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance34.exports;
                return __exports.data(this.slideNumberTimeout ? 1 : 0);
            })();
            this.slideNumberTimeout = setTimeout(this.hideAndResetSlideNumberController.bind(this), 7000);
            (() => {
                const __ifInstance35 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __ifInstance36 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    (() => {
                                                        const __callInstance134 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    this.slideNumberDisplay.hide();
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance134.exports;
                                                        return __exports.data();
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance36.exports;
                                    return __exports.data(this.slideNumberDisplay.isShowing ? 1 : 0);
                                })();
                                b = true;
                                (() => {
                                    const __ifInstance37 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    this.accumulatingDigits = true;
                                                    this.digitAccumulator = 0;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance37.exports;
                                    return __exports.data(this.accumulatingDigits === false ? 1 : 0);
                                })();
                                (() => {
                                    const __ifInstance38 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    this.digitAccumulator *= 10;
                                                    this.digitAccumulator += c - kKeyCode_0;
                                                    (() => {
                                                        const __callInstance133 = new WebAssembly.Instance(__callWasmModule, {
                                                            env: {
                                                                impFunc: () => {
                                                                    this.slideNumberController.setSlideNumber(this.digitAccumulator);
                                                                }
                                                            }
                                                        });
                                                        const __exports = __callInstance133.exports;
                                                        return __exports.data();
                                                    })();
                                                    (() => {
                                                        const __ifInstance39 = new WebAssembly.Instance(__ifWasmModule, {
                                                            env: {
                                                                impFunc1: () => {
                                                                    {
                                                                        (() => {
                                                                            const __callInstance132 = new WebAssembly.Instance(__callWasmModule, {
                                                                                env: {
                                                                                    impFunc: () => {
                                                                                        this.slideNumberController.show();
                                                                                    }
                                                                                }
                                                                            });
                                                                            const __exports = __callInstance132.exports;
                                                                            return __exports.data();
                                                                        })();
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance39.exports;
                                                        return __exports.data(!this.slideNumberController.isShowing ? 1 : 0);
                                                    })();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance38.exports;
                                    return __exports.data(this.digitAccumulator.toString().length < 4 ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                            {
                                b = true;
                            }
                        }
                    }
                });
                const __exports = __ifInstance35.exports;
                return __exports.data(c >= kKeyCode_0 && c <= kKeyCode_9 ? 1 : 0);
            })();
            break;
        }
        (() => {
            const __ifInstance40 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance40.exports;
            return __exports.data(this.accumulatingDigits && b === false ? 1 : 0);
        })();
    },
    hideAndResetSlideNumberController: function () {
        (() => {
            const __ifInstance41 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance131 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            clearTimeout(this.slideNumberTimeout);
                                        }
                                    }
                                });
                                const __exports = __callInstance131.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance41.exports;
            return __exports.data(this.slideNumberTimeout ? 1 : 0);
        })();
        this.accumulatingDigits = false;
        this.digitAccumulator = 0;
        (() => {
            const __callInstance130 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.slideNumberController.hide();
                    }
                }
            });
            const __exports = __callInstance130.exports;
            return __exports.data();
        })();
    },
    hideSlideNumberDisplay: function () {
        (() => {
            const __callInstance129 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.slideNumberDisplay.hide();
                    }
                }
            });
            const __exports = __callInstance129.exports;
            return __exports.data();
        })();
    },
    toggleFullscreen: function () {
        if (browserPrefix === lS(0, 55)) {
            return;
        }
        (() => {
            const __callInstance128 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        setTimeout(function () {
                            this.displayManager.stageArea.style.opacity = 0;
                        }.bind(this), 0);
                    }
                }
            });
            const __exports = __callInstance128.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance127 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.displayManager.hideHUD(true);
                    }
                }
            });
            const __exports = __callInstance127.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance42 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.isFullscreen = false;
                            document.webkitCancelFullScreen && document.webkitCancelFullScreen() || document.mozCancelFullScreen && document.mozCancelFullScreen();
                        }
                    },
                    impFunc2: () => {
                        {
                            this.isFullscreen = true;
                            document.body.webkitRequestFullScreen && document.body.webkitRequestFullScreen() || document.body.mozRequestFullScreen && document.body.mozRequestFullScreen();
                        }
                    }
                }
            });
            const __exports = __ifInstance42.exports;
            return __exports.data(document.webkitIsFullScreen || document.mozFullScreen ? 1 : 0);
        })();
    },
    changeState: function (a) {
        (() => {
            const __ifInstance43 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance126 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.leavingState();
                                        }
                                    }
                                });
                                const __exports = __callInstance126.exports;
                                return __exports.data();
                            })();
                            this.state = a;
                            (() => {
                                const __callInstance125 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.enteringState();
                                        }
                                    }
                                });
                                const __exports = __callInstance125.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance43.exports;
            return __exports.data(a != this.state ? 1 : 0);
        })();
    },
    leavingState: function () {
        switch (this.state) {
        case kShowControllerState_Stopped:
            break;
        case kShowControllerState_Starting:
            break;
        case kShowControllerState_SettingUpScene:
            break;
        case kShowControllerState_IdleAtFinalState:
            break;
        case kShowControllerState_IdleAtInitialState:
            break;
        case kShowControllerState_WaitingToJump:
            break;
        case kShowControllerState_ReadyToJump:
            break;
        case kShowControllerState_WaitingToPlay:
            (() => {
                const __callInstance124 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.displayManager.hideWaitingIndicator();
                        }
                    }
                });
                const __exports = __callInstance124.exports;
                return __exports.data();
            })();
            break;
        case kShowControllerState_ReadyToPlay:
            break;
        case kShowControllerState_Playing:
            break;
        }
    },
    enteringState: function () {
        switch (this.state) {
        case kShowControllerState_Stopped:
            break;
        case kShowControllerState_Starting:
            (() => {
                const __callInstance123 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.displayManager.showWaitingIndicator();
                        }
                    }
                });
                const __exports = __callInstance123.exports;
                return __exports.data();
            })();
            break;
        case kShowControllerState_SettingUpScene:
            break;
        case kShowControllerState_IdleAtFinalState:
        case kShowControllerState_IdleAtInitialState:
            (() => {
                const __callInstance122 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.updateSlideNumber();
                        }
                    }
                });
                const __exports = __callInstance122.exports;
                return __exports.data();
            })();
            (() => {
                const __callInstance121 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.displayManager.hideWaitingIndicator();
                        }
                    }
                });
                const __exports = __callInstance121.exports;
                return __exports.data();
            })();
            (() => {
                const __callInstance120 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.createHyperlinksForCurrentState(lS(0, 56));
                        }
                    }
                });
                const __exports = __callInstance120.exports;
                return __exports.data();
            })();
            (() => {
                const __callInstance119 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            runInNextEventLoop(this.doIdleProcessing.bind(this));
                        }
                    }
                });
                const __exports = __callInstance119.exports;
                return __exports.data();
            })();
            break;
        case kShowControllerState_WaitingToJump:
            break;
        case kShowControllerState_ReadyToJump:
            break;
        case kShowControllerState_WaitingToPlay:
            (() => {
                const __callInstance118 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.displayManager.showWaitingIndicator();
                        }
                    }
                });
                const __exports = __callInstance118.exports;
                return __exports.data();
            })();
            break;
        case kShowControllerState_ReadyToPlay:
            break;
        case kShowControllerState_Playing:
            break;
        }
    },
    doIdleProcessing: function () {
        (() => {
            const __callInstance117 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.preloadAppropriateScenes();
                    }
                }
            });
            const __exports = __callInstance117.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance44 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance116 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.queuedUserAction();
                                        }
                                    }
                                });
                                const __exports = __callInstance116.exports;
                                return __exports.data();
                            })();
                            this.queuedUserAction = null;
                        }
                    },
                    impFunc2: () => {
                        {
                            var a = this.stageManager.stage;
                            (() => {
                                const __ifInstance45 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance115 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.updateNavigationButtons();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance115.exports;
                                                    return __exports.data();
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance45.exports;
                                return __exports.data(a.childNodes.length != 0 ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance44.exports;
            return __exports.data(this.queuedUserAction != null ? 1 : 0);
        })();
    },
    truncatedSlideIndex: function (a) {
        return this.truncatedIndex(a, this.script.lastSlideIndex, this.script.loopSlideshow);
    },
    truncatedSceneIndex: function (a) {
        return this.truncatedIndex(a, this.script.lastSceneIndex, this.script.loopSlideshow);
    },
    truncatedIndex: function (a, c, b) {
        (() => {
            const __ifInstance46 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __ifInstance47 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                a = a + c + 1;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                a = -1;
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance47.exports;
                                return __exports.data(b ? 1 : 0);
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __ifInstance48 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __ifInstance49 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    a = a - c - 1;
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    a = -1;
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance49.exports;
                                                    return __exports.data(b ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance48.exports;
                                return __exports.data(a > c ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance46.exports;
            return __exports.data(a < 0 ? 1 : 0);
        })();
        return a;
    },
    preloadAppropriateScenes: function () {
        var d = this.currentSceneIndex;
        (() => {
            const __ifInstance50 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            d++;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance50.exports;
            return __exports.data(this.state === kShowControllerState_IdleAtFinalState ? 1 : 0);
        })();
        var a = this.script.slideIndexFromSceneIndexLookup[d];
        var e = this.scriptManager.sceneIndexFromSlideIndex(this.truncatedSlideIndex(a - 1));
        var b = this.scriptManager.sceneIndexFromSlideIndex(this.truncatedSlideIndex(a - 2));
        var p = this.scriptManager.sceneIndexFromSlideIndex(this.truncatedSlideIndex(a - 3));
        var g = this.truncatedSceneIndex(d - 1);
        var f = this.truncatedSceneIndex(d - 2);
        var c = this.truncatedSceneIndex(d - 3);
        var n = this.truncatedSceneIndex(d + 1);
        var m = this.truncatedSceneIndex(d + 2);
        var k = this.truncatedSceneIndex(d + 3);
        var l = this.scriptManager.sceneIndexFromSlideIndex(this.truncatedSlideIndex(a + 1));
        var j = this.scriptManager.sceneIndexFromSlideIndex(this.truncatedSlideIndex(a + 2));
        var i = this.scriptManager.sceneIndexFromSlideIndex(this.truncatedSlideIndex(a + 3));
        var o = {};
        var h = gIpad === true;
        (() => {
            const __ifInstance51 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            o[p] = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance51.exports;
            return __exports.data(!h && p != -1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance52 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            o[b] = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance52.exports;
            return __exports.data(!h && b != -1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance53 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            o[e] = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance53.exports;
            return __exports.data(!h && e != -1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance54 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            o[c] = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance54.exports;
            return __exports.data(!h && c != -1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance55 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            o[f] = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance55.exports;
            return __exports.data(!h && f != -1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance56 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            o[g] = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance56.exports;
            return __exports.data(!h && g != -1 ? 1 : 0);
        })();
        o[this.currentSceneIndex] = true;
        o[d] = true;
        (() => {
            const __ifInstance57 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            o[n] = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance57.exports;
            return __exports.data(n != -1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance58 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            o[m] = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance58.exports;
            return __exports.data(!h && m != -1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance59 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            o[k] = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance59.exports;
            return __exports.data(!h && k != -1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance60 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            o[l] = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance60.exports;
            return __exports.data(!h && l != -1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance61 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            o[j] = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance61.exports;
            return __exports.data(!h && j != -1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance62 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            o[i] = true;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance62.exports;
            return __exports.data(!h && i != -1 ? 1 : 0);
        })();
        (() => {
            const __callInstance114 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.textureManager.preloadScenes(o);
                    }
                }
            });
            const __exports = __callInstance114.exports;
            return __exports.data();
        })();
    },
    advanceToNextBuild: function (b) {
        if (this.script.showMode === kShowModeHyperlinksOnly && b != lS(0, 57)) {
            return false;
        }
        if (this.displayManager.infoPanelIsShowing) {
            return false;
        }
        var a = false;
        switch (this.state) {
        case kShowControllerState_IdleAtFinalState:
            if (this.nextSceneIndex === -1) {
                if (this.delegate.getKPFJsonStringForShow) {
                    (() => {
                        const __callInstance113 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    this.stopSoundTrack();
                                }
                            }
                        });
                        const __exports = __callInstance113.exports;
                        return __exports.data();
                    })();
                    (() => {
                        const __callInstance112 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    this.exitShow();
                                }
                            }
                        });
                        const __exports = __callInstance112.exports;
                        return __exports.data();
                    })();
                } else {
                    (() => {
                        const __callInstance111 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    this.stopSoundTrack();
                                }
                            }
                        });
                        const __exports = __callInstance111.exports;
                        return __exports.data();
                    })();
                    break;
                }
            }
            a = true;
            (() => {
                const __callInstance110 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.jumpToScene(this.nextSceneIndex, true);
                        }
                    }
                });
                const __exports = __callInstance110.exports;
                return __exports.data();
            })();
            break;
        case kShowControllerState_IdleAtInitialState:
            if (this.currentSceneIndex >= this.script.numScenes) {
                if (this.script.loopSlideshow) {
                    a = true;
                    (() => {
                        const __callInstance109 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    this.jumpToScene(0, false);
                                }
                            }
                        });
                        const __exports = __callInstance109.exports;
                        return __exports.data();
                    })();
                } else {
                    if (this.delegate.getKPFJsonStringForShow) {
                        (() => {
                            const __callInstance108 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        this.stopSoundTrack();
                                    }
                                }
                            });
                            const __exports = __callInstance108.exports;
                            return __exports.data();
                        })();
                        (() => {
                            const __callInstance107 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        this.exitShow();
                                    }
                                }
                            });
                            const __exports = __callInstance107.exports;
                            return __exports.data();
                        })();
                    } else {
                        (() => {
                            const __callInstance106 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        this.stopSoundTrack();
                                    }
                                }
                            });
                            const __exports = __callInstance106.exports;
                            return __exports.data();
                        })();
                        break;
                    }
                }
            } else {
                a = true;
                (() => {
                    const __callInstance105 = new WebAssembly.Instance(__callWasmModule, {
                        env: {
                            impFunc: () => {
                                this.playCurrentScene();
                            }
                        }
                    });
                    const __exports = __callInstance105.exports;
                    return __exports.data();
                })();
            }
            break;
        default:
            (() => {
                const __callInstance104 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            debugMessage(kDebugShowController_AdvanceToNextBuild, lS(0, 58) + this.nextSceneIndex + lS(0, 59) + this.state + lS(0, 60));
                        }
                    }
                });
                const __exports = __callInstance104.exports;
                return __exports.data();
            })();
            (() => {
                const __ifInstance63 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                a = true;
                                this.queuedUserAction = this.advanceToNextBuild.bind(this, b);
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance63.exports;
                return __exports.data(this.queuedUserAction == null ? 1 : 0);
            })();
            break;
        }
        return a;
    },
    advanceToNextSlide: function (d) {
        if (this.script.showMode == kShowModeHyperlinksOnly) {
            return;
        }
        if (this.displayManager.infoPanelIsShowing) {
            return;
        }
        var b = this.currentSceneIndex;
        switch (this.state) {
        case kShowControllerState_IdleAtFinalState:
            b = b + 1;
        case kShowControllerState_IdleAtInitialState:
            var f = this.scriptManager.slideIndexFromSceneIndex(b);
            var c;
            if (f === this.script.slideCount - 1) {
                if (this.script.loopSlideshow) {
                    c = 0;
                } else {
                    return;
                }
            } else {
                c = this.currentSlideIndex + 1;
            }
            var g = this.scriptManager.sceneIndexFromSlideIndex(c);
            var e = this.script.events[g];
            var a = e.automaticPlay == 1 || e.automaticPlay == true;
            (() => {
                const __callInstance103 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.jumpToSlide(c + 1, a);
                        }
                    }
                });
                const __exports = __callInstance103.exports;
                return __exports.data();
            })();
            break;
        default:
            (() => {
                const __callInstance102 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            debugMessage(kDebugShowController_AdvanceToNextSlide, lS(0, 61) + this.state + lS(0, 62));
                        }
                    }
                });
                const __exports = __callInstance102.exports;
                return __exports.data();
            })();
            (() => {
                const __ifInstance64 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                this.queuedUserAction = this.advanceToNextSlide.bind(this, d);
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance64.exports;
                return __exports.data(this.queuedUserAction == null ? 1 : 0);
            })();
            break;
        }
    },
    goBackToPreviousBuild: function (c) {
        (() => {
            const __callInstance101 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.resetMediaCache();
                    }
                }
            });
            const __exports = __callInstance101.exports;
            return __exports.data();
        })();
        if (this.script.showMode == kShowModeHyperlinksOnly) {
            return;
        }
        if (this.displayManager.infoPanelIsShowing) {
            return;
        }
        var a = this.currentSceneIndex;
        switch (this.state) {
        case kShowControllerState_IdleAtFinalState:
            a = a + 1;
        case kShowControllerState_Playing:
        case kShowControllerState_IdleAtInitialState:
            var b;
            if (a === 0) {
                if (this.script.loopSlideshow) {
                    b = this.script.events.length - 1;
                } else {
                    return;
                }
            } else {
                b = a - 1;
            }
            (() => {
                const __callInstance100 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.jumpToScene(b, false);
                        }
                    }
                });
                const __exports = __callInstance100.exports;
                return __exports.data();
            })();
            break;
        default:
            (() => {
                const __callInstance99 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            debugMessage(kDebugShowController_GoBackToPreviousBuild, lS(0, 63) + this.state + lS(0, 64));
                        }
                    }
                });
                const __exports = __callInstance99.exports;
                return __exports.data();
            })();
            (() => {
                const __ifInstance65 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                this.queuedUserAction = this.goBackToPreviousBuild.bind(this, c);
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance65.exports;
                return __exports.data(this.queuedUserAction == null ? 1 : 0);
            })();
            break;
        }
    },
    goBackToPreviousSlide: function (c) {
        if (this.script.showMode == kShowModeHyperlinksOnly) {
            return;
        }
        if (this.displayManager.infoPanelIsShowing) {
            return;
        }
        var b = this.currentSceneIndex;
        switch (this.state) {
        case kShowControllerState_IdleAtFinalState:
            b = b + 1;
        case kShowControllerState_Playing:
        case kShowControllerState_IdleAtInitialState:
            var d = this.scriptManager.slideIndexFromSceneIndex(b);
            var a;
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
                                                    a = this.script.slideCount - 1;
                                                }
                                            },
                                            impFunc2: () => {
                                                {
                                                    a = 0;
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance67.exports;
                                    return __exports.data(this.script.loopSlideshow ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                            {
                                (() => {
                                    const __ifInstance68 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    a = this.script.slideCount - 1;
                                                }
                                            },
                                            impFunc2: () => {
                                                {
                                                    a = this.currentSlideIndex - 1;
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance68.exports;
                                    return __exports.data(d === -1 && b > 0 ? 1 : 0);
                                })();
                            }
                        }
                    }
                });
                const __exports = __ifInstance66.exports;
                return __exports.data(d === 0 ? 1 : 0);
            })();
            (() => {
                const __callInstance98 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.jumpToSlide(a + 1);
                        }
                    }
                });
                const __exports = __callInstance98.exports;
                return __exports.data();
            })();
            break;
        default:
            (() => {
                const __callInstance97 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            debugMessage(kDebugShowController_GoBackToPreviousSlide, lS(0, 65) + this.state + lS(0, 66));
                        }
                    }
                });
                const __exports = __callInstance97.exports;
                return __exports.data();
            })();
            (() => {
                const __ifInstance69 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                this.queuedUserAction = this.goBackToPreviousSlide.bind(this, c);
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance69.exports;
                return __exports.data(this.queuedUserAction == null ? 1 : 0);
            })();
            break;
        }
    },
    calculatePreviousSceneIndex: function (a) {
        (() => {
            const __ifInstance70 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            previousSceneIndex = -1;
                        }
                    },
                    impFunc2: () => {
                        {
                            previousSceneIndex = a - 1;
                        }
                    }
                }
            });
            const __exports = __ifInstance70.exports;
            return __exports.data(a == -1 ? 1 : 0);
        })();
        return previousSceneIndex;
    },
    jumpToSlide: function (b, a) {
        var c = b - 1;
        var d = this.scriptManager.sceneIndexFromSlideIndex(c);
        (() => {
            const __callInstance96 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.resetMediaCache();
                    }
                }
            });
            const __exports = __callInstance96.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance71 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            a = false;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance71.exports;
            return __exports.data(a == null ? 1 : 0);
        })();
        (() => {
            const __callInstance95 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.jumpToScene(d, a);
                    }
                }
            });
            const __exports = __callInstance95.exports;
            return __exports.data();
        })();
    },
    jumpToScene: function (d, c) {
        this.lastSlideViewedIndex = this.scriptManager.slideIndexFromSceneIndex(this.currentSceneIndex);
        if (d === -1) {
            return;
        }
        switch (this.state) {
        case kShowControllerState_Starting:
            var b = lS(0, 67) + this.displayManager.usableDisplayWidth + lS(0, 68) + this.displayManager.usableDisplayHeight + lS(0, 69);
            this.starting = true;
            this.maskElement = document.createElement(lS(0, 70));
            (() => {
                const __callInstance94 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.maskElement.setAttribute(lS(0, 71), b);
                        }
                    }
                });
                const __exports = __callInstance94.exports;
                return __exports.data();
            })();
            (() => {
                const __callInstance93 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            document.body.appendChild(this.maskElement);
                        }
                    }
                });
                const __exports = __callInstance93.exports;
                return __exports.data();
            })();
        case kShowControllerState_IdleAtInitialState:
        case kShowControllerState_IdleAtFinalState:
        case kShowControllerState_ReadyToJump:
            break;
        default:
            (() => {
                const __callInstance92 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            debugMessage(kDebugShowController_JumpToScene, lS(0, 72) + this.state + lS(0, 73));
                        }
                    }
                });
                const __exports = __callInstance92.exports;
                return __exports.data();
            })();
            return;
        }
        if (this.textureManager.isScenePreloaded(d) === false) {
            (() => {
                const __callInstance91 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.changeState(kShowControllerState_WaitingToJump);
                        }
                    }
                });
                const __exports = __callInstance91.exports;
                return __exports.data();
            })();
            var a = {
                sceneIndex: d,
                automaticPlay: c
            };
            this.waitForSceneToLoadTimeout = setTimeout(this.handleSceneDidNotLoad.bind(this, a), kMaxSceneDownloadWaitTime);
            (() => {
                const __callInstance90 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.textureManager.loadScene(d, this.handleSceneDidLoad.bind(this, a));
                        }
                    }
                });
                const __exports = __callInstance90.exports;
                return __exports.data();
            })();
            return;
        }
        (() => {
            const __callInstance89 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.changeState(kShowControllerState_SettingUpScene);
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
                        runInNextEventLoop(this.jumpToScene_partThree.bind(this, d, c));
                    }
                }
            });
            const __exports = __callInstance88.exports;
            return __exports.data();
        })();
    },
    handleSceneDidLoad: function (a) {
        (() => {
            const __callInstance87 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        clearTimeout(this.waitForSceneToLoadTimeout);
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
                        this.displayManager.setNextButtonEnabled(this.currentSceneIndex < this.script.pageCount - 1);
                    }
                }
            });
            const __exports = __callInstance86.exports;
            return __exports.data();
        })();
        switch (this.state) {
        case kShowControllerState_WaitingToJump:
            (() => {
                const __callInstance85 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.changeState(kShowControllerState_ReadyToJump);
                        }
                    }
                });
                const __exports = __callInstance85.exports;
                return __exports.data();
            })();
            (() => {
                const __callInstance84 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.jumpToScene_partTwo(a.sceneIndex, a.automaticPlay);
                        }
                    }
                });
                const __exports = __callInstance84.exports;
                return __exports.data();
            })();
            break;
        default:
            break;
        }
    },
    handleSceneDidNotLoad: function (a) {
        (() => {
            const __callInstance83 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        clearTimeout(this.waitForSceneToLoadTimeout);
                    }
                }
            });
            const __exports = __callInstance83.exports;
            return __exports.data();
        })();
        this.queuedUserAction = null;
        var b = this.promptUserToTryAgain(kUnableToReachiWorkTryAgain);
        (() => {
            const __ifInstance72 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var d = window.location.href;
                            var f;
                            var e = d.indexOf(lS(0, 74));
                            (() => {
                                const __ifInstance73 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                f = d;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                f = d.substring(0, e);
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance73.exports;
                                return __exports.data(e === -1 ? 1 : 0);
                            })();
                            var c = f + lS(0, 75) + a.sceneIndex;
                            (() => {
                                const __callInstance82 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            window.location.replace(c);
                                        }
                                    }
                                });
                                const __exports = __callInstance82.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __callInstance81 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.changeState(kShowControllerState_IdleAtFinalState);
                                        }
                                    }
                                });
                                const __exports = __callInstance81.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance72.exports;
            return __exports.data(b ? 1 : 0);
        })();
    },
    jumpToScene_partTwo: function (b, a) {
        (() => {
            const __callInstance80 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.changeState(kShowControllerState_SettingUpScene);
                    }
                }
            });
            const __exports = __callInstance80.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance79 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        runInNextEventLoop(this.jumpToScene_partThree.bind(this, b, a));
                    }
                }
            });
            const __exports = __callInstance79.exports;
            return __exports.data();
        })();
    },
    jumpToScene_partThree: function (c, a) {
        var b = false;
        (() => {
            const __ifInstance74 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance78 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            runInNextEventLoop(this.jumpToScene_partFour.bind(this, c, a));
                                        }
                                    }
                                });
                                const __exports = __callInstance78.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __callInstance77 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.jumpToScene_partFour(c, a);
                                        }
                                    }
                                });
                                const __exports = __callInstance77.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance74.exports;
            return __exports.data(b ? 1 : 0);
        })();
    },
    jumpToScene_partFour: function (b, a) {
        (() => {
            const __callInstance76 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.displayScene(b);
                    }
                }
            });
            const __exports = __callInstance76.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance75 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __ifInstance76 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance75 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                document.body.removeChild(this.maskElement);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance75.exports;
                                                    return __exports.data();
                                                })();
                                                this.maskElement = null;
                                                this.starting = false;
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance76.exports;
                                return __exports.data(this.maskElement != null ? 1 : 0);
                            })();
                            (() => {
                                const __callInstance74 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            window.focus();
                                        }
                                    }
                                });
                                const __exports = __callInstance74.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance75.exports;
            return __exports.data(this.starting ? 1 : 0);
        })();
        (() => {
            const __ifInstance77 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance73 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.helpPlacard.hide();
                                        }
                                    }
                                });
                                const __exports = __callInstance73.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance77.exports;
            return __exports.data(this.helpPlacard.isShowing ? 1 : 0);
        })();
        (() => {
            const __ifInstance78 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance72 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.slideNumberDisplay.hide();
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
            const __exports = __ifInstance78.exports;
            return __exports.data(this.slideNumberDisplay.isShowing ? 1 : 0);
        })();
        (() => {
            const __ifInstance79 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __ifInstance80 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance71 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                clearTimeout(this.slideNumberTimeout);
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
                                const __exports = __ifInstance80.exports;
                                return __exports.data(this.slideNumberTimeout ? 1 : 0);
                            })();
                            this.slideNumberTimeout = setTimeout(this.hideAndResetSlideNumberController.bind(this), 500);
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance79.exports;
            return __exports.data(this.slideNumberController.isShowing ? 1 : 0);
        })();
        (() => {
            const __ifInstance81 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance70 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.playCurrentScene();
                                        }
                                    }
                                });
                                const __exports = __callInstance70.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __callInstance69 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.changeState(kShowControllerState_IdleAtInitialState);
                                        }
                                    }
                                });
                                const __exports = __callInstance69.exports;
                                return __exports.data();
                            })();
                            (() => {
                                const __ifInstance82 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance68 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.narrationManager.start();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance68.exports;
                                                    return __exports.data();
                                                })();
                                                this.isRecordingStarted = true;
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance82.exports;
                                return __exports.data(this.isRecording && !this.isRecordingStarted ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance81.exports;
            return __exports.data(a ? 1 : 0);
        })();
    },
    displayScene: function (g, c) {
        if (g === -1) {
            return;
        }
        (() => {
            const __callInstance67 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.animationManager.deleteAllAnimations();
                    }
                }
            });
            const __exports = __callInstance67.exports;
            return __exports.data();
        })();
        var f = this.scriptManager.slideIndexFromSceneIndex(this.currentSceneIndex);
        var b = c ? c.slideIndex : this.scriptManager.slideIndexFromSceneIndex(g);
        (() => {
            const __ifInstance83 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance66 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.resetMediaCache();
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
            const __exports = __ifInstance83.exports;
            return __exports.data(f != b ? 1 : 0);
        })();
        (() => {
            const __callInstance65 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.setCurrentSceneIndexTo(g);
                    }
                }
            });
            const __exports = __callInstance65.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance84 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance64 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.playbackController.renderEvent(c);
                                        }
                                    }
                                });
                                const __exports = __callInstance64.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            var e = this.script.slideIndexFromSceneIndexLookup[g];
                            var d = this.script.slideList[e];
                            var a = new KPFEvent({
                                slideId: d,
                                slideIndex: e,
                                sceneIndex: g,
                                event: this.script.events[g],
                                animationSupported: this.animationSupported
                            });
                            (() => {
                                const __callInstance63 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.playbackController.renderEvent(a);
                                        }
                                    }
                                });
                                const __exports = __callInstance63.exports;
                                return __exports.data();
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance84.exports;
            return __exports.data(c ? 1 : 0);
        })();
        (() => {
            const __callInstance62 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.updateNavigationButtons();
                    }
                }
            });
            const __exports = __callInstance62.exports;
            return __exports.data();
        })();
    },
    setCurrentSceneIndexTo: function (a) {
        this.currentSceneIndex = a;
        (() => {
            const __callInstance61 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.assignNextSceneIndex();
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
                        this.updateSlideNumber();
                    }
                }
            });
            const __exports = __callInstance60.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance59 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.updateNavigationButtons();
                    }
                }
            });
            const __exports = __callInstance59.exports;
            return __exports.data();
        })();
    },
    assignNextSceneIndex: function () {
        this.nextSceneIndex = this.calculateNextSceneIndex(this.currentSceneIndex);
    },
    calculateNextSceneIndex: function (b) {
        var a = this.calculateNextSceneIndex_internal(b);
        return a;
    },
    calculateNextSceneIndex_internal: function (b) {
        var a = -1;
        (() => {
            const __ifInstance85 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            a = b + 1;
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __ifInstance86 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                a = 0;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                a = -1;
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance86.exports;
                                return __exports.data(this.script.loopSlideshow ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance85.exports;
            return __exports.data(b < this.script.lastSceneIndex ? 1 : 0);
        })();
        return a;
    },
    updateSlideNumber: function () {
        var b = this.currentSceneIndex;
        (() => {
            const __ifInstance87 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            b = this.nextSceneIndex;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance87.exports;
            return __exports.data(this.state === kShowControllerState_IdleAtFinalState ? 1 : 0);
        })();
        var a = this.scriptManager.slideIndexFromSceneIndex(b);
        (() => {
            const __ifInstance88 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance58 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            runInNextEventLoop(function () {
                                                (() => {
                                                    const __callInstance57 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.startSoundTrack();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance57.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __callInstance56 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.displayManager.clearLaunchMode();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance56.exports;
                                                    return __exports.data();
                                                })();
                                            }.bind(this));
                                        }
                                    }
                                });
                                const __exports = __callInstance58.exports;
                                return __exports.data();
                            })();
                            this.firstSlide = false;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance88.exports;
            return __exports.data(this.firstSlide ? 1 : 0);
        })();
        (() => {
            const __ifInstance89 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.previousSlideIndex = this.currentSlideIndex;
                            this.currentSlideIndex = a;
                            (() => {
                                const __callInstance55 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.displayManager.updateSlideNumber(this.currentSlideIndex + 1, this.script.slideCount);
                                        }
                                    }
                                });
                                const __exports = __callInstance55.exports;
                                return __exports.data();
                            })();
                            (() => {
                                const __callInstance54 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.delegate.propertyChanged(kPropertyName_currentSlide, this.currentSlideIndex + 1);
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
                                            document.fire(kSlideIndexDidChangeEvent, { slideIndex: this.currentSlideIndex });
                                        }
                                    }
                                });
                                const __exports = __callInstance53.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance89.exports;
            return __exports.data(this.currentSlideIndex != a ? 1 : 0);
        })();
    },
    updateNavigationButtons: function () {
        var c = this.currentSceneIndex;
        (() => {
            const __ifInstance90 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            c++;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance90.exports;
            return __exports.data(this.state === kShowControllerState_IdleAtFinalState ? 1 : 0);
        })();
        (() => {
            const __callInstance52 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.updateWindowHistory(c);
                    }
                }
            });
            const __exports = __callInstance52.exports;
            return __exports.data();
        })();
        var a = false;
        var b = false;
        (() => {
            const __ifInstance91 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            b = false;
                            a = false;
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __ifInstance92 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                b = true;
                                                a = true;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __ifInstance93 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    a = true;
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance93.exports;
                                                    return __exports.data(c > 0 ? 1 : 0);
                                                })();
                                                (() => {
                                                    const __ifInstance94 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    b = true;
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    (() => {
                                                                        const __ifInstance95 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        b = true;
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                    {
                                                                                        (() => {
                                                                                            const __ifInstance96 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                env: {
                                                                                                    impFunc1: () => {
                                                                                                        {
                                                                                                            (() => {
                                                                                                                const __ifInstance97 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                                    env: {
                                                                                                                        impFunc1: () => {
                                                                                                                            {
                                                                                                                                b = true;
                                                                                                                            }
                                                                                                                        },
                                                                                                                        impFunc2: () => {
                                                                                                                            {
                                                                                                                                b = false;
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                });
                                                                                                                const __exports = __ifInstance97.exports;
                                                                                                                return __exports.data(this.state === kShowControllerState_IdleAtInitialState ? 1 : 0);
                                                                                                            })();
                                                                                                        }
                                                                                                    },
                                                                                                    impFunc2: () => {
                                                                                                        {
                                                                                                            b = false;
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __ifInstance96.exports;
                                                                                            return __exports.data(this.currentSceneIndex === this.script.lastSceneIndex ? 1 : 0);
                                                                                        })();
                                                                                    }
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance95.exports;
                                                                        return __exports.data(this.currentSceneIndex < this.script.lastSceneIndex ? 1 : 0);
                                                                    })();
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance94.exports;
                                                    return __exports.data(c === 0 && this.script.lastSceneIndex === 0 ? 1 : 0);
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance92.exports;
                                return __exports.data(this.script.loopSlideshow ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance91.exports;
            return __exports.data(this.script.lastSceneIndex === -1 ? 1 : 0);
        })();
        (() => {
            const __callInstance51 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.displayManager.setPreviousButtonEnabled(a);
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
                        this.displayManager.setNextButtonEnabled(b);
                    }
                }
            });
            const __exports = __callInstance50.exports;
            return __exports.data();
        })();
    },
    playCurrentScene: function (d) {
        var a = this.state;
        var b;
        var c = 0;
        var g = this.playbackController.eventOverallEndTime();
        (() => {
            const __callInstance49 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.changeState(kShowControllerState_Playing);
                    }
                }
            });
            const __exports = __callInstance49.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance98 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance48 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.helpPlacard.hide();
                                        }
                                    }
                                });
                                const __exports = __callInstance48.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance98.exports;
            return __exports.data(this.helpPlacard.isShowing ? 1 : 0);
        })();
        (() => {
            const __ifInstance99 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance47 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.slideNumberDisplay.hide();
                                        }
                                    }
                                });
                                const __exports = __callInstance47.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance99.exports;
            return __exports.data(this.slideNumberDisplay.isShowing ? 1 : 0);
        })();
        (() => {
            const __ifInstance100 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            b = d.sceneIndexToJump;
                        }
                    },
                    impFunc2: () => {
                        {
                            b = this.nextSceneIndex;
                            (() => {
                                const __ifInstance101 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                c = this.playbackController.kpfEvent.event.effects[0].beginTime;
                                                g = this.playbackController.kpfEvent.event.effects[0].duration;
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance101.exports;
                                return __exports.data(this.playbackController.kpfEvent.event.automaticPlay == true && this.playbackController.kpfEvent.event.effects[0].type === lS(0, 76) ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance100.exports;
            return __exports.data(d ? 1 : 0);
        })();
        (() => {
            const __ifInstance102 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance46 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            clearTimeout(this.animateTimeout);
                                        }
                                    }
                                });
                                const __exports = __callInstance46.exports;
                                return __exports.data();
                            })();
                            var f;
                            (() => {
                                const __ifInstance103 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __ifInstance104 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    f = this.playbackController.renderEffects();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    (() => {
                                                                        const __ifInstance105 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        f = this.playbackController.renderEffects();
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance105.exports;
                                                                        return __exports.data(this.playbackController.kpfEvent.event.effects[0].name != lS(0, 78) ? 1 : 0);
                                                                    })();
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance104.exports;
                                                    return __exports.data(isIE ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance103.exports;
                                return __exports.data(this.playbackController.kpfEvent.event.effects[0].type === lS(0, 77) ? 1 : 0);
                            })();
                            this.animateTimeout = setTimeout(function (h) {
                                (() => {
                                    const __ifInstance106 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    h = this.playbackController.renderEffects();
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance106.exports;
                                    return __exports.data(h == null ? 1 : 0);
                                })();
                                (() => {
                                    const __callInstance45 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.playbackController.animateEffects(h);
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
                                                setTimeout(this.currentSceneDidComplete.bind(this, b), g * 1000 + 100);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance44.exports;
                                    return __exports.data();
                                })();
                            }.bind(this, f), c * 1000);
                        }
                    },
                    impFunc2: () => {
                        {
                            var e = this.script.events[this.currentSceneIndex].automaticPlay;
                            (() => {
                                const __ifInstance107 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance43 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.updateNavigationButtons();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance43.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __ifInstance108 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __ifInstance109 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        (() => {
                                                                                            const __callInstance42 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                env: {
                                                                                                    impFunc: () => {
                                                                                                        setTimeout(this.exitShow.bind(this), 2000);
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __callInstance42.exports;
                                                                                            return __exports.data();
                                                                                        })();
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                    {
                                                                                        (() => {
                                                                                            const __callInstance41 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                env: {
                                                                                                    impFunc: () => {
                                                                                                        this.exitShow();
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
                                                                        const __exports = __ifInstance109.exports;
                                                                        return __exports.data(e ? 1 : 0);
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance40 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    this.changeState(kShowControllerState_IdleAtInitialState);
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance40.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance108.exports;
                                                    return __exports.data(this.delegate.getKPFJsonStringForShow ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __ifInstance110 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance39 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    setTimeout(function () {
                                                                                        (() => {
                                                                                            const __callInstance38 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                env: {
                                                                                                    impFunc: () => {
                                                                                                        this.changeState(kShowControllerState_IdleAtInitialState);
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __callInstance38.exports;
                                                                                            return __exports.data();
                                                                                        })();
                                                                                        (() => {
                                                                                            const __callInstance37 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                env: {
                                                                                                    impFunc: () => {
                                                                                                        this.jumpToScene(b, this.script.events[b].automaticPlay);
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __callInstance37.exports;
                                                                                            return __exports.data();
                                                                                        })();
                                                                                    }.bind(this), 2000);
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance39.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance36 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    this.changeState(kShowControllerState_IdleAtInitialState);
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
                                                                                    setTimeout(this.jumpToScene.bind(this, b, this.script.events[b].automaticPlay), 100);
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance35.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance110.exports;
                                                    return __exports.data(e ? 1 : 0);
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance107.exports;
                                return __exports.data(b === -1 ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance102.exports;
            return __exports.data(this.animationSupported ? 1 : 0);
        })();
    },
    currentSceneDidComplete: function (b) {
        (() => {
            const __ifInstance111 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance34 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.slideNumberDisplay.hide();
                                        }
                                    }
                                });
                                const __exports = __callInstance34.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance111.exports;
            return __exports.data(this.slideNumberDisplay.isShowing ? 1 : 0);
        })();
        (() => {
            const __callInstance33 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.changeState(kShowControllerState_IdleAtFinalState);
                    }
                }
            });
            const __exports = __callInstance33.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance112 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var c = this.script.events[b];
                            var a = c.automaticPlay == 1 || c.automaticPlay == true;
                            (() => {
                                const __callInstance32 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.jumpToScene(b, a);
                                        }
                                    }
                                });
                                const __exports = __callInstance32.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __ifInstance113 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __callInstance31 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.updateNavigationButtons();
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance31.exports;
                                                    return __exports.data();
                                                })();
                                                (() => {
                                                    const __ifInstance114 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance30 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    this.stopSoundTrack();
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
                                                                                    this.exitShow();
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance29.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance28 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    this.stopSoundTrack();
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
                                                    const __exports = __ifInstance114.exports;
                                                    return __exports.data(this.delegate.getKPFJsonStringForShow ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __ifInstance115 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance27 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    runInNextEventLoop(this.advanceToNextBuild.bind(this, lS(0, 79)));
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __callInstance27.exports;
                                                                        return __exports.data();
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance115.exports;
                                                    return __exports.data(this.script.events[this.nextSceneIndex].automaticPlay ? 1 : 0);
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance113.exports;
                                return __exports.data(this.nextSceneIndex === -1 ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance112.exports;
            return __exports.data(this.script.showMode == kShowModeHyperlinksOnly || b != -1 && b != this.nextSceneIndex ? 1 : 0);
        })();
    },
    resetMediaCache: function () {
        (() => {
            const __callInstance26 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.resetMovieCache();
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
                        this.resetAudioCache();
                    }
                }
            });
            const __exports = __callInstance25.exports;
            return __exports.data();
        })();
    },
    resetMovieCache: function () {
        for (var a in this.movieCache) {
            delete this.movieCache[a];
        }
        for (var a in this.movieCacheInfo) {
            delete this.movieCacheInfo[a];
        }
        this.movieCache = null;
        this.movieCacheInfo = null;
    },
    resetAudioCache: function () {
        for (var a in this.audioCache) {
            delete this.audioCache[a];
        }
        this.audioCache = null;
    },
    updateWindowHistory: function (c) {
        (() => {
            const __ifInstance116 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var b = document.URL.split(lS(0, 81));
                            var a = b[0].split(lS(0, 82));
                            (() => {
                                const __callInstance24 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            window.history.replaceState(null, lS(0, 83), a[0] + lS(0, 84) + c + (b[1] ? lS(0, 85) + b[1] : lS(0, 86)));
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
            const __exports = __ifInstance116.exports;
            return __exports.data(typeof window.history.replaceState != lS(0, 80) ? 1 : 0);
        })();
    },
    startSoundTrack: function () {
        if (gMode === kModeMobile) {
            return;
        }
        if (this.script.soundtrack == null) {
            return;
        }
        if (this.script.soundtrack.mode === kSoundTrackModeOff) {
            return;
        }
        this.currentSoundTrackIndex = 0;
        (() => {
            const __callInstance23 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.playNextItemInSoundTrack();
                    }
                }
            });
            const __exports = __callInstance23.exports;
            return __exports.data();
        })();
    },
    stopSoundTrack: function () {
        (() => {
            const __ifInstance117 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance22 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.soundTrackPlayer.stopObserving(lS(0, 87));
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
                                            this.soundTrackPlayer.pause();
                                        }
                                    }
                                });
                                const __exports = __callInstance21.exports;
                                return __exports.data();
                            })();
                            this.soundTrackPlayer = null;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance117.exports;
            return __exports.data(this.soundTrackPlayer ? 1 : 0);
        })();
    },
    playNextItemInSoundTrack: function () {
        var a = this.script.soundtrack.tracks[this.currentSoundTrackIndex];
        this.soundTrackPlayer = new Audio();
        this.soundTrackPlayer.src = lS(0, 88) + a;
        this.soundTrackPlayer.volume = this.script.soundtrack.volume;
        (() => {
            const __callInstance20 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.soundTrackPlayer.observe(lS(0, 89), this.soundTrackItemDidComplete.bind(this), false);
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
                        this.soundTrackPlayer.load();
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
                        this.soundTrackPlayer.play();
                    }
                }
            });
            const __exports = __callInstance18.exports;
            return __exports.data();
        })();
    },
    soundTrackItemDidComplete: function () {
        this.currentSoundTrackIndex++;
        (() => {
            const __ifInstance118 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance17 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.playNextItemInSoundTrack();
                                        }
                                    }
                                });
                                const __exports = __callInstance17.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                        {
                            (() => {
                                const __ifInstance119 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                this.soundTrackPlayer = null;
                                            }
                                        },
                                        impFunc2: () => {
                                            {
                                                (() => {
                                                    const __ifInstance120 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __callInstance16 = new WebAssembly.Instance(__callWasmModule, {
                                                                            env: {
                                                                                impFunc: () => {
                                                                                    this.startSoundTrack();
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
                                                    const __exports = __ifInstance120.exports;
                                                    return __exports.data(this.script.soundtrack.mode === kSoundTrackModeLooping ? 1 : 0);
                                                })();
                                            }
                                        }
                                    }
                                });
                                const __exports = __ifInstance119.exports;
                                return __exports.data(this.script.soundtrack.mode === kSoundTrackModePlayOnce ? 1 : 0);
                            })();
                        }
                    }
                }
            });
            const __exports = __ifInstance118.exports;
            return __exports.data(this.currentSoundTrackIndex < this.script.soundtrack.tracks.length ? 1 : 0);
        })();
    },
    processHyperlink: function (k) {
        var d = k.url;
        var m;
        if (d.indexOf(lS(0, 90)) === 0) {
            var l = d.substring(7);
            var g = -1;
            if (l === lS(0, 91)) {
                g = 0;
            } else {
                if (l === lS(0, 92)) {
                    g = this.script.slideCount - 1;
                } else {
                    var b = this.currentSceneIndex;
                    var f = -1;
                    switch (this.state) {
                    case kShowControllerState_IdleAtFinalState:
                        b = b + 1;
                    case kShowControllerState_IdleAtInitialState:
                        var a = this.scriptManager.slideIndexFromSceneIndex(b);
                        (() => {
                            const __ifInstance121 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            (() => {
                                                const __ifInstance122 = new WebAssembly.Instance(__ifWasmModule, {
                                                    env: {
                                                        impFunc1: () => {
                                                            {
                                                                (() => {
                                                                    const __ifInstance123 = new WebAssembly.Instance(__ifWasmModule, {
                                                                        env: {
                                                                            impFunc1: () => {
                                                                                {
                                                                                    f = 0;
                                                                                }
                                                                            },
                                                                            impFunc2: () => {
                                                                                {
                                                                                    (() => {
                                                                                        const __ifInstance124 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                            env: {
                                                                                                impFunc1: () => {
                                                                                                    {
                                                                                                        (() => {
                                                                                                            const __callInstance15 = new WebAssembly.Instance(__callWasmModule, {
                                                                                                                env: {
                                                                                                                    impFunc: () => {
                                                                                                                        this.exitShow();
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
                                                                                        const __exports = __ifInstance124.exports;
                                                                                        return __exports.data(this.delegate.getKPFJsonStringForShow ? 1 : 0);
                                                                                    })();
                                                                                }
                                                                            }
                                                                        }
                                                                    });
                                                                    const __exports = __ifInstance123.exports;
                                                                    return __exports.data(this.script.loopSlideshow ? 1 : 0);
                                                                })();
                                                            }
                                                        },
                                                        impFunc2: () => {
                                                            {
                                                                f = a + 1;
                                                            }
                                                        }
                                                    }
                                                });
                                                const __exports = __ifInstance122.exports;
                                                return __exports.data(a === this.script.slideCount - 1 ? 1 : 0);
                                            })();
                                        }
                                    },
                                    impFunc2: () => {
                                        {
                                            (() => {
                                                const __ifInstance125 = new WebAssembly.Instance(__ifWasmModule, {
                                                    env: {
                                                        impFunc1: () => {
                                                            {
                                                                (() => {
                                                                    const __ifInstance126 = new WebAssembly.Instance(__ifWasmModule, {
                                                                        env: {
                                                                            impFunc1: () => {
                                                                                {
                                                                                    (() => {
                                                                                        const __ifInstance127 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                            env: {
                                                                                                impFunc1: () => {
                                                                                                    {
                                                                                                        f = this.script.slideCount - 1;
                                                                                                    }
                                                                                                },
                                                                                                impFunc2: () => {
                                                                                                    {
                                                                                                        f = 0;
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        });
                                                                                        const __exports = __ifInstance127.exports;
                                                                                        return __exports.data(this.script.loopSlideshow ? 1 : 0);
                                                                                    })();
                                                                                }
                                                                            },
                                                                            impFunc2: () => {
                                                                                {
                                                                                    f = a - 1;
                                                                                }
                                                                            }
                                                                        }
                                                                    });
                                                                    const __exports = __ifInstance126.exports;
                                                                    return __exports.data(a === 0 ? 1 : 0);
                                                                })();
                                                            }
                                                        },
                                                        impFunc2: () => {
                                                        }
                                                    }
                                                });
                                                const __exports = __ifInstance125.exports;
                                                return __exports.data(l === lS(0, 94) ? 1 : 0);
                                            })();
                                        }
                                    }
                                }
                            });
                            const __exports = __ifInstance121.exports;
                            return __exports.data(l === lS(0, 93) ? 1 : 0);
                        })();
                        break;
                    default:
                        break;
                    }
                    g = f;
                }
            }
            (() => {
                const __ifInstance128 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __callInstance14 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                this.jumpToHyperlinkSlide(g, k);
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
                const __exports = __ifInstance128.exports;
                return __exports.data(g != -1 ? 1 : 0);
            })();
        } else {
            if (d.indexOf(lS(0, 95)) === 0) {
                var j = d.substring(9);
                var c = this.script.slideList;
                var g = -1;
                for (var h = 0, e = c.length; h < e; h++) {
                    if (c[h] === j) {
                        g = h;
                        break;
                    }
                }
                (() => {
                    const __ifInstance129 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    (() => {
                                        const __callInstance13 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    this.jumpToHyperlinkSlide(g, k);
                                                }
                                            }
                                        });
                                        const __exports = __callInstance13.exports;
                                        return __exports.data();
                                    })();
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance129.exports;
                    return __exports.data(g != -1 ? 1 : 0);
                })();
            } else {
                (() => {
                    const __ifInstance130 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    (() => {
                                        const __ifInstance131 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        (() => {
                                                            const __callInstance12 = new WebAssembly.Instance(__callWasmModule, {
                                                                env: {
                                                                    impFunc: () => {
                                                                        this.jumpToHyperlinkSlide(this.lastSlideViewedIndex, k);
                                                                    }
                                                                }
                                                            });
                                                            const __exports = __callInstance12.exports;
                                                            return __exports.data();
                                                        })();
                                                    }
                                                },
                                                impFunc2: () => {
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance131.exports;
                                        return __exports.data(this.lastSlideViewedIndex != -1 ? 1 : 0);
                                    })();
                                }
                            },
                            impFunc2: () => {
                                {
                                    (() => {
                                        const __ifInstance132 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        (() => {
                                                            const __callInstance11 = new WebAssembly.Instance(__callWasmModule, {
                                                                env: {
                                                                    impFunc: () => {
                                                                        this.exitShow();
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
                                                            const __ifInstance133 = new WebAssembly.Instance(__ifWasmModule, {
                                                                env: {
                                                                    impFunc1: () => {
                                                                        {
                                                                            (() => {
                                                                                const __callInstance10 = new WebAssembly.Instance(__callWasmModule, {
                                                                                    env: {
                                                                                        impFunc: () => {
                                                                                            window.open(d, lS(0, 99), null);
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
                                                                                const __ifInstance134 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                    env: {
                                                                                        impFunc1: () => {
                                                                                            {
                                                                                                window.location = d;
                                                                                            }
                                                                                        },
                                                                                        impFunc2: () => {
                                                                                        }
                                                                                    }
                                                                                });
                                                                                const __exports = __ifInstance134.exports;
                                                                                return __exports.data(d.indexOf(lS(0, 100)) === 0 ? 1 : 0);
                                                                            })();
                                                                        }
                                                                    }
                                                                }
                                                            });
                                                            const __exports = __ifInstance133.exports;
                                                            return __exports.data(d.indexOf(lS(0, 98)) === 0 ? 1 : 0);
                                                        })();
                                                    }
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance132.exports;
                                        return __exports.data(d.indexOf(lS(0, 97)) === 0 ? 1 : 0);
                                    })();
                                }
                            }
                        }
                    });
                    const __exports = __ifInstance130.exports;
                    return __exports.data(d.indexOf(lS(0, 96)) === 0 ? 1 : 0);
                })();
            }
        }
    },
    jumpToHyperlinkSlide: function (h, l) {
        var k = l.events;
        var j = this.script.sceneIndexFromSlideIndexLookup[h];
        if (k) {
            var d = this.script.slideList[h];
            var e = k[d];
            if (e) {
                var g = this.currentSceneIndex;
                switch (this.state) {
                case kShowControllerState_IdleAtFinalState:
                    (() => {
                        const __ifInstance135 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        g = g + 1;
                                    }
                                },
                                impFunc2: () => {
                                    {
                                        (() => {
                                            const __ifInstance136 = new WebAssembly.Instance(__ifWasmModule, {
                                                env: {
                                                    impFunc1: () => {
                                                        {
                                                            g = 0;
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance136.exports;
                                            return __exports.data(this.script.loopSlideshow ? 1 : 0);
                                        })();
                                    }
                                }
                            }
                        });
                        const __exports = __ifInstance135.exports;
                        return __exports.data(g < this.script.numScenes - 1 ? 1 : 0);
                    })();
                case kShowControllerState_IdleAtInitialState:
                    var c = this.script.slideIndexFromSceneIndexLookup[g];
                    var a = this.script.slideList[c];
                    var i = new KPFEvent({
                        slideId: a,
                        slideIndex: c,
                        sceneIndex: g,
                        event: e,
                        animationSupported: this.animationSupported
                    });
                    (() => {
                        const __callInstance9 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    this.displayScene(g, i);
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
                                    this.playCurrentScene({ sceneIndexToJump: j });
                                }
                            }
                        });
                        const __exports = __callInstance8.exports;
                        return __exports.data();
                    })();
                    break;
                default:
                    return;
                }
            } else {
                var b = this.script.events[j];
                var f = b.automaticPlay == 1 || b.automaticPlay == true;
                (() => {
                    const __callInstance7 = new WebAssembly.Instance(__callWasmModule, {
                        env: {
                            impFunc: () => {
                                this.jumpToSlide(h + 1, f);
                            }
                        }
                    });
                    const __exports = __callInstance7.exports;
                    return __exports.data();
                })();
            }
        } else {
            var b = this.script.events[j];
            var f = b.automaticPlay == 1 || b.automaticPlay == true;
            (() => {
                const __callInstance6 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            this.jumpToSlide(h + 1, f);
                        }
                    }
                });
                const __exports = __callInstance6.exports;
                return __exports.data();
            })();
        }
    },
    addMovieHyperlink: function (c, a) {
        var b = {
            targetRectangle: c,
            url: a
        };
        (() => {
            const __callInstance5 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.movieHyperlinks.push(b);
                    }
                }
            });
            const __exports = __callInstance5.exports;
            return __exports.data();
        })();
    },
    clearMovieHyperlinks: function () {
        delete this.movieHyperlinks;
        this.movieHyperlinks = new Array();
    },
    clearAllHyperlinks: function () {
        (() => {
            const __callInstance4 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.stageManager.clearAllHyperlinks();
                    }
                }
            });
            const __exports = __callInstance4.exports;
            return __exports.data();
        })();
        delete this.activeHyperlinks;
        this.activeHyperlinks = new Array();
    },
    findHyperlinkAtCoOrds: function (b) {
        var a = this.activeHyperlinks != null ? this.activeHyperlinks.length : 0;
        for (var d = a; d > 0; d--) {
            var e = this.activeHyperlinks[d - 1];
            var c = e.targetRectangle;
            hyperlinkLeft = Math.floor(c.x);
            hyperlinkTop = Math.floor(c.y);
            hyperlinkRight = hyperlinkLeft + Math.floor(c.width);
            hyperlinkBottom = hyperlinkTop + Math.floor(c.height);
            if (b.pointX >= hyperlinkLeft && b.pointX <= hyperlinkRight && b.pointY >= hyperlinkTop && b.pointY <= hyperlinkBottom) {
                return e;
            }
        }
        return null;
    },
    createHyperlinksForCurrentState: function (a) {
        var b = -1;
        switch (this.state) {
        case kShowControllerState_IdleAtInitialState:
            b = this.currentSceneIndex;
            break;
        case kShowControllerState_IdleAtFinalState:
            (() => {
                const __ifInstance137 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                b = this.currentSceneIndex + 1;
                            }
                        },
                        impFunc2: () => {
                            {
                                (() => {
                                    const __ifInstance138 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    b = this.currentSceneIndex;
                                                }
                                            },
                                            impFunc2: () => {
                                                {
                                                    (() => {
                                                        const __ifInstance139 = new WebAssembly.Instance(__ifWasmModule, {
                                                            env: {
                                                                impFunc1: () => {
                                                                    {
                                                                        b = 0;
                                                                    }
                                                                },
                                                                impFunc2: () => {
                                                                }
                                                            }
                                                        });
                                                        const __exports = __ifInstance139.exports;
                                                        return __exports.data(this.script.loopSlideshow ? 1 : 0);
                                                    })();
                                                }
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance138.exports;
                                    return __exports.data(this.script.showMode == kShowModeHyperlinksOnly ? 1 : 0);
                                })();
                            }
                        }
                    }
                });
                const __exports = __ifInstance137.exports;
                return __exports.data(this.currentSceneIndex < this.script.lastSceneIndex ? 1 : 0);
            })();
            break;
        default:
            break;
        }
        (() => {
            const __ifInstance140 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.clearAllHyperlinks();
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
                                            this.createHyperlinks(b);
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
            const __exports = __ifInstance140.exports;
            return __exports.data(b != -1 ? 1 : 0);
        })();
    },
    createHyperlinks: function (l) {
        if (l === -1) {
            return;
        }
        var m = this.script.events[l];
        if (m == null) {
            return;
        }
        var g = m.hyperlinks;
        if (g == null) {
            return;
        }
        var p = g.length;
        var j;
        var b = 150;
        var v = 50;
        var d = this.displayManager.showWidth;
        var k = this.displayManager.showHeight;
        (() => {
            j = 0;
            const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                env: {
                    test: () => {
                        return j < p ? 1 : 0;
                    },
                    update: () => {
                        j++;
                    },
                    body: () => {
                        {
                            var f = g[j];
                            var u = f.targetRectangle;
                            var r = {
                                targetRectangle: u,
                                events: f.events,
                                url: f.url
                            };
                            var t = u.x;
                            var i = u.y;
                            var w = d - (u.x + u.width);
                            var o = k - (u.y + u.top);
                            (() => {
                                const __ifInstance141 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                (() => {
                                                    const __ifInstance142 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    var q = b - u.width;
                                                                    var c = q / 2;
                                                                    var e = q / 2;
                                                                    (() => {
                                                                        const __ifInstance143 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        c = t;
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                    {
                                                                                        (() => {
                                                                                            const __ifInstance144 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                env: {
                                                                                                    impFunc1: () => {
                                                                                                        {
                                                                                                            c = c + (e - w);
                                                                                                        }
                                                                                                    },
                                                                                                    impFunc2: () => {
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __ifInstance144.exports;
                                                                                            return __exports.data(w < e ? 1 : 0);
                                                                                        })();
                                                                                    }
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance143.exports;
                                                                        return __exports.data(t < c ? 1 : 0);
                                                                    })();
                                                                    r.targetRectangle.x -= c;
                                                                    r.targetRectangle.width += q;
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance142.exports;
                                                    return __exports.data(u.width < b ? 1 : 0);
                                                })();
                                                (() => {
                                                    const __ifInstance145 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    var s = v - u.height;
                                                                    var n = s / 2;
                                                                    var h = s / 2;
                                                                    (() => {
                                                                        const __ifInstance146 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        n = i;
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                    {
                                                                                        (() => {
                                                                                            const __ifInstance147 = new WebAssembly.Instance(__ifWasmModule, {
                                                                                                env: {
                                                                                                    impFunc1: () => {
                                                                                                        {
                                                                                                            n = n + (e - w);
                                                                                                        }
                                                                                                    },
                                                                                                    impFunc2: () => {
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                            const __exports = __ifInstance147.exports;
                                                                                            return __exports.data(o < h ? 1 : 0);
                                                                                        })();
                                                                                    }
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance146.exports;
                                                                        return __exports.data(i < n ? 1 : 0);
                                                                    })();
                                                                    r.targetRectangle.y -= n;
                                                                    r.targetRectangle.height += s;
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance145.exports;
                                                    return __exports.data(u.height < v ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance141.exports;
                                return __exports.data(gMode === kModeMobile ? 1 : 0);
                            })();
                            (() => {
                                const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                                    env: {
                                        impFunc: () => {
                                            this.stageManager.addHyperlink(r.targetRectangle);
                                        }
                                    }
                                });
                                const __exports = __callInstance1.exports;
                                return __exports.data();
                            })();
                            this.activeHyperlinks[j] = r;
                        }
                    }
                }
            });
            const __exports = __forInstance0.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance148 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            (() => {
                                var a = 0;
                                const __forInstance1 = new WebAssembly.Instance(__forWasmModule, {
                                    env: {
                                        test: () => {
                                            return a < this.movieHyperlinks.length ? 1 : 0;
                                        },
                                        update: () => {
                                            a++;
                                        },
                                        body: () => {
                                            {
                                                var x = this.movieHyperlinks[a];
                                                (() => {
                                                    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                                                        env: {
                                                            impFunc: () => {
                                                                this.stageManager.addHyperlink(x.targetRectangle);
                                                            }
                                                        }
                                                    });
                                                    const __exports = __callInstance0.exports;
                                                    return __exports.data();
                                                })();
                                                this.activeHyperlinks[j++] = x;
                                            }
                                        }
                                    }
                                });
                                const __exports = __forInstance1.exports;
                                return __exports.data();
                            })();
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance148.exports;
            return __exports.data(this.movieHyperlinks.length > 0 ? 1 : 0);
        })();
    }
});