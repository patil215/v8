function main() {
const v2 = new Float64Array(1616);
const v5 = v2.indexOf(Infinity,1,Infinity);
}
%NeverOptimizeFunction(main);
main();
