function main() {
arguments[2147483649] = 3;
}
%NeverOptimizeFunction(main);
main();
