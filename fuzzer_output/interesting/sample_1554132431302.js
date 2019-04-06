function main() {
const v5 = [1337];
let v10 = undefined;
const v16 = [1337];
let v18 = undefined;
const v20 = new Int32Array(v5);
}
%NeverOptimizeFunction(main);
main();
