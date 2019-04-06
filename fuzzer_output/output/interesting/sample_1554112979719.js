function main() {
function v0(v1,v2,v3,v4) {
    const v5 = v1 === v3;
    if (v5) {
    } else {
    }
    return v5;
}
const v11 = [1337];
for (let v15 = 0; v15 < 100; v15++) {
    const v16 = v0(10,Function,1337,v11,Function);
}
}
%NeverOptimizeFunction(main);
main();
