function main() {
const v1 = [1337,1337,1337,1337];
const v4 = new Int32Array(1337);
const v6 = v4.fill(v4,1337,1,v1,1);
const v9 = 1337 >> NaN;
const v12 = new Uint8Array(12962);
const v13 = v6.indexOf(v9,v12,v12,v12);
const v15 = [851828232];
const v16 = [v15];
const v17 = {};
const v19 = new BigUint64Array(v16,v17);
}
%NeverOptimizeFunction(main);
main();
