function main() {
const v1 = {};
const v2 = {...v1,...13.37};
}
%NeverOptimizeFunction(main);
main();
