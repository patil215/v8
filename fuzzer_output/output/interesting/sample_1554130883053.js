function main() {
let v8 = undefined;
function v9(v10,v11,v12,v13) {
    function v14(v15,v16,v17,v18) {
        function v19(v20,v21,v22,v23) {
            let v27 = Promise;
            const v28 = new v27(Promise,1337,"log1p",v27);
        }
        const v34 = [1337];
        const v35 = v19(10,Reflect,1337,v34,Function);
    }
    const v41 = [1337];
    const v42 = v14(10,Function,1337,v41,Function);
}
const v48 = [1337];
for (let v52 = 0; v52 < 100; v52++) {
    const v53 = v9(10,Reflect,1337,v48,Function);
}
}
%NeverOptimizeFunction(main);
main();
