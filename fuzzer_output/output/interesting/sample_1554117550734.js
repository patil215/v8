function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
const v6 = [13.37];
const v10 = [1337];
const v11 = [v10];
const v14 = [1337];
const v18 = v6.includes(v14,Math,"function");
let v23 = "undefined";
}
%NeverOptimizeFunction(main);
main();
