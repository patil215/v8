function main() {
let v3 = 0;
const v9 = [1337];
let v11 = undefined;
const v13 = [13.37,13.37,13.37,13.37];
const v15 = [1337];
v15.SQRT2 = Object;
delete v15.SQRT2;
let v21 = 0;
const v22 = v3 + 1;
v3 = v22;
}
%NeverOptimizeFunction(main);
main();
