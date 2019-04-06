function main() {
const v5 = [1337];
let v7 = undefined;
for (let v13 = 0; v13 < 100; v13++) {
    function v14(v15,v16,v17,v18) {
        const v20 = v15.isPrototypeOf(v17,1337,Function);
    }
    const v26 = [1337];
    const v30 = v14(10,Function,1337,v26,Function);
}
}
%NeverOptimizeFunction(main);
main();
