function main() {
const v2 = [13.37];
let v3 = 4;
const v7 = -Infinity;
const v9 = Math.pow(1,v7);
let v12 = 0;
const v13 = v12 + 1;
v12 = v13;
}
%NeverOptimizeFunction(main);
main();
