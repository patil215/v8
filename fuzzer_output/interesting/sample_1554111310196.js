function main() {
const v4 = [1337];
const v5 = [-2147483649,v4,WeakMap,13.37];
const v6 = {from:v5};
function v7(v8,v9,v10,v11) {
    let v14 = 0;
    let v16 = 0;
    v10.toString = v7;
}
const v25 = v7(10,Function,1337,Function,Function);
const v29 = v7(1337,v6,Function,13.37,1,1337);
}
%NeverOptimizeFunction(main);
main();
