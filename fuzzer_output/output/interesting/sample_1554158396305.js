function main() {
function v1(v2,v3,v4,v5) {
    const v7 = [13.37,13.37];
    function v8(v9,v10,v11,v12) {
    }
    function v13(v14,v15,v16,v17) {
    }
    const v18 = {preventExtension:v13,get:v8,deleteProperty:1337,has:v13,defineProperty:v13,getOwnPropertyDescriptor:v8,call:v8,set:v13,ownKeys:v13,setPrototypeOf:v8,construct:v13};
    const v20 = new Proxy(v7,v18);
    const v21 = {set:v13};
    const v23 = Object.is(v20,v20,v21);
    return v23;
}
const v29 = [1000];
for (let v33 = 0; v33 < 100; v33++) {
    const v34 = v1(10,Function,1337,v29,Function);
}
}
%NeverOptimizeFunction(main);
main();
