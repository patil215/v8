function main() {
const v2 = [-2.220446049250313e-16];
const v3 = new SharedArrayBuffer(v2);
}
%NeverOptimizeFunction(main);
main();
