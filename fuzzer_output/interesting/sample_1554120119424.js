function main() {
function v0(v1,v2,v3,v4) {
    const v5 = v1 === v3;
    const v10 = 1 & v5;
    return v10;
}
const v16 = [1337];
for (let v20 = 0; v20 < 100; v20++) {
    const v21 = v0(10,Function,1337,v16,Function);
}
}
%NeverOptimizeFunction(main);
main();
