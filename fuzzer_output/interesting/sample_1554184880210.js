function main() {
const v3 = [13.37,13.37];
function v4(v5,v6,v7,v8) {
    return 1337;
}
function v9(v10,v11,v12,v13) {
    return "Si9XS3TUcB";
}
const v14 = {preventExtension:v9,get:v4,deleteProperty:v9,has:v9,defineProperty:v9,getOwnPropertyDescriptor:v4,call:v4,set:v9,ownKeys:v9,setPrototypeOf:v4,construct:v9};
const v16 = new Proxy(v3,v14);
with (v16) {
    const v18 = getFloat64.__proto__;
}
}
%NeverOptimizeFunction(main);
main();
