function main() {
const v5 = this in this;
}
%NeverOptimizeFunction(main);
main();
