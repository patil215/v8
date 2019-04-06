function main() {
function v1(v2,v3,v4,v5) {
    function v6(v7,v8,v9,v10) {
        return v2;
    }
    const v12 = [1337];
    const v13 = v12.map(v6);
    const v14 = v6(...v13,1.0);
}
const v18 = v1();
for (let v20 = 0; v20 < 100; v20++) {
    const v21 = v1(1073741824);
}
}
%NeverOptimizeFunction(main);
main();
