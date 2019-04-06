function main() {
function v0(v1,v2,v3,v4) {
    const v7 = [1337];
    function v9(v10,v11,v12,v13,v14) {
        const v15 = v10 % v10;
        v15.constructor = v3;
    }
    for (const v17 of v7) {
        const v18 = typeof v17;
        const v20 = v18 < "string";
        const v21 = v9(v17,Function,v20,13.37,0);
    }
}
const v27 = [1000];
for (let v31 = 0; v31 < 100; v31++) {
    const v32 = v0(10,Function,1337,v27,Function);
}
}
%NeverOptimizeFunction(main);
main();
