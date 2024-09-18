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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEG7oWAgAB9fwBBAQt/AEH+AAt/AEGIAQt/AEGUAQt/AEGcAQt/AEGuAQt/AEG4AQt/AEHMAQt/AEHUAQt/AEHkAQt/AEHwAQt/AEH8AQt/AEGOAgt/AEGWAgt/AEGeAgt/AEGqAgt/AEG2Agt/AEHAAgt/AEHQAgt/AEHYAgt/AEHoAgt/AEH6Agt/AEGEAwt/AEGOAwt/AEGcAwt/AEGoAwt/AEG0Awt/AEHAAwt/AEHIAwt/AEHaAwt/AEHoAwt/AEHyAwt/AEH6Awt/AEGOBAt/AEGWBAt/AEGkBAt/AEGsBAt/AEG8BAt/AEHGBAt/AEHUBAt/AEHkBAt/AEHsBAt/AEH4BAt/AEGIBQt/AEGQBQt/AEGYBQt/AEGuBQt/AEHABQt/AEHIBQt/AEHWBQt/AEHiBQt/AEHwBQt/AEH6BQt/AEGMBgt/AEGUBgt/AEGiBgt/AEGwBgt/AEG6Bgt/AEHIBgt/AEHQBgt/AEHkBgt/AEHuBgt/AEH8Bgt/AEGMBwt/AEGaBwt/AEGiBwt/AEGqBwt/AEG4Bwt/AEHGBwt/AEHSBwt/AEHaBwt/AEHoBwt/AEH0Bwt/AEGECAt/AEGSCAt/AEGaCAt/AEGoCAt/AEG0CAt/AEG2CAt/AEG+CAt/AEHGCAt/AEHSCAt/AEHaCAt/AEHiCAt/AEHwCAt/AEH6CAt/AEGKCQt/AEGcCQt/AEGoCQt/AEGwCQt/AEHACQt/AEHICQt/AEHQCQt/AEHaCQt/AEHkCQt/AEHyCQt/AEGECgt/AEGYCgt/AEGgCgt/AEGwCgt/AEG4Cgt/AEHECgt/AEHOCgt/AEHaCgt/AEHmCgt/AEHyCgt/AEGCCwt/AEGKCwt/AEGUCwt/AEGeCwt/AEGsCwt/AEG0Cwt/AEG8Cwt/AEHGCwt/AEHSCwt/AEHaCwt/AEHuCwt/AEH4Cwt/AEGIDAt/AEGUDAt/AEGgDAt/AEGsDAt/AEG8DAt/AEHKDAt/AEHcDAsH/oiAgAB+Bm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0GZGF0YTE0Aw4GZGF0YTE1Aw8GZGF0YTE2AxAGZGF0YTE3AxEGZGF0YTE4AxIGZGF0YTE5AxMGZGF0YTIwAxQGZGF0YTIxAxUGZGF0YTIyAxYGZGF0YTIzAxcGZGF0YTI0AxgGZGF0YTI1AxkGZGF0YTI2AxoGZGF0YTI3AxsGZGF0YTI4AxwGZGF0YTI5Ax0GZGF0YTMwAx4GZGF0YTMxAx8GZGF0YTMyAyAGZGF0YTMzAyEGZGF0YTM0AyIGZGF0YTM1AyMGZGF0YTM2AyQGZGF0YTM3AyUGZGF0YTM4AyYGZGF0YTM5AycGZGF0YTQwAygGZGF0YTQxAykGZGF0YTQyAyoGZGF0YTQzAysGZGF0YTQ0AywGZGF0YTQ1Ay0GZGF0YTQ2Ay4GZGF0YTQ3Ay8GZGF0YTQ4AzAGZGF0YTQ5AzEGZGF0YTUwAzIGZGF0YTUxAzMGZGF0YTUyAzQGZGF0YTUzAzUGZGF0YTU0AzYGZGF0YTU1AzcGZGF0YTU2AzgGZGF0YTU3AzkGZGF0YTU4AzoGZGF0YTU5AzsGZGF0YTYwAzwGZGF0YTYxAz0GZGF0YTYyAz4GZGF0YTYzAz8GZGF0YTY0A0AGZGF0YTY1A0EGZGF0YTY2A0IGZGF0YTY3A0MGZGF0YTY4A0QGZGF0YTY5A0UGZGF0YTcwA0YGZGF0YTcxA0cGZGF0YTcyA0gGZGF0YTczA0kGZGF0YTc0A0oGZGF0YTc1A0sGZGF0YTc2A0wGZGF0YTc3A00GZGF0YTc4A04GZGF0YTc5A08GZGF0YTgwA1AGZGF0YTgxA1EGZGF0YTgyA1IGZGF0YTgzA1MGZGF0YTg0A1QGZGF0YTg1A1UGZGF0YTg2A1YGZGF0YTg3A1cGZGF0YTg4A1gGZGF0YTg5A1kGZGF0YTkwA1oGZGF0YTkxA1sGZGF0YTkyA1wGZGF0YTkzA10GZGF0YTk0A14GZGF0YTk1A18GZGF0YTk2A2AGZGF0YTk3A2EGZGF0YTk4A2IGZGF0YTk5A2MHZGF0YTEwMANkB2RhdGExMDEDZQdkYXRhMTAyA2YHZGF0YTEwMwNnB2RhdGExMDQDaAdkYXRhMTA1A2kHZGF0YTEwNgNqB2RhdGExMDcDawdkYXRhMTA4A2wHZGF0YTEwOQNtB2RhdGExMTADbgdkYXRhMTExA28H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'].map(__bytes => {
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
function u6() {
    return lS(0, 1);
}
;
function d3() {
    return lS(0, 2);
}
;
function o1() {
    return lS(0, 3);
}
;
function l4() {
    return lS(0, 4);
}
;
function x6() {
    return lS(0, 5);
}
;
function x2() {
    return lS(0, 6);
}
;
function g6() {
    return lS(0, 7);
}
;
function m2() {
    return lS(0, 8);
}
;
function i0() {
    return lS(0, 9);
}
;
function h0() {
    return lS(0, 10);
}
;
function o2() {
    return lS(0, 11);
}
;
function c5() {
    return lS(0, 12);
}
;
function o9() {
    return lS(0, 13);
}
;
function e8() {
    return lS(0, 14);
}
;
function g1() {
    return lS(0, 15);
}
;
function u1() {
    return lS(0, 16);
}
;
function m0() {
    return lS(0, 17);
}
;
function q4() {
    return lS(0, 18);
}
;
function g4() {
    return lS(0, 19);
}
;
function u8() {
    return lS(0, 20);
}
;
function v9() {
    return lS(0, 21);
}
;
function d7() {
    return lS(0, 22);
}
;
function q8() {
    return lS(0, 23);
}
;
function h4() {
    return lS(0, 24);
}
;
function h9() {
    return lS(0, 25);
}
;
function k6() {
    return lS(0, 26);
}
;
function r5() {
    return lS(0, 27);
}
;
function j2() {
    return lS(0, 28);
}
;
function t1() {
    return lS(0, 29);
}
;
function c6() {
    return eval;
}
;
function h8() {
    return lS(0, 30);
}
;
function j3() {
    return lS(0, 31);
}
;
function v7() {
    return lS(0, 32);
}
;
function k5() {
    return lS(0, 33);
}
;
function k8() {
    return lS(0, 34);
}
;
function v5() {
    return lS(0, 35);
}
;
function e5() {
    return lS(0, 36);
}
;
function b7() {
    return lS(0, 37);
}
;
function f9() {
    return lS(0, 38);
}
;
function k2() {
    return lS(0, 39);
}
;
function k3() {
    return lS(0, 40);
}
;
function b4() {
    return lS(0, 41);
}
;
function a4() {
    return lS(0, 42);
}
;
function a8() {
    return lS(0, 43);
}
;
function g2() {
    return lS(0, 44);
}
;
function j5() {
    return lS(0, 45);
}
;
function p4() {
    return lS(0, 46);
}
;
function k0() {
    return lS(0, 47);
}
;
function c3() {
    return lS(0, 48);
}
;
function l3() {
    return lS(0, 49);
}
;
function u4() {
    return lS(0, 50);
}
;
function w8() {
    return lS(0, 51);
}
;
function d2() {
    return lS(0, 52);
}
;
function u5() {
    return lS(0, 53);
}
;
function l7() {
    return lS(0, 54);
}
;
function f5() {
    return lS(0, 55);
}
;
function v4() {
    return lS(0, 56);
}
;
function p9() {
    return lS(0, 57);
}
;
function p2() {
    return lS(0, 58);
}
;
function z6() {
    return lS(0, 59);
}
;
function i4() {
    return lS(0, 60);
}
;
function k9() {
    return lS(0, 61);
}
;
function c4() {
    return lS(0, 62);
}
;
function f6() {
    return lS(0, 63);
}
;
function s8() {
    return lS(0, 64);
}
;
function r6() {
    return lS(0, 65);
}
;
function x8() {
    return lS(0, 66);
}
;
function l2() {
    return lS(0, 67);
}
;
function w9() {
    return lS(0, 68);
}
;
function z9() {
    return lS(0, 69);
}
;
function x1() {
    return lS(0, 70);
}
;
function z0() {
    return lS(0, 71);
}
;
function f7() {
    return lS(0, 72);
}
;
function j9() {
    return lS(0, 73);
}
;
function c8() {
    return lS(0, 74);
}
;
function d8() {
    return lS(0, 75);
}
;
function c7() {
    return lS(0, 76);
}
;
var z4 = lS(0, 77);
function o0() {
    return lS(0, 78);
}
;
function u7() {
    return lS(0, 79);
}
;
function e3() {
    return lS(0, 80);
}
;
function q5() {
    return lS(0, 81);
}
;
function p5() {
    return lS(0, 82);
}
;
function v6() {
    return lS(0, 83);
}
;
function w2() {
    return lS(0, 84);
}
;
function y0() {
    return lS(0, 85);
}
;
function b5() {
    return lS(0, 86);
}
;
function h1() {
    return lS(0, 87);
}
;
function l1() {
    return lS(0, 88);
}
;
function c1() {
    return lS(0, 89);
}
;
function t4() {
    return lS(0, 90);
}
;
function v0() {
    return lS(0, 91);
}
;
function x7() {
    return lS(0, 92);
}
;
function o3() {
    return lS(0, 93);
}
;
function i3() {
    return lS(0, 94);
}
;
function x0() {
    return lS(0, 95);
}
;
function n1() {
    return lS(0, 96);
}
;
function s7() {
    return lS(0, 97);
}
;
function z8() {
    return lS(0, 98);
}
;
function b9() {
    return lS(0, 99);
}
;
function s0() {
    return lS(0, 100);
}
;
function r0() {
    return lS(0, 101);
}
;
function b6() {
    return lS(0, 102);
}
;
function n9() {
    return lS(0, 103);
}
;
function j4() {
    return lS(0, 104);
}
;
function o5() {
    return lS(0, 105);
}
;
function h3() {
    return lS(0, 106);
}
;
function i9() {
    return lS(0, 107);
}
;
function r1() {
    return lS(0, 108);
}
;
function m4() {
    return lS(0, 109);
}
;
function y8() {
    return lS(0, 110);
}
;
function k1() {
    return lS(0, 111);
}
;
function y5() {
    return lS(0, 112);
}
;
function a7() {
    return lS(0, 113);
}
;
function w0() {
    return lS(0, 114);
}
;
function a0() {
    return lS(0, 115);
}
;
function f0() {
    return lS(0, 116);
}
;
function x3() {
    return lS(0, 117);
}
;
function s3() {
    return lS(0, 118);
}
;
function y1() {
    return lS(0, 119);
}
;
function d4() {
    return lS(0, 120);
}
;
function y6() {
    return lS(0, 121);
}
;
function a9() {
    return lS(0, 122);
}
;
function r4() {
    return lS(0, 123);
}
;
function u2() {
    return lS(0, 124);
}
;
z4 += h8();
z4 += f7();
z4 += b7();
z4 += k5();
z4 += y1();
z4 += r6();
z4 += u6();
z4 += d7();
z4 += y8();
z4 += y6();
z4 += e3();
z4 += m0();
z4 += r5();
z4 += p5();
z4 += g2();
z4 += w2();
z4 += k1();
z4 += i0();
z4 += u4();
z4 += x3();
z4 += u7();
z4 += h3();
z4 += c8();
z4 += v0();
z4 += d4();
z4 += p9();
z4 += l1();
z4 += r1();
z4 += o0();
z4 += c5();
z4 += u2();
z4 += w9();
z4 += s0();
z4 += c3();
z4 += v5();
z4 += k0();
z4 += v4();
z4 += y5();
z4 += q4();
z4 += w0();
z4 += k2();
z4 += e8();
z4 += a7();
z4 += q5();
z4 += u5();
z4 += n9();
z4 += a8();
z4 += o1();
z4 += k8();
z4 += k6();
z4 += d2();
z4 += x6();
z4 += o2();
z4 += b5();
z4 += a0();
z4 += f0();
z4 += q8();
z4 += x1();
z4 += v9();
z4 += n1();
z4 += c4();
z4 += z6();
z4 += h1();
z4 += h4();
z4 += j9();
z4 += m2();
z4 += x2();
z4 += y0();
z4 += b9();
z4 += g1();
z4 += f5();
z4 += t1();
z4 += l3();
z4 += a4();
z4 += c7();
z4 += i9();
z4 += a9();
z4 += u1();
z4 += p2();
z4 += r4();
z4 += d8();
z4 += o3();
z4 += l7();
z4 += x8();
z4 += d3();
z4 += s7();
z4 += t4();
z4 += o9();
z4 += s3();
z4 += k9();
z4 += m4();
z4 += w8();
z4 += v6();
z4 += g4();
z4 += j4();
z4 += r0();
z4 += o5();
z4 += z9();
z4 += k3();
z4 += j3();
z4 += i3();
z4 += h0();
z4 += b6();
z4 += f6();
z4 += g6();
z4 += x7();
z4 += b4();
z4 += f9();
z4 += p4();
z4 += i4();
z4 += e5();
z4 += v7();
z4 += s8();
z4 += c1();
z4 += z0();
z4 += x0();
z4 += l4();
z4 += u8();
z4 += l2();
z4 += z8();
z4 += h9();
z4 += j5();
z4 += j2();
(() => {
    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                c6()(z4);
            }
        }
    });
    const __exports = __callInstance0.exports;
    return __exports.data();
})();