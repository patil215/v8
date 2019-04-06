function main() {
for (let v3 = 0; v3 < 100; v3++) {
    function v4(v5,v6,v7,v8) {
        const v13 = [13.37];
        const v15 = [1337,1337,1337];
        const v16 = [v15,13.37,"number",Set];
        const v17 = {getUint8:v16,create:16,getPrototypeOf:"number",getOwnPropertyDescriptor:16,setInt16:v13,toStringTag:v15,filter:13.37};
        let v18 = v17;
        function v20(v21,v22,v23,v24,v25) {
        }
        for (let v29 = 0; v29 < 100; v29++) {
            const v30 = new v20(v15,v29,13.37,v18);
        }
    }
    const v36 = [1337];
    const v37 = v4(10,Function,1337,v36,Function);
}
}
%NeverOptimizeFunction(main);
main();
