function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337];
const v5 = {all:String,log10:String,ownKeys:v2,max:v4};
const v7 = [13.37,13.37];
function v8(v9,v10,v11,v12) {
}
function v13(v14,v15,v16,v17) {
}
const v18 = {preventExtension:v13,get:v8,deleteProperty:v13,has:v13,defineProperty:v13,getOwnPropertyDescriptor:v8,call:v8,set:v13,ownKeys:v13,setPrototypeOf:v8,construct:v13};
const v20 = new Proxy(v7,v18);
const v22 = {length:v13};
const v24 = Reflect.get(v20,-1289934361,v22);
const v29 = [1337,1337,1337];
const v30 = [v29,13.37,"number",Set];
const v32 = "undefined" || v30;
let v36 = 13.37;
let v38 = "undefined";
const v39 = 13.37 * v32;
let v51 = "undefined";
let v54 = 0;
let v56 = "undefined";
let v62 = 0;
}
%NeverOptimizeFunction(main);
main();
