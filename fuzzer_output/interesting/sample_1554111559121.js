function main() {
const v2 = new Int8Array(48129);
for (const v3 of v2) {
}
let v6 = 0;
const v7 = v6 + 1;
v6 = v7;
}
%NeverOptimizeFunction(main);
main();
