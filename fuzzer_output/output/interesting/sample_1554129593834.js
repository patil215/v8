function main() {
const v1 = ["boolean"];
const v4 = v1.includes(256,-1000000000000.0);
}
%NeverOptimizeFunction(main);
main();
