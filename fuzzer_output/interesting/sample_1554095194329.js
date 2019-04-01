function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v4 = Symbol.iterator;
RegExp[v4] = v1;
}
%NeverOptimizeFunction(main);
main();
