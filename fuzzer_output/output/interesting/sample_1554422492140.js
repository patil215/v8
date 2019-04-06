function main() {
const v3 = new Uint32Array(Function);
const v4 = v3.fill(13.37,Uint32Array);
}
%NeverOptimizeFunction(main);
main();
