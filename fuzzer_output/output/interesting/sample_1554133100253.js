function main() {
for (let v3 = 0; v3 < 100; v3++) {
    function v4(v5,v6,v7,v8) {
        const v10 = [1337];
        for (const v11 of v10) {
            const v12 = v11 * v11;
            v12.toString = v4;
        }
    }
    const v18 = [1000];
    const v22 = v4(10,Function,1337,v18,Function);
}
}
%NeverOptimizeFunction(main);
main();
