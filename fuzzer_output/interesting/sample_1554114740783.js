function main() {
function v0(v1,v2,v3,v4) {
    const v8 = [1337];
    const v9 = {max:Function,setPrototypeOf:10};
    const v10 = {exec:v8};
    const v13 = Function && 13.37;
    function v15(v16,v17,v18,v19) {
        const v21 = [13.37,13.37,13.37,13.37,13.37];
        const v23 = [1337];
        const v24 = {exec:v23};
        function v25(v26,v27,v28,v29) {
            let v31 = 0;
            do {
                const v32 = v31 + 1;
                v31 = v24;
            } while (v31 < v21);
        }
        const v38 = [1337];
        for (let v42 = 0; v42 < 100; v42++) {
            const v43 = v25(10,Function,1337,v38,Function);
        }
    }
    const v44 = v15(v10,v13,v13,v9,1337);
}
const v50 = [1337];
for (let v54 = 0; v54 < 100; v54++) {
    const v55 = v0(10,Function,1337,v50,Function);
}
}
%NeverOptimizeFunction(main);
main();
