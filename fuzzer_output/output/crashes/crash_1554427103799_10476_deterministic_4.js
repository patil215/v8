function main() {
const v1 = [13.37,13.37];
const v3 = [13.37,13.37];
function v4(v5,v6,v7,v8) {
}
function v10(v11,v12,v13,v14) {
    const v16 = new Int16Array();
    const v17 = v16.lastIndexOf();
    const v18 = v1 & v17;
}
const v19 = {preventExtension:v10,get:v4,deleteProperty:v10,has:v10,defineProperty:v10,getOwnPropertyDescriptor:v4,call:v4,set:v10,ownKeys:v10,setPrototypeOf:v4,construct:v10};
const v21 = new Proxy(v3,v19);
for (let v25 = 0; v25 < 1337; v25 = v25 + 3) {
    const v26 = 3 - v25;
    v21[v26] = 0;
}
}
%NeverOptimizeFunction(main);
main();
