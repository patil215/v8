function main() {
const v2 = new Float32Array(36344);
const v4 = new Int32Array(v2);
}
%NeverOptimizeFunction(main);
main();
