function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337];
let v6 = 0;
v3[1337] = v1;
let v9 = 0;
v3.length = 1;
const v11 = v9 + 1;
v9 = v11;
const v13 = [13.37,13.37,13.37,13.37];
}
%NeverOptimizeFunction(main);
main();
