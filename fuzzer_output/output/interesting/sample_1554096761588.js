function main() {
const v1 = {exec:9007199254740991};
const v3 = [13.37,v1,13.37,13.37];
const v4 = v3[1];
}
%NeverOptimizeFunction(main);
main();
