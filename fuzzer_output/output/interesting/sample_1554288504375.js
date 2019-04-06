function main() {
const v2 = new Uint32Array(14123);
const v4 = new Int8Array(v2);
}
%NeverOptimizeFunction(main);
main();
