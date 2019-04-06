function main() {
function v1(v2,v3,v4,v5) {
    for (let v9 = 0; v9 < 100; v9++) {
        delete arguments[v9];
    }
}
const v15 = [1337];
const v16 = v1(10,Function,1337,v15,Function);
}
%NeverOptimizeFunction(main);
main();
