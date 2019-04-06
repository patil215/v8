function main() {
const v4 = new Float32Array(7);
const v5 = [1337];
const v6 = v4.indexOf(NaN,v5);
}
%NeverOptimizeFunction(main);
main();
