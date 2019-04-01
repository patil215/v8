function main() {
const v1 = [13.37];
const v3 = Symbol.iterator;
const v4 = v1[v3];
const v6 = [1337,1337];
for (let v10 = 0; v10 < 100; v10++) {
    function v11(v12,v13,v14,v15) {
        let v17 = v11;
        const v18 = typeof v17;
        let v19 = "undefined";
        const v20 = v19.toString(v6,v11,v18,v10,v4);
    }
    const v26 = [1337];
    const v27 = v11(10,Function,1337,v26,Function);
}
}
%NeverOptimizeFunction(main);
main();
