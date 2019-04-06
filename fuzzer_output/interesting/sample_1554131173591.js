function main() {
const v15 = [1337];
const v19 = typeof v15;
const v21 = v19 === undefined;
}
%NeverOptimizeFunction(main);
main();
