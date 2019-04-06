function main() {
let v4 = 0;
const v5 = v4 + 1;
v4 = v5;
const v6 = {};
function v7(v8,v9,v10,v11) {
    const v13 = [1337];
    for (let v17 = 0; v17 < 100; v17++) {
        const v20 = {map:13.37,toPrimitive:13.37};
        function v21(v22,v23,v24,v25) {
        }
        const v27 = [1337];
        const v28 = v27.map(v21,"boolean",v20);
    }
}
const v33 = [v6];
const v34 = v7(10,Function,1337,v33,Function);
const v35 = v7(0,WeakMap,"undefined",WeakMap,"undefined");
}
%NeverOptimizeFunction(main);
main();
