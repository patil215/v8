function main() {
let v4 = 0;
let v5 = v4;
const v6 = v5.toExponential(v5,Atomics);
const v7 = v4 + 1;
v4 = v7;
}
%NeverOptimizeFunction(main);
main();
