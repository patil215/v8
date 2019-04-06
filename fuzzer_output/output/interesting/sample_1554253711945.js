function main() {
const v1 = {};
const v3 = [13.37,13.37,13.37];
const v5 = [1337];
function v6(v7,v8,v9,v10) {
    const v12 = {set:v6,defineProperty:v6,deleteProperty:v6,preventExtension:v6,getPrototypeOf:v6,isExtensible:v6,call:v6,construct:v6};
    const v14 = new Proxy(Object,v12);
    const v15 = v14[v7];
    return 13.37;
}
const v21 = [1337];
const v22 = v6(10,Function,1337,v21,Function);
const v23 = v6(v1,v3,v1);
const v24 = v6(v23,v23,v5,1337);
}
%NeverOptimizeFunction(main);
main();
