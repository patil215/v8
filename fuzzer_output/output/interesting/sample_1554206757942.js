function main() {
const v3 = [13.37,13.37];
function v4(v5,v6,v7,v8) {
}
function v9(v10,v11,v12,v13) {
    const v14 = v12[1337];
}
const v18 = {preventExtension:v9,get:v4,deleteProperty:v9,has:v9,defineProperty:v9,getOwnPropertyDescriptor:v4,call:v4,set:v9,ownKeys:v9,setPrototypeOf:v4,construct:v9};
const v20 = new Proxy(v3,v18);
const v22 = {length:v9};
const v24 = Reflect.defineProperty(v20,1337,v22);
let v27 = 0;
const v28 = v27 + 1;
v27 = v28;
const v29 = v9(0,this,v20,1337,v18,4);
}
%NeverOptimizeFunction(main);
main();
