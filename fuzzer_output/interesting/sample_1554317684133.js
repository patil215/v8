function main() {
const v2 = [13.37,-4294967295];
const v4 = new Float32Array(v2);
const v6 = new Int32Array(v4);
}
%NeverOptimizeFunction(main);
main();
