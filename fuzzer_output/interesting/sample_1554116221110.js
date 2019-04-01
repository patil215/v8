function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [];
    function v11(v12,v13,v14,v15) {
        v6[1.0] = v12;
    }
    const v21 = [1337];
    const v22 = v11(10,Function,1337,v21,Function);
    const v23 = v11(13.37,3,13.37,v21,"J9.cPbxCJ6",13.37);
    const v26 = [1337];
    function v28(v29,v30,v31,v32,v33) {
    }
    for (const v35 of v26) {
        const v36 = typeof v35;
        const v38 = v36 <= "string";
        for (let v42 = 0; v42 < 100; v42++) {
            const v43 = v28(v35,Function,v38,13.37,0);
        }
    }
}
const v49 = [1000];
for (let v53 = 0; v53 < 100; v53++) {
    const v54 = v0(10,Function,1337,v49,Function);
}
}
%NeverOptimizeFunction(main);
main();
