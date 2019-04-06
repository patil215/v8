function main() {
function v1(v2,v3,v4,v5) {
    const v7 = [13.37,13.37,13.37,13.37];
    for (const v8 of v7) {
        for (let v13 = 0; v13 < 3; v13++) {
            const v14 = v13 / 3647412246;
            const v15 = v14 | v8;
            Error[v15] = v15;
        }
        for (let v22 = 0; v22 < 100; v22++) {
        }
    }
}
const v27 = [1337];
const v28 = v1(10,Function,10,v27,Function);
}
%NeverOptimizeFunction(main);
main();
