function main() {
const v3 = [13.37,13.37];
const v4 = [gc,"flat",v3];
function v5(v6,v7,v8,v9) {
    function v10(v11,v12,v13,v14) {
        const v15 = v11 + 1;
    }
    const v21 = [1337];
    const v22 = v10(10,Function,1337,v21,Function);
    const v25 = v10(v21,Function,WeakMap);
}
const v30 = [v4];
for (let v34 = 0; v34 < 100; v34++) {
    const v35 = v5(10,Function,1337,v30,Function);
}
}
%NeverOptimizeFunction(main);
main();
