function main() {
const v2 = [13.37,13.37];
const v4 = [v2,v2];
const v8 = [13.37,13.37];
const v10 = {call:13.37,apply:v8,isExtensible:13.37,set:3457141139,deleteProperty:1337,has:13.37};
const v12 = new Proxy(BigUint64Array,v10);
const v13 = new v12(v10,v12,BigUint64Array);
let v15 = undefined;
const v16 = v13.propertyIsEnumerable(13.37,v13,1337,v4,Promise);
}
%NeverOptimizeFunction(main);
main();
