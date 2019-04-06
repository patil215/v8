function main() {
const v2 = new BigUint64Array(52698);
const v5 = [1337];
v2[10] = v5;
}
%NeverOptimizeFunction(main);
main();
