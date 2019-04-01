function main() {
const v3 = Symbol.species;
RegExp[v3] = "getOwnPropertyDescriptor";
let v7 = "undefined";
}
%NeverOptimizeFunction(main);
main();
