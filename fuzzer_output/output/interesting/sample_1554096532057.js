function main() {
let v12 = 0;
const v13 = v12 + 1;
v12 = v13;
const v35 = 13.37 >> 13.37;
let v49 = 0;
v49 = 10;
let v85 = 0;
v85 = 10;
}
%NeverOptimizeFunction(main);
main();
