function main() {
const v2 = new Uint32Array(61730);
const v4 = new Uint16Array(v2);
}
%NeverOptimizeFunction(main);
main();
