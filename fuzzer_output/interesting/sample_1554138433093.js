function main() {
const v0 = -Infinity;
const v2 = [1337,1337];
let v3 = v0;
const v5 = [];
const v6 = v3.toExponential(v0,v5,1337,v5,v2);
}
%NeverOptimizeFunction(main);
main();
