function main() {
const v3 = BigInt64Array.bind("string",-4294967295);
const v4 = "string" instanceof v3;
const v6 = [1337,1337,1337];
const v8 = [851828232];
const v9 = [v8];
const v10 = {};
const v12 = new BigUint64Array(v9,v10);
}
%NeverOptimizeFunction(main);
main();
