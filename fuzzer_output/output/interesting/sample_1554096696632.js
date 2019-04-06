function main() {
const v1 = [];
const v2 = {exec:9007199254740991};
v1[0] = 9007199254740991;
let v3 = v2;
}
%NeverOptimizeFunction(main);
main();
