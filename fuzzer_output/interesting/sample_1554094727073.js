function main() {
const v2 = new Float64Array(26421);
let v5 = 0;
const v6 = v5 + 1;
v5 = v6;
}
%NeverOptimizeFunction(main);
main();
