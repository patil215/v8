function main() {
const v0 = [];
const v1 = {};
const v4 = [1337,1337];
const v5 = [1337,v4,-1777286928];
const v8 = {};
const v9 = [v8];
let v12 = 0;
const v13 = v12 + 1;
v12 = v13;
v1.__proto__ = v5;
const v14 = Object.getOwnPropertyNames(v5,v9,8);
}
%NeverOptimizeFunction(main);
main();
