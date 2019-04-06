function main() {
const v2 = new Int8Array(41087);
const v4 = new Float32Array(v2);
}
%NeverOptimizeFunction(main);
main();
