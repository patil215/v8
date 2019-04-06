function main() {
const v2 = [1337];
let v3 = Math;
const v5 = [1337];
const v7 = v3.exp(1024,v2,v5);
}
%NeverOptimizeFunction(main);
main();
