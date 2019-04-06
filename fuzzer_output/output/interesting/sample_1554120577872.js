function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [13.37,13.37,13.37,13.37];
for (const v7 of v6) {
    v4[8] = v7;
}
v4[1337] = v2;
}
%NeverOptimizeFunction(main);
main();
