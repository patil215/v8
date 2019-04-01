function main() {
let v1 = "undefined";
const v3 = [];
const v9 = [1337];
let v14 = undefined;
const v17 = Object.setPrototypeOf(v3,Function,-2,v1);
}
%NeverOptimizeFunction(main);
main();
