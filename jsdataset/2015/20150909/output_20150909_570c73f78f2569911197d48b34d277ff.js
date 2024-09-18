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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG6YCAgAASfwBBAQt/AEEGC38AQQ4LfwBBIAt/AEHKAAt/AEHQAAt/AEHYAAt/AEHqAAt/AEHuAAt/AEHyAAt/AEH6AAt/AEGAAQt/AEGGAQt/AEGOAQt/AEGoAQt/AEGsAQt/AEGwAQt/AEG4AQsHooGAgAATBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0GZGF0YTE0Aw4GZGF0YTE1Aw8GZGF0YTE2AxAGZGF0YTE3AxELjIKAgAASAEEBCwRkaXYAAEEGCwZjbGFzcwAAQQ4LEXNsaWRlTnVtYmVyTGFiZWwAAEEgCylQcmVzcyUyMFJldHVybiUyMHRvJTIwZ28lMjB0byUyMHNsaWRlJTNBAABBygALBGRpdgAAQdAACwZjbGFzcwAAQdgACxFzbGlkZU51bWJlckRpZ2l0AABB6gALA3B4AABB7gALA3B4AABB8gALBmJsb2NrAABB+gALBW5vbmUAAEGAAQsEZGl2AABBhgELBmNsYXNzAABBjgELGHNsaWRlTnVtYmVyRGlzcGxheURpZ2l0AABBqAELA3B4AABBrAELA3B4AABBsAELBmJsb2NrAABBuAELBW5vbmUA'].map(__bytes => {
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
var SlideNumberController = Class.create({
    initialize: function (a, b) {
        this.domNode = a;
        this.width = 120;
        this.height = 110;
        this.slideNumberLabel = document.createElement(lS(0, 0));
        (() => {
            const __callInstance5 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.slideNumberLabel.setAttribute(lS(0, 1), lS(0, 2));
                    }
                }
            });
            const __exports = __callInstance5.exports;
            return __exports.data();
        })();
        (() => {
            const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            this.slideNumberLabel.innerHTML = b;
                        }
                    },
                    impFunc2: () => {
                        {
                            this.slideNumberLabel.innerHTML = lS(0, 3);
                        }
                    }
                }
            });
            const __exports = __ifInstance0.exports;
            return __exports.data(b ? 1 : 0);
        })();
        this.slideNumberDigit = document.createElement(lS(0, 4));
        (() => {
            const __callInstance4 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.slideNumberDigit.setAttribute(lS(0, 5), lS(0, 6));
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
                        this.domNode.appendChild(this.slideNumberLabel);
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
                        this.domNode.appendChild(this.slideNumberDigit);
                    }
                }
            });
            const __exports = __callInstance2.exports;
            return __exports.data();
        })();
        this.isShowing = false;
    },
    setPosition: function (b, a) {
        this.domNode.style.left = b + lS(0, 7);
        this.domNode.style.top = a + lS(0, 8);
    },
    setSlideNumber: function (a) {
        this.slideNumberDigit.innerHTML = a;
    },
    show: function () {
        this.isShowing = true;
        this.domNode.style.display = lS(0, 9);
        this.domNode.style.opacity = 1;
    },
    hide: function () {
        this.isShowing = false;
        this.domNode.style.display = lS(0, 10);
        this.domNode.style.opacity = 0;
    }
});
var SlideNumberDisplay = Class.create({
    initialize: function (a) {
        this.domNode = a;
        this.width = 100;
        this.height = 100;
        this.slideNumberDigit = document.createElement(lS(0, 11));
        (() => {
            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        this.slideNumberDigit.setAttribute(lS(0, 12), lS(0, 13));
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
                        this.domNode.appendChild(this.slideNumberDigit);
                    }
                }
            });
            const __exports = __callInstance0.exports;
            return __exports.data();
        })();
        this.isShowing = false;
    },
    setPosition: function (b, a) {
        this.domNode.style.left = b + lS(0, 14);
        this.domNode.style.top = a + lS(0, 15);
    },
    setSlideNumber: function (a) {
        this.slideNumberDigit.innerHTML = a;
    },
    show: function (a) {
        this.isShowing = true;
        this.domNode.style.display = lS(0, 16);
        this.domNode.style.opacity = 1;
    },
    hide: function () {
        this.isShowing = false;
        this.domNode.style.display = lS(0, 17);
        this.domNode.style.opacity = 0;
    }
});