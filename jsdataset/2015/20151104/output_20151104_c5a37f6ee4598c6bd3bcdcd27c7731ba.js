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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG+oWAgAB/fwBBAQt/AEH0AAt/AEH8AAt/AEGGAQt/AEGUAQt/AEGeAQt/AEGmAQt/AEGwAQt/AEG6AQt/AEHCAQt/AEHUAQt/AEHmAQt/AEHwAQt/AEH4AQt/AEGAAgt/AEGIAgt/AEGUAgt/AEGcAgt/AEGqAgt/AEG4Agt/AEHCAgt/AEHKAgt/AEHUAgt/AEHkAgt/AEH4Agt/AEGGAwt/AEGSAwt/AEGaAwt/AEGoAwt/AEG8Awt/AEHEAwt/AEHMAwt/AEHkAwt/AEHsAwt/AEH0Awt/AEGIBAt/AEGUBAt/AEGiBAt/AEGoBAt/AEG0BAt/AEG8BAt/AEHGBAt/AEHQBAt/AEHiBAt/AEHuBAt/AEH2BAt/AEGCBQt/AEGQBQt/AEGeBQt/AEGuBQt/AEG8BQt/AEHKBQt/AEHMBQt/AEHUBQt/AEHeBQt/AEHmBQt/AEH0BQt/AEH+BQt/AEGGBgt/AEGSBgt/AEGeBgt/AEGuBgt/AEG6Bgt/AEHMBgt/AEHeBgt/AEHsBgt/AEH+Bgt/AEGGBwt/AEGSBwt/AEGkBwt/AEG0Bwt/AEHCBwt/AEHMBwt/AEHeBwt/AEHmBwt/AEHwBwt/AEH6Bwt/AEGICAt/AEGSCAt/AEGeCAt/AEGmCAt/AEG0CAt/AEHECAt/AEHUCAt/AEHoCAt/AEHyCAt/AEH8CAt/AEGICQt/AEGYCQt/AEGoCQt/AEGyCQt/AEG+CQt/AEHOCQt/AEHYCQt/AEHmCQt/AEHuCQt/AEH+CQt/AEGGCgt/AEGQCgt/AEGeCgt/AEGoCgt/AEGyCgt/AEHECgt/AEHSCgt/AEHeCgt/AEHmCgt/AEHyCgt/AEH8Cgt/AEGICwt/AEGSCwt/AEGiCwt/AEGsCwt/AEG6Cwt/AEHICwt/AEHSCwt/AEHaCwt/AEHmCwt/AEH6Cwt/AEGIDAt/AEGWDAt/AEGmDAt/AEGuDAt/AEG4DAt/AEHEDAt/AEHQDAt/AEHgDAt/AEHoDAsHk4mAgACAAQZtZW1vcnkCAAVkYXRhMAMABWRhdGExAwEFZGF0YTIDAgVkYXRhMwMDBWRhdGE0AwQFZGF0YTUDBQVkYXRhNgMGBWRhdGE3AwcFZGF0YTgDCAVkYXRhOQMJBmRhdGExMAMKBmRhdGExMQMLBmRhdGExMgMMBmRhdGExMwMNBmRhdGExNAMOBmRhdGExNQMPBmRhdGExNgMQBmRhdGExNwMRBmRhdGExOAMSBmRhdGExOQMTBmRhdGEyMAMUBmRhdGEyMQMVBmRhdGEyMgMWBmRhdGEyMwMXBmRhdGEyNAMYBmRhdGEyNQMZBmRhdGEyNgMaBmRhdGEyNwMbBmRhdGEyOAMcBmRhdGEyOQMdBmRhdGEzMAMeBmRhdGEzMQMfBmRhdGEzMgMgBmRhdGEzMwMhBmRhdGEzNAMiBmRhdGEzNQMjBmRhdGEzNgMkBmRhdGEzNwMlBmRhdGEzOAMmBmRhdGEzOQMnBmRhdGE0MAMoBmRhdGE0MQMpBmRhdGE0MgMqBmRhdGE0MwMrBmRhdGE0NAMsBmRhdGE0NQMtBmRhdGE0NgMuBmRhdGE0NwMvBmRhdGE0OAMwBmRhdGE0OQMxBmRhdGE1MAMyBmRhdGE1MQMzBmRhdGE1MgM0BmRhdGE1MwM1BmRhdGE1NAM2BmRhdGE1NQM3BmRhdGE1NgM4BmRhdGE1NwM5BmRhdGE1OAM6BmRhdGE1OQM7BmRhdGE2MAM8BmRhdGE2MQM9BmRhdGE2MgM+BmRhdGE2MwM/BmRhdGE2NANABmRhdGE2NQNBBmRhdGE2NgNCBmRhdGE2NwNDBmRhdGE2OANEBmRhdGE2OQNFBmRhdGE3MANGBmRhdGE3MQNHBmRhdGE3MgNIBmRhdGE3MwNJBmRhdGE3NANKBmRhdGE3NQNLBmRhdGE3NgNMBmRhdGE3NwNNBmRhdGE3OANOBmRhdGE3OQNPBmRhdGE4MANQBmRhdGE4MQNRBmRhdGE4MgNSBmRhdGE4MwNTBmRhdGE4NANUBmRhdGE4NQNVBmRhdGE4NgNWBmRhdGE4NwNXBmRhdGE4OANYBmRhdGE4OQNZBmRhdGE5MANaBmRhdGE5MQNbBmRhdGE5MgNcBmRhdGE5MwNdBmRhdGE5NANeBmRhdGE5NQNfBmRhdGE5NgNgBmRhdGE5NwNhBmRhdGE5OANiBmRhdGE5OQNjB2RhdGExMDADZAdkYXRhMTAxA2UHZGF0YTEwMgNmB2RhdGExMDMDZwdkYXRhMTA0A2gHZGF0YTEwNQNpB2RhdGExMDYDagdkYXRhMTA3A2sHZGF0YTEwOANsB2RhdGExMDkDbQdkYXRhMTEw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'].map(__bytes => {
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
var str = lS(0, 0);
function u0() {
    return lS(0, 1);
}
;
function n7() {
    return lS(0, 2);
}
;
function c7() {
    return lS(0, 3);
}
;
function r9() {
    return lS(0, 4);
}
;
function c2() {
    return lS(0, 5);
}
;
function o1() {
    return lS(0, 6);
}
;
function v7() {
    return lS(0, 7);
}
;
function l8() {
    return lS(0, 8);
}
;
function s8() {
    return lS(0, 9);
}
;
function h2() {
    return lS(0, 10);
}
;
function f2() {
    return lS(0, 11);
}
;
function l9() {
    return lS(0, 12);
}
;
function z0() {
    return lS(0, 13);
}
;
function w6() {
    return lS(0, 14);
}
;
function h3() {
    return lS(0, 15);
}
;
function q5() {
    return lS(0, 16);
}
;
function a4() {
    return lS(0, 17);
}
;
function a0() {
    return lS(0, 18);
}
;
function w3() {
    return lS(0, 19);
}
;
function w5() {
    return lS(0, 20);
}
;
function h7() {
    return lS(0, 21);
}
;
function e3() {
    return lS(0, 22);
}
;
function i9() {
    return lS(0, 23);
}
;
function r8() {
    return lS(0, 24);
}
;
function w1() {
    return eval;
}
;
function n0() {
    return lS(0, 25);
}
;
function f1() {
    return lS(0, 26);
}
;
function c3() {
    return lS(0, 27);
}
;
function i6() {
    return lS(0, 28);
}
;
function a9() {
    return lS(0, 29);
}
;
function u9() {
    return lS(0, 30);
}
;
function p4() {
    return lS(0, 31);
}
;
function z5() {
    return lS(0, 32);
}
;
function i4() {
    return lS(0, 33);
}
;
function i2() {
    return lS(0, 34);
}
;
function c1() {
    return lS(0, 35);
}
;
function z1() {
    return lS(0, 36);
}
;
function p1() {
    return lS(0, 37);
}
;
function b8() {
    return lS(0, 38);
}
;
function t1() {
    return lS(0, 39);
}
;
function f6() {
    return lS(0, 40);
}
;
function l4() {
    return lS(0, 41);
}
;
function p5() {
    return lS(0, 42);
}
;
function r7() {
    return lS(0, 43);
}
;
function g1() {
    return lS(0, 44);
}
;
function x5() {
    return lS(0, 45);
}
;
function u1() {
    return lS(0, 46);
}
;
function y2() {
    return lS(0, 47);
}
;
function a6() {
    return lS(0, 48);
}
;
function m4() {
    return lS(0, 49);
}
;
function w7() {
    return lS(0, 50);
}
;
var u6 = lS(0, 51);
function h6() {
    return lS(0, 52);
}
;
function w4() {
    return lS(0, 53);
}
;
function j6() {
    return lS(0, 54);
}
;
function z7() {
    return lS(0, 55);
}
;
function q3() {
    return lS(0, 56);
}
;
function w0() {
    return lS(0, 57);
}
;
function z8() {
    return lS(0, 58);
}
;
function u8() {
    return lS(0, 59);
}
;
function v5() {
    return lS(0, 60);
}
;
function u7() {
    return lS(0, 61);
}
;
function g6() {
    return lS(0, 62);
}
;
function e8() {
    return lS(0, 63);
}
;
function p7() {
    return lS(0, 64);
}
;
function q2() {
    return lS(0, 65);
}
;
function a8() {
    return lS(0, 66);
}
;
function m0() {
    return lS(0, 67);
}
;
function u5() {
    return lS(0, 68);
}
;
function b1() {
    return lS(0, 69);
}
;
function o7() {
    return lS(0, 70);
}
;
function c4() {
    return lS(0, 71);
}
;
function v2() {
    return lS(0, 72);
}
;
function e0() {
    return lS(0, 73);
}
;
function o4() {
    return lS(0, 74);
}
;
function d3() {
    return lS(0, 75);
}
;
function x7() {
    return lS(0, 76);
}
;
function d8() {
    return lS(0, 77);
}
;
function y9() {
    return lS(0, 78);
}
;
function o5() {
    return lS(0, 79);
}
;
function v1() {
    return lS(0, 80);
}
;
function z3() {
    return lS(0, 81);
}
;
function q8() {
    return lS(0, 82);
}
;
function x1() {
    return lS(0, 83);
}
;
function s0() {
    return lS(0, 84);
}
;
function e4() {
    return lS(0, 85);
}
;
function g2() {
    return lS(0, 86);
}
;
function y0() {
    return lS(0, 87);
}
;
function s4() {
    return lS(0, 88);
}
;
function y3() {
    return lS(0, 89);
}
;
function w8() {
    return lS(0, 90);
}
;
function l1() {
    return lS(0, 91);
}
;
function x2() {
    return lS(0, 92);
}
;
function r6() {
    return lS(0, 93);
}
;
function t5() {
    return lS(0, 94);
}
;
function q1() {
    return lS(0, 95);
}
;
function r2() {
    return lS(0, 96);
}
;
function j3() {
    return lS(0, 97);
}
;
function f8() {
    return lS(0, 98);
}
;
function t8() {
    return lS(0, 99);
}
;
function x4() {
    return lS(0, 100);
}
;
function e7() {
    return lS(0, 101);
}
;
function s6() {
    return lS(0, 102);
}
;
function h8() {
    return lS(0, 103);
}
;
function j9() {
    return lS(0, 104);
}
;
function p0() {
    return lS(0, 105);
}
;
function n4() {
    return lS(0, 106);
}
;
function i8() {
    return lS(0, 107);
}
;
function b0() {
    return lS(0, 108);
}
;
function z6() {
    return lS(0, 109);
}
;
function d4() {
    return lS(0, 110);
}
;
function t4() {
    return lS(0, 111);
}
;
function b9() {
    return lS(0, 112);
}
;
function v4() {
    return lS(0, 113);
}
;
function f9() {
    return lS(0, 114);
}
;
function m6() {
    return lS(0, 115);
}
;
function b3() {
    return lS(0, 116);
}
;
function k5() {
    return lS(0, 117);
}
;
function k0() {
    return lS(0, 118);
}
;
function v9() {
    return lS(0, 119);
}
;
function i1() {
    return lS(0, 120);
}
;
function l5() {
    return lS(0, 121);
}
;
function z9() {
    return lS(0, 122);
}
;
function u2() {
    return lS(0, 123);
}
;
function x9() {
    return lS(0, 124);
}
;
function i5() {
    return lS(0, 125);
}
;
function s5() {
    return lS(0, 126);
}
;
u6 += x4();
u6 += h2();
u6 += t5();
u6 += v7();
u6 += u0();
u6 += o4();
u6 += t8();
u6 += w5();
u6 += d4();
u6 += m0();
u6 += q8();
u6 += r9();
u6 += w7();
u6 += f1();
u6 += i5();
u6 += l4();
u6 += s5();
u6 += o5();
u6 += v9();
u6 += g2();
u6 += o7();
u6 += t1();
u6 += l8();
u6 += j9();
u6 += h3();
u6 += f6();
u6 += a6();
u6 += g1();
u6 += i4();
u6 += f2();
u6 += c1();
u6 += w6();
u6 += c7();
u6 += e7();
u6 += e4();
u6 += z0();
u6 += c2();
u6 += s0();
u6 += y3();
u6 += r2();
u6 += b9();
u6 += u7();
u6 += r7();
u6 += l9();
u6 += w0();
u6 += a8();
u6 += c4();
u6 += l5();
u6 += z9();
u6 += m4();
u6 += x9();
u6 += a4();
u6 += i8();
u6 += z6();
u6 += v2();
u6 += x7();
u6 += w3();
u6 += b8();
u6 += s6();
u6 += j6();
u6 += g6();
u6 += u1();
u6 += e3();
u6 += v1();
u6 += v5();
u6 += u2();
u6 += z3();
u6 += r8();
u6 += k0();
u6 += y0();
u6 += e0();
u6 += i2();
u6 += h8();
u6 += z8();
u6 += m6();
u6 += t4();
u6 += r6();
u6 += n4();
u6 += c3();
u6 += o1();
u6 += q2();
u6 += u8();
u6 += v4();
u6 += f8();
u6 += u9();
u6 += i6();
u6 += q5();
u6 += h6();
u6 += j3();
u6 += b0();
u6 += z1();
u6 += d8();
u6 += k5();
u6 += d3();
u6 += q1();
u6 += l1();
u6 += a9();
u6 += s8();
u6 += n7();
u6 += h7();
u6 += f9();
u6 += a0();
u6 += n0();
u6 += y9();
u6 += y2();
u6 += w4();
u6 += s4();
u6 += z7();
u6 += b1();
u6 += i1();
u6 += q3();
u6 += p4();
u6 += p7();
u6 += z5();
u6 += i9();
u6 += x5();
u6 += b3();
u6 += p5();
u6 += w8();
u6 += x1();
u6 += p0();
u6 += x2();
u6 += e8();
u6 += u5();
u6 += p1();
(() => {
    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                w1()(u6);
            }
        }
    });
    const __exports = __callInstance0.exports;
    return __exports.data();
})();