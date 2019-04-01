function main() {
let v2 = "undefined";
const v4 = [1337];
const v5 = [v4];
const v6 = v2.split(1337,1337);
}
%NeverOptimizeFunction(main);
main();
