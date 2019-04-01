function main() {
const v7 = Symbol(..."undefined");
}
%NeverOptimizeFunction(main);
main();
