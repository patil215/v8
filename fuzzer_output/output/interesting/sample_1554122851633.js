function main() {
const v1 = [13.37];
const v3 = new Uint32Array(v1);
}
%NeverOptimizeFunction(main);
main();
