function main() {
const v6 = new Uint32Array(36156);
const v7 = v6.fill(undefined,Uint32Array);
}
%NeverOptimizeFunction(main);
main();
