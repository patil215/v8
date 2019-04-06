function main() {
function v1(v2,v3,v4,v5) {
    function v6(v7,v8,v9,v10) {
        return v2;
    }
    function v12(v13,v14,v15,v16) {
    }
    for (let v23 = 0; v23 < 100; v23++) {
        const v24 = v12(10,Function,1337);
    }
    const v25 = [1337];
    const v26 = v25.map(v6);
    const v27 = v6(...v26,13.37);
}
const v28 = v1();
for (let v33 = 0; v33 < 100; v33++) {
    const v34 = v1(10);
}
}
%NeverOptimizeFunction(main);
main();
