function main() {
delete Symbol.name;
for (const v1 in Symbol) {
}
}
%NeverOptimizeFunction(main);
main();
