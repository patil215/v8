function main() {
const v5 = new BigInt64Array(52698);
const v6 = v5[0];
const v7 = v6 << v6;
}
%NeverOptimizeFunction(main);
main();
