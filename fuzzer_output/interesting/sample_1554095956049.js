function main() {
let v1 = 13.37;
const v3 = [13.37,v1,13.37,13.37];
let v5 = "undefined";
let v8 = 0;
}
%NeverOptimizeFunction(main);
main();
