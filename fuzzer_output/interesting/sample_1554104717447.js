function main() {
function v1(v2,v3,v4,v5) {
    let v8 = "undefined";
    let v12 = 0;
    const v13 = v12 + 1;
    v12 = v13;
    const v14 = 13.37 * "apply";
}
const v20 = [1337];
for (let v24 = 0; v24 < 100; v24++) {
    const v25 = v1(10,Function,1337,v20,Function);
}
}
%NeverOptimizeFunction(main);
main();
