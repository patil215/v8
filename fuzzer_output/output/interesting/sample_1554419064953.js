function main() {
const v1 = [-4294967295];
const v4 = new Uint32Array(36156);
const v5 = v4.fill(v1,Uint32Array);
}
%NeverOptimizeFunction(main);
main();
