function main() {
const v6 = Object.seal(arguments,-4096);
arguments[-65535] = -2147483647;
}
%NeverOptimizeFunction(main);
main();
