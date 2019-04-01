function main() {
const v2 = new Int32Array(58176);
v2[1] = 13.37;
}
%NeverOptimizeFunction(main);
main();
