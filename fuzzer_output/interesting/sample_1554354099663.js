function main() {
function v4(v5,v6,v7,v8,v9) {
    Function[-389108317] = Function;
    for (const v12 in Function) {
        for (let v16 = 0; v16 < 5; v16++) {
            const v17 = v16 & v12;
            const v18 = !v17;
            for (let v22 = 0; v22 < 100; v22++) {
                v18.__proto__ = v22;
            }
        }
    }
}
const v23 = v4("object",1337,13.37,Math);
}
%NeverOptimizeFunction(main);
main();
