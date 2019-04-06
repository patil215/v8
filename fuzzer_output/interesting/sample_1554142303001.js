function main() {
const v2 = new Uint8ClampedArray(61555);
for (const v3 in v2) {
}
}
%NeverOptimizeFunction(main);
main();
