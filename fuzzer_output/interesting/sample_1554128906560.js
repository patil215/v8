function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [13.37,v3,Boolean];
const v6 = v5 >> 1337;
const v10 = Math.asinh(v6,1337);
}
%NeverOptimizeFunction(main);
main();
