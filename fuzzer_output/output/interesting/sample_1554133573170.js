function main() {
function v0(v1,v2,v3,v4) {
    function v5(v6,v7,v8,v9) {
        function v11(v12,v13,v14,v15) {
            const v18 = [1337];
            function v20(v21,v22,v23,v24,v25) {
                const v26 = v21 % v21;
                v26.constructor = v14;
            }
            for (const v28 of v18) {
                const v29 = typeof v28;
                const v31 = v29 < "string";
                const v32 = v20(v28,Function,v31,13.37,0);
            }
        }
        const v38 = [1000];
        const v42 = v11(10,Function,1337,v38,Function);
    }
    const v49 = [1337];
    const v50 = v5(10,Function,1337,v49,Function);
}
const v56 = [1337];
for (let v60 = 0; v60 < 100; v60++) {
    const v61 = v0(10,Reflect,1337,v56,Function);
}
}
%NeverOptimizeFunction(main);
main();
