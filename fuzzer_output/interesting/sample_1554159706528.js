function main() {
let v3 = 0;
do {
    function v4(v5,v6,v7,v8) {
        for (let v12 = 0; v12 < 4294967297; v12 = v12 + 2817931123) {
            const v13 = v12 - v12;
            for (let v17 = 0; v17 != 100; v17++) {
                const v18 = 268435456 >> v13;
            }
        }
    }
    const v23 = [2817931123];
    const v24 = v4(2817931123,Function,1337,v23,Function);
    const v25 = v3 + 1;
    v3 = v25;
} while (v3 < 4);
}
%NeverOptimizeFunction(main);
main();
