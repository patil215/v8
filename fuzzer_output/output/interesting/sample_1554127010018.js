function main() {
const v5 = [1337];
let v10 = undefined;
const v13 = new Int32Array(14622);
const v14 = v13[256];
}
%NeverOptimizeFunction(main);
main();
