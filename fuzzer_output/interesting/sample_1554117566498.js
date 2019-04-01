function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [1337];
    const v7 = [v6];
    const v9 = Symbol.iterator;
    const v10 = v7[v9];
    for (let v14 = 0; v14 < 100; v14++) {
        function v15(v16,v17,v18,v19) {
            const v21 = 5 * v14;
            let v24 = 0;
        }
        const v30 = [1337];
        const v34 = v15(10,Function,1337,v30,Function);
    }
}
const v40 = [1337];
const v44 = v0(10,Function,1337,v40,Function);
}
%NeverOptimizeFunction(main);
main();
