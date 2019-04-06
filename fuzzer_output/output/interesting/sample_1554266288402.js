function main() {
const v2 = 1337 && 13.37;
const v6 = new Uint8Array(12962);
const v7 = v6.indexOf(v2,-9007199254740993,v6,v6);
}
%NeverOptimizeFunction(main);
main();
