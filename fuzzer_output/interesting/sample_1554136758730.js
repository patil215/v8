function main() {
const v1 = [9007199254740992,9007199254740992,9007199254740992,9007199254740992,9007199254740992];
const v3 = [13.37];
const v6 = new Int16Array(v1,8154,v3);
}
%NeverOptimizeFunction(main);
main();
