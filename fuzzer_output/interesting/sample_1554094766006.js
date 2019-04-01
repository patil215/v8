function main() {
const v2 = [13.37];
const v3 = {reverse:Error,getPrototypeOf:v2};
v2.length = 1;
}
%NeverOptimizeFunction(main);
main();
