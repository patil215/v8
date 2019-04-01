function main() {
let v5 = parseFloat;
function v6(v7,v8,v9,v10) {
    const v13 = [1337];
    const v14 = [v13];
    const v15 = v14.find(v5,parseFloat,"symbol",Function);
    v9.__proto__ = v15;
}
const v21 = [1337];
for (let v25 = 0; v25 < 100; v25++) {
    const v26 = v6(10,Function,1337,v21,Function);
}
}
%NeverOptimizeFunction(main);
main();
