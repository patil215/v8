function main() {
const v2 = {preventExtensions:2353924753,defineProperty:13.37};
const v8 = [1337];
for (let v12 = 0; v12 < 100; v12++) {
    let v14 = undefined;
    function v15(v16,v17,v18,v19) {
        let v21 = "undefined";
        const v22 = typeof v21;
        let v25 = 0;
        do {
            const v26 = v22 + 1;
            let v28 = 0;
            const v29 = v2 + 1;
            v28 = v29;
            for (const v30 of v28) {
            }
            v25 = v26;
        } while (v25 < 5);
    }
    const v36 = [1337];
    const v37 = v15(10,Function,1337,v36,Function);
}
}
%NeverOptimizeFunction(main);
main();
