function main() {
const v3 = new Uint32Array(10);
const v4 = v3.fill(undefined,Uint32Array);
}
%NeverOptimizeFunction(main);
main();
