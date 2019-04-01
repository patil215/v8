function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
function v4(v5,v6,v7,v8) {
    let v10 = v5;
    while (v10 < 1) {
        const v11 = !v10;
        v10 = v11;
    }
}
const v17 = [1337];
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v4(10,Function,1337,v17,Function);
}
}
%NeverOptimizeFunction(main);
main();
