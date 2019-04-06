function main() {
let v12 = undefined;
const v15 = new Uint8ClampedArray(32822);
v15[0] = undefined;
}
%NeverOptimizeFunction(main);
main();
