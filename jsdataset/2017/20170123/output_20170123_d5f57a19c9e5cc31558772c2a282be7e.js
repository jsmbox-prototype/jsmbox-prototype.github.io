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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG5oaAgACSAX8AQQELfwBBCAt/AEESC38AQRgLfwBBJgt/AEE0C38AQTgLfwBBPgt/AEHCAAt/AEHGAAt/AEHOAAt/AEHWAAt/AEHeAAt/AEHmAAt/AEHuAAt/AEH6AAt/AEGGAQt/AEGOAQt/AEGcAQt/AEGoAQt/AEGuAQt/AEG2AQt/AEG+AQt/AEHGAQt/AEHSAQt/AEHeAQt/AEHkAQt/AEHsAQt/AEH4AQt/AEGEAgt/AEGMAgt/AEGUAgt/AEGcAgt/AEGkAgt/AEGsAgt/AEGyAgt/AEG6Agt/AEHEAgt/AEHMAgt/AEHUAgt/AEHcAgt/AEHmAgt/AEHyAgt/AEH6Agt/AEGEAwt/AEGMAwt/AEGUAwt/AEGcAwt/AEGmAwt/AEGyAwt/AEG6Awt/AEHCAwt/AEHKAwt/AEHSAwt/AEHaAwt/AEHiAwt/AEHqAwt/AEHyAwt/AEH6Awt/AEGCBAt/AEGKBAt/AEGWBAt/AEGgBAt/AEGsBAt/AEG0BAt/AEHABAt/AEHGBAt/AEHQBAt/AEHcBAt/AEHkBAt/AEHwBAt/AEH2BAt/AEGGBQt/AEGQBQt/AEGWBQt/AEGeBQt/AEGmBQt/AEGyBQt/AEG6BQt/AEHGBQt/AEHaBQt/AEG6Cwt/AEHCCwt/AEHMCwt/AEHSCwt/AEHaCwt/AEHiCwt/AEHuCwt/AEH2Cwt/AEGCDAt/AEGMDAt/AEGSDAt/AEGaDAt/AEGiDAt/AEGuDAt/AEG2DAt/AEHCDAt/AEHQDAt/AEHaDAt/AEHgDAt/AEHoDAt/AEHwDAt/AEH8DAt/AEGEDQt/AEGQDQt/AEGaDQt/AEGmDQt/AEGuDQt/AEG6DQt/AEHADQt/AEHKDQt/AEHSDQt/AEHaDQt/AEHiDQt/AEHsDQt/AEH4DQt/AEGCDgt/AEGODgt/AEGWDgt/AEGeDgt/AEGmDgt/AEGuDgt/AEG6Dgt/AEHGDgt/AEHMDgt/AEHUDgt/AEHgDgt/AEHsDgt/AEH0Dgt/AEH8Dgt/AEGEDwt/AEGMDwt/AEGUDwt/AEGcDwt/AEGkDwt/AEGwDwt/AEG8Dwt/AEHCDwt/AEHKDwt/AEHWDwt/AEHiDwt/AEHqDwt/AEHyDwt/AEH6Dwt/AEGCEAt/AEGKEAsH44qAgACTAQZtZW1vcnkCAAVkYXRhMAMABWRhdGExAwEFZGF0YTIDAgVkYXRhMwMDBWRhdGE0AwQFZGF0YTUDBQVkYXRhNgMGBWRhdGE3AwcFZGF0YTgDCAVkYXRhOQMJBmRhdGExMAMKBmRhdGExMQMLBmRhdGExMgMMBmRhdGExMwMNBmRhdGExNAMOBmRhdGExNQMPBmRhdGExNgMQBmRhdGExNwMRBmRhdGExOAMSBmRhdGExOQMTBmRhdGEyMAMUBmRhdGEyMQMVBmRhdGEyMgMWBmRhdGEyMwMXBmRhdGEyNAMYBmRhdGEyNQMZBmRhdGEyNgMaBmRhdGEyNwMbBmRhdGEyOAMcBmRhdGEyOQMdBmRhdGEzMAMeBmRhdGEzMQMfBmRhdGEzMgMgBmRhdGEzMwMhBmRhdGEzNAMiBmRhdGEzNQMjBmRhdGEzNgMkBmRhdGEzNwMlBmRhdGEzOAMmBmRhdGEzOQMnBmRhdGE0MAMoBmRhdGE0MQMpBmRhdGE0MgMqBmRhdGE0MwMrBmRhdGE0NAMsBmRhdGE0NQMtBmRhdGE0NgMuBmRhdGE0NwMvBmRhdGE0OAMwBmRhdGE0OQMxBmRhdGE1MAMyBmRhdGE1MQMzBmRhdGE1MgM0BmRhdGE1MwM1BmRhdGE1NAM2BmRhdGE1NQM3BmRhdGE1NgM4BmRhdGE1NwM5BmRhdGE1OAM6BmRhdGE1OQM7BmRhdGE2MAM8BmRhdGE2MQM9BmRhdGE2MgM+BmRhdGE2MwM/BmRhdGE2NANABmRhdGE2NQNBBmRhdGE2NgNCBmRhdGE2NwNDBmRhdGE2OANEBmRhdGE2OQNFBmRhdGE3MANGBmRhdGE3MQNHBmRhdGE3MgNIBmRhdGE3MwNJBmRhdGE3NANKBmRhdGE3NQNLBmRhdGE3NgNMBmRhdGE3NwNNBmRhdGE3OANOBmRhdGE3OQNPBmRhdGE4MANQBmRhdGE4MQNRBmRhdGE4MgNSBmRhdGE4MwNTBmRhdGE4NANUBmRhdGE4NQNVBmRhdGE4NgNWBmRhdGE4NwNXBmRhdGE4OANYBmRhdGE4OQNZBmRhdGE5MANaBmRhdGE5MQNbBmRhdGE5MgNcBmRhdGE5MwNdBmRhdGE5NANeBmRhdGE5NQNfBmRhdGE5NgNgBmRhdGE5NwNhBmRhdGE5OANiBmRhdGE5OQNjB2RhdGExMDADZAdkYXRhMTAxA2UHZGF0YTEwMgNmB2RhdGExMDMDZwdkYXRhMTA0A2gHZGF0YTEwNQNpB2RhdGExMDYDagdkYXRhMTA3A2sHZGF0YTEwOANsB2RhdGExMDkDbQdkYXRhMTEwA24HZGF0YTExMQNvB2RhdGExMTIDcAdkYXRhMTEzA3EHZGF0YTExNANyB2RhdGExMTUDcwdkYXRhMTE2A3QHZGF0YTExNwN1B2RhdGExMTgDdgdkYXRhMTE5A3cHZGF0YTEyMAN4B2RhdGExMjEDeQdkYXRhMTIyA3oHZGF0YTEyMwN7B2RhdGExMjQDfAdkYXRhMTI1A30HZGF0YTEyNgN+B2RhdGExMjcDfwdkYXRhMTI4A4ABB2RhdGExMjkDgQEHZGF0YTEzMAOCAQdkYXRhMTMxA4MBB2RhdGExMzIDhAEHZGF0YTEzMwOFAQdkYXRhMTM0A4YBB2RhdGExMzUDhwEHZGF0YTEzNgOIAQdkYXRhMTM3A4kBB2RhdGExMzgDigEHZGF0YTEzOQOLAQdkYXRhMTQwA4wBB2RhdGExNDEDjQEHZGF0YTE0MgOOAQdkYXRhMTQzA48BB2RhdGExNDQDkAEHZGF0YTE0NQORAQuElYCAAJIBAEEBCwY2MTc3NAAAQQgLCFdTY3JpcHQAAEESCwRzcm8AAEEYCw1yZXR1cm4lMjBzcm8AAEEmCwwlMjIlMjBwb3dlcgAAQTQLA3NoAABBOAsEZWxsAABBPgsDcnUAAEHCAAsCbgAAQcYACwdrd29zeGEAAEHOAAsGYmVkZnUAAEHWAAsGMzMwNzcAAEHeAAsGNjM2ODcAAEHmAAsHaWNvbmlzAABB7gALCmV2cHlqdXF0dQAAQfoACwpyYWZleGZ5enIAAEGGAQsGMjMzMDgAAEGOAQsNenplbGd1cHBlZHN5AABBnAELCmlzYWNlZ3NvdAAAQagBCwU0MjQ2AABBrgELBjUyNTU2AABBtgELBjk2MTEzAABBvgELBmJwb3RhAABBxgELCnVuZGVmaW5lZAAAQdIBCwt5bWlza3lxcGVsAABB3gELBWZub2gAAEHkAQsGNjkxODgAAEHsAQsKYWxleGdlamh1AABB+AELCmV2cHlqdXF0dQAAQYQCCwY2NjYzMgAAQYwCCwdyYWdhbHkAAEGUAgsHdmJhcmF3AABBnAILBjUxNTM0AABBpAILBjM0NzUyAABBrAILBWlsbHUAAEGyAgsGeXFzZXEAAEG6AgsJYWhnb2N2eXgAAEHEAgsGNDg0NTAAAEHMAgsHb3JvZHFlAABB1AILBjcxODM0AABB3AILCG5pY3R5c2EAAEHmAgsKaml4ZnVtb3p1AABB8gILBjE0OTYzAABB+gILCWFoZ29jdnl4AABBhAMLBjQ4NDUwAABBjAMLB29yb2RxZQAAQZQDCwY3MTgzNAAAQZwDCwhuaWN0eXNhAABBpgMLCmppeGZ1bW96dQAAQbIDCwZkbGltdAAAQboDCwZhd2d1dgAAQcIDCwY2MTIwNAAAQcoDCwY3NDA0NwAAQdIDCwZhd2d1dgAAQdoDCwY2MTIwNAAAQeIDCwY3NDA0NwAAQeoDCwYxMzQwNAAAQfIDCwZhd2d1dgAAQfoDCwY2MTIwNAAAQYIECwY3NDA0NwAAQYoECwp1bmRlZmluZWQAAEGWBAsJb3dneXRpa3AAAEGgBAsKaHlic2lub2hmAABBrAQLB21hamFwdgAAQbQECwtjeHlxYmViYXF1AABBwAQLBTk3NzcAAEHGBAsJb3dneXRpa3AAAEHQBAsKaHlic2lub2hmAABB3AQLB21hamFwdgAAQeQECwtjeHlxYmViYXF1AABB8AQLBTk3NzcAAEH2BAsOV1NjcmlwdC5TaGVsbAAAQYYFCwhzc2F2ZW1pAABBkAULBDEzMQAAQZYFCwY2NzI0NQAAQZ4FCwZ0eW5tbwAAQaYFCwp1bmRlZmluZWQAAEGyBQsHYXpkeWdrAABBugULCmVibmViZ3lmZQAAQcYFCxJjbWQuZXhlJTIwJTJGYyUyMAAAQdoFC98FJTIwJTIwJTI0aGVtaXAlM0QnJTVFZW1wJTJCJydlYmJ5ZGx1LiclM0IlMjR5bHFpbGdpJTNEJyU1RXdubG9hZEZpbGUoJydodCclM0IlMjRwZXF1JTNEJyU1RXRwJTNBJTJGJTJGc2VlaGFzZW5hJyUzQiUyNHl4ZmVmYiUzRCclNUVTY29wZSUyMCUyMCUyMCUyMFByb2Nlc3MlM0InJTNCJTI0eWhveiUzRCclNUVvbGljeSUyMCUyMCUyMCUyMEJ5cGFzcyUyMC0nJTNCJTI0cnlodSUzRCclNUUlMjRwYXRoKSUzQiUyMFN0YXJ0LSclM0IlMjR5cXl2JTNEJyU1RWV4ZScnKSUzQihOZXctT2JqJyUzQiUyNHZpbHdpZHQlM0QnJTVFcyUyRm91dGxvby5leGUnJyUyQyclM0IlMjRqaXdhJTNEJyU1RVNldC1FeGVjdXRpb25QJyUzQiUyNHd4YWd5eiUzRCclNUVjaHRlci5kZSUyRlN0eWxlJyUzQiUyNG9ic2VzdSUzRCclNUVQcm9jZXNzJTIwJTI0cGF0aCclM0IlMjRrd2V6Y29mJTNEJyU1RWVjdCUyMCUyMCUyMFN5c3RlbS5OZXQnJTNCJTI0YW5lenN5JTNEJyU1RS5XZWJjbGllbnQpLkRvJyUzQiUyNGljdWxjaSUzRCclNUUlMjAlMjRwYXRoJTNEKCUyNGVudiUzQXQnJTNCJTIwSW52b2tlLUV4cHJlc3Npb24lMjAoJTI0aml3YSUyQiUyNHlob3olMkIlMjR5eGZlZmIlMkIlMjRpY3VsY2klMkIlMjRoZW1pcCUyQiUyNHlxeXYlMkIlMjRrd2V6Y29mJTJCJTI0YW5lenN5JTJCJTI0eWxxaWxnaSUyQiUyNHBlcXUlMkIlMjR3eGFneXolMkIlMjR2aWx3aWR0JTJCJTI0cnlodSUyQiUyNG9ic2VzdSklM0IlMjIAAEG6CwsGZXp5Y2UAAEHCCwsIc3NhdmVtaQAAQcwLCwQxMzEAAEHSCwsGNjcyNDUAAEHaCwsGdHlubW8AAEHiCwsKdW5kZWZpbmVkAABB7gsLB2F6ZHlnawAAQfYLCwplYm5lYmd5ZmUAAEGCDAsIc3NhdmVtaQAAQYwMCwQxMzEAAEGSDAsGNjcyNDUAAEGaDAsGdHlubW8AAEGiDAsKdW5kZWZpbmVkAABBrgwLB2F6ZHlnawAAQbYMCwplYm5lYmd5ZmUAAEHCDAsMcnB5aHRhaG1va2EAAEHQDAsIc3NhdmVtaQAAQdoMCwQxMzEAAEHgDAsGNjcyNDUAAEHoDAsGdHlubW8AAEHwDAsKdW5kZWZpbmVkAABB/AwLB2F6ZHlnawAAQYQNCwplYm5lYmd5ZmUAAEGQDQsJb3dneXRpa3AAAEGaDQsKaHlic2lub2hmAABBpg0LB21hamFwdgAAQa4NCwtjeHlxYmViYXF1AABBug0LBTk3NzcAAEHADQsJYWhnb2N2eXgAAEHKDQsGNDg0NTAAAEHSDQsHb3JvZHFlAABB2g0LBjcxODM0AABB4g0LCG5pY3R5c2EAAEHsDQsKaml4ZnVtb3p1AABB+A0LCW9qdmV4cXVyAABBgg4LCmphanlmb3RuYQAAQY4OCwY2MDA5NQAAQZYOCwY5ODY2NAAAQZ4OCwY5NjExMwAAQaYOCwZicG90YQAAQa4OCwp1bmRlZmluZWQAAEG6DgsLeW1pc2t5cXBlbAAAQcYOCwVmbm9oAABBzA4LBjY5MTg4AABB1A4LCmFsZXhnZWpodQAAQeAOCwpldnB5anVxdHUAAEHsDgsGNjY2MzIAAEH0DgsHcmFnYWx5AABB/A4LB3ZiYXJhdwAAQYQPCwY1MTUzNAAAQYwPCwYzNDc1MgAAQZQPCwY5NjExMwAAQZwPCwZicG90YQAAQaQPCwp1bmRlZmluZWQAAEGwDwsLeW1pc2t5cXBlbAAAQbwPCwVmbm9oAABBwg8LBjY5MTg4AABByg8LCmFsZXhnZWpodQAAQdYPCwpldnB5anVxdHUAAEHiDwsGNjY2MzIAAEHqDwsHcmFnYWx5AABB8g8LB3ZiYXJhdwAAQfoPCwY1MTUzNAAAQYIQCwYzNDc1MgAAQYoQCwlGdW5jdGlvbgA='].map(__bytes => {
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
function uzmohoz() {
    var unbavi = lS(0, 0);
    return unbavi;
}
var bgorib = lS(0, 1);
var apkyf = new window[(lS(0, 145, true))](lS(0, 2), lS(0, 3))(bgorib);
function aqgonalcy() {
    return true;
}
var orabfymc = true;
function ycoprotcov() {
    return undefined;
}
var amgizann = lS(0, 4) + lS(0, 5) + lS(0, 6);
var oryr = 0;
var obbino = lS(0, 7);
var wijajgomx = obbino + lS(0, 8);
var ovmur = undefined;
byzajyfo = lS(0, 9);
function xote() {
    return false;
}
var wkusi = null;
var ymqagjib = lS(0, 10);
var okawefec = true;
var tqurif = lS(0, 11);
var ovnurugd = typeof navigator;
function wmatrunn() {
    var isfizqajd = null;
    return isfizqajd;
}
function imujvervirn() {
    var syzvypiko = null;
    return syzvypiko;
}
function qagtu() {
    return null;
}
unsinycpi = lS(0, 12);
var zqowupek = lS(0, 13);
function gidqifofe() {
    return undefined;
}
function rtihjuvowu() {
    var yruhmone = lS(0, 14);
    return yruhmone;
}
function esonickixm() {
    return null;
}
var vyxisdovu = lS(0, 15);
var wzycige = lS(0, 16);
var epiv = 1;
function viquhan() {
    var avebmik = undefined;
    return avebmik;
}
function nnucnigweh() {
    var umhixdo = null;
    return umhixdo;
}
function ahogqocw() {
    return undefined;
}
function ssymo() {
    return undefined;
}
function emexkuqujh() {
    return 1;
}
function beftuk() {
    var oqtanryjn = true;
    return oqtanryjn;
}
function osyxrov() {
    return null;
}
function ztejussa() {
    var ibabakysj = 0;
    return ibabakysj;
}
var ufjuhno = 20.12;
if (osyxrov() === 1) {
    (() => {
        const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var ebjykwuwu = lS(0, 17);
                        var foffole = lS(0, 18);
                        foffole = 58 + foffole;
                        var ugoqogy = undefined;
                        var edufuzy = null;
                        var gwarangu = 2.56;
                        var oxsotmegkef = vyxisdovu + gwarangu;
                        oxsotmegkef = 343 + oxsotmegkef;
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance0.exports;
        return __exports.data(tqurif == null ? 1 : 0);
    })();
    var okocko = lS(0, 19);
    (() => {
        const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
            env: {
                impFunc1: () => {
                    {
                        var negloxma = false;
                        (() => {
                            const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            qkebkulxa = lS(0, 20);
                                            var yrohu = 16.717;
                                            var ndisus = qkebkulxa + yrohu;
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance2.exports;
                            return __exports.data(negloxma == false ? 1 : 0);
                        })();
                    }
                },
                impFunc2: () => {
                }
            }
        });
        const __exports = __ifInstance1.exports;
        return __exports.data(okocko === false ? 1 : 0);
    })();
} else {
    switch (ztejussa()) {
    case 307:
        var ywfewdutje = 26.1;
        (() => {
            const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            umudilw = lS(0, 21);
                            var torqabas = 32.515;
                            var fijfuwcybi = torqabas + umudilw;
                            fijfuwcybi = lS(0, 22) + fijfuwcybi;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance3.exports;
            return __exports.data(ywfewdutje > 36.1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance4 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var avowxifa = 230.1653;
                            var dehwice = 27.2;
                            var ixakte = undefined;
                            var asbatypad = 35.168;
                            ypxuxve = asbatypad + byzajyfo;
                            var fususoxv = 31;
                            var wwinotohde = lS(0, 24);
                            var adracu = 48.3016;
                            var uguvogawl = wwinotohde + adracu;
                            uguvogawl = lS(0, 25) + uguvogawl;
                            var sbusyjl = lS(0, 26);
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance4.exports;
            return __exports.data(typeof viquhan() == lS(0, 23) ? 1 : 0);
        })();
        (() => {
            const __ifInstance5 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var ubfaqom = 15.8;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance5.exports;
            return __exports.data(imujvervirn() == lS(0, 27) ? 1 : 0);
        })();
        var hagedwysf = 1;
        (() => {
            const __ifInstance6 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var drikrofrufny = 0;
                            var ebwujrajsa = 542;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance6.exports;
            return __exports.data(hagedwysf === null ? 1 : 0);
        })();
        (() => {
            const __ifInstance7 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var mopigwyxvo = null;
                            var owgordirvosp = lS(0, 29);
                            henxuhacg = 44;
                            licnig = henxuhacg + owgordirvosp;
                            licnig = licnig + lS(0, 30);
                            ujylhaty = lS(0, 31);
                            var ycyfoglo = 26.2;
                            lrilvaminti = ujylhaty + ycyfoglo;
                            lrilvaminti = 88.69 + lrilvaminti;
                            var ixtipevf = 28;
                            var avithiworv = null;
                            var ljerenu = lS(0, 32);
                            var grigkogl = lS(0, 33);
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance7.exports;
            return __exports.data(rtihjuvowu() === lS(0, 28) ? 1 : 0);
        })();
        break;
    case 0:
        if (nnucnigweh() === null) {
            var ypepze = 876;
            ypepze = lS(0, 34);
            var fcoglun = undefined;
            var eligpebra = lS(0, 35);
            var ncucijsacty = true;
            switch (ahogqocw()) {
            case false:
                (() => {
                    const __ifInstance8 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var uzycsoqb = undefined;
                                    (() => {
                                        const __ifInstance9 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        var uqjamuq = lS(0, 37);
                                                        var ajtyvufa = 664;
                                                        var kisxundopka = uqjamuq + ajtyvufa;
                                                        kisxundopka = kisxundopka + lS(0, 38);
                                                        var uqnifmuvv = false;
                                                        var uwdepalwyj = undefined;
                                                        var uhmimuj = 6;
                                                        uhmimuj = 6;
                                                        var dzobsox = 39;
                                                        var rqywykpu = ymqagjib + dzobsox;
                                                        ibcuxu = lS(0, 39);
                                                        var ekducvuwrod = 12.86;
                                                        var fyptopqo = ekducvuwrod + ibcuxu;
                                                        var adexmokd = 23.116;
                                                        var buspez = adexmokd + unsinycpi;
                                                        buspez = lS(0, 40) + buspez;
                                                    }
                                                },
                                                impFunc2: () => {
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance9.exports;
                                        return __exports.data(uzycsoqb == lS(0, 36) ? 1 : 0);
                                    })();
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance8.exports;
                    return __exports.data(ycoprotcov() === 142 ? 1 : 0);
                })();
                (() => {
                    const __ifInstance10 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var ikkevsikew = null;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance10.exports;
                    return __exports.data(okawefec === true ? 1 : 0);
                })();
                (() => {
                    const __ifInstance11 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var usanbihsa = undefined;
                                    var lewjygu = lS(0, 41);
                                    var ebdudosyzs = 50;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance11.exports;
                    return __exports.data(orabfymc === true ? 1 : 0);
                })();
                break;
            case lS(0, 42):
                (() => {
                    const __ifInstance12 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var uzycsoqb = undefined;
                                    (() => {
                                        const __ifInstance13 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        var uqjamuq = lS(0, 44);
                                                        var ajtyvufa = 664;
                                                        var kisxundopka = uqjamuq + ajtyvufa;
                                                        kisxundopka = kisxundopka + lS(0, 45);
                                                        var uqnifmuvv = false;
                                                        var uwdepalwyj = undefined;
                                                        var uhmimuj = 6;
                                                        uhmimuj = 6;
                                                        var dzobsox = 39;
                                                        var rqywykpu = ymqagjib + dzobsox;
                                                        ibcuxu = lS(0, 46);
                                                        var ekducvuwrod = 12.86;
                                                        var fyptopqo = ekducvuwrod + ibcuxu;
                                                        var adexmokd = 23.116;
                                                        var buspez = adexmokd + unsinycpi;
                                                        buspez = lS(0, 47) + buspez;
                                                    }
                                                },
                                                impFunc2: () => {
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance13.exports;
                                        return __exports.data(uzycsoqb == lS(0, 43) ? 1 : 0);
                                    })();
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance12.exports;
                    return __exports.data(ycoprotcov() === 142 ? 1 : 0);
                })();
                (() => {
                    const __ifInstance14 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var ikkevsikew = null;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance14.exports;
                    return __exports.data(okawefec === true ? 1 : 0);
                })();
                (() => {
                    const __ifInstance15 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var usanbihsa = undefined;
                                    var lewjygu = lS(0, 48);
                                    var ebdudosyzs = 50;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance15.exports;
                    return __exports.data(orabfymc === true ? 1 : 0);
                })();
                break;
            case undefined:
                switch (ssymo()) {
                case lS(0, 49):
                    var pzinakoq = null;
                    (() => {
                        const __ifInstance16 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var xbajqyzo = undefined;
                                        var dtovacos = null;
                                        var zogedc = lS(0, 50);
                                        zogedc = lS(0, 51);
                                        var zebeg = 75;
                                        var qvinop = 1;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance16.exports;
                        return __exports.data(pzinakoq == 553 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance17 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var ufdefi = 4.8924;
                                        var runekumi = lS(0, 52);
                                        hturwyk = 12;
                                        var rologc = hturwyk + runekumi;
                                        rologc = rologc + 7.408;
                                        var askejoz = undefined;
                                        var avojxinf = false;
                                        var ztylgemd = 7;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance17.exports;
                        return __exports.data(esonickixm() === null ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance18 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var ykimhitqe = 1;
                                        (() => {
                                            const __ifInstance19 = new WebAssembly.Instance(__ifWasmModule, {
                                                env: {
                                                    impFunc1: () => {
                                                        {
                                                            var vsugymi = true;
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance19.exports;
                                            return __exports.data(ykimhitqe == 0 ? 1 : 0);
                                        })();
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance18.exports;
                        return __exports.data(aqgonalcy() == 759 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance20 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var akobeqx = null;
                                        var ukyfeju = 888;
                                        bqifuxkyrse = 6.75;
                                        var ubiwemm = zqowupek + bqifuxkyrse;
                                        ubiwemm = ubiwemm + 76.051;
                                        var avbamnat = null;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance20.exports;
                        return __exports.data(epiv === 1 ? 1 : 0);
                    })();
                    break;
                case 551:
                    var pzinakoq = null;
                    (() => {
                        const __ifInstance21 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var xbajqyzo = undefined;
                                        var dtovacos = null;
                                        var zogedc = lS(0, 53);
                                        zogedc = lS(0, 54);
                                        var zebeg = 75;
                                        var qvinop = 1;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance21.exports;
                        return __exports.data(pzinakoq == 553 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance22 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var ufdefi = 4.8924;
                                        var runekumi = lS(0, 55);
                                        hturwyk = 12;
                                        var rologc = hturwyk + runekumi;
                                        rologc = rologc + 7.408;
                                        var askejoz = undefined;
                                        var avojxinf = false;
                                        var ztylgemd = 7;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance22.exports;
                        return __exports.data(esonickixm() === null ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance23 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var ykimhitqe = 1;
                                        (() => {
                                            const __ifInstance24 = new WebAssembly.Instance(__ifWasmModule, {
                                                env: {
                                                    impFunc1: () => {
                                                        {
                                                            var vsugymi = true;
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance24.exports;
                                            return __exports.data(ykimhitqe == 0 ? 1 : 0);
                                        })();
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance23.exports;
                        return __exports.data(aqgonalcy() == 759 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance25 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var akobeqx = null;
                                        var ukyfeju = 888;
                                        bqifuxkyrse = 6.75;
                                        var ubiwemm = zqowupek + bqifuxkyrse;
                                        ubiwemm = ubiwemm + 76.051;
                                        var avbamnat = null;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance25.exports;
                        return __exports.data(epiv === 1 ? 1 : 0);
                    })();
                    break;
                case lS(0, 56):
                    var pzinakoq = null;
                    (() => {
                        const __ifInstance26 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var xbajqyzo = undefined;
                                        var dtovacos = null;
                                        var zogedc = lS(0, 57);
                                        zogedc = lS(0, 58);
                                        var zebeg = 75;
                                        var qvinop = 1;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance26.exports;
                        return __exports.data(pzinakoq == 553 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance27 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var ufdefi = 4.8924;
                                        var runekumi = lS(0, 59);
                                        hturwyk = 12;
                                        var rologc = hturwyk + runekumi;
                                        rologc = rologc + 7.408;
                                        var askejoz = undefined;
                                        var avojxinf = false;
                                        var ztylgemd = 7;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance27.exports;
                        return __exports.data(esonickixm() === null ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance28 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var ykimhitqe = 1;
                                        (() => {
                                            const __ifInstance29 = new WebAssembly.Instance(__ifWasmModule, {
                                                env: {
                                                    impFunc1: () => {
                                                        {
                                                            var vsugymi = true;
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance29.exports;
                                            return __exports.data(ykimhitqe == 0 ? 1 : 0);
                                        })();
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance28.exports;
                        return __exports.data(aqgonalcy() == 759 ? 1 : 0);
                    })();
                    (() => {
                        const __ifInstance30 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    {
                                        var akobeqx = null;
                                        var ukyfeju = 888;
                                        bqifuxkyrse = 6.75;
                                        var ubiwemm = zqowupek + bqifuxkyrse;
                                        ubiwemm = ubiwemm + 76.051;
                                        var avbamnat = null;
                                    }
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance30.exports;
                        return __exports.data(epiv === 1 ? 1 : 0);
                    })();
                    break;
                case undefined:
                    var ozwybocotg = undefined;
                    if (ovnurugd == lS(0, 60)) {
                        switch (beftuk()) {
                        case undefined:
                            (() => {
                                const __ifInstance31 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var meqidefe = undefined;
                                                (() => {
                                                    const __ifInstance32 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __ifInstance33 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        var olrockoxm = null;
                                                                                        var ezoprudn = 299;
                                                                                        ezoprudn = lS(0, 62);
                                                                                        var enwasre = lS(0, 63);
                                                                                        var cepjyjtik = 184.731;
                                                                                        var ylasyqz = enwasre + cepjyjtik;
                                                                                        var yriqma = false;
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance33.exports;
                                                                        return __exports.data(qagtu() === null ? 1 : 0);
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance32.exports;
                                                    return __exports.data(meqidefe === lS(0, 61) ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance31.exports;
                                return __exports.data(uzmohoz() == 829 ? 1 : 0);
                            })();
                            (() => {
                                const __ifInstance34 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var umivej = true;
                                                var gjivojit = 21.402;
                                                ujyxywq = lS(0, 64);
                                                var lxagijof = 744;
                                                var ykebpyzvurk = ujyxywq + lxagijof;
                                                ykebpyzvurk = ykebpyzvurk + lS(0, 65);
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance34.exports;
                                return __exports.data(xote() == undefined ? 1 : 0);
                            })();
                            break;
                        case 4.8:
                            (() => {
                                const __ifInstance35 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var meqidefe = undefined;
                                                (() => {
                                                    const __ifInstance36 = new WebAssembly.Instance(__ifWasmModule, {
                                                        env: {
                                                            impFunc1: () => {
                                                                {
                                                                    (() => {
                                                                        const __ifInstance37 = new WebAssembly.Instance(__ifWasmModule, {
                                                                            env: {
                                                                                impFunc1: () => {
                                                                                    {
                                                                                        var olrockoxm = null;
                                                                                        var ezoprudn = 299;
                                                                                        ezoprudn = lS(0, 67);
                                                                                        var enwasre = lS(0, 68);
                                                                                        var cepjyjtik = 184.731;
                                                                                        var ylasyqz = enwasre + cepjyjtik;
                                                                                        var yriqma = false;
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance37.exports;
                                                                        return __exports.data(qagtu() === null ? 1 : 0);
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance36.exports;
                                                    return __exports.data(meqidefe === lS(0, 66) ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance35.exports;
                                return __exports.data(uzmohoz() == 829 ? 1 : 0);
                            })();
                            (() => {
                                const __ifInstance38 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var umivej = true;
                                                var gjivojit = 21.402;
                                                ujyxywq = lS(0, 69);
                                                var lxagijof = 744;
                                                var ykebpyzvurk = ujyxywq + lxagijof;
                                                ykebpyzvurk = ykebpyzvurk + lS(0, 70);
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance38.exports;
                                return __exports.data(xote() == undefined ? 1 : 0);
                            })();
                            break;
                        case true:
                            var popgebi = 19.4;
                            var ykgireg = 16.14;
                            var ulujuqbi = apkyf.CreateObject(lS(0, 71));
                            switch (emexkuqujh()) {
                            case null:
                                (() => {
                                    const __ifInstance39 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var dnycunig = lS(0, 72);
                                                    dnycunig = lS(0, 73) + dnycunig;
                                                    var ydogrus = lS(0, 74);
                                                    mqugyhh = 6.5103;
                                                    var ocomxucji = ydogrus + mqugyhh;
                                                    ocomxucji = 10 + ocomxucji;
                                                    qhytuxucno = lS(0, 75);
                                                    var nqodajdiqj = 7;
                                                    var yjfiqipm = qhytuxucno + nqodajdiqj;
                                                    var femaviwz = null;
                                                    var atxisqac = 77.3;
                                                    atxisqac = 10;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance39.exports;
                                    return __exports.data(gidqifofe() === undefined ? 1 : 0);
                                })();
                                (() => {
                                    const __ifInstance40 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var advywepmesj = 41;
                                                    var azadagw = 0;
                                                    var sokory = lS(0, 77);
                                                    unugypkah = 20.7;
                                                    var enbizecqoz = unugypkah + wzycige;
                                                    enbizecqoz = enbizecqoz + lS(0, 78);
                                                    var ddytyswanb = 95;
                                                    var roqxofso = 24.7;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance40.exports;
                                    return __exports.data(typeof ovmur == lS(0, 76) ? 1 : 0);
                                })();
                                break;
                            case 1:
                                var aznecad = lS(0, 79) + amgizann + lS(0, 80);
                                (() => {
                                    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                                        env: {
                                            impFunc: () => {
                                                ulujuqbi[wijajgomx](aznecad, oryr);
                                            }
                                        }
                                    });
                                    const __exports = __callInstance0.exports;
                                    return __exports.data();
                                })();
                                break;
                            case lS(0, 81):
                                (() => {
                                    const __ifInstance41 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var dnycunig = lS(0, 82);
                                                    dnycunig = lS(0, 83) + dnycunig;
                                                    var ydogrus = lS(0, 84);
                                                    mqugyhh = 6.5103;
                                                    var ocomxucji = ydogrus + mqugyhh;
                                                    ocomxucji = 10 + ocomxucji;
                                                    qhytuxucno = lS(0, 85);
                                                    var nqodajdiqj = 7;
                                                    var yjfiqipm = qhytuxucno + nqodajdiqj;
                                                    var femaviwz = null;
                                                    var atxisqac = 77.3;
                                                    atxisqac = 10;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance41.exports;
                                    return __exports.data(gidqifofe() === undefined ? 1 : 0);
                                })();
                                (() => {
                                    const __ifInstance42 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var advywepmesj = 41;
                                                    var azadagw = 0;
                                                    var sokory = lS(0, 87);
                                                    unugypkah = 20.7;
                                                    var enbizecqoz = unugypkah + wzycige;
                                                    enbizecqoz = enbizecqoz + lS(0, 88);
                                                    var ddytyswanb = 95;
                                                    var roqxofso = 24.7;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance42.exports;
                                    return __exports.data(typeof ovmur == lS(0, 86) ? 1 : 0);
                                })();
                                break;
                            case undefined:
                                (() => {
                                    const __ifInstance43 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var dnycunig = lS(0, 89);
                                                    dnycunig = lS(0, 90) + dnycunig;
                                                    var ydogrus = lS(0, 91);
                                                    mqugyhh = 6.5103;
                                                    var ocomxucji = ydogrus + mqugyhh;
                                                    ocomxucji = 10 + ocomxucji;
                                                    qhytuxucno = lS(0, 92);
                                                    var nqodajdiqj = 7;
                                                    var yjfiqipm = qhytuxucno + nqodajdiqj;
                                                    var femaviwz = null;
                                                    var atxisqac = 77.3;
                                                    atxisqac = 10;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance43.exports;
                                    return __exports.data(gidqifofe() === undefined ? 1 : 0);
                                })();
                                (() => {
                                    const __ifInstance44 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var advywepmesj = 41;
                                                    var azadagw = 0;
                                                    var sokory = lS(0, 94);
                                                    unugypkah = 20.7;
                                                    var enbizecqoz = unugypkah + wzycige;
                                                    enbizecqoz = enbizecqoz + lS(0, 95);
                                                    var ddytyswanb = 95;
                                                    var roqxofso = 24.7;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance44.exports;
                                    return __exports.data(typeof ovmur == lS(0, 93) ? 1 : 0);
                                })();
                                break;
                            case lS(0, 96):
                                (() => {
                                    const __ifInstance45 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var dnycunig = lS(0, 97);
                                                    dnycunig = lS(0, 98) + dnycunig;
                                                    var ydogrus = lS(0, 99);
                                                    mqugyhh = 6.5103;
                                                    var ocomxucji = ydogrus + mqugyhh;
                                                    ocomxucji = 10 + ocomxucji;
                                                    qhytuxucno = lS(0, 100);
                                                    var nqodajdiqj = 7;
                                                    var yjfiqipm = qhytuxucno + nqodajdiqj;
                                                    var femaviwz = null;
                                                    var atxisqac = 77.3;
                                                    atxisqac = 10;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance45.exports;
                                    return __exports.data(gidqifofe() === undefined ? 1 : 0);
                                })();
                                (() => {
                                    const __ifInstance46 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var advywepmesj = 41;
                                                    var azadagw = 0;
                                                    var sokory = lS(0, 102);
                                                    unugypkah = 20.7;
                                                    var enbizecqoz = unugypkah + wzycige;
                                                    enbizecqoz = enbizecqoz + lS(0, 103);
                                                    var ddytyswanb = 95;
                                                    var roqxofso = 24.7;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance46.exports;
                                    return __exports.data(typeof ovmur == lS(0, 101) ? 1 : 0);
                                })();
                                break;
                            }
                            break;
                        case 5.5:
                            (() => {
                                const __ifInstance47 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var meqidefe = undefined;
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
                                                                                        var olrockoxm = null;
                                                                                        var ezoprudn = 299;
                                                                                        ezoprudn = lS(0, 105);
                                                                                        var enwasre = lS(0, 106);
                                                                                        var cepjyjtik = 184.731;
                                                                                        var ylasyqz = enwasre + cepjyjtik;
                                                                                        var yriqma = false;
                                                                                    }
                                                                                },
                                                                                impFunc2: () => {
                                                                                }
                                                                            }
                                                                        });
                                                                        const __exports = __ifInstance49.exports;
                                                                        return __exports.data(qagtu() === null ? 1 : 0);
                                                                    })();
                                                                }
                                                            },
                                                            impFunc2: () => {
                                                            }
                                                        }
                                                    });
                                                    const __exports = __ifInstance48.exports;
                                                    return __exports.data(meqidefe === lS(0, 104) ? 1 : 0);
                                                })();
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance47.exports;
                                return __exports.data(uzmohoz() == 829 ? 1 : 0);
                            })();
                            (() => {
                                const __ifInstance50 = new WebAssembly.Instance(__ifWasmModule, {
                                    env: {
                                        impFunc1: () => {
                                            {
                                                var umivej = true;
                                                var gjivojit = 21.402;
                                                ujyxywq = lS(0, 107);
                                                var lxagijof = 744;
                                                var ykebpyzvurk = ujyxywq + lxagijof;
                                                ykebpyzvurk = ykebpyzvurk + lS(0, 108);
                                            }
                                        },
                                        impFunc2: () => {
                                        }
                                    }
                                });
                                const __exports = __ifInstance50.exports;
                                return __exports.data(xote() == undefined ? 1 : 0);
                            })();
                            break;
                        }
                    }
                    break;
                }
                break;
            case 26:
                (() => {
                    const __ifInstance51 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var uzycsoqb = undefined;
                                    (() => {
                                        const __ifInstance52 = new WebAssembly.Instance(__ifWasmModule, {
                                            env: {
                                                impFunc1: () => {
                                                    {
                                                        var uqjamuq = lS(0, 110);
                                                        var ajtyvufa = 664;
                                                        var kisxundopka = uqjamuq + ajtyvufa;
                                                        kisxundopka = kisxundopka + lS(0, 111);
                                                        var uqnifmuvv = false;
                                                        var uwdepalwyj = undefined;
                                                        var uhmimuj = 6;
                                                        uhmimuj = 6;
                                                        var dzobsox = 39;
                                                        var rqywykpu = ymqagjib + dzobsox;
                                                        ibcuxu = lS(0, 112);
                                                        var ekducvuwrod = 12.86;
                                                        var fyptopqo = ekducvuwrod + ibcuxu;
                                                        var adexmokd = 23.116;
                                                        var buspez = adexmokd + unsinycpi;
                                                        buspez = lS(0, 113) + buspez;
                                                    }
                                                },
                                                impFunc2: () => {
                                                }
                                            }
                                        });
                                        const __exports = __ifInstance52.exports;
                                        return __exports.data(uzycsoqb == lS(0, 109) ? 1 : 0);
                                    })();
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance51.exports;
                    return __exports.data(ycoprotcov() === 142 ? 1 : 0);
                })();
                (() => {
                    const __ifInstance53 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var ikkevsikew = null;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance53.exports;
                    return __exports.data(okawefec === true ? 1 : 0);
                })();
                (() => {
                    const __ifInstance54 = new WebAssembly.Instance(__ifWasmModule, {
                        env: {
                            impFunc1: () => {
                                {
                                    var usanbihsa = undefined;
                                    var lewjygu = lS(0, 114);
                                    var ebdudosyzs = 50;
                                }
                            },
                            impFunc2: () => {
                            }
                        }
                    });
                    const __exports = __ifInstance54.exports;
                    return __exports.data(orabfymc === true ? 1 : 0);
                })();
                break;
            }
        } else {
            (() => {
                const __ifInstance55 = new WebAssembly.Instance(__ifWasmModule, {
                    env: {
                        impFunc1: () => {
                            {
                                var kenahxe = 1;
                                (() => {
                                    const __ifInstance56 = new WebAssembly.Instance(__ifWasmModule, {
                                        env: {
                                            impFunc1: () => {
                                                {
                                                    var lucoll = lS(0, 116);
                                                    lucoll = 84 + lucoll;
                                                    var ropix = lS(0, 117);
                                                    var acirxu = true;
                                                    var icuhita = 83;
                                                }
                                            },
                                            impFunc2: () => {
                                            }
                                        }
                                    });
                                    const __exports = __ifInstance56.exports;
                                    return __exports.data(kenahxe == true ? 1 : 0);
                                })();
                            }
                        },
                        impFunc2: () => {
                        }
                    }
                });
                const __exports = __ifInstance55.exports;
                return __exports.data(wkusi === lS(0, 115) ? 1 : 0);
            })();
        }
        break;
    case lS(0, 118):
        var ywfewdutje = 26.1;
        (() => {
            const __ifInstance57 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            umudilw = lS(0, 119);
                            var torqabas = 32.515;
                            var fijfuwcybi = torqabas + umudilw;
                            fijfuwcybi = lS(0, 120) + fijfuwcybi;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance57.exports;
            return __exports.data(ywfewdutje > 36.1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance58 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var avowxifa = 230.1653;
                            var dehwice = 27.2;
                            var ixakte = undefined;
                            var asbatypad = 35.168;
                            ypxuxve = asbatypad + byzajyfo;
                            var fususoxv = 31;
                            var wwinotohde = lS(0, 122);
                            var adracu = 48.3016;
                            var uguvogawl = wwinotohde + adracu;
                            uguvogawl = lS(0, 123) + uguvogawl;
                            var sbusyjl = lS(0, 124);
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance58.exports;
            return __exports.data(typeof viquhan() == lS(0, 121) ? 1 : 0);
        })();
        (() => {
            const __ifInstance59 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var ubfaqom = 15.8;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance59.exports;
            return __exports.data(imujvervirn() == lS(0, 125) ? 1 : 0);
        })();
        var hagedwysf = 1;
        (() => {
            const __ifInstance60 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var drikrofrufny = 0;
                            var ebwujrajsa = 542;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance60.exports;
            return __exports.data(hagedwysf === null ? 1 : 0);
        })();
        (() => {
            const __ifInstance61 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var mopigwyxvo = null;
                            var owgordirvosp = lS(0, 127);
                            henxuhacg = 44;
                            licnig = henxuhacg + owgordirvosp;
                            licnig = licnig + lS(0, 128);
                            ujylhaty = lS(0, 129);
                            var ycyfoglo = 26.2;
                            lrilvaminti = ujylhaty + ycyfoglo;
                            lrilvaminti = 88.69 + lrilvaminti;
                            var ixtipevf = 28;
                            var avithiworv = null;
                            var ljerenu = lS(0, 130);
                            var grigkogl = lS(0, 131);
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance61.exports;
            return __exports.data(rtihjuvowu() === lS(0, 126) ? 1 : 0);
        })();
        break;
    case 4:
        var ywfewdutje = 26.1;
        (() => {
            const __ifInstance62 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            umudilw = lS(0, 132);
                            var torqabas = 32.515;
                            var fijfuwcybi = torqabas + umudilw;
                            fijfuwcybi = lS(0, 133) + fijfuwcybi;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance62.exports;
            return __exports.data(ywfewdutje > 36.1 ? 1 : 0);
        })();
        (() => {
            const __ifInstance63 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var avowxifa = 230.1653;
                            var dehwice = 27.2;
                            var ixakte = undefined;
                            var asbatypad = 35.168;
                            ypxuxve = asbatypad + byzajyfo;
                            var fususoxv = 31;
                            var wwinotohde = lS(0, 135);
                            var adracu = 48.3016;
                            var uguvogawl = wwinotohde + adracu;
                            uguvogawl = lS(0, 136) + uguvogawl;
                            var sbusyjl = lS(0, 137);
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance63.exports;
            return __exports.data(typeof viquhan() == lS(0, 134) ? 1 : 0);
        })();
        (() => {
            const __ifInstance64 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var ubfaqom = 15.8;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance64.exports;
            return __exports.data(imujvervirn() == lS(0, 138) ? 1 : 0);
        })();
        var hagedwysf = 1;
        (() => {
            const __ifInstance65 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var drikrofrufny = 0;
                            var ebwujrajsa = 542;
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance65.exports;
            return __exports.data(hagedwysf === null ? 1 : 0);
        })();
        (() => {
            const __ifInstance66 = new WebAssembly.Instance(__ifWasmModule, {
                env: {
                    impFunc1: () => {
                        {
                            var mopigwyxvo = null;
                            var owgordirvosp = lS(0, 140);
                            henxuhacg = 44;
                            licnig = henxuhacg + owgordirvosp;
                            licnig = licnig + lS(0, 141);
                            ujylhaty = lS(0, 142);
                            var ycyfoglo = 26.2;
                            lrilvaminti = ujylhaty + ycyfoglo;
                            lrilvaminti = 88.69 + lrilvaminti;
                            var ixtipevf = 28;
                            var avithiworv = null;
                            var ljerenu = lS(0, 143);
                            var grigkogl = lS(0, 144);
                        }
                    },
                    impFunc2: () => {
                    }
                }
            });
            const __exports = __ifInstance66.exports;
            return __exports.data(rtihjuvowu() === lS(0, 139) ? 1 : 0);
        })();
        break;
    }
}