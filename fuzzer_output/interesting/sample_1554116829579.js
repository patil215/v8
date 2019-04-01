function main() {
function v0(v1,v2,v3,v4) {
    const v6 = typeof 1337;
    const v8 = v6 === "symbol";
    const v9 = v8 >= v8;
}
const v15 = [1337];
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v0(10,Function,1337,v15,Function);
}
}
%NeverOptimizeFunction(main);
main();
