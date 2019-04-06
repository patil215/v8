function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [1337];
    const v8 = [13.37,13.37];
    let v10 = 13.37;
    function v11(v12,v13,v14,v15) {
    }
    function v16(v17,v18,v19,v20) {
        return v10;
    }
    const v21 = {preventExtension:v16,get:v11,deleteProperty:v16,has:v16,defineProperty:v16,getOwnPropertyDescriptor:v11,call:v11,set:v16,ownKeys:v16,setPrototypeOf:v11,construct:v16};
    const v23 = new Proxy(v8,v21);
    const v25 = {set:v16};
    const v28 = {get:v11,set:v11};
    const v30 = Object.defineProperty(v25,"construct",v28);
    const v31 = Object.defineProperty(v23,-9007199254740993,v25);
}
const v37 = [1000];
for (let v41 = 0; v41 < 100; v41++) {
    const v42 = v0(10,Function,1337,v37,Function);
}
}
%NeverOptimizeFunction(main);
main();
