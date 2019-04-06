function main() {
const v2 = [1337,1337];
const v3 = [1337,v2,-1777286928];
const v6 = [v2];
let v12 = 0;
const v19 = Object.isSealed(v3,v6,8);
}
%NeverOptimizeFunction(main);
main();
