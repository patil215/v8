function main() {
const v1 = [13.37,13.37];
const v5 = new Int8Array(28584);
const v6 = [v1];
const v7 = {defineProperty:1337,all:v6,map:1337};
const v8 = v5.fill(13.37,v7);
}
%NeverOptimizeFunction(main);
main();
