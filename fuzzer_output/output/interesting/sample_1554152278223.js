function main() {
const v1 = {};
const v3 = [13.37];
const v10 = [1337];
let v15 = undefined;
const v16 = Function.__proto__;
v16.__proto__ = v3;
const v22 = "undefined" == 10;
const v23 = String.includes(10,v1);
}
%NeverOptimizeFunction(main);
main();
