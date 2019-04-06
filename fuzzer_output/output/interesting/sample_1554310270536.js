function main() {
const v6 = new Float32Array(Float32Array);
const v7 = [1337];
const v8 = [v7];
const v9 = v6.includes(NaN,v8);
}
%NeverOptimizeFunction(main);
main();
