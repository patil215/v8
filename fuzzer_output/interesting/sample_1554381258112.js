function main() {
let v9 = 0;
const v10 = v9 + 1;
v9 = v10;
const v11 = [];
v11[512] = "exp";
const v12 = v11.indexOf(NaN,"exp",-3823874807,-4294967295);
}
%NeverOptimizeFunction(main);
main();
