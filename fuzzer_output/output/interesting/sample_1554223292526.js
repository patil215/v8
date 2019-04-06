function main() {
let v1 = Map;
const v3 = Symbol.species;
delete v1[v3];
}
%NeverOptimizeFunction(main);
main();
