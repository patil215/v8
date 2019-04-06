function main() {
const v0 = -Infinity;
const v1 = [v0];
const v7 = [1337];
let v12 = undefined;
const v20 = [Function];
Function.__proto__ = v1;
const v21 = Function.indexOf(10,v20,1337);
}
%NeverOptimizeFunction(main);
main();
