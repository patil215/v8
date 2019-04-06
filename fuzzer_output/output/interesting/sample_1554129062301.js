function main() {
const v1 = {subarray:13.37};
let v3 = 0;
let v5 = undefined;
delete v1.subarray;
}
%NeverOptimizeFunction(main);
main();
