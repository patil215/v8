function main() {
const v2 = [1000000000.0,1000000000.0,1000000000.0];
const v3 = v2.sort(parseFloat,parseFloat);
}
%NeverOptimizeFunction(main);
main();
