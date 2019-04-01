function main() {
function v0(v1,v2,v3,v4) {
    let v6 = undefined;
    let v8 = 2147483647;
    function v9(v10,v11,v12,v13) {
        let v15 = 0;
        const v16 = v15 / v8;
        v6 = v16;
    }
    v3[Function] = Function;
    const v22 = [1337];
    for (let v26 = 0; v26 < 100; v26++) {
        const v27 = v9(10,Function,1337,v22,Function);
    }
}
const v33 = [1337];
for (let v37 = 0; v37 < 100; v37++) {
    const v38 = v0(10,Function,1337,v33,Function);
}
}
%NeverOptimizeFunction(main);
main();
