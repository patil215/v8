function main() {
let v2 = 0;
const v3 = Function + 1;
v2 = v3;
for (const v7 of v2) {
}
}
%NeverOptimizeFunction(main);
main();
