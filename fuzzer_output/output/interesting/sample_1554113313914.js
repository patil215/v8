function main() {
function v1(v2,v3,v4,v5) {
    let v10 = 0;
    const v11 = v10 + 1;
    v10 = v11;
    let v14 = 0;
    const v15 = v14 + 1;
    v14 = v15;
    const v16 = new Uint8ClampedArray(5871);
    v16[869431001] = v16;
}
const v22 = [1337];
for (let v26 = 0; v26 < 100; v26++) {
    const v27 = v1(10,Function,1337,v22,Function);
}
}
%NeverOptimizeFunction(main);
main();
