function main() {
let v8 = 0;
do {
    const v9 = v8 == 8;
    function v10(v11,v12,v13,v14) {
        let v17 = 0;
        let v18 = 13.37;
        if (v9) {
            for (const v19 of v18) {
                v8 = v19;
            }
        } else {
        }
    }
    const v20 = v8 + 1;
    v8 = v20;
} while (v8 < 8);
}
%NeverOptimizeFunction(main);
main();
