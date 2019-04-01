function main() {
function v0(v1,v2,v3,v4) {
    for (let v10 = 0; v10 < 2; v10++) {
        const v11 = v10 | 10;
        v10[v10] = 0;
    }
}
const v17 = [1337];
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v0(10,Function,1337,v17,Function);
}
let v25 = 0;
const v29 = v25 + 1;
v25 = v29;
}
%NeverOptimizeFunction(main);
main();
