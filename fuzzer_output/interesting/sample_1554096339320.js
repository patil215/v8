function main() {
Math.isFrozen = 1337;
}
%NeverOptimizeFunction(main);
main();
