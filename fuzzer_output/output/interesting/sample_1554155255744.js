function main() {
function v2(v3,v4,v5,v6) {
    const v8 = [13.37,13.37];
    function v9(v10,v11,v12,v13) {
    }
    function v14(v15,v16,v17,v18) {
    }
    const v19 = {preventExtension:v14,get:v9,deleteProperty:1337,has:v14,defineProperty:v14,getOwnPropertyDescriptor:v9,call:v9,set:v14,ownKeys:v14,setPrototypeOf:v9,construct:v14};
    const v21 = new Proxy(v8,v19);
    for (let v26 = 0; v26 < 100; v26++) {
    }
    const v27 = {set:v14};
    const v29 = Object.is(v21,-9007199254740993,v27);
    return v29;
}
const v37 = [13.37];
for (let v41 = 0; v41 < 100; v41++) {
    const v42 = v2(10,Function,1337,v37,Function);
}
}
%NeverOptimizeFunction(main);
main();
