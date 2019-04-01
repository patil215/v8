function main() {
let v2 = 0;
const v5 = [1337];
const v6 = [v5];
const v11 = ["undefined"];
v11.length = 1;
let v15 = 0;
const v16 = v15 + 1;
v15 = v16;
let v20 = 0;
}
%NeverOptimizeFunction(main);
main();
