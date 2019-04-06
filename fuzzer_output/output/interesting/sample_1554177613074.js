function main() {
const v3 = Symbol.match;
const v4 = Object[v3];
const v5 = [];
const v7 = [1337,v4,1337];
let v8 = v5;
const v9 = v8[100];
v7[2147483648] = v9;
const v10 = v7.sort(v9,1337);
}
%NeverOptimizeFunction(main);
main();
