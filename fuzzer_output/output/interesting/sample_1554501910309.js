function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v4 = new Uint32Array(56871);
const v7 = v4.set(v1,Function,1529365101);
}
%NeverOptimizeFunction(main);
main();
