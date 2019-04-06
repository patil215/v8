function main() {
const v1 = Symbol();
}
%NeverOptimizeFunction(main);
main();
