function main() {
const v2 = [2.220446049250313e-16,-9007199254740993];
const v4 = new Float32Array(v2);
const v6 = new Int32Array(v4);
}
%NeverOptimizeFunction(main);
main();
