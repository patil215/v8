function main() {
const v2 = {POSITIVE_INFINITY:1337};
const v7 = [1337];
v7[127] = v2;
const v11 = v7.flat(1337,0,857977632);
}
%NeverOptimizeFunction(main);
main();
