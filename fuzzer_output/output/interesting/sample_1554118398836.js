function main() {
const v5 = [1337];
let v10 = undefined;
let v12 = "undefined";
function v13(v14,v15,v16,v17) {
    arguments[2147483649] = 3;
}
const v31 = [1337];
const v32 = v13(10,Function,1337,v31,Function);
}
%NeverOptimizeFunction(main);
main();
