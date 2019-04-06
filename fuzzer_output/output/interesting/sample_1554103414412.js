function main() {
let v17 = 0;
do {
    const v18 = v17 == 8;
    function v19(v20,v21,v22,v23) {
        let v26 = 13.37;
        if (v18) {
            for (const v27 of v26) {
                v17 = v27;
            }
        } else {
        }
    }
    const v30 = v17 + 1;
    const v31 = v19(16,0,3,v18,1337);
    v17 = v30;
} while (v17 < 8);
}
%NeverOptimizeFunction(main);
main();
