function main() {
const v1 = [1337,1337,1337];
let v2 = v1;
const v4 = new Int32Array(v2);
}
%NeverOptimizeFunction(main);
main();
