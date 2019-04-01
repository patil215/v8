function main() {
arguments[10] = arguments;
}
%NeverOptimizeFunction(main);
main();
