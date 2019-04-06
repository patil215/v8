function main() {
const v1 = [13.37,13.37];
let v2 = v1;
const v5 = Symbol.lastIndexOf;
let v6 = v2;
const v7 = v6.toLocaleString(2147483649,v5);
}
%NeverOptimizeFunction(main);
main();
