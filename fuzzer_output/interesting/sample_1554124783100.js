function main() {
const v4 = new Float64Array(35643);
let v5 = 13.37;
const v6 = v4[v5];
}
%NeverOptimizeFunction(main);
main();
