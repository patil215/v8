function main() {
const v1 = [-2.220446049250313e-16];
const v3 = new Int32Array(v1);
}
%NeverOptimizeFunction(main);
main();
