function main() {
function v1(v2,v3,v4,v5) {
    const v7 = [13.37,13.37,13.37,13.37];
    for (const v8 of v7) {
        for (let v13 = 0; v13 < 3; v13++) {
            const v14 = v13 / 7;
            const v15 = v14 << v8;
            Error[v15] = v15;
        }
        for (let v19 = 0; v19 < 100; v19++) {
        }
    }
}
const v24 = [1337];
const v25 = v1(10,Function,10,v24,Function);
}
%NeverOptimizeFunction(main);
main();
