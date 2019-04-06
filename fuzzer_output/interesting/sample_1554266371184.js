function main() {
const v1 = [1337,1337,1337,1337];
const v3 = new Int32Array(v1);
const v5 = v3.fill(v3,1337,1,v1,1);
const v8 = 1337 >> NaN;
const v11 = new Uint8Array(12962);
const v12 = v5.includes(v8,v11,v11,v11);
}
%NeverOptimizeFunction(main);
main();
