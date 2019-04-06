function main() {
Function["undefined"] = 13.37;
delete Function["undefined"];
}
%NeverOptimizeFunction(main);
main();
