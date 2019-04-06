function main() {
const v1 = [1337];
const v2 = [v1];
const v3 = {};
const v5 = new BigInt64Array(v2,v3);
let v6 = BigInt64Array;
const v8 = Symbol.species;
delete v6[v8];
}
%NeverOptimizeFunction(main);
main();
