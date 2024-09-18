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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGkYCAgAADfwBBAQt/AEEOC38AQZ4dCweigICAAAQGbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwILrJ2AgAADAEEBCwtnaGszU2h2bDV1AABBDguOHSUyMiUxODlWJTBCJTBFJTE4NF80X0hWJTEzcSUwNUQlNUIlMTdOamIlMERGJTNEJTBCJTAyJTA1WiUxQkctJTFCYTYwJTEwJTAybSUxRiUyNiU0MCUyQyU3RiUzRjIlMTElMjV5JTIwJTIwJTIyJTFFdSUyMkFWJTE3OCU3RkdISyUxMyUyNSUwOSUwNExwJTA1NSUwRDNVJTNEMCUxQy0lMDFVWkhJcCUxMiUyNDM1ZjYlMjYlM0MuYSUxQSUyNjFCdiUzQSpIKXIlMUQlMkMlM0EtJTdCMUkhJTI1dSUxQ0glMTQlMDNWJTFEJTAyJTA2JTBDJTFFJyUwRCUxNSUwNCUxQiUxNiUwOCUwNUtEJTI0JTFGWCUwM1AlMDYlMTMlMEQlMTlBNiUwMSUxNSUwNCUxOCUxRSUwOCUxQSUwRVIlN0QlMDklMDJMcCUyNjQpMnYlMUVGOClhVSUwRCUwOSUxRlo0JTFBJTE3JTAyUSUxMEklMEIlMDQlNUVzJTJCJTJDLWclMjUlMkIpOGclN0QlMkI5ISUxNTEuJTNCJTNGeiUxRCUyQiUyMiUzRnglMjZJJTJCJTI0fnMlMUYlMDElMUIlMUIlMTglMDIlMEYlMEFDISUwMSUxOCUxOCUxQiUwNiUwQ0glMDJHNiUxQiUxN0IlNUUlMEZHJTA0JTBFVyUzRiUwMSUxMSUwNEElMDZJJTAxJTBFJTEzJTI0JTFGJTAxQnglMkMlMjYlMjYlMjZyJTAxJTNDJTI0LWMwJTJCJyUyQ2YlMTYlM0MlMjQtYzAlMkIlM0JFcCUxQyUyNVYlMUJCJTAySSoqJTdEJTE3JTI0NyUyMnElNUIuJTI2LSU3Q3MlM0MzJTIwcCUyMy4lM0IlMjIlN0MlMUQxOTklMUI2KCUyNUklMUQlMjAlMTglMUElMDVBJTVERUhJJTFBaGUlN0NMJTE1VUclMDElMEQlMTMlN0IlMkYlM0ElMDBvJTEyLiUyNCUzRXQlMTklMUQwJTFEJTE1SFpISSUxMXpIJTBEYSUzRlVHSEslMTNzSFYlMTRWJTJGJTA0JTFFJTI1SiUwMyUzQiUwNTVXOSUxMCUwM0slMEVzSlglMDlNJTEwRVNmOXNIVkxIVSUwMiUwNCUxOFZzJTEzJTdCZiUxNVVHSEslMTNzSCUwRSUwRm8lMTYlMTElMjYlMTJjJTAwJTFCJTJGJTBFeSUwMiUwQ0hWJTEzcUYlMDYlMDhTVyU1Q2VhJTEzc0hWJTExJTBFeG1ISyUxM3MlMEUlMTklMUUlMTUlNUQlMTElMDklMTklMTMlM0UtJTExJTNCbCUxOSUxMSUzQSUxQVApJTIzJTBDNCUxNUhHWFAlMTMlM0UtJTExJTNCbCUxOSUxMSUzQSUxQVApJTIzJTBDNCUxNUlHLSUxQmE2MCUxMCUwMm0lMUYlMjYlNUNFXzYlMDYlMTElMTglNURORyUwNS5UJTA0MSUxQSUxQWclMDQlMDQlMTIlMjBJJTBCQyU1REUlMTUlMEVqYkslMTNzSFZMJTE1VSUxMSUwOSUxOSUxMyUxQiUzQyUwRiUzQUQlMDMlM0UlMURLJTBFcyUwNiUxMyUxQiUxNTQlMDQlMUMlMDJFNjA5JTBFXyUxMCUwNCUxQ0MlMTElMDQlM0IlMTUlMUUlNUMlMDUlMTNGOCU1QjYlMDQlMUFOJTFDTmpiSyUxM3NIVkwlMTVVJTJCJTNCJTA3ViUxQzklMTUhWVVaSCUyM2cqJTNFJTA3JTFBbCUwMEktJTEzQzIlMDYlMTIpJTVCJTAzJTBFJTFBJTA0JTVEJTNFJTBEJTE4JTE4ZiUwMSUxNSUwMSUwNVQlMjAlNDBUSWEwKjhOJTExekglNURMJTE3KSUzQkpLJTE4cyUyNSUxNyUxOCU1RCU1QiUxNSUwNyUxRSU1RDclNDBHJTA5JTBEVU1IJTI2UiclMDBYJTFFVCUxQiUwMyUwNyUwNiUxQnpBVkclMTUlMEQlMDQyJTA4RSUxRCUxMSUyNiUzRkYlMkMlMDUlMjQlMUNYaGUlN0NMJTE1VUdISyUxM3MlMjIlMTklMTRZISUwRCUwMSUxM2ZzVVYlMEFUJTE5JTE0JTBEUCUzRVlIVkwlMTVVR0hLdiUyMyUzQSUxMzRTJTFCJTNGJTAyKiUwM3NVViUwMlAlMDJHKSUwOEclM0ElMUUlMTM0eiUxNyUwRCUwRCUwOEclN0JKJTNCJTNGbTglMkJaRWslMUUlMjQlM0U4YSUyNUVBUCUzRVlIVkwlMTVVR0hLdiUyMyUzQSUxMzRTJTFCJTNGJTAyKiUwMyU3RCUwNyUxOCUxRVAlMTQlMDMlMTElMThHMiUxQyUxMyUwRiU1RCUxNCUwOSUwRiUwRSUxM25IJTEwJTE5JTVCJTE2JTEzJTAxJTA0JTVEJTdCQVYlMTc4JTdGR0hLJTEzc0hWTCUxNVVHSCUwMlVzJTQwQkwlMDhIRy0lMUJhNjAlMTAlMDJtJTFGJTI2WEVBNiUwOSUxMiUxNWYlMDElMDYlMUMlMEUlMTN1TlYlNUUlMDVFR1VWJTEzJTE2JTE4JTI0JTA5bSUxMyUwOTAlMDFyY0YlMDUlMThUJTAxJTEyJTFCQiUxMyhlJTdDTCUxNVVHSEslMTNzSFZMJTE1VUdIS0UyJTFBVilFJyUwMjAlMEQlNUQlMEIlMDI3JTVEJTE1SEclMDYlMEVEcyklMTUlMTglNUMlMDMlMDIwJTI0UTklMEQlMTUlMTglMURXJTI2JTJDJTI0dyUxMUYlMjUlMThHJTEwJTA2JTA1SSUxQWhlJTdDTCUxNVVHSEslMTNzSFZMJTE1VUdIS1o1SCU1RSlFJyUwMjAlMEQlNUQlMEIlMDI3JTVEJTFCJTFBJTE3JTBEJTA1JTFCekRWKUUnJTAyMCUwRCU1RCUwQiUwMjclNUQlMUIlMDElMUUlMTglMEUlMTNuSEclNDAlMTUwJTE3JTNBJTBFazUlMDYuJTA2dERJJTFGJTE5WiclMEQlNUUpRSclMDIwJTBEJTVEJTBCJTAyNyU1QyUxQiclMDIlMUIlMUIlNUMlM0QlMUIlMTMuWiUxMSUxRUFHJTEzZiUwREVMJTA5VSUyMiUxODlWJTBCJTBFJTE4NF80VkYlMThaKSUwRF9MTnhtSEslMTNzSFZMJTE1VUdISyUxM3NIVkwlMTVVRyUyMiUwNEslM0YlM0MlMUMlMDVNJTIwR1VLRyElMUQlMTNXOCU3RkdISyUxM3NIVkwlMTVVR0hLJTEzc0hWTCUxNVUlMjIlMTg5ViUwQiUwRSUxODRfNFZGJTFCJTVDJTIwJTAxJTAyJTA1WiUxQkdVSyUwM2hlJTdDTCUxNVVHSEslMTNzSFZMJTE1VUdISyUxM3NIVilFJyUwMjAlMEQlNUQlMEIlMDI3JTVEJTFCJTA2JTA2JTFFJTBFZyUzQy4lMUYlMDBQJTVEJTJCJTNCJTA3ViUxQzklMTUhWVlHWkIlMDglNUViVkwlMTVVR0hLJTEzc0hWTCUxNVVHSEslMTNzSCUwMiUxRUxVJTFDZWElMTNzSFZMJTE1VUdISyUxM3NIVkwlMTVVR0hLJTEzc0hWJTI0YSUwQzElMTklMURqJTI2RiUyNCUxOSU1QiU1RCUyQiUzQiUwN1YlMUM5JTE1IVlZR1lHJTEzY0ElN0JmJTE1VUdISyUxM3NIVkwlMTVVR0hLJTEzc0hWTEhVJTA0JTA5JTFGUCUzQkglNUUpRSclMDIwJTBEJTVEJTBCJTAyNyU1RSUxQ1UlMUMlMTVmOXNIVkwlMTVVR0hLJTEzc0hWTCUxNVUlMUFlYSUxM3NIVkwlMTVVR0hLJTEzc0hWTCUxNTAlMTclM0ElMEVrNSUwNi4lMDZ0REklMEIlMDclNUMlMjAlMEQlNUVFOCU3RkdISyUxM3NIVkwlMTVVR0glMTYlM0VZSFZMJTE1VUdIS05oZSU3Q0wlMTVVR0hLJTEzcyUxQyUwNCUxNSUxNSUwRWpiSyUxM3NIVkwlMTVVR0hLJTEzJTE2JTE4JTI0JTA5bSUxMyUwOTAlMDFyY0YlMTklMUNQJTFCT0olMkN2JTA3SlpMJTE3JTFEJTEzJTFDJTFCJTA5JTdDR1RMJTFFVSUyMiUxODlWJTBCJTBFJTE4NF80UzMlMDZ2NCUzRiUyRiUwMEMnJTE2JTBCJTExeCkwJTJCTCUxRVVFRyUwQ1YnRiUwNiUwNEVKNjglM0FBJTA3LSUyRiUxNFclMDApJTAzJTA1JTdDJTA2VVRMJTFFVSolMDklMUYlNUIlN0QlMUElMTclMDJRJTFBJTBBJTQwQiUxM3hIVEolNUUlMTAlMUVVSSUxM3hIMyUxQ2clMTAlM0YlMEUlMDVrOSlOTCUxRVUlMjAlMjQlMDdpNCElM0E5ciUzRiUxMi4lMUElMUZzJTBFJTE3JTAwRiUxME5TZjlzSFZMJTE1VUdISyUxM3NIMyUxQ2clMTAlM0YlMEUlMDVrOSlGQkYlMTAlMDklMENDJTFBaGUlN0NMJTE1VUdISyUxM3MlMTVWJTBGVCUwMSUwNCUwMEslMUIlMTYlMTglMjQlMDltJTEzJTA5MCUwMXIlNjBBViUxN0h4bUhLJTEzc0hWTCUxNSUxQyUwMUhDeSUzQyUxMCUxQThfJTFDJTFGJTNEQiUxMyhlJTdDTCUxNVVHSEslMTNzSFZMJTE1JTE3JTE1JTBEJTBBWGhlJTdDTCUxNVVHSEslMTNzJTE1TWElM0ZVR0hLTmhlJTdDJTExJTBFeG0tJTFCYTYwJTEwJTAybSUxRiUyNiU0MEklMTF6UyU3QmZwJTA1NSUwRDNVJTNEMCUxQy0lMURXQSUxOCUwRlVuJTIwJTFGLlIlMjUlMDIxKkslMDAlMDMlMTklMTZCJTNCRUFQAABBnh0LAQA='].map(__bytes => {
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
    var ErMGYcBLEtddtWe5 = lS(0, 2), ErMGYcBLEtddtWe6 = 0, ErMGYcBLEtddtWe7 = 0;
    const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
        env: {
            test: () => {
                return ErMGYcBLEtddtWe6 < b.length ? 1 : 0;
            },
            update: () => {
                ErMGYcBLEtddtWe6++;
            },
            body: () => {
                ErMGYcBLEtddtWe5 += String.fromCharCode(b.charCodeAt(ErMGYcBLEtddtWe6) ^ key.charCodeAt(ErMGYcBLEtddtWe7)), ErMGYcBLEtddtWe7++, ErMGYcBLEtddtWe7 == key.length && (ErMGYcBLEtddtWe7 = 0);
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
                print(ErMGYcBLEtddtWe5);
            }
        }
    });
    const __exports = __callInstance0.exports;
    return __exports.data();
})();