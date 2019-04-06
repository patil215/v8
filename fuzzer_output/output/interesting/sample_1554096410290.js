function main() {
Math.valueOf = 9007199254740991;
}
%NeverOptimizeFunction(main);
main();
