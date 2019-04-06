function main() {
const v1 = [1337,1337,1337];
const v6 = [v1];
let v11 = undefined;
const v14 = [1337,1337];
const v16 = new Uint8ClampedArray(v14);
const v17 = new Int8Array(v16);
}
%NeverOptimizeFunction(main);
main();
