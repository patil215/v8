function main() {
const v2 = [13.37,13.37];
function v3(v4,v5,v6,v7) {
}
function v8(v9,v10,v11,v12) {
    function v14(v15,v16,v17,v18) {
        let v20 = v8;
        const v21 = new Promise(v20,v15,13.37,v16);
        return v11;
    }
    const v23 = {construct:v14,defineProperty:v14,get:v14,set:-3835336076,apply:v14,call:v14,ownKeys:v14,preventExtension:v14};
    const v25 = new Proxy(Function,v23);
    const v27 = {set:v14};
    const v29 = Object.defineProperty(v25,"indexOf",v27);
}
const v30 = {preventExtension:v8,get:v3,deleteProperty:v8,has:v8,defineProperty:v8,getOwnPropertyDescriptor:v3,call:v3,set:v8,ownKeys:v8,setPrototypeOf:v3,construct:v8};
const v32 = new Proxy(v2,v30);
const v34 = {length:v8};
const v36 = Reflect.defineProperty(v32,1337,v34);
}
%NeverOptimizeFunction(main);
main();
