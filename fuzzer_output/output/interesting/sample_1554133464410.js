function main() {
const v1 = [-5.0,-5.0,-5.0,-5.0,-5.0];
const v3 = new Float32Array(v1);
}
%NeverOptimizeFunction(main);
main();
