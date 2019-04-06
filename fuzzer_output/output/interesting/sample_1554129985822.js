function main() {
const v1 = [1337,1337];
const v4 = [v1];
const v5 = Math.atan2(v4,1337);
}
%NeverOptimizeFunction(main);
main();
