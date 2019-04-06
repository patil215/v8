function main() {
const v3 = new Uint8Array(28584);
const v4 = [1337];
const v5 = {defineProperty:1337,all:v4,map:1337};
const v6 = v3.fill(1337,v5);
}
%NeverOptimizeFunction(main);
main();
