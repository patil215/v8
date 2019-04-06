function main() {
const v2 = new BigInt64Array(52698);
const v3 = v2[0];
}
%NeverOptimizeFunction(main);
main();
