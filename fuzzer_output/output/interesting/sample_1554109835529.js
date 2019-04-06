function main() {
const v1 = Boolean.__proto__;
function v6(v7,v8,v9,v10,v11) {
    const v13 = typeof v1;
    const v14 = undefined + 1;
    const v19 = [13.37];
    const v21 = [1337,1337,1337];
    const v22 = [v21,13.37,"number",Set];
    const v23 = {getUint8:v22,create:16,getPrototypeOf:"number",getOwnPropertyDescriptor:16,setInt16:v19,toStringTag:v21,filter:13.37};
    let v24 = v23;
    function v26(v27,v28) {
        v24 = v27;
    }
    const v29 = v26(v19,5,Set,v26);
    return v14;
}
for (let v33 = 0; v33 < 100; v33++) {
    const v34 = v6("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
