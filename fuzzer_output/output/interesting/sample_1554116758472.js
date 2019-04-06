function main() {
const v3 = Float32Array.bind(Function,1337);
}
%NeverOptimizeFunction(main);
main();
