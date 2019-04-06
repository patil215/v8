function main() {
const v0 = [];
const v1 = [v0];
const v2 = [v1];
const v3 = {};
const v5 = new WeakMap(v2,v3);
v5.__proto__ = v2;
}
%NeverOptimizeFunction(main);
main();
