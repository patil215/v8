function main() {
const v1 = [3538590598];
const v2 = [];
v2.length = v1;
}
%NeverOptimizeFunction(main);
main();
