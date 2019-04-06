function main() {
const v1 = [13.37,13.37];
const v3 = [1337,1337,1337];
let v6 = 0;
v6 = 10;
const v7 = [13.37,v1,13.37,v3];
const v10 = [1337,1337];
v10.__proto__ = v7;
v10[0] = WeakMap;
}
%NeverOptimizeFunction(main);
main();
