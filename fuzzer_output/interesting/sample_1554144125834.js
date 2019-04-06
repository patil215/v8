function main() {
const v2 = [1337,1337];
let v3 = Infinity;
const v5 = [];
const v6 = v3.toExponential(Infinity,v5,1337,v5,v2);
}
%NeverOptimizeFunction(main);
main();
