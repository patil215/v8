function main() {
const v0 = {};
const v2 = [-1000000000.0];
const v4 = [1337,1337,1337,1337];
v4.__proto__ = v0;
const v5 = v2.concat(v2,v4);
}
%NeverOptimizeFunction(main);
main();
