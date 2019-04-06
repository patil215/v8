function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
const v6 = Symbol.lastIndexOf;
let v8 = 0;
const v9 = v8.toLocaleString(2147483649,v6);
}
%NeverOptimizeFunction(main);
main();
