function main() {
const v5 = new Uint8Array(28584);
const v6 = [1337];
const v7 = {defineProperty:1337,all:v6,map:1337};
const v8 = v5.fill(9007199254740991,v7);
}
%NeverOptimizeFunction(main);
main();
