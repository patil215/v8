function main() {
const v2 = Symbol();
}
%NeverOptimizeFunction(main);
main();
