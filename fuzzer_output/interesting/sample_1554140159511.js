function main() {
const v4 = [9007199254740993,9007199254740993,9007199254740993,9007199254740993,-2.220446049250313e-16];
const v6 = new Uint8Array(v4);
const v7 = new Uint16Array(v6,1337);
}
%NeverOptimizeFunction(main);
main();
