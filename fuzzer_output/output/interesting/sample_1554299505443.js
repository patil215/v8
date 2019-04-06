function main() {
let v5 = 0;
const v6 = v5 + 1;
v5 = v6;
const v10 = new Float32Array(7);
const v12 = [String];
const v13 = [v12];
const v14 = v10.includes(NaN,v13);
}
%NeverOptimizeFunction(main);
main();
