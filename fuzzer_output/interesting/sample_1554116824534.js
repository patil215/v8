function main() {
function v1(v2,v3,v4,v5) {
    const v6 = {getOwnPropertyDescriptor:v1,call:v1,defineProperty:v1,isExtensible:v1,preventExtension:v1,deleteProperty:v1,set:v1,ownKeys:v1,getPrototypeOf:v1};
    const v8 = new Proxy(Object,v6);
    Function.BYTES_PER_ELEMENT = v8;
}
const v16 = [1337];
for (let v20 = 0; v20 < 100; v20++) {
    const v21 = v1(10,Function,1337,v16,Function);
}
}
%NeverOptimizeFunction(main);
main();
