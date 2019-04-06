function main() {
const v5 = Symbol.toPrimitive;
let v7 = 0;
const v8 = v7.toLocaleString(2147483649,v5);
}
%NeverOptimizeFunction(main);
main();
