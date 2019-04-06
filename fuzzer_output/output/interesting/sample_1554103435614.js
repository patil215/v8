function main() {
function v1(v2,v3,v4,v5) {
    const v7 = {defineProperty:v1,has:v1,getPrototypeOf:v1,get:v1,call:v1,isExtensible:v1,ownKeys:v1,set:v1,setPrototypeOf:v1,preventExtension:v1,getOwnPropertyDescriptor:v1,deleteProperty:v1,construct:v1};
    let v8 = "undefined";
    return 13.37;
}
const v14 = [1337];
for (let v18 = 0; v18 < 100; v18++) {
    const v19 = v1(10,Function,1337,v14,Function);
}
}
%NeverOptimizeFunction(main);
main();
