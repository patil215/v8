function main() {
delete (10)["undefined"];
}
%NeverOptimizeFunction(main);
main();
