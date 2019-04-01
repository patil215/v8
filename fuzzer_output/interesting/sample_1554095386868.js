function main() {
const v5 = [1337];
const v6 = {exec:v5};
let v17 = v6;
}
%NeverOptimizeFunction(main);
main();
