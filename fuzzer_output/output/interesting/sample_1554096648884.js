function main() {
const v1 = [1337];
const v2 = {exec:v1};
const v4 = [13.37,v2,13.37,13.37];
let v7 = 0;
let v10 = 0;
const v12 = [13.37,13.37,13.37,13.37];
const v13 = v10 + 1;
v10 = v13;
const v14 = v7 + 1;
v7 = v14;
const v17 = RegExp();
}
%NeverOptimizeFunction(main);
main();
