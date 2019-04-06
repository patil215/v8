function main() {
let v2 = Infinity;
const v4 = [v2];
const v5 = Math.atan(v4,-4294967295);
}
%NeverOptimizeFunction(main);
main();
