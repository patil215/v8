function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v9 = [1337];
    let v11 = undefined;
    const v13 = Function + 1;
    const v18 = [13.37];
    const v20 = [1337,1337,1337];
    const v21 = [v20,13.37,"number",Set];
    const v22 = {getUint8:v21,create:16,getPrototypeOf:"number",getOwnPropertyDescriptor:16,setInt16:v18,toStringTag:v20,filter:13.37};
    let v23 = v22;
    function v25(v26,v27,v28,v29,v30) {
        v11 = v13;
    }
    for (let v34 = 0; v34 < 100; v34++) {
        const v35 = new v25(v20,v34,13.37,v23);
    }
}
}
%NeverOptimizeFunction(main);
main();
