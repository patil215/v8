function main() {
const v1 = [13.37];
const v5 = new Float64Array(35643);
let v6 = -2.2250738585072014e-308;
const v7 = v5[v6];
}
%NeverOptimizeFunction(main);
main();
