function main() {
const v2 = new Int8Array(31042);
v2[0] = 10;
}
%NeverOptimizeFunction(main);
main();
