function main() {
const v2 = new Uint8ClampedArray(56645);
const v4 = new Float32Array(v2);
}
%NeverOptimizeFunction(main);
main();
