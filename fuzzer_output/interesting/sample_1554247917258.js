function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    function v19(v20,v21,v22,v23) {
    }
    const v25 = {set:v19,get:v19};
    const v27 = Object.seal(this,328487167,v25);
    const v31 = Object.freeze(this,1513507877);
    const v33 = [1337,1337,1337];
    const v34 = [v33,13.37,"number",this];
}
const v35 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v37 = new Proxy(v1,v35);
const v39 = {length:v7};
const v41 = Reflect.defineProperty(v37,1337,v39);
}
%NeverOptimizeFunction(main);
main();
