function main() {
for (let v4 = 0; v4 < 100; v4++) {
    function v9(v10,v11,v12,v13,v14) {
        const v15 = [1337];
        for (const v16 of v15) {
            const v17 = ~v16;
            delete v15[0];
        }
    }
    const v19 = v9("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
