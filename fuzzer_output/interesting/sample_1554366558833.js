function main() {
const v2 = 1337 >> NaN;
const v5 = new Uint8Array(12962);
const v6 = v5.includes(v2,v5,v5,v5);
}
%NeverOptimizeFunction(main);
main();
