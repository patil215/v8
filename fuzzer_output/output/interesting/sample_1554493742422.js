function main() {
const v1 = [-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16];
const v5 = new Float64Array(v1,BigInt,13.37);
const v7 = new Uint8Array(v5);
}
%NeverOptimizeFunction(main);
main();
