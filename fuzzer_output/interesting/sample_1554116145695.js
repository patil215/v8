function main() {
const v2 = new String(32822);
v2[0] = 32822;
}
%NeverOptimizeFunction(main);
main();
