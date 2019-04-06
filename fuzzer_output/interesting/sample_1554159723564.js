function main() {
let v4 = undefined;
const v7 = new Float32Array(7);
let v10 = 0;
v7[1] = undefined;
const v11 = v10 + 1;
v10 = v11;
}
%NeverOptimizeFunction(main);
main();
