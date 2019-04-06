function main() {
const v1 = [9007199254740992,9007199254740992];
const v3 = new Uint32Array(v1);
const v8 = [1337];
}
%NeverOptimizeFunction(main);
main();
