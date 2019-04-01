function main() {
function v0(v1,v2,v3,v4) {
    const v5 = v1 === v3;
    const v7 = 3648421108 & v5;
    return v7;
}
const v13 = [1337];
for (let v17 = 0; v17 < 100; v17++) {
    const v18 = v0(10,Function,1337,v13,Function);
}
}
%NeverOptimizeFunction(main);
main();
