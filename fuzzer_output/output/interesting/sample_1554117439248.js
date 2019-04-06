function main() {
const v2 = new Float64Array(35643);
let v4 = 0;
const v5 = v2[v4];
}
%NeverOptimizeFunction(main);
main();
