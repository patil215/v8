function main() {
for (let v4 = 0; v4 < 100; v4++) {
    const v9 = [13.37,"undefined",13.37];
    const v11 = [1337,1337,1337];
    const v12 = ["undefined",v11,1337,WeakMap];
    const v13 = {getUint8:v12,fill:v9,input:-4294967295,test:WeakMap,getInt8:-4294967295,pow:v9,some:"undefined",min:"undefined"};
    const v16 = {map:undefined,toPrimitive:13.37};
    function v17(v18,v19,v20,v21) {
        function v23(v24,v25) {
            return v23;
        }
        const v27 = [13.37,Object];
        const v28 = v23(v23,v27,13.37);
        const v30 = [13.37];
        function v31(v32,v33,v34,v35) {
            const v37 = {set:v23,get:v31};
            const v39 = Object.defineProperty(v28,"BYTES_PER_ELEMENT",v37);
            v39["BYTES_PER_ELEMENT"] = "BYTES_PER_ELEMENT";
        }
        const v45 = [1337];
        const v46 = v31(-2147483649,Function,1337,v45,Function);
        const v47 = v31(1337,v30);
        for (let v51 = 0; v51 < 100; v51++) {
            function v52(v53,v54,v55,v56,v57) {
            }
        }
    }
    const v61 = [Map];
    const v62 = v61.map(v17,v13,v16);
}
}
%NeverOptimizeFunction(main);
main();
