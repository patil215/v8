function main() {
let v1 = "undefined";
const v6 = [13.37];
let v7 = "undefined";
const v9 = v7.includes(4294967296,v6,1337,v1,RegExp);
}
%NeverOptimizeFunction(main);
main();
