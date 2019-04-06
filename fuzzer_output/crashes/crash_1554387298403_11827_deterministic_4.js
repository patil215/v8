function main() {
function v1(v2,v3,v4,v5) {
    function v6(v7,v8,v9,v10) {
        return v2;
    }
    const v12 = [1337];
    const v13 = v12.map(v6);
    for (let v17 = 0; v17 < 100; v17++) {
        const v18 = v6(v2,v5,v12);
    }
    const v19 = v6(...v13,13.37);
    const v20 = v1(v4);
}
const v24 = v1(10,Function,1337);
}
%NeverOptimizeFunction(main);
main();
