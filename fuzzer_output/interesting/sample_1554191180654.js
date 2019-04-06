function main() {
const v3 = Promise.all("getFloat32",Promise,Promise,-65536);
}
%NeverOptimizeFunction(main);
main();
