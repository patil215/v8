function main() {
function v2(v3,v4,v5,v6) {
    function v7(v8,v9,v10,v11) {
        return v3;
    }
    const v13 = [1337];
    const v14 = v13.map(v7);
    for (let v18 = 0; v18 < 100; v18++) {
    }
    const v19 = v7(...v14,13.37);
}
const v21 = v2(10);
const v23 = v2(0);
const v24 = v2(...arguments);
const v25 = v2();
}
%NeverOptimizeFunction(main);
main();
