function main() {
const v3 = new Int32Array(58176);
const v4 = new Uint32Array(v3);
}
%NeverOptimizeFunction(main);
main();
