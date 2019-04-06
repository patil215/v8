function main() {
const v2 = new Uint8Array(4135);
const v4 = new Int8Array(v2);
}
%NeverOptimizeFunction(main);
main();
