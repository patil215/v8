function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v5 = [1337];
    function v14(v15,v16,v17,v18,v19) {
        for (let v25 = 0; v25 < 3; v25++) {
            const v26 = v25 - v17;
            const v28 = [13.37,v26,13.37];
            const v30 = [1];
            const v31 = Math.expm1(v30,v28);
        }
    }
    const v32 = v14("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
