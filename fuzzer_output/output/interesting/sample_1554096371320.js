function main() {
const v2 = Symbol.replace;
v2[v2] = v2;
let v36 = 0;
const v37 = v36 + 1;
v36 = v37;
}
%NeverOptimizeFunction(main);
main();
