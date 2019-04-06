function main() {
function v0(v1,v2,v3,v4) {
    const v5 = {};
    const v7 = [1337];
    for (let v11 = 0; v11 < 2; v11++) {
        v5.abs = v11;
    }
}
const v17 = [1000];
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v0(9007199254740991,Function,1337,v17,Function);
}
}
%NeverOptimizeFunction(main);
main();
