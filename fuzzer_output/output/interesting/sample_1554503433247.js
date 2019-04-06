function main() {
const v2 = new Uint32Array(56871);
const v4 = new Float32Array(v2);
}
%NeverOptimizeFunction(main);
main();
