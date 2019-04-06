function main() {
const v1 = [1337,1337];
const v2 = [];
const v4 = [1337];
v4[10] = v2;
const v5 = v4 * v1;
}
%NeverOptimizeFunction(main);
main();
