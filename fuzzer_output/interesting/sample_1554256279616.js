function main() {
const v1 = [1337,1337];
const v2 = [1337,v1];
const v4 = [v2,1337,1337,1337];
const v7 = new Int32Array(1337);
const v9 = v7.fill(v7,1337,1,v4,1);
const v12 = 1337 % NaN;
const v15 = new Uint8Array(12962);
const v16 = v9.indexOf(v12,1337,v15,v15);
}
%NeverOptimizeFunction(main);
main();
