function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v6 = {map:13.37,toPrimitive:13.37};
function v7(v8,v9,v10,v11) {
    function v12(v13,v14,v15,v16) {
        return v8;
    }
    const v18 = [1337];
    const v19 = v18.map(v12,"boolean",v6);
    const v20 = v12(...v19,13.37);
}
const v23 = v7(Function,v2,Math,13.37);
const v27 = [1337];
for (let v31 = 0; v31 < 100; v31++) {
    const v32 = v7(10,Function,1337,v27,Function);
}
}
%NeverOptimizeFunction(main);
main();
