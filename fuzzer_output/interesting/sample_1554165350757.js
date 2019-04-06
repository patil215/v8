function main() {
const v1 = [13.37,13.37];
const v3 = Symbol.unscopables;
const v4 = v1[v3];
let v6 = 0;
const v8 = [-1000000.0,-1000000.0,-1000000.0];
const v12 = [v8];
const v14 = [];
v14[2] = v6;
const v15 = v14.includes(0,v12,1337,-4294967295);
}
%NeverOptimizeFunction(main);
main();
