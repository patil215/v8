function main() {
function v1(v2,v3,v4,v5) {
    const v7 = [13.37,13.37];
    function v8(v9,v10,v11,v12) {
    }
    function v13(v14,v15,v16,v17) {
        const v18 = v5 | v13;
    }
    const v19 = {preventExtension:v13,get:v8,deleteProperty:1337,has:v13,defineProperty:v13,getOwnPropertyDescriptor:v8,call:v8,set:v13,ownKeys:v13,setPrototypeOf:v8,construct:v13};
    const v21 = new Proxy(v7,v19);
    const v22 = {set:v13};
    const v24 = Object.is(v21,v13,v22);
    return v24;
}
const v30 = [1000];
for (let v34 = 0; v34 < 100; v34++) {
    const v35 = v1(10,Function,1337,v30,Function);
}
}
%NeverOptimizeFunction(main);
main();
