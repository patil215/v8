function main() {
const v1 = [1337,1337,1337,1337,1337];
v1.length = 2;
let v10 = "undefined";
let v13 = 0;
}
%NeverOptimizeFunction(main);
main();
