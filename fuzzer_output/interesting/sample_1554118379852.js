function main() {
const v8 = [13.37];
const v10 = [1337,1337,1337];
const v11 = [v10,13.37,"number",Set];
const v12 = {getUint8:v11,create:16,getPrototypeOf:"number",getOwnPropertyDescriptor:16,setInt16:v8,toStringTag:v10,filter:13.37};
const v13 = {ceil:1337,log1p:1337,c:v11};
function v18(v19,v20,v21,v22,v23) {
    const v25 = [1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308];
    let v28 = 0;
    let v31 = 0;
    v25.then = "ignoreCase";
    const v32 = v31 + 1;
    v31 = v32;
    v28 = 10;
    v25[v28] = v21;
}
const v35 = v18("undefined",1337,13.37,Math);
const v36 = v18(100,v12,v13,0,Math);
}
%NeverOptimizeFunction(main);
main();
