function main() {
const v1 = [13.37];
const v2 = {reverse:13.37,getPrototypeOf:v1};
const v5 = [13.37];
const v6 = {reverse:Error,getPrototypeOf:v5};
}
%NeverOptimizeFunction(main);
main();
