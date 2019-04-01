function main() {
const v3 = Symbol.iterator;
arguments[v3] = Function;
}
%NeverOptimizeFunction(main);
main();
