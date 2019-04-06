function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v6 = [13.37];
    const v8 = [1337,1337,1337,1337];
    const v9 = [1337,v6,1337,13.37];
    const v10 = {slice:"__lookupSetter__",lastIndexOf:v9,constructor:13.37,unscopables:v9,repeat:v8};
    function v15(v16,v17,v18,v19,v20) {
        const v22 = Math.fround(v10,v18);
        let v25 = 0;
        while (v25 < 4) {
            const v26 = v25 + 1;
            v25 = v26;
        }
        return v22;
    }
    const v27 = v15("compile",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
