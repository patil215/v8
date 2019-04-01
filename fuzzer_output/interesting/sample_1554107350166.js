function main() {
const v2 = {max:Function,setPrototypeOf:10};
function v6(v7,v8,v9,v10) {
}
const v11 = {max:Function,setPrototypeOf:10};
const v16 = {set:v6};
const v18 = Object.defineProperty(v11,"getOwnPropertyDescriptor",v16);
let v20 = "undefined";
let v25 = 0;
v25 = 10;
const v29 = Symbol.toPrimitive;
v2[v29] = Symbol;
}
%NeverOptimizeFunction(main);
main();
