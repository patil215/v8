function main() {
const v2 = ["cos",1337];
const v4 = new Uint8ClampedArray(v2);
}
%NeverOptimizeFunction(main);
main();
