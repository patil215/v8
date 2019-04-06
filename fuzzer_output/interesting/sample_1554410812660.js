function main() {
const v1 = [1337,1337,1337,1337,1337];
const v3 = [13.37,13.37];
function v4(v5,v6,v7,v8) {
}
function v9(v10,v11,v12,v13) {
    const v21 = [1337,1337,1337];
    const v22 = [v21,13.37,"number",this];
    const v26 = Object.keys(this,1513507877);
}
const v27 = {preventExtension:v9,get:v4,deleteProperty:v9,has:v9,defineProperty:v9,getOwnPropertyDescriptor:v4,call:v4,set:v9,ownKeys:v9,setPrototypeOf:v4,construct:v9};
const v29 = new Proxy(v3,v27);
const v31 = v9(v4,Proxy,Reflect,v29,v1);
}
%NeverOptimizeFunction(main);
main();
