function main() {
for (let v3 = 0; v3 < 100; v3++) {
    function v8(v9,v10,v11,v12,v13) {
        const v14 = {};
        const v15 = Math != v14;
        let v16 = v15;
        for (const v17 in v16) {
        }
        return v15;
    }
    const v18 = v8("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
