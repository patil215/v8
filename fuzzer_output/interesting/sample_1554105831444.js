function main() {
function v0(v1,v2,v3,v4) {
    let v6 = "undefined";
    const v9 = [1337];
    let v12 = 0;
    const v13 = Function.apply(v9,Function,v12,Function);
}
const v19 = [1337];
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v0(10,Function,1337,v19,Function);
}
}
%NeverOptimizeFunction(main);
main();
