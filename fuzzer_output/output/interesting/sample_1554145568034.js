function main() {
const v1 = [1337];
const v3 = [];
v3[1.0] = 2147483648;
v3.length = v1;
}
%NeverOptimizeFunction(main);
main();
