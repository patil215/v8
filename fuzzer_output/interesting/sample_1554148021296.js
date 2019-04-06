function main() {
const v2 = new BigInt64Array(52698);
const v5 = [1337];
v2[10] = v5;
}
%NeverOptimizeFunction(main);
main();
