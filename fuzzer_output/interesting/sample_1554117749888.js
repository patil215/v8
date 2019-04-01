function main() {
let v3 = 0;
const v4 = v3 + 1;
const v5 = v4 != 1337;
let v6 = 0;
const v8 = [13.37,v6,13.37,13.37];
const v10 = Function.ceil;
let v12 = "undefined";
let v15 = 0;
v8[4096] = 0;
const v17 = new Int8Array(v8,v12,v10);
}
%NeverOptimizeFunction(main);
main();
