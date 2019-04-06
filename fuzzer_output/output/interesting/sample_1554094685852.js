function main() {
let v5 = 0;
const v6 = v5 + 1;
v5 = v6;
const v9 = [13.37];
const v10 = {reverse:Error,getPrototypeOf:v9};
v10[2001336388] = Error;
}
%NeverOptimizeFunction(main);
main();
