function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [9007199254740991,9007199254740991];
const v8 = new Float64Array(v5,BigInt,13.37);
const v9 = BigInt.apply("number",v8,v2);
}
%NeverOptimizeFunction(main);
main();
