function main() {
const v3 = [13.37,-4294967295];
const v4 = new Uint32Array(v3);
const v6 = new Int32Array(v4);
}
%NeverOptimizeFunction(main);
main();
