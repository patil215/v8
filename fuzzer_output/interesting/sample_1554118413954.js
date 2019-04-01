function main() {
const v1 = [1337];
const v11 = new Float64Array(46647);
const v12 = v11[-2];
}
%NeverOptimizeFunction(main);
main();
