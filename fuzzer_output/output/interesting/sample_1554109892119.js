function main() {
let v1 = "undefined";
function v6(v7,v8,v9,v10) {
    function v12(v13,v14,v15,v16) {
        const v17 = 1337 * v15;
    }
    const v23 = [1337];
    for (let v27 = 0; v27 < 100; v27++) {
        const v28 = v12(10,Function,1337,v23,Function);
    }
    let v35 = 0;
    const v37 = [1337];
}
const v52 = [1337];
const v56 = v6(10,Function,1337,v52,Function);
}
%NeverOptimizeFunction(main);
main();
