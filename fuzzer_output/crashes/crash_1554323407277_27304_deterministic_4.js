function main() {
function v4(v5,v6,v7,v8) {
    function v9(v10,v11,v12,v13) {
        return v5;
    }
    const v15 = [1337];
    const v16 = v15.map(v9);
    const v17 = v9(...v16,-1000000.0);
}
const v18 = v4(-4294967295,11239,1337);
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v4(10);
}
}
%NeverOptimizeFunction(main);
main();
