function main() {
const v1 = [1337];
const v3 = [-268435456];
const v4 = [v3];
const v5 = {};
const v7 = new BigInt64Array(v4,v5);
const v10 = new Uint32Array(36156);
const v11 = v10.fill(v1,Uint32Array);
}
%NeverOptimizeFunction(main);
main();
