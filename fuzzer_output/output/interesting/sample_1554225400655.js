function main() {
function v2(v3,v4,v5,v6) {
    return 0;
}
const v7 = {get:v2,set:v2,apply:v2,defineProperty:v2,has:v2,setPrototypeOf:v2,isExtensible:v2,getPrototypeOf:v2,preventExtension:v2,call:v2};
const v9 = new Proxy(v2,v7);
const v12 = [1337,1337,1337];
const v13 = [13.37,v12];
const v14 = new v9(v13,5);
}
%NeverOptimizeFunction(main);
main();
