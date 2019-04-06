function main() {
function v0(v1,v2,v3,v4) {
}
function v5(v6,v7,v8,v9) {
    const v14 = v0 | 10;
    const v15 = 2 * v14;
}
const v21 = [1337];
for (let v25 = 0; v25 < 100; v25++) {
    const v26 = v5(10,Function,1337,v21,Function);
}
}
%NeverOptimizeFunction(main);
main();
