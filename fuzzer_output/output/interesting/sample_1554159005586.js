function main() {
let v2 = 2.2250738585072014e-308;
const v4 = [v2];
const v5 = Math.atan2(v4,0);
}
%NeverOptimizeFunction(main);
main();
