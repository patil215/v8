function main() {
const v2 = [1337];
const v3 = {exec:v2};
let v4 = "undefined";
const v7 = [13.37,v3,13.37,13.37];
let v8 = "undefined";
v7[1538740102] = v4;
}
%NeverOptimizeFunction(main);
main();
