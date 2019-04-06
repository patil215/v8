function main() {
const v1 = [1337,1337,1337];
const v3 = [13.37,13.37,13.37,13.37];
let v5 = "undefined";
let v9 = 0;
let v15 = 0;
let v18 = 0;
delete v1[2];
const v19 = v18 + 1;
v18 = v19;
const v20 = v15 + 1;
v15 = v20;
}
%NeverOptimizeFunction(main);
main();
