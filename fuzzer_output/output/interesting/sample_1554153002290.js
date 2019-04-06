function main() {
function v0(v1,v2,v3,v4) {
    let v8 = 0;
    do {
        const v9 = v8 * 0;
        const v10 = v9[255];
        const v11 = v8 + 1;
        v8 = v11;
    } while (v8 < 6);
}
const v17 = [1337];
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v0(10,Function,1337,v17,Function);
}
}
%NeverOptimizeFunction(main);
main();
