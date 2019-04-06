function main() {
const v4 = new Uint32Array(Function);
const v5 = v4.subarray(0,3);
}
%NeverOptimizeFunction(main);
main();
