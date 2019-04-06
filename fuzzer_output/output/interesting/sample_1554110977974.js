function main() {
const v3 = {preventExtensions:2353924753,defineProperty:-207628.50143205887};
for (let v7 = 0; v7 < 1000; v7++) {
    function v8(v9,v10,v11,v12) {
        let v13 = -2147483649;
        const v14 = typeof v13;
        let v17 = 0;
        do {
            const v18 = v14 + 1;
            let v20 = 0;
            const v21 = v3 + 1;
            v20 = v21;
            v17 = v18;
        } while (v17 >= 5);
    }
    const v27 = [1337];
    const v28 = v8(10,Function,1337,v27,Function);
}
}
%NeverOptimizeFunction(main);
main();
