function main() {
const v1 = Symbol();
const v3 = gc();
}
%NeverOptimizeFunction(main);
main();
