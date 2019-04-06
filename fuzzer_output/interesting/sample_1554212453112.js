function main() {
const v2 = new Float32Array(7);
const v4 = [String];
const v5 = [v4];
const v6 = v2.includes(7,v5);
}
%NeverOptimizeFunction(main);
main();
