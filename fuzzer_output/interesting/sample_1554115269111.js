function main() {
const v6 = [1337];
for (let v10 = 0; v10 < 100; v10++) {
    let v12 = undefined;
    function v17(v18,v19,v20,v21) {
        let v25 = 0;
        do {
            const v26 = v25 == 8;
            function v27(v28,v29,v30,v31) {
                let v32 = 13.37;
                if (v26) {
                } else {
                }
            }
            const v33 = v25 + 1;
            v25 = v33;
        } while (v25 < 8);
    }
    const v42 = [1337];
    const v46 = v17(10,Function,1337,v42,Function);
}
let v54 = 0;
const v55 = v54 + 1;
v54 = v55;
}
%NeverOptimizeFunction(main);
main();
