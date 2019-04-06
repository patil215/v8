function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v5 = new Float64Array(v1,BigInt,13.37);
const v7 = new Uint8Array(v5);
}
%NeverOptimizeFunction(main);
main();
