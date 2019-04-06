function main() {
let v4 = -9007199254740993;
const v6 = [-1.0,v4,-1.0,-1.0];
const v8 = Function.ceil;
let v10 = "undefined";
v6[5] = -9007199254740993;
const v12 = new Int8Array(v6,v10,v8);
}
%NeverOptimizeFunction(main);
main();
