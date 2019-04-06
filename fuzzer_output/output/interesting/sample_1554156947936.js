function main() {
delete Symbol.name;
const v2 = [13.37,Symbol];
const v3 = v2 - 13.37;
}
%NeverOptimizeFunction(main);
main();
