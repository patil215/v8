function main() {
const v6 = [1337];
for (let v10 = 0; v10 < 100; v10++) {
    let v12 = undefined;
    function v13(v14,v15,v16,v17) {
        const v20 = 2147483648 | v14;
        for (let v21 = 2147483648; v21 <= v15; v21++) {
            const v22 = v13(Reflect,1337,v21);
        }
    }
    const v28 = [1337];
    const v29 = v13(10,Function,1337,v28,Function);
}
}
%NeverOptimizeFunction(main);
main();
