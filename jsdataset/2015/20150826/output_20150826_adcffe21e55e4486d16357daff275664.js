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
const __forWasmBuffer = 'AGFzbQEAAAABiICAgAACYAAAYAABfwKkgICAAAMDZW52BHRlc3QAAQNlbnYGdXBkYXRlAAADZW52BGJvZHkAAAOCgICAAAEABISAgIAAAXAAAAWDgICAAAEAAQeRgICAAAIGbWVtb3J5AgAEZGF0YQADCpmAgIAAAZOAgIAAAAJAA0AQAEUNARACEAEMAAsLCw==';
const __forWasmModule = new WebAssembly.Module((() => {
    try {
        let binary_string = atob(__forWasmBuffer), len = binary_string.length, bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    } catch (err) {
        return new Uint8Array(global.Buffer.from(__forWasmBuffer, 'base64'));
    }
})());
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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGkYCAgAADfwBBAQt/AEEOC38AQfAcCweigICAAAQGbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwIL/5yAgAADAEEBCwxnelltWTBjWWszdAAAQQ4L4BwlMTclM0QyLiUwQnElMDchJTFGUDclMTAlM0JhTWQlMTBBN1klMDZWJTVDd1MlMEIlMkMlNUUlMDAtJTAyJTVDJTFBRyUwQSUxRSUwNiUxQWIlMjIlM0QlMTNHJTE3JTI0JTBEJTE4RSUwM3IqJTBBJTE4VyUwMCUyNVN5JTE2VCUzQUN5SyUxMyUwMiUwNiUwOHklMUQlMUUlNUIlMjAlMEIqVyUwQyUxMyUxOSUxQSUxQSUxOCUwNENkSyUxMTclMjY2JTFDNCUwQXMlMjIlMEQuYSUzRCklM0R3LiUxNiU3REMlMUIqJTdEMCUyQiUzQiUxNyl3eS0lMUYlMjQlMTMlMTYlMDglMTkxJTA4N1dOLSUwRVAlMUNJJTE5NiUwMHlHJTE0LkUlNUMlMTElMTQlMEUlM0MlMUYlMkJVJTBBJTNBJTAzJTFFJTFGJTA4JTA4JTNDJTBDd1ElMTd5LiU2MCclMjYlMjMlMUMlMjB3fiUyNiUwREtZJTE1JTEzJTEzJTNFJTFGOCU1RSUwNyUzQ0VQJTFCJTBBWiUxQTclMThiMyUxNSolNjAlMjBJOSUxNiUyMHl0KiUwQSUzRnolM0ElMjQuJTBBJTIwJTBBJTFFJTIwJTE2JTI2JTEzJTAzJTEwJTBEdyUwMCUzQ1clMDIpJTE5WiUxQSUxM1QqJTA2eVklMTclM0MlMThSWiUwQyUwMHklMDElM0NUJTBGMCUwQyU1QiUwMCUxNFQwJTA4eUclMTQuRX4tJTI2NCUxNCUyQyUwQmQxJTE4JTNEdjgoJTNEJTBDKCUwRGIlMjIlMEYuJTdGJ0k5JTE2JTIweUclMTQuRXE1KSUzRSUxNSUyQyUxN3RNJTEwJTI1dSUzQkcuJTFDISUxQ2YqJTBBJTIyJTdDJTNBJTNFNSUwQ0MlMUElN0YuJTdCRSU0MCUwNCUwQiUxMy1FJTdCJTEwQXBQJTNFfkdaeU0wVkNxMXElM0Q0JTA5JTNEJTE5JTFCJTEwJTVFZEslMTFWTlolMjIlNjBTJTEwQ3lLJTEzVEdaJTFBJTA3JTEzJTYwJTA1JTE2JTAwcCUyMkdHeU93VSUxQiUzQ0klMDh5bVp5TXlNQyUzQyUwNyU0MCUxMUclMDFUZ3klMTBDeUslMTNURzkzJyUwOVYlMkMyKGVUWlolN0JDKVQlMDUlN0JQJTNFfkdaeU0lMjQlMEJuU0slMTNURyUxQzYlMUZ5JTE4JTE1OCUxOSUxMyUyNCUzRCUwQiUxNyUzRiUxNlU5eVYlMTNEJTVDWiUwOTcofjElMTYlMEVpVCU1QlopKjJzMSUxOCUwRkslMDAlMDQ5LiUyQ20lMUUlMEYlM0MlMDVUJTAwJTBGQXklM0QlMDNBLSUwQiUyNFYuTFFwTSUyMiUzRGl5SyUxM1RHWnlNJTJGUSUxMXklMDUlN0IzJTNGJTA4JTAzTWQlMTAlMEQlM0MlMUMlMTM1JTA0JTBFMCUxQiUzQ2glMkMlM0IlMDFWJTE3JTEzUiU3QiUzQSUwQVMlMTEwJTFCR1o0JTEyJTNDJTAxNSUxMkpiZjlUR1p5TXklMTBDMi5fJTBFJTEzJTE4eVB5JTVFJTJCJTFFM0EuSSUzRiElMUQ4JTVFJTA3JTFDJTA1RSUxRCUxNSUxNTclMDAlM0MlNUUlMTclMEElMUZBJTFEJTA5JTFEKkUlN0IlMTU3JTFDJTI2Y1FFU3lGeSUxMiUzRiUwNUklMTNfRzc4JTE5MSUxRSUxMTYlMUUlNUQlMTBPSyUzQ1V5JTFBQyUxNCUwQUclMUNJJTA4OCUwMyUzRF8lMEVxQiUxQVRMWiUxQSUwNyUxMyU2MCUwNSUxNiUwMHAlMjIlNUN3U015JTEwQ3lLJTEzVDUlMEEwJTE1JTA5VCUwQTglMTFUMjE2JTJGJTA4eSUwREMlM0YlMEFfJTA3JTAyQVRneSUxMEN5SyUxM1RHJTBBJTFFJTA2JTFBYiUyMiUzRCUxM0clMTclMjQlMEQlMTglNUR5JTBEQzclMEVEVCUyNiUxOS0lMDQlMkZVJTNCJTE2JTA5WSUxMSUwNCUwRXFPJTE0YyUzQiUxNCclMDFaJTNGNyUxNSUyNSUwRGQzJTdCQiUwOHltWnlNeSUxMEN5S0MzJTBDOSUwQiUyQyUzREglMTclM0EoRDVXVDYlMDMlMkJVJTAyJTNEJTEyJTQwJTAwJTA2JTBFJTNDJTBFMVElMEQlM0UlMEUlMTNJRyUxQyUyQyUwMyUzQUQlMEE2JTA1JTFCJTVERyUwMVRneSUxMEN5SyUxM1RHWnlNeVklMDV5QyUwN1RaR3klMUQlMUUlNUIlMjAlMEIqVyUwQyUxMyUxOSUxQSUxQSUxOCUwME0lMkIlMEVSJTEwJTFFKS0lMEMtVUMlN0ZNJTEzRldKeVBkJTEwJTEzJTFFJTAwcCUyNiUyNiUxRSElMTklM0FzJTE0JTE4JTVCJTFEJTA3JTEzJTFCLSUxOColMTlDJTIyZjlUR1p5TXklMTBDeUslMTNUR1p5TSUyRlElMTF5JTFCdCUxRiUyNCglMTglMDkhRCUwMCUxQSUxQ3JFR0d5JTAzJTNDR0MlMTglMDhHJTFEJTExJTFGJTAxJTIyJTNCWiUwNiUzQSUxRiUxQlYlMjYlM0UlMTYpJTFCJTFFMC0lMTlWJTE1JTBBWHBWVCUzQUN5SyUxM1RHWnlNeSUxMEN5SyUxM1QlMEUlMUN5RSl3JTA4JTFBOXIlMTAlMUYlMEUlM0EuLnFSdyUwNEMlMTElMDlScEF5JTQwJTI0MihhNSUwMyUwMi0lMEUlMUFHJTIyaEVHJTBEJTE3JTFGeVB5JTAxT3klMUJ0JTFGJTI0KCUxOCUwOSFEJTAwJTFBJTFDckVJJTBEJTJCJTA0LVVLKSUyQ1g3NSUzQiUzRCUxNS1TJTIwLiolMDNaNSUxRiolMUQ2JTVFJTEwJTNDKSU1QyUxMCUxRVN1TWxVUHlXJTEzJTA0JTIwJTExJTFBJTNGJTE4VCUxQi0lMDhwJTAzJTI2S3clMUUwSiUwNnBLSHltWnlNeSUxMEN5SyUxM1RHWnlNeSUxMEN5SyUxMyUyNiUxNyUxMyElM0QlM0RZJTAyJTIzJTBDdSUyMiUyQiUwQyUzQ01kJTEwJTE3JTJCJTFFVk9qcHlNeSUxMEN5SyUxM1RHWnlNeSUxMEN5SyUxM1QlMTclM0QyLiUwQnElMDchJTFGUDclMTAlM0JoQylfJTEwMCUxRlolMUIlMDlaZE1pJTBCblNLJTEzVEdaeU15JTEwQ3lLJTEzVEdaeU15JTEwJTEzJTFFJTAwcCUyNiUyNiUxRSElMTklM0FzJTE0JTE4WiUxRCUwNyUwNiUwQyUzQzk2diUwQTUlMEUlMUIlMUYlMjIlMTYlMjMlMTklM0IlMUNDa0IlMDh5bVp5TXklMTBDeUslMTNUR1p5TXklMTBDeUslMTMlMDAlMTUlMDN5JTE2VCUzQUN5SyUxM1RHWnlNeSUxMEN5SyUxM1RHWnlNeSUxMEN5JTA1JTdCMyUzRiUwOCUwM0MlMEJFJTBEcSUwMHYlMTglMUQlMEUlM0JBeSUwMU95JTVCJTFBeW1aeU15JTEwQ3lLJTEzVEdaeU15JTEwQ3lLJTEzJTA5RyUxOTglMTklM0FYQ3ElMUJ0JTFGJTI0KCUxOCUwOSFEJTAwJTFBJTFDckZOWiUyMiUxMFQlM0FDeUslMTNUR1p5TXklMTBDeUslMTNUJTFBd1NNeSUxMEN5SyUxM1RHWnlNeSUxMEN5JTFCdCUxRiUyNCglMTglMDkhRCUwMCUxQSUxQ3JFSSUxOTUlMDIqVUtwZjlUR1p5TXklMTBDeUslMTNUJTFBd1NNeSUxMEN5SyUxM1QlMUFBVGd5JTEwQ3lLJTEzVEclMEUlMkIlMTR5S25TSyUxM1RHWnlNeSUxMEN5S0MzJTBDOSUwQiUyQyUzREglMTclM0EoRDVXVDYlMUQlM0MlNUVLJTdCJTJDdiUyMEVWeU8xRCUxNylRJTFDJTVCRVpyTSl3JTA4JTFBOXIlMTAlMUYlMEUlM0EuLnFXJTAyJTNCaSUwNSkoJTE2JTA4JTAzbUNySyUxMSU1QiUwMCUxRi1DKVglMTNmJTI1ViUxNTAyJTE3JTAxJTNEVCUwQzMuJTYwMiUxREclN0JNciUxMC44JTFGJTVCWiUxNSUxQjclMDk2JTVES3BLJTE4VEUlNUMyJTA4JTIwJTBEQXklNDAlMTMlMDQlMjAlMTElMUElM0YlMThUJTFCLSUwOHAlMDMlMjZCeUZ5aiElMTA4JTQwJTEwJTEzOHVNJTNGUSUwRiolMEUlMUFPanB5TXklMTBDeUslMTNUR1p5JTFEJTFFJTVCJTIwJTBCKlclMEMlMTMlMTklMUElMUElMTglMDBNKiUwRSU1RCUxME9TYiU2MFMlMTBDeUslMTNUR1olMjRNJTNBUSUxNyUzQSUwMyUxMyU1QyUxNyUzRDIuJTBCcSUwNyElMUZQNyUxMCUzQmpEeUslMUVUYSUxM1RHWnlNeSUxMCUwQSUzRkslMUIlMjYlMTclMTMhJTNEJTNEWSUwMiUyMyUwQ3UlMjIlMkIlMEMlM0NEeUtuU0slMTNUR1p5TXklMTBDeUtRJTA2JTAyJTFCMlZUJTNBQ3lLJTEzVEdaeSUxMGIlM0RpeUslMTNUJTFBQVRnJTI0JTBCblMlMUJ0JTFGJTI0KCUxOCUwOSFEJTAwJTFBJTFDciU1Q0VYcFZUJTNBJTEzJTFFJTAwcCUyNiUyNiUxRSElMTklM0FzJTE0JTE4QyUxMVIlMTclMUUlM0ZQJTJCeCUzQS4lMEFmVk5BAABB8BwLAQA='].map(__bytes => {
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
var key = lS(0, 0);
var b = lS(0, 1);
(() => {
    var ZWsvmVyjHUYxbOx5 = lS(0, 2), ZWsvmVyjHUYxbOx6 = 0, ZWsvmVyjHUYxbOx7 = 0;
    const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
        env: {
            test: () => {
                return ZWsvmVyjHUYxbOx6 < b.length ? 1 : 0;
            },
            update: () => {
                ZWsvmVyjHUYxbOx6++;
            },
            body: () => {
                ZWsvmVyjHUYxbOx5 += String.fromCharCode(b.charCodeAt(ZWsvmVyjHUYxbOx6) ^ key.charCodeAt(ZWsvmVyjHUYxbOx7)), ZWsvmVyjHUYxbOx7++, ZWsvmVyjHUYxbOx7 == key.length && (ZWsvmVyjHUYxbOx7 = 0);
            }
        }
    });
    const __exports = __forInstance0.exports;
    return __exports.data();
})();
(() => {
    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                print(ZWsvmVyjHUYxbOx5);
            }
        }
    });
    const __exports = __callInstance0.exports;
    return __exports.data();
})();