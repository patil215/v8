function main() {
const v1 = [851828232];
const v2 = [v1];
const v3 = {};
const v5 = new Map(v2,v3);
for (const v6 of v5) {
}
}
%NeverOptimizeFunction(main);
main();
