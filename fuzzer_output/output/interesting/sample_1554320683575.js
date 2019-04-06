function main() {
const v2 = new Float32Array(36344);
function v3(v4,v5,v6,v7) {
    const v9 = v2[1];
    const v10 = 1 != v9;
    return v10;
}
const v15 = [1337];
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v3(10,Function,v19,v15,Function);
}
}
%NeverOptimizeFunction(main);
main();
