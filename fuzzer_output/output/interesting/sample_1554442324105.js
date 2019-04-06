function main() {
const v1 = [-1];
const v2 = [v1];
const v3 = {};
const v5 = new BigInt64Array(v2,v3);
const v8 = Array(10);
const v10 = new Uint8Array(v8);
}
%NeverOptimizeFunction(main);
main();
