function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337];
function v6(v7,v8,v9,v10) {
    const v15 = {set:v6,defineProperty:v6,deleteProperty:v6,preventExtension:v6,getPrototypeOf:v6,isExtensible:v6,call:v6,construct:v6};
    const v17 = new Proxy(Object,v15);
    const v21 = v17[v7];
}
const v27 = [1337];
const v28 = v6(10,Function,1337,v27,Function);
const v29 = v6(Function,1337,v4,v2);
}
%NeverOptimizeFunction(main);
main();
