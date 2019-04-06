function main() {
let v3 = 0;
const v4 = v3 + 1;
v3 = v4;
const v6 = [1337];
let v8 = "undefined";
let v12 = 0;
v12 = 10;
v6[2] = "undefined";
let v16 = 0;
v16 = 10;
}
%NeverOptimizeFunction(main);
main();
