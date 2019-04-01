function main() {
const v2 = Symbol.species;
Symbol[v2] = Number;
Number[-256] = "boolean";
}
%NeverOptimizeFunction(main);
main();
