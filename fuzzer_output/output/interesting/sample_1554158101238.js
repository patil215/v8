function main() {
let v3 = 0;
const v4 = v3 + 1;
v3 = v4;
function v5(v6,v7,v8,v9) {
    const v12 = new Uint8ClampedArray(32822);
    let v15 = 0;
    while (v15 < 10) {
        const v16 = v12[4];
        const v17 = v15 + 1;
        v15 = v17;
    }
}
const v23 = [1337];
for (let v27 = 0; v27 < 100; v27++) {
    const v28 = v5(10,Function,1337,v23,Function);
}
}
%NeverOptimizeFunction(main);
main();
