function main() {
let v1 = undefined;
let v3 = undefined;
let v5 = 1;
function v6(v7,v8,v9,v10) {
    let v11 = v1;
    const v12 = v11 / v5;
    v3 = v12;
}
const v18 = [1337];
for (let v22 = 0; v22 < 100; v22++) {
    const v23 = v6(10,Function,1337,v18,Function);
}
}
%NeverOptimizeFunction(main);
main();
