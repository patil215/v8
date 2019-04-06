function main() {
const v1 = [8];
const v2 = [v1];
const v3 = {};
const v5 = new Set(v2,v3);
const v10 = new Int8Array(28584);
const v11 = v10.lastIndexOf(1337,28584,Int8Array,2741319795);
}
%NeverOptimizeFunction(main);
main();
