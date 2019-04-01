function main() {
function v0(v1,v2,v3,v4) {
    for (let v9 = 0; v9 < 2; v9++) {
        const v10 = v9 | 10;
        const v11 = v9 * v10;
    }
}
const v17 = [1337];
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v0(10,Function,1337,v17,Function);
}
}
%NeverOptimizeFunction(main);
main();
