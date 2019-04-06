function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337];
const v7 = [v6,13.37,"number",Set];
const v8 = {getUint8:v7,create:16,getPrototypeOf:"number",getOwnPropertyDescriptor:16,setInt16:v4,toStringTag:v6,filter:13.37};
let v9 = v8;
const v12 = [1337];
function v13(v14,v15,v16,v17,v18) {
    let v21 = 6;
    return v12;
}
for (let v25 = 0; v25 < 100; v25++) {
    const v26 = new v13(v6,v25,13.37,v9);
}
}
%NeverOptimizeFunction(main);
main();
