function main() {
let v2 = 0;
const v11 = new Uint32Array(42247);
const v15 = v11[1];
}
%NeverOptimizeFunction(main);
main();
