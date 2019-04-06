function main() {
const v4 = new Uint32Array(56871);
const v6 = {deleteProperty:"reject",setPrototypeOf:Reflect,isExtensible:"reject",ownKeys:v4,apply:Reflect,has:-3508228936};
const v8 = new Proxy(v4,v6);
const v14 = [1337];
let v19 = undefined;
v8[36344] = v14;
}
%NeverOptimizeFunction(main);
main();
