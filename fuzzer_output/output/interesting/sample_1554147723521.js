function main() {
const v10 = -2147483647 << 1.7976931348623157e+308;
}
%NeverOptimizeFunction(main);
main();
