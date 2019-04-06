function main() {
const v2 = [1337];
for (let v6 = 0; v6 < 100; v6++) {
    const v7 = [v2];
    function v12(v13,v14,v15,v16,v17) {
        for (const v18 of v7) {
            const v20 = [13.37,13.37,13.37,13.37];
            for (let v24 = 0; v24 < 5; v24++) {
                v20[10] = v24;
            }
            function v25(v26,v27) {
                v20[v27] = v15;
            }
        }
    }
    const v28 = v12("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
