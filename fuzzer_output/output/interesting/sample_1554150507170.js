function main() {
for (let v3 = 0; v3 < 100; v3++) {
    function v9(v10,v11,v12,v13,v14) {
        for (let v17 = 0; v17 < 3; v17++) {
            const v18 = v17 << v12;
            const v20 = [13.37,v18,13.37];
            const v22 = [1];
            const v23 = Math.tan(v22,v20);
        }
    }
    const v24 = v9("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
