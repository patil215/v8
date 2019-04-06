function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [13.37,v3,Boolean];
const v7 = {subarray:13.37};
const v8 = {match:v3,trimEnd:1337,join:-962391062,concat:v6,min:v5,setUint32:v7};
const v10 = [13.37,13.37];
function v11(v12,v13,v14,v15) {
}
function v16(v17,v18,v19,v20) {
    const v21 = v20 == v8;
    for (let v25 = 0; v25 < 100; v25++) {
        const v26 = v11(v10,v16,v18);
    }
}
const v27 = {preventExtension:v16,get:v11,deleteProperty:v16,has:v16,defineProperty:v16,getOwnPropertyDescriptor:v11,call:v11,set:v16,ownKeys:v16,setPrototypeOf:v11,construct:v16};
const v29 = new Proxy(v10,v27);
const v31 = {set:v16};
const v33 = Reflect.defineProperty(v29,1,v31);
let v36 = 0;
const v37 = v36 + 1;
v36 = v37;
delete v29[-673882850];
}
%NeverOptimizeFunction(main);
main();
