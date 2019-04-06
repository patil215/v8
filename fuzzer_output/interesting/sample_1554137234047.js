function main() {
let v3 = 0;
const v4 = 1337 + 1;
v3 = v4;
const v6 = [13.37];
const v8 = [1337];
v8[v3] = v6;
const v10 = [1337,13.37];
let v18 = undefined;
const v19 = v8.indexOf(v6,1337,-882046.166812253);
}
%NeverOptimizeFunction(main);
main();
