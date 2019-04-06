function main() {
for (let v3 = 0; v3 < 100; v3++) {
    function v4(v5,v6,v7,v8) {
        const v10 = Symbol.iterator;
        const v11 = v10[v10];
        const v12 = v3 / v11;
        const v13 = v3 === v12;
    }
    const v19 = [1337];
    const v20 = v4(10,Function,1337,v19,Math);
}
}
%NeverOptimizeFunction(main);
main();
