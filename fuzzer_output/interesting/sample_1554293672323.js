function main() {
let v3 = 0;
const v4 = v3 + 1;
v3 = v4;
const v6 = [9007199254740991,9007199254740991];
v6[1000] = 9007199254740991;
const v9 = new Float64Array(v6,BigInt,13.37);
}
%NeverOptimizeFunction(main);
main();
