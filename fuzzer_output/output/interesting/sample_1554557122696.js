function main() {
const v7 = new Uint8Array(28584);
const v8 = [1337];
const v9 = {defineProperty:1337,all:v8,map:1337};
const v10 = v7.fill(-2910280479,v9);
const v12 = new Uint32Array(v10);
}
%NeverOptimizeFunction(main);
main();
