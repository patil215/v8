function main() {
const v1 = typeof "function";
const v3 = v1 != "boolean";
const v6 = [1337];
let v7 = Math;
const v9 = [1337];
const v10 = v7.exp(v3,v6,v9);
}
%NeverOptimizeFunction(main);
main();
