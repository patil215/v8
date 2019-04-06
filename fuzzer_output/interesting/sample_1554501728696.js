function main() {
const v2 = [9007199254740993,9007199254740993,9007199254740993,9007199254740993,-2.220446049250313e-16];
const v4 = new Uint32Array(v2);
}
%NeverOptimizeFunction(main);
main();
