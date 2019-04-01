function main() {
const v17 = [1337];
const v18 = {exec:v17};
delete v18[0];
}
%NeverOptimizeFunction(main);
main();
