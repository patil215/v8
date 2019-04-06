function main() {
const v1 = [9007199254740993,9007199254740993,9007199254740993,9007199254740993,9007199254740993];
const v3 = new Uint8Array(v1);
}
%NeverOptimizeFunction(main);
main();
