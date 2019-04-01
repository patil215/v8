function main() {
const v2 = [2147483648];
const v4 = new Uint32Array(v2);
}
%NeverOptimizeFunction(main);
main();
