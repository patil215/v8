function main() {
let v11 = 0;
let v14 = 0;
const v15 = v14 + 1;
v14 = v15;
const v16 = v11 + 1;
v11 = v16;
const v23 = 0 <= 13.37;
}
%NeverOptimizeFunction(main);
main();
