function main() {
const v5 = [13.37,13.37,13.37,13.37];
v5[512] = 56757;
let v8 = 0;
const v9 = v8 + 1;
v8 = v9;
let v13 = 0;
v13 = 10;
}
%NeverOptimizeFunction(main);
main();
