function main() {
const v6 = [1337];
let v8 = undefined;
const v9 = RegExp.leftContext;
let v19 = 0;
const v20 = v19 + 1;
v19 = v20;
}
%NeverOptimizeFunction(main);
main();
