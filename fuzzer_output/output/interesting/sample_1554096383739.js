function main() {
const v1 = [13.37,13.37,13.37,13.37];
let v3 = "undefined";
const v5 = [1337];
const v10 = v1.shift(v5,Function,Function,Function,"undefined");
}
%NeverOptimizeFunction(main);
main();
