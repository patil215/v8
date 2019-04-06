function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
let v5 = "undefined";
let v9 = 0;
v9 = 10;
let v18 = "undefined";
let v20 = "undefined";
let v24 = 0;
v24 = 10;
Function[10] = v18;
const v26 = Function[10];
let v30 = 0;
const v31 = v30 + 1;
v30 = v31;
}
%NeverOptimizeFunction(main);
main();
