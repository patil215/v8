function main() {
const v5 = 13.37 % 1337;
let v12 = 0;
let v15 = 0;
const v16 = v15 + 1;
v15 = v16;
const v18 = v12 + 1;
v12 = v18;
}
%NeverOptimizeFunction(main);
main();
