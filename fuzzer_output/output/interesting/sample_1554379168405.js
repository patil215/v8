function main() {
const v2 = new Int32Array(5);
const v4 = new Float32Array(v2);
}
%NeverOptimizeFunction(main);
main();
