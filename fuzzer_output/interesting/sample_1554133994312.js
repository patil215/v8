function main() {
for (let v3 = 0; v3 < 100; v3++) {
    function v4(v5,v6,v7,v8) {
        const v11 = Symbol.iterator;
        const v12 = v11[v11];
        const v13 = v3 / v12;
        let v14 = "undefined";
        const v15 = v3 > v13;
        return v15;
    }
    const v21 = [1337];
    const v22 = v4(10,Function,1337,v21,Function);
}
}
%NeverOptimizeFunction(main);
main();
