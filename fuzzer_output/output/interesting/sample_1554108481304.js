function main() {
function v0(v1,v2,v3,v4) {
    let v6 = "undefined";
    const v8 = v6 * "undefined";
    let v10 = 0;
    const v11 = v10 + 1;
    v10 = v11;
}
const v17 = [9007199254740991];
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v0(10,Function,1337,v17,Function);
}
}
%NeverOptimizeFunction(main);
main();
