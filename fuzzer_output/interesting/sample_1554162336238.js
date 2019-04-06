function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
let v6 = "undefined";
const v7 = v6.localeCompare("undefined",1337);
}
%NeverOptimizeFunction(main);
main();
