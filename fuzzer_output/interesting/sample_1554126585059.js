function main() {
const v2 = [1337,13.37];
const v4 = new Uint8ClampedArray(v2);
}
%NeverOptimizeFunction(main);
main();
