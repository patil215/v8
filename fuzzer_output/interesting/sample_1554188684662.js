function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v6 = [13.37];
    const v8 = [1337,1337,1337,1337];
    const v9 = [1337,v6,1337,13.37];
    const v10 = {slice:"__lookupSetter__",lastIndexOf:v9,constructor:13.37,unscopables:v9,repeat:v8};
    function v15(v16,v17,v18,v19,v20) {
        const v22 = Math.exp(v10,v18);
        return v22;
    }
    const v23 = v15("compile",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
