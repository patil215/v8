function main() {
for (let v9 = 0; v9 < 100; v9++) {
    const v10 = {};
    function v15(v16,v17,v18,v19,v20) {
        const v22 = v19.abs(v10,0,"undefined");
        return v22;
    }
    const v23 = v15("undefined",7,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
