function main() {
function v0(v1,v2,v3,v4) {
    const v7 = [1337];
    for (let v12 = 0; v12 != 100; v12++) {
        let v13 = v12;
        let v14 = v7;
        v14[v13] = v12;
        const v15 = v7.shift(Function,1337,1337,v7);
    }
}
const v24 = [1337];
const v28 = v0(10,Function,1337,v24,Function);
}
%NeverOptimizeFunction(main);
main();
