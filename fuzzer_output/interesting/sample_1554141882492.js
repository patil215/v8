function main() {
const v0 = -Infinity;
const v1 = [v0,v0];
let v2 = v1;
const v4 = Symbol.iterator;
v2[10] = v4;
const v8 = Symbol.lastIndexOf;
let v9 = v2;
const v10 = v9.toLocaleString(2147483649,v8);
}
%NeverOptimizeFunction(main);
main();
