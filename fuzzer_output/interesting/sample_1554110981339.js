function main() {
const v5 = [1337];
for (let v9 = 0; v9 < 100; v9++) {
    let v11 = undefined;
    function v13(v14,v15,v16,v17) {
        let v19 = "number";
        do {
            const v20 = v19 + 1;
            let v23 = 0;
            const v24 = Symbol + 1;
            v23 = v24;
            v19 = v20;
        } while (v19 < 5);
    }
    const v30 = [1337];
    const v31 = v13(10,Function,1337,v30,Function);
}
}
%NeverOptimizeFunction(main);
main();
