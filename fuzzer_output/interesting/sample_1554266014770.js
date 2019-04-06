function main() {
function v0(v1,v2,v3) {
    const v5 = [13.37,13.37];
    function v6(v7,v8,v9,v10) {
    }
    function v11(v12,v13,v14,v15) {
    }
    const v16 = {preventExtension:v11,get:v6,deleteProperty:v11,has:v11,defineProperty:v11,getOwnPropertyDescriptor:v6,call:v6,set:v11,ownKeys:v11,setPrototypeOf:v6,construct:v11};
    const v18 = Proxy(v5,v16);
}
const v23 = [13.37,13.37,13.37,13.37];
function v26(v27,v28,v29,v30) {
}
const v34 = {get:v26,set:v26};
const v36 = Object.preventExtensions(v23,"asin",v34);
const v37 = new Proxy(v23,Reflect,1337);
v37[1144161264] = ArrayBuffer;
}
%NeverOptimizeFunction(main);
main();
