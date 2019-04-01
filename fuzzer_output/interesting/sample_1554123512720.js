function main() {
const v4 = {};
const v5 = [v4,-9007199254740992,v4,v4,v4];
const v6 = new Int32Array(v5,10,v4,Function);
}
%NeverOptimizeFunction(main);
main();
