function main() {
let v1 = "undefined";
let v3 = 0;
const v4 = v3 + 1;
const v9 = v1.includes(v4,10);
}
%NeverOptimizeFunction(main);
main();
