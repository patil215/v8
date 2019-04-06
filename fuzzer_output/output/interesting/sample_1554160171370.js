function main() {
function v4(v5,v6,v7,v8) {
    const v10 = [13.37,13.37];
    function v11(v12,v13,v14,v15) {
    }
    function v16(v17,v18,v19,v20) {
    }
    const v21 = {preventExtension:v16,get:v11,deleteProperty:1337,has:v16,defineProperty:v16,getOwnPropertyDescriptor:v11,call:v11,set:v16,ownKeys:v16,setPrototypeOf:v11,construct:v16};
    const v23 = new Proxy(v10,v21);
    const v24 = {set:v16};
    const v26 = Object.is(v23,v16,v24);
    return v26;
}
const v32 = [1000];
for (let v36 = 0; v36 < 100; v36++) {
    const v37 = v4(10,Function,1337,v32,Function);
}
}
%NeverOptimizeFunction(main);
main();
