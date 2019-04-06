function main() {
const v2 = [13.37,13.37,13.37];
v2[1337] = 2468829855;
let v6 = 0;
let v12 = 0;
let v17 = 0;
const v18 = v17 + 1;
v17 = v18;
v2[65536] = 10;
}
%NeverOptimizeFunction(main);
main();
