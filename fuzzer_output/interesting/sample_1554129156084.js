function main() {
let v5 = "number";
function v6(v7,v8,v9,v10) {
    let v13 = 0;
    const v14 = v13 + 1;
    v13 = v14;
    arguments[-536870912] = v13;
    const v18 = Object.seal(arguments,-4096);
}
const v24 = [1337];
const v25 = v6(10,Function,1337,v24,Function);
}
%NeverOptimizeFunction(main);
main();
