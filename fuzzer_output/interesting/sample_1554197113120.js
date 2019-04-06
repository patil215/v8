function main() {
const v3 = {map:13.37,toPrimitive:13.37};
function v4(v5,v6,v7,v8) {
    function v9(v10,v11,v12,v13) {
        return v5;
    }
    const v15 = [1337];
    const v16 = v15.map(v9,"boolean",v3);
    const v17 = v9(...v16,13.37);
}
const v23 = [1337];
for (let v27 = 0; v27 < 100; v27++) {
    const v28 = v4(10,Function,1337,v23,Function);
}
}
%NeverOptimizeFunction(main);
main();
