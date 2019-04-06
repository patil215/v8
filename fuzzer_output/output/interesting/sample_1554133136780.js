function main() {
const v1 = [];
v1[1.0] = 2147483648;
v1.length = 1;
}
%NeverOptimizeFunction(main);
main();
