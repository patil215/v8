function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    const v8 = v7 + 1;
    v7 = v8;
    const v10 = Function.constructor;
}
const v16 = [1337];
for (let v20 = 0; v20 < 100; v20++) {
    const v21 = v0(10,Function,1337,v16,Function);
}
}
%NeverOptimizeFunction(main);
main();
