function main() {
const v2 = [1337,1337,1337];
const v3 = {unicode:13.37};
let v4 = v2;
let v7 = 0;
function v8(v9,v10,v11,v12) {
    const v15 = new Uint8ClampedArray(32822);
    let v18 = 0;
    while (v18 < 10) {
        const v19 = v15[4];
        const v20 = v18 + 1;
        let v21 = v7;
        if (v4) {
            const v22 = {apply:v8,getPrototypeOf:v8,call:v8,defineProperty:v8};
            const v24 = new Proxy(v3,v22);
            v21 = v12;
        } else {
        }
        v15[127] = v20;
        const v25 = Uint8ClampedArray.bind(v19,13.37);
        const v27 = Symbol.toPrimitive;
        v18 = v20;
    }
}
const v33 = [1337];
for (let v37 = 0; v37 < 100; v37++) {
    const v38 = v8(10,Function,1337,v33,Function);
}
}
%NeverOptimizeFunction(main);
main();
