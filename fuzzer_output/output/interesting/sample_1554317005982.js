function main() {
const v2 = [1337,1337,1337,1337,1337];
const v3 = [String,v2];
const v5 = new Float32Array(v3);
const v7 = new Int32Array(v5);
}
%NeverOptimizeFunction(main);
main();
