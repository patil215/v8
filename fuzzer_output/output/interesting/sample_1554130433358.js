function main() {
const v2 = [1337,1337];
const v3 = [1337,v2,-1777286928];
const v5 = new Float32Array(v3);
}
%NeverOptimizeFunction(main);
main();
