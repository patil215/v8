function main() {
Function[0] = 10;
Function[1337] = Function;
}
%NeverOptimizeFunction(main);
main();
