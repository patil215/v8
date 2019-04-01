function main() {
const v2 = [1337,1337];
const v3 = [1337,v2,-1777286928];
const v13 = [1337];
let v18 = undefined;
let v25 = 0;
const v26 = {};
const v27 = [v26];
const v28 = v25 + 1;
v25 = v28;
const v29 = Object.getOwnPropertyNames(v3,v27,8);
}
%NeverOptimizeFunction(main);
main();
