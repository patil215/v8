function main() {
const v2 = [];
const v3 = {exec:9007199254740991};
v2[v3] = 9007199254740991;
v2[1337] = 1337;
}
%NeverOptimizeFunction(main);
main();
