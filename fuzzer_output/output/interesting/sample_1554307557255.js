function main() {
const v1 = [1337];
const v4 = new Float64Array(1616);
const v8 = v4.lastIndexOf(NaN,1,NaN);
}
%NeverOptimizeFunction(main);
main();
