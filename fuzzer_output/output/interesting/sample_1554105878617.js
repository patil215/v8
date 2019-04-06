function main() {
const v3 = new SharedArrayBuffer(6917);
const v4 = 6917 < 1337;
v3[SharedArrayBuffer] = v4;
}
%NeverOptimizeFunction(main);
main();
