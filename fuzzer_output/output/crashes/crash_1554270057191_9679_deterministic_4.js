function main() {
function v0(v1,v2,v3,v4) {
    function v5(v6,v7,v8,v9) {
        return v1;
    }
    const v11 = [1337];
    const v12 = v11.map(v5);
    const v13 = v5(...v12,v3);
}
const v14 = v0();
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v0(10,Function,1337);
}
}
%NeverOptimizeFunction(main);
main();
