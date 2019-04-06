function main() {
const v3 = this || this;
const v4 = v3 in v3;
}
%NeverOptimizeFunction(main);
main();
