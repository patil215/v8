function main() {
const v5 = [1337];
let v10 = undefined;
const v12 = [1337];
const v13 = [v12];
v13.length = 0;
let v16 = "undefined";
let v20 = 0;
const v21 = v20 + 1;
v20 = v21;
}
%NeverOptimizeFunction(main);
main();
