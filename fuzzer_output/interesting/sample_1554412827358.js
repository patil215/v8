function main() {
const v4 = new Int8Array(28584);
const v5 = [1337];
const v6 = {defineProperty:1337,all:v5,map:1337};
const v7 = v4.fill(9007199254740991,v6);
}
%NeverOptimizeFunction(main);
main();
