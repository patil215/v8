function main() {
const v6 = Float32Array.bind(Function,1337);
for (let v9 = 0; v9 < v6; v9++) {
}
}
%NeverOptimizeFunction(main);
main();
