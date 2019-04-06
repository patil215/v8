function main() {
const v2 = new Uint32Array(56871);
const v5 = new Float32Array(1337);
const v8 = v2.set(v5,Function,1529365101);
}
%NeverOptimizeFunction(main);
main();
