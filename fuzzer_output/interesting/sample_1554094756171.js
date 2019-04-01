function main() {
let v5 = 13.37;
const v10 = v5 + Error;
}
%NeverOptimizeFunction(main);
main();
