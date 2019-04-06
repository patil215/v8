function main() {
const v2 = new BigInt64Array(52698);
const v3 = v2[0];
const v4 = v3 >> v3;
}
%NeverOptimizeFunction(main);
main();
