function main() {
let v23 = 0;
const v24 = v23 + 1;
v23 = v24;
const v25 = 2.220446049250313e-16 | 0;
}
%NeverOptimizeFunction(main);
main();
