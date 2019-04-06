function main() {
const v3 = {map:13.37,toPrimitive:13.37};
function v4(v5,v6,v7,v8) {
    function v9(v10,v11,v12,v13) {
    }
    const v15 = [1337];
    let v21 = 0;
    const v22 = v15.map(v9,"boolean",v3);
    const v23 = v21 + 1;
    const v24 = v9(...v22,13.37);
    v21 = v23;
}
const v30 = [1337];
for (let v34 = 0; v34 < 100; v34++) {
    const v35 = v4(10,Function,1337,v30,Function);
}
}
%NeverOptimizeFunction(main);
main();
