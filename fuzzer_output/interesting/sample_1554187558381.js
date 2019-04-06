function main() {
const v1 = [256];
const v2 = [v1];
const v3 = [v2];
const v4 = {};
const v6 = new BigUint64Array(v3,v4);
const v9 = new Int16Array(16054);
const v11 = new Float32Array(v9);
}
%NeverOptimizeFunction(main);
main();
