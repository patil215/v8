function main() {
const v3 = [1337,13.37,BigInt,BigInt];
const v5 = [1337,1337];
v5[1000] = 1337;
const v8 = new Float64Array(v5,BigInt,13.37);
}
%NeverOptimizeFunction(main);
main();
