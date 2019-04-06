function main() {
function v0(v1,v2,v3,v4) {
    let v9 = "undefined";
    const v11 = [1337];
    const v12 = [v11];
    function v13(v14,v15,v16,v17) {
        const v19 = [1337];
        const v20 = [v19];
        const v22 = [1337];
        const v23 = {exec:v22};
        let v26 = 0;
        do {
            const v27 = v26 + 1;
            v23.trim = v20;
            v26 = v27;
        } while (v26 < 5);
    }
    const v33 = [1337];
    for (let v37 = 0; v37 < 100; v37++) {
        const v38 = v13(10,Function,1337,v33,Function);
    }
}
const v44 = [1337];
for (let v48 = 0; v48 < 100; v48++) {
    const v49 = v0(10,Function,1337,v44,Function);
}
}
%NeverOptimizeFunction(main);
main();
