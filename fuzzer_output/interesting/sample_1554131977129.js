function main() {
let v5 = undefined;
let v11 = 0;
const v19 = [1337];
let v21 = undefined;
let v24 = undefined;
const v26 = 13.37 / -2147483648;
const v27 = [v26,13.37,13.37,13.37];
v24 = v27;
const v28 = v24 + 1;
const v33 = v11 + 1;
v11 = v33;
}
%NeverOptimizeFunction(main);
main();
