function main() {
let v7 = 0;
let v10 = 0;
const v12 = v10 + 1;
v10 = v12;
const v13 = v7 + 1;
v7 = v13;
const v27 = 0 << 1337;
}
%NeverOptimizeFunction(main);
main();
