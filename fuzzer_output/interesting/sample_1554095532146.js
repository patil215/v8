function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337];
const v5 = [v4];
const v6 = {exec:v4};
let v7 = "undefined";
const v11 = Symbol.toStringTag;
v5[v11] = v7;
let v13 = 0;
v13 = 10;
}
%NeverOptimizeFunction(main);
main();
