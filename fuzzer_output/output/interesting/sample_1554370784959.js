function main() {
const v6 = [];
v6[512] = 13.37;
const v7 = v6.indexOf(NaN,"exp",-3823874807,-4294967295);
}
%NeverOptimizeFunction(main);
main();
