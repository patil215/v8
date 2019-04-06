function main() {
const v4 = new Float32Array(7);
v4[0] = 1;
}
%NeverOptimizeFunction(main);
main();
