function main() {
const v2 = 1337 instanceof Symbol;
const v7 = [9007199254740992,9007199254740992];
const v9 = new Uint32Array(v7);
}
%NeverOptimizeFunction(main);
main();
