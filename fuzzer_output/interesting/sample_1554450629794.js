function main() {
const v3 = new Uint32Array(Function);
const v4 = v3.fill(2.220446049250313e-16,Uint32Array);
}
%NeverOptimizeFunction(main);
main();
