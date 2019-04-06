function main() {
const v3 = new Float32Array(7);
const v5 = [String];
const v6 = [v5];
const v7 = v3.indexOf(13.37,v6);
}
%NeverOptimizeFunction(main);
main();
