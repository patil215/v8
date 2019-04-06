function main() {
const v2 = {includes:"string"};
const v4 = [1337];
function v5(v6,v7,v8,v9) {
    const v11 = {set:v5,defineProperty:v5,deleteProperty:v5,preventExtension:v5,getPrototypeOf:v5,isExtensible:v5,call:v5,construct:v5};
    const v13 = new Proxy(Object,v11);
    const v14 = v13[v6];
}
const v20 = [1337];
const v21 = v5(10,Function,1337,v20,Function);
const v22 = v5(-2346310875,v4,v2);
}
%NeverOptimizeFunction(main);
main();
