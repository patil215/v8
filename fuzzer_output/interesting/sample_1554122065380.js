function main() {
const v1 = [1337];
const v3 = [-5.0];
const v7 = new Uint32Array(v1);
}
%NeverOptimizeFunction(main);
main();
