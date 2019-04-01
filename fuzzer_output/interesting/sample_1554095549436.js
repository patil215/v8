function main() {
const v10 = [1337];
let v41 = 0;
const v42 = v41 + 1;
let v91 = "undefined";
v10[1337] = 1337;
let v98 = 0;
v98 = 10;
const v100 = ~13.37;
}
%NeverOptimizeFunction(main);
main();
