function main() {
let v2 = 0;
const v3 = v2 + 1;
let v5 = "undefined";
const v9 = [1337];
const v13 = v9.fill(v3,Atomics,1337,Function);
}
%NeverOptimizeFunction(main);
main();
