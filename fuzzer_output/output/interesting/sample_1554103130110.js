function main() {
const v2 = new Uint8ClampedArray(32822);
v2[0] = 32822;
}
%NeverOptimizeFunction(main);
main();
