function main() {
const v1 = [1337,1337,1337];
const v5 = {map:13.37,toPrimitive:13.37};
function v6(v7,v8,v9,v10) {
    function v11(v12,v13,v14,v15) {
        return v7;
    }
    const v17 = [1337];
    const v18 = v17.map(v11,"boolean",v5);
    for (let v22 = 0; v22 < 100; v22++) {
        const v23 = v11(v7,v10,v17,v1);
    }
    const v24 = v11(...v18,13.37);
}
const v30 = [1337];
for (let v34 = 0; v34 < 100; v34++) {
    const v35 = v6(10,Function,1337,v30,Function);
}
}
%NeverOptimizeFunction(main);
main();
