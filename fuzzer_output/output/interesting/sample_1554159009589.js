function main() {
const v2 = [1337,parseInt];
const v4 = "of".localeCompare(v2,"of");
}
%NeverOptimizeFunction(main);
main();
