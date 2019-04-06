function main() {
const v2 = new Uint8Array(12962);
const v4 = new Int32Array(v2);
}
%NeverOptimizeFunction(main);
main();
