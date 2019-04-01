function main() {
const v3 = new Int32Array(10086);
v3[-4294967297] = 10086;
}
%NeverOptimizeFunction(main);
main();
