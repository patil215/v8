function main() {
const v1 = [-536870912];
function v2(v3,v4,v5,v6) {
    function v7(v8,v9,v10,v11) {
        let v14 = 0;
        const v18 = v14 + 1;
        v14 = v18;
        let v21 = 0;
        const v22 = v21 + 1;
        v21 = v22;
    }
    const v28 = [1337];
    for (let v32 = 0; v32 < 100; v32++) {
        const v33 = v7(10,Function,1337,v28,Function);
    }
    const v38 = [13.37];
    const v40 = [13.37,13.37,13.37,13.37];
    v40.__proto__ = v38;
    const v42 = [13.37,13.37,13.37,13.37];
    const v43 = v42.sin;
    v40[2] = v43;
}
const v49 = [1337];
for (let v53 = 0; v53 < 100; v53++) {
    const v54 = v2(4118992479,Function,1337,v49,Function);
}
}
%NeverOptimizeFunction(main);
main();
