function main() {
const v2 = [13.37,13.37];
const v3 = {getUint16:-3527358298};
const v9 = [1337];
let v14 = undefined;
const v16 = Symbol.toStringTag;
v2[v16] = v2;
let v18 = "undefined";
let v22 = 0;
const v23 = v22 + 1;
v22 = v23;
v2[2] = v3;
}
%NeverOptimizeFunction(main);
main();
