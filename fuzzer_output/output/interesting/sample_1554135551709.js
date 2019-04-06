function main() {
function v0(v1,v2,v3,v4) {
}
function v8(v9,v10,v11,v12) {
    for (let v17 = 0; v17 < 2; v17++) {
        const v18 = v0 | 10;
        const v19 = v17 * v18;
    }
}
const v25 = [1337];
for (let v29 = 0; v29 < 100; v29++) {
    const v30 = v8(10,Function,1337,v25,Function);
}
}
%NeverOptimizeFunction(main);
main();
