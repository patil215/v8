function main() {
const v1 = [13.37];
const v8 = new Float32Array(7);
v8[v8] = 1;
}
%NeverOptimizeFunction(main);
main();
