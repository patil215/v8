function main() {
let v1 = "undefined";
const v4 = [13.37,13.37,13.37,13.37];
let v5 = "undefined";
v5.length = 0;
let v10 = 0;
delete v1.isSealed;
const v11 = v10 + 1;
v10 = v11;
}
%NeverOptimizeFunction(main);
main();
