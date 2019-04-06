function main() {
const v2 = [1337];
const v3 = "function" + v2;
let v8 = 13.37;
let v9 = -1000.0;
const v10 = Math[-536870912];
const v11 = v9.toExponential(v10,13.37,Error,v8);
}
%NeverOptimizeFunction(main);
main();
