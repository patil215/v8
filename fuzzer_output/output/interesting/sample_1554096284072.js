function main() {
const v2 = Symbol("undefined");
const v7 = [1337];
let v9 = "undefined";
let v11 = "undefined";
let v15 = 0;
v15 = 10;
let v17 = "undefined";
let v21 = 0;
v21 = 10;
}
%NeverOptimizeFunction(main);
main();
