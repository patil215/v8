function main() {
const v2 = new Uint32Array(10);
const v4 = new Uint8Array(v2);
}
%NeverOptimizeFunction(main);
main();
