function main() {
const v1 = [13.37];
const v4 = [1337];
const v5 = [v4];
const v8 = Symbol.isConcatSpreadable;
v1[v8] = v5;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337];
let v15 = "undefined";
let v19 = 0;
const v20 = ~"undefined";
const v21 = v19 + 1;
v19 = v21;
const v22 = v11 << 10;
}
%NeverOptimizeFunction(main);
main();
