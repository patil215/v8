function main() {
const v2 = new Uint32Array(23013);
const v4 = new Float64Array(v2);
}
%NeverOptimizeFunction(main);
main();
