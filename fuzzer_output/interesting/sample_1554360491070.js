function main() {
const v7 = new Int8Array(28584);
const v8 = [1337];
const v9 = {defineProperty:1337,all:v8,map:1337};
const v10 = v7.fill(129,v9);
}
%NeverOptimizeFunction(main);
main();
