function main() {
let v1 = 0;
const v3 = [-1.0,v1,-1.0,-1.0];
const v5 = Function.ceil;
let v7 = "undefined";
v3[5] = 0;
const v9 = new Int8Array(v3,v7,v5);
}
%NeverOptimizeFunction(main);
main();
