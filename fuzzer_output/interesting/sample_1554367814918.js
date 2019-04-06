function main() {
const v1 = [13.37];
const v3 = [1337];
const v4 = [13.37,v1,v1];
const v6 = v4 >> NaN;
const v8 = new Uint8Array(v3);
const v9 = v8.includes(v6,v8,v8,v8);
}
%NeverOptimizeFunction(main);
main();
