function main() {
let v1 = 13.37;
const v3 = [1337];
v1.__proto__ = v3;
}
%NeverOptimizeFunction(main);
main();
