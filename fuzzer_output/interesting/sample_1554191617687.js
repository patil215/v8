function main() {
const v1 = {unicode:-65536};
function v3(v4,v5,v6,v7) {
    const v10 = new Uint8ClampedArray(32822);
    let v13 = 0;
    const v14 = v10[4];
    const v15 = v13 + 1;
    v10[127] = v14;
    v13 = v15;
}
const v21 = [1337];
for (let v25 = 0; v25 < 100; v25++) {
    const v26 = v3(10,Function,1337,v21,Function);
}
}
%NeverOptimizeFunction(main);
main();
