function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
for (let v7 = 0; v7 < 100; v7++) {
    const v9 = [13.37,13.37,13.37,13.37,13.37];
    function v10(v11,v12,v13,v14) {
        function v15(v16,v17,v18,v19) {
            const v21 = Symbol.replace;
            const v22 = v16[v21];
            return v14;
        }
        v9[v11] = 0;
        const v27 = v9.find(v15,0,v11);
    }
    const v33 = [1337];
    const v34 = v10(10,Function,1337,v33,Function);
}
}
%NeverOptimizeFunction(main);
main();
