function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    const v8 = v7 + 1;
    v7 = v8;
    const v9 = {};
    const v12 = [1337];
    function v14(v15,v16,v17,v18,v19) {
        const v20 = v15 % v15;
    }
    for (const v22 of v12) {
        const v23 = typeof v22;
        const v26 = v23 <= "string";
        const v27 = v14(0,0,v12,v9);
        for (let v31 = 0; v31 < 100; v31++) {
            const v32 = v14(v22,Function,v26,13.37,0);
        }
    }
}
const v38 = [1000];
for (let v42 = 0; v42 < 100; v42++) {
    const v43 = v0(10,Function,1337,v38,Function);
}
}
%NeverOptimizeFunction(main);
main();
