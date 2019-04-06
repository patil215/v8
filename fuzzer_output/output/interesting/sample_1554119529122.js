function main() {
let v1 = "undefined";
const v6 = [-1000000000000.0];
let v7 = "undefined";
const v9 = v7.includes(1337,v6,1337,v1,Function);
}
%NeverOptimizeFunction(main);
main();
