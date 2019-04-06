function main() {
const v1 = Promise.__defineGetter__;
const v2 = new Promise(v1,Promise);
const v4 = [851828232];
const v5 = [v4];
const v6 = {};
const v8 = new BigUint64Array(v5,v6);
}
%NeverOptimizeFunction(main);
main();
