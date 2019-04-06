function main() {
const v2 = new Float32Array(36344);
const v4 = v2[1];
const v5 = 1 <= v4;
const v9 = new Uint32Array(65536);
const v10 = v9.fill(undefined,Uint32Array);
}
%NeverOptimizeFunction(main);
main();
