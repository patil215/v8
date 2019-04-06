function main() {
const v2 = 10 instanceof Function;
}
%NeverOptimizeFunction(main);
main();
