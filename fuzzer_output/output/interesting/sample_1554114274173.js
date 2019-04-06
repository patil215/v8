function main() {
const v2 = {preventExtensions:2353924753,defineProperty:13.37};
for (let v6 = 0; v6 < 100; v6++) {
    function v7(v8,v9,v10,v11) {
        let v13 = v7;
        const v14 = typeof v13;
        let v17 = 0;
        const v18 = v14 + 1;
        let v19 = "undefined";
        const v20 = v2 + 1;
        v19 = v20;
        for (const v21 of v19) {
            const v22 = v21 * v21;
            const v23 = v21[5];
        }
        v17 = v18;
    }
    const v29 = [1337];
    const v30 = v7(10,Function,1337,v29,Function);
}
}
%NeverOptimizeFunction(main);
main();
