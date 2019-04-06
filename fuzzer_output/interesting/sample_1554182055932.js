function main() {
let v2 = Infinity;
const v4 = [v2];
const v5 = Math.atan2(v4,-4294967295);
}
%NeverOptimizeFunction(main);
main();
