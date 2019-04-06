function main() {
const v2 = [1337,String];
const v8 = [1337];
let v13 = undefined;
let v15 = "undefined";
v2.length = 129;
}
%NeverOptimizeFunction(main);
main();
