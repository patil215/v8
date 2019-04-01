function main() {
const v1 = -Infinity;
const v2 = [v1];
const v6 = v2 << 1322373121;
}
%NeverOptimizeFunction(main);
main();
