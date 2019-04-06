function main() {
const v2 = new Int32Array(1337);
let v3 = v2;
const v5 = new Float64Array(v3);
}
%NeverOptimizeFunction(main);
main();
