function main() {
function v2(v3,v4,v5,v6) {
    const v9 = new Uint8ClampedArray(32822);
    let v12 = 0;
    while (v12 < 10) {
        const v13 = v9[4];
        const v14 = v12 + 1;
        if (v13) {
            const v15 = {apply:v2,getPrototypeOf:v2,call:v2,defineProperty:v2};
        } else {
        }
        v9[127] = v14;
        const v16 = Uint8ClampedArray.bind(v13,13.37);
        v12 = v14;
    }
}
const v22 = [1337];
for (let v26 = 0; v26 < 100; v26++) {
    const v27 = v2(10,Function,1337,v22,Function);
}
}
%NeverOptimizeFunction(main);
main();
