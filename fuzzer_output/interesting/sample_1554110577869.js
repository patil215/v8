function main() {
const v2 = new Float64Array(5370);
let v3 = v2;
v3.length = 129;
}
%NeverOptimizeFunction(main);
main();
