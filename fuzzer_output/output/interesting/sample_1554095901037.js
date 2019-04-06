function main() {
const v15 = 10 + 10;
v15.__proto__ = v15;
}
%NeverOptimizeFunction(main);
main();
