function main() {
function v0(v1,v2,v3,v4) {
    for (let v8 = 0; v8 < 100; v8++) {
        const v11 = Symbol(..."undefined");
    }
}
const v17 = [1337];
const v18 = v0(10,Function,1337,v17,Function);
}
%NeverOptimizeFunction(main);
main();
