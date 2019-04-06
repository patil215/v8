function main() {
const v6 = new Float32Array(1337);
const v8 = [String];
const v9 = [v8];
const v10 = v6.lastIndexOf(1000.0,v9);
}
%NeverOptimizeFunction(main);
main();
