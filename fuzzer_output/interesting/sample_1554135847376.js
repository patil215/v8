function main() {
const v2 = [1337];
v2[1337] = "undefined";
const v5 = [13.37,13.37,13.37,13.37];
const v10 = v2 + 1337;
const v11 = v5[v10];
}
%NeverOptimizeFunction(main);
main();
