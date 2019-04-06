function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [];
    const v12 = [1337];
    let v14 = undefined;
    v6[1.0] = 10;
    const v17 = [1337];
    function v19(v20,v21,v22,v23,v24) {
    }
    for (const v26 of v17) {
        const v27 = typeof v26;
        const v29 = v27 <= "string";
        for (let v33 = 0; v33 < 100; v33++) {
            const v34 = v19(v26,Function,v29,13.37,0);
        }
    }
}
const v40 = [1000];
for (let v44 = 0; v44 < 100; v44++) {
    const v45 = v0(10,Function,1337,v40,Function);
}
}
%NeverOptimizeFunction(main);
main();
