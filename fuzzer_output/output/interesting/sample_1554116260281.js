function main() {
function v0(v1,v2,v3,v4) {
    let v6 = 1337;
    const v8 = v6 >> 0;
    return v8;
}
const v14 = [1337];
for (let v18 = 0; v18 < 100; v18++) {
    const v19 = v0(10,Function,1337,v14,Function);
}
}
%NeverOptimizeFunction(main);
main();
