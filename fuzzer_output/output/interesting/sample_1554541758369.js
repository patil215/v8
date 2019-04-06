function main() {
const v1 = {};
const v4 = Symbol.split;
v1[v4] = Symbol;
const v6 = [-1];
const v7 = [v6];
const v8 = {};
const v10 = new BigInt64Array(v7,v8);
const v11 = {...v1,...ArrayBuffer};
}
%NeverOptimizeFunction(main);
main();
