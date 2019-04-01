function main() {
const v2 = [13.37,13.37,13.37];
v2[1337] = 2468829855;
v2[2468829855] = 4;
v2[65536] = 10;
}
%NeverOptimizeFunction(main);
main();
