function main() {
const v2 = new Float64Array(35643);
const v3 = v2.flat;
let v6 = 0;
const v7 = v6 + 1;
v6 = v7;
let v9 = "undefined";
let v13 = 0;
v13 = 10;
}
%NeverOptimizeFunction(main);
main();
