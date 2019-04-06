function main() {
let v1 = "undefined";
const v4 = {max:BigInt,setPrototypeOf:10};
const v7 = Symbol.toStringTag;
v4[v7] = 1337;
}
%NeverOptimizeFunction(main);
main();
