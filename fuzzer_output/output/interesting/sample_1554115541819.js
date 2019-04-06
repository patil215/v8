function main() {
function v0(v1,v2,v3,v4) {
    let v8 = 0;
    const v9 = Function + 1;
    v8 = v9;
    let v10 = 5;
    const v11 = v10 + 1;
    const v12 = v10 / v11;
}
const v18 = [1337];
for (let v22 = 0; v22 < 100; v22++) {
    const v23 = v0(10,Function,1337,v18,Function);
}
}
%NeverOptimizeFunction(main);
main();
