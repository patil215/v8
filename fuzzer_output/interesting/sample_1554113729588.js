function main() {
const v3 = new Uint16Array(6917);
const v4 = 6917 < 1337;
v3[1337] = v4;
}
%NeverOptimizeFunction(main);
main();
