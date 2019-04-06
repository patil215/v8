function main() {
const v2 = [-4294967296,-4294967296,-4294967296,-4294967296,-4294967296];
const v4 = new Uint8Array(v2);
}
%NeverOptimizeFunction(main);
main();
