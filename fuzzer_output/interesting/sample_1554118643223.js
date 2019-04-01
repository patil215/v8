function main() {
const v2 = Symbol.toPrimitive;
let v5 = 0;
const v6 = v5 + 1;
v5 = v6;
const v7 = v5.toLocaleString(2147483649,v2);
}
%NeverOptimizeFunction(main);
main();
