function main() {
const v17 = [1337];
const v18 = [v17];
with (v18) {
    function v19(v20,v21,v22,v23) {
        for (const v34 in Function) {
        }
    }
    const v42 = [1337];
    const v46 = v19(10,Function,1337,v42,Function);
}
}
%NeverOptimizeFunction(main);
main();
