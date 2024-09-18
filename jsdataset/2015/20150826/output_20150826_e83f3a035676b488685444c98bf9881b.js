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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGkYCAgAADfwBBAQt/AEEOC38AQcYeCweigICAAAQGbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwIL1Z6AgAADAEEBCwxjZmdyMVlSSTJ1bwAAQQ4Lth4lMUE2KSUxM1glMTAzJTNFeSUxRCUxNiUyNCUwRiUxMEolMTFkcmslNUNHWkElNURqeFclMkMlM0MqRiUxQyUwMCUwREYlMUUlMjIlN0Y4JTNCJTAwUyUwMiUyNCUwQiUxRiUyMCUxQkZxJTFEJTNCdCUxMSUzQTklM0UlMTMnRSElMEElMDElMUJVJTE0bmxHUiUxMXklMjQoJTQwVSUxNjMoJTA2JTFCeDglMjUlMDJaJTBDKCUwQSUxMVNSJTBDeXAlMEFzOSolM0E1JTI0M2UlMUMlMDAlMDAlN0MyQSUyMCkqUnMlMTglMUMlMER+NCEnSC4lM0N3JTE2ciUyQiU1RCUxNiUwNyUwNiUwOCUwMF9FJTNDMSElMUMlMTYlMDAlMEVGJTEwJTA1RnclM0QlMkNBJTAxJTBBJTExJTE0JTAyJTFCUjElN0YlMjIlNUQlMDclMEElMDJIJTA2JTA2JTExJTFDJTAxJTFBcyUyQyouSCk3ZXk4KEYlMUMlMDglMTElMDclMDklMTZUdzElMjZfVSUyQzknNSUyMiU3RCUxOCUwMSUxRCUxQzYlMjAuRiUyMyUzQmIlMEQlMUIlMDdxISUzQy41STF+JTE0ciUzRUUlMDJBJTBFJTAzJTAwJTEzQSUyQiUzQidGJTVCJTFDJTA4RiUwRSUwNlQqM2dZJTBGTyUwRiUwMyUwMyUxRVglM0UlM0ElM0RBJTVCJTA2JTA2RiUxMCUwNUZ3JTFGJTEwcyUzQiUyMiUyMjQzJTIwcCUwRiUxNyUwNSU3RDIlM0ElMjYyNTNnJTFDJTFFJTFBJTFDNiUyMC5GJTEwJTA1RnclMTAlMDglN0MxJTIzJTIyKCUyMyU1Q3glMTclMTQlMDYlMTIhKiUyRiUyMzElM0JiJTEwJTFEJTA3ayUzQSUzQU0lMjUoJTNGJTEzdyE5JTVFJTFDJTFCS0RHUCUxOGJfQyUxMlVPQyUwRiUwMVIlMTklMTYlMjAlMEZWJTIwNSUzQiUxMjIlMDZJJTAxJTFBaSUwRkhPQUROUkpUWGklMTJVT0NGR1JfJTAxNyUwN0QlMEQlMDglMTQlMDclM0QlMDYlNUIlMEYlMTMlM0YlMTJIT0FIJTAyJTBBVCU3QmlEOFVPQ0YlMUFSVDUhJTJDJTEyJTBFYmlGR1IlMTF5cmklMTIlMUI3JTA2KCUxMSUwQVYuMyUxM0YlMUY5JTIyJTEwR08lMTElN0IlN0M5ViUxM01Ya21SJTExeXI0JTA5eGVDRkdSVzYlMjBpJTFBJTAzJTBFJTExRiglM0ZwJTNCJTNBJTBCaiUyMCUxQyUzQkZaUiUwMWJyJTA2JTdGNCUwRCUwQiUyNCUzRidCJTAxcnUlMTIlMEMlM0YtJTA3JTBFJTNCUC4lMTkhSzIlMDYlMTRSSSUxRVQ3NSUzRFpOTyUyQyUyQiUyNiUxMFklMUIlMEElMUNBLURIT0clMDklM0NTcmklMTJVT0NGRyUwNFAlMkJyOVU3JTI2LSUzQyUwOSUxMCU2MCUxNiUyNCFrVVJDJTA4JTAyJTA1JTExJTE4MSUzRCU1QiUwMyUwQSUzQiklMDUlMThUJTNBJTI2YSUxMCUyMiUzQyUwMCUxNCUwRSUwMkV3JTAxIVclMTklMDNBTyU1QyU3RiUzQnlyaSUxMlVPQ0YlMDMlM0VEMyUxNCUzQXElMjMlMUNDJTVCRyUwMlYlMUIlMUIlMDdoJTFCJTBEMiklMTElMUFodyUxNzFCJTE0JTAxJTA3JTIzJTA5JTA0WCUyQiUzRCdfJTEwJTAxJTE3NSUxMyUwMFg3NSUzQSUxQVdKNyUyMyolMjIlMTQlN0IlN0JpJTE5VU0lM0YlM0FFUiUxQXklMUYoRiUxREElMTElMDklMTIlMUNVcWMlMkMlMEFVRUMlMkIlMDYlMDZZdyUyMCglNUMlMTElMDAlMEVOTiU1QiUxMXJyJ2olMTAhJTE1JTFFJTAwJTA1UCUwMyUyNiUyM2Q0JTE5WGttUiUxMXlyaSUxMlVPJTE3KiUwRCUwNmklMUYlMDUlMjVqJTI1JTAzJTExJTA3R08lMTElM0YzJTI1QSUxMFRubEdSJTExeXJpJTEyVSUxNjMoJTA2JTFCeDglMjUlMDJaJTBDKCUwQSUxMVdSJTBDeSUzQyUyQ0VVLiUwMCUxMiUwRSUwNFQlMDElMUQlMkJYJTEwJTBDJTE3TkUlM0ZiJTAxJTFGJTA1JTAwJTVCNy4qJTJGJTI2ZSUwOXAlNjAlMDl4ZUNGR1IlMTF5cmlLJTI1ISUwMiUwRi4lMTNGJTEyJTNBMHUlMUMlMThTSCUwOCUxQ0MlM0MzLUslMDYlMUIlMDIlMTIlMDIlMTFZOCUzQy5XVVJDJTAwJTEyJTFDUi0lM0IlMjYlNUMlNURGQyUxRGp4JTExeXJpJTEyVU9DRkdSJTExMDRpJTFBQU8lNUUlNUJHJTBCYSUxNzMlMjAlN0IlMTQlMTgoJTBFJTFFNVguYmclNDAlMTAlMEUlMDclMUY0JTA2UC03aSUxNFNPUVZXUiUwQ2RyMGIlM0IlMEUlMEElMkYlMDYlMDV6MSUyQiUwRSU1QiUwMl9NJTE1JTEzJTEzRSUyQyElNjAlMTIlMEViaUZHUiUxMXlyaSUxMlVPQ0ZHUiUxMXklMjQoJTQwVSUxNjMoJTA2JTFCeDglMjUlMDJaJTBDKCUwQSUxMVZSJTBDeSUzQyUyQ0VVLiUwMCUxMiUwRSUwNFQlMDElMUQlMkJYJTEwJTBDJTE3TkUzdSUxNiUxNiUwQiUxQyUyNiUxQiUxMSUwMyUwNiUxRiUxM3BpRDhVT0NGR1IlMTF5cmklMTJVT0NGRyUxQld5ejBiJTNCJTBFJTBBJTJGJTA2JTA1ejElMkIlMEUlNUIlMDIlNUVNJTA5JTE3JTE3X3ElN0JlJTEyJTBDJTNGLSUwNyUwRSUzQlAuJTE5IUsyJTA2JTE0V0klMDZIKTdpJTBGVSU1RU9GJTFFJTIyJTdGOCUzQiUwMFMlMDIlMjQlMEIlMUYlMjAlMUJGaCU3QyUzRSU0MCUxQyUxQiUwNk4lMUUlMjIlN0Y4JTNCJTAwUyUwMiUyNCUwQiUxRiUyMCUxQkZpJTdDJTFCVyUwNiUxRiUwQyUwOCUxNCUxN3M2NjAlMUJZT1YlMDNUUiUwRHklMkIlMTklN0MlMTQlMDYqJTA3JTEwOVklMjAlMTUlMjBFREElMTAlMEYlMUQlMTclMTh5KUQ4VU9DRkdSJTExeXJpJTEyVU9DRkdSJTExeXIlM0R+JTFGJTFCJTNCJTIwMCUxRWklMDklM0UlM0JTVVJDJTEyJTE1JTA3VGJfQyUxMlVPQ0ZHUiUxMXlyaSUxMlVPQ0ZHUiUxMXklMkIlMTklN0MlMTQlMDYqJTA3JTEwOVklMjAlMTUlMjBFREElMTMlMDklMTQlMUJFMCUzRCclMTJIT1MlNURqeCUxMXlyaSUxMlVPQ0ZHUiUxMXlyaSUxMlVPQ0YlMUUlMjIlN0Y4JTNCJTAwUyUwMiUyNCUwQiUxRiUyMCUxQkZoJTdDJTNBUyUwMyUwQTclMDkhJTFCJTVEJTNDei1+JTAwJTA1JTI1JTE1JTI0JTI0QnVyJTdCJTFCTmJpRkdSJTExeXJpJTEyVU9DRkdSJTExeXJpJTEyVSUxQiUxMSUxRkclMDklM0NTcmklMTJVT0NGR1IlMTF5cmklMTJVT0NGR1IlMTF5cmlCJTEyLSooJTNEJTFDUyUwOCUxRCUzRlolMkNBMSUxMyUwOVpVJTE1JyUyM3QlMDYlMkM1JTE1S1IlMDB1cnklMUJ4ZUNGR1IlMTF5cmklMTJVT0NGR1IlMTF5cmklMTIlMDhPJTAwJTA3JTEzJTExWXl6MGIlM0IlMEUlMEElMkYlMDYlMDV6MSUyQiUwRSU1QiUwMiU1REpGJTFDJTBGJTNDU3JpJTEyVU9DRkdSJTExeXJpJTEyVU8lMUVrbVIlMTF5cmklMTJVT0NGR1IlMTF5cmlLJTI1ISUwMiUwRi4lMTNGJTEyJTNBMHUlMUMlMThSSCUwNCUxRSU1RSo3YSUxQnhlQ0ZHUiUxMXlyaSUxMlVPQyUxQmp4JTExeXJpJTEyVU9DJTFCJTVDJTdGJTNCeXJpJTEyVU9DRiUxMyUwMEh5KUQ4VU9DRkdSJTExeXJpJTEyVSUxNjMoJTA2JTFCeDglMjUlMDJaJTBDKCUwQSUxMVclNUMlNUUpNyclMUFXKCUyNjJFJTVFJTExJTdCJTNBJTNERiUwNVVMSUVSJTFBeSUyQiUxOSU3QyUxNCUwNiolMDclMTA5WSUyMCUxNSUyMEVBNCUyQyUyQiUyNiUxMFklMUIlMEElMUNBLTJDTUdQJTFFJTNFNyUzRCUxQyUwNSUwNyUxM1klMkIoaCUwRColMkNjJTAyJTAzMyUwNDAxWiUwOG9rJTEyJTVFTy4lMDclMTMlMUElMUYlMkIzJ1YlMUElMDJLT0dZJTExJTdCdCUyMlclMENSQUZMUkglMDklMUMoJTVCJTNDJTBFJTE0LSUwRiUwQnYwJTI1cSUxMiU1RU8lMkMlMTQhJTE2ZCUwMyUwQSUzRGclMDElMTclM0IuS1JXOCUzRSUzQVclNUNUbmxHUiUxMXlyaSUxMlVPQ0ZHJTBCYSUxNzMlMjAlN0IlMTQlMTgoJTBFJTFFNVguYmdBJTEwJTAxJTA3Tk5JJTNDU3JpJTEyVU9DRkclMEYlMTElM0EzJTNEUSUxRE9LJTFGNyUzQ1AwJTFCKEUlM0UlMDclMUEhJTBFJTA1JTAycHIyT3hlQ0ZHUiUxMXlyaSU1QiUxM09LJTEyJTJCJTE4RSUwMSUxNCUxRSU1RS0lM0YlMEYlMTQlMDYlNUIlMTElMjJfQyUxMlVPQ0ZHUiUxMXlyaSUxMiUxNyUxRCUwNiUwNyUwQ0klM0NTcmklMTJVT0NGRyUwRiUwQVRYaSUxMlVPJTFFJTVEanhMYl9DSyUyNSElMDIlMEYuJTEzRiUxMiUzQTB1JTFDJTE4S0RFJTVCJTBBVFgwYiUzQiUwRSUwQSUyRiUwNiUwNXoxJTJCJTBFJTVCJTAyR0ElNDAlMTclMTZXZCUwMCUxM0ItNyUwNUROSQAAQcYeCwEA'].map(__bytes => {
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
    var DjoUMRTceKYOfUN5 = lS(0, 2), DjoUMRTceKYOfUN6 = 0, DjoUMRTceKYOfUN7 = 0;
    const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
        env: {
            test: () => {
                return DjoUMRTceKYOfUN6 < b.length ? 1 : 0;
            },
            update: () => {
                DjoUMRTceKYOfUN6++;
            },
            body: () => {
                DjoUMRTceKYOfUN5 += String.fromCharCode(b.charCodeAt(DjoUMRTceKYOfUN6) ^ key.charCodeAt(DjoUMRTceKYOfUN7)), DjoUMRTceKYOfUN7++, DjoUMRTceKYOfUN7 == key.length && (DjoUMRTceKYOfUN7 = 0);
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
                print(DjoUMRTceKYOfUN5);
            }
        }
    });
    const __exports = __callInstance0.exports;
    return __exports.data();
})();