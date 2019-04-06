function main() {
for (let v3 = 0; v3 < 100; v3++) {
    function v8(v9,v10,v11,v12,v13) {
        const v14 = [13.37];
        for (const v15 of v14) {
            const v16 = ~v15;
            delete v14[0];
        }
    }
    const v18 = v8("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
