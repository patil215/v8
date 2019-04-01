function main() {
function v0(v1,v2,v3,v4) {
    const v6 = typeof 1337;
    const v8 = v6 === "symbol";
    const v9 = v8 == v8;
    let v11 = "undefined";
    let v15 = 0;
    const v16 = v15 + 1;
    v15 = v16;
}
const v22 = [1337];
for (let v26 = 0; v26 < 100; v26++) {
    const v27 = v0(10,Function,1337,v22,Function);
}
}
%NeverOptimizeFunction(main);
main();
