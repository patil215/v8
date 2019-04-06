function main() {
const v2 = [13.37,13.37];
const v3 = [v2,v2];
const v7 = new Int8Array(8715);
const v8 = new Uint32Array(v7,v3,10);
}
%NeverOptimizeFunction(main);
main();
