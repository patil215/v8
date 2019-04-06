function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [-9007199254740992,v3];
const v7 = new Uint16Array(v5);
}
%NeverOptimizeFunction(main);
main();
