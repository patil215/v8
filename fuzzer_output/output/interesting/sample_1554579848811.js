function main() {
const v2 = [1337,1337];
const v5 = new Uint32Array(56871);
const v6 = [2147483647,...v5,Uint32Array,...v2];
}
%NeverOptimizeFunction(main);
main();
