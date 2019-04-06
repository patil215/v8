function main() {
let v3 = 0;
const v4 = v3 + 1;
v3 = v4;
let v9 = 0;
const v10 = undefined + 1;
v9 = v10;
let v11 = 1;
const v12 = v11 + 1;
const v13 = [1337];
const v14 = Math.acosh(v12,v13);
}
%NeverOptimizeFunction(main);
main();
