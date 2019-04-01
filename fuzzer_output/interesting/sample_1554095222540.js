function main() {
const v8 = "number" >> 1337;
}
%NeverOptimizeFunction(main);
main();
