function main() {
Function.__proto__ = null;
}
%NeverOptimizeFunction(main);
main();
