function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
let v6 = 0;
const v7 = 1337 - 1;
v6 = v7;
const v9 = [13.37];
const v11 = [1337];
v11[v6] = v9;
const v13 = v11.indexOf(v9,1337,-882046.166812253);
}
%NeverOptimizeFunction(main);
main();
