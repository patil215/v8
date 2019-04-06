function main() {
let v1 = undefined;
function v4(v5,v6,v7,v8) {
    function v9(v10,v11,v12,v13) {
        v1 = v9;
    }
    const v23 = [1337];
    for (let v27 = 0; v27 != 100; v27++) {
        const v28 = v9(10,Function,1337,v23,Function);
    }
}
const v30 = v4("delete","apply",1337);
}
%NeverOptimizeFunction(main);
main();
