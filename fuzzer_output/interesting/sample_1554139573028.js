function main() {
const v3 = [RegExp];
const v5 = [1337,1337,1337,1337];
const v6 = [v3,v5,268435456,13.37];
const v8 = [13.37,13.37,v6];
const v10 = [Math];
const v11 = Math.expm1(v10,v8);
}
%NeverOptimizeFunction(main);
main();
