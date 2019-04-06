function main() {
const v2 = [1337,1337,1337];
let v3 = 13.37;
const v5 = [13.37,13.37];
function v6(v7,v8,v9,v10) {
}
function v11(v12,v13,v14,v15) {
}
const v16 = {preventExtension:v11,get:v6,deleteProperty:v11,has:v11,defineProperty:v11,getOwnPropertyDescriptor:v6,call:v6,set:v11,ownKeys:v11,setPrototypeOf:v6,construct:v11};
const v18 = new Proxy(v5,v16);
with (v18) {
    multiline = v3;
}
const v19 = [v2];
}
%NeverOptimizeFunction(main);
main();
