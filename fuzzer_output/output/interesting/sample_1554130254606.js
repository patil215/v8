function main() {
let v1 = 1337;
const v3 = [v1];
const v4 = Math.atan2(v3,1337);
}
%NeverOptimizeFunction(main);
main();
