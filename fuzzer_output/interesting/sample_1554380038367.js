function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v8(v9,v10,v11,v12) {
    const v17 = 1337 < 13.37;
    let v18 = v17;
    const v19 = String.fromCodePoint(1337,1337,v18,1337,v18);
}
const v20 = {preventExtension:v8,get:v2,deleteProperty:v8,has:v8,defineProperty:v8,getOwnPropertyDescriptor:v2,call:v2,set:v8,ownKeys:v8,setPrototypeOf:v2,construct:v8};
const v22 = new Proxy(v1,v20);
for (let v29 = 0; v29 < 1337; v29 = v29 + 3) {
    const v30 = 3 - v29;
    v22[v30] = 0;
}
}
%NeverOptimizeFunction(main);
main();
