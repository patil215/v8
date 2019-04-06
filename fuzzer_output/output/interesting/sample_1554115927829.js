function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    const v9 = [13.37,13.37];
    let v10 = v9;
    function v11(v12,v13,v14,v15) {
        const v16 = v13 == v10;
    }
    const v22 = [1337];
    const v26 = v11(10,Function,1337,v22,Function);
    const v27 = v7 + 1;
    v7 = v27;
}
const v33 = [1337];
for (let v37 = 0; v37 < 100; v37++) {
    const v38 = v0(10,Function,1337,v33,Function);
}
}
%NeverOptimizeFunction(main);
main();
