function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337];
v3[1337] = v1;
v3.length = 0;
let v7 = 0;
const v8 = v7 + 1;
v7 = v8;
}
%NeverOptimizeFunction(main);
main();
