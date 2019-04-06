function main() {
const v5 = {map:13.37,toPrimitive:13.37};
function v6(v7,v8,v9,v10) {
    function v11(v12,v13,v14,v15) {
        return v7;
    }
    const v17 = [1337];
    const v18 = v17.map(v11,"boolean",v5);
    const v19 = v11(...v18,13.37);
}
const v25 = [1337];
for (let v29 = 0; v29 < 100; v29++) {
    const v30 = v6(10,Function,1337,v25,Function);
}
const v31 = "boolean" - 0;
const v32 = v6(v25,1337,1337,v31,1337,"boolean");
}
%NeverOptimizeFunction(main);
main();
