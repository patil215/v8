function main() {
Function.toString = Function;
Function.length = 2;
}
%NeverOptimizeFunction(main);
main();
