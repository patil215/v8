function main() {
let v2 = 0;
const v3 = v2 + 1;
let v6 = undefined;
const v8 = 13.37 * -2147483648;
const v9 = [v8,13.37,13.37,13.37];
v6 = v9;
const v10 = v6 + 1;
v2 = v3;
}
%NeverOptimizeFunction(main);
main();
