function main() {
const v3 = new Float32Array(7);
const v5 = [String];
const v6 = [v5];
const v7 = v3.includes(-0.0,v6);
}
%NeverOptimizeFunction(main);
main();
