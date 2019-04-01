function main() {
function v0(v1,v2,v3,v4) {
    const v9 = [13.37,13.37];
    function v10(v11,v12,v13,v14) {
    }
    function v15(v16,v17,v18,v19) {
    }
    const v20 = {preventExtension:v15,get:v10,deleteProperty:v15,has:v15,defineProperty:v15,getOwnPropertyDescriptor:v10,call:v10,set:v15,ownKeys:v15,setPrototypeOf:v10,construct:v15};
    const v22 = new Proxy(v9,v20);
    const v24 = {length:v15};
    const v26 = Reflect.get(v22,-1289934361,v24);
}
const v35 = [1337];
for (let v39 = 0; v39 < 100; v39++) {
    const v40 = v0(10,Function,1337,v35,gc);
}
}
%NeverOptimizeFunction(main);
main();
