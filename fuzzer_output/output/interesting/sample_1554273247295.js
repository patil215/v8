function main() {
for (let v5 = 0; v5 < 100; v5++) {
    const v10 = [13.37,"undefined",13.37];
    const v12 = [1337,1337,1337];
    const v13 = ["undefined",v12,1337,WeakMap];
    const v14 = {getUint8:v13,fill:v10,input:-4294967295,test:WeakMap,getInt8:-4294967295,pow:v10,some:"undefined",min:"undefined"};
    const v17 = {map:undefined,toPrimitive:13.37};
    function v18(v19,v20,v21,v22) {
        function v24(v25,v26) {
            const v29 = ["St3xmIJllu","St3xmIJllu",-1000.0];
            const v33 = new Proxy(v29,Reflect,1337);
            return v24;
        }
        const v35 = [13.37,Object];
        const v36 = v24(v24,v35,13.37);
        const v37 = [Reflect];
        function v38(v39,v40,v41,v42) {
            const v44 = {set:v24,get:v38};
            const v46 = Object.defineProperty(v36,"BYTES_PER_ELEMENT",v44);
            v46["BYTES_PER_ELEMENT"] = "BYTES_PER_ELEMENT";
        }
        const v51 = [1337];
        const v52 = v38(-2147483649,Function,1337,v51,Function);
        const v53 = v38(1337,v37);
        for (let v57 = 0; v57 < 100; v57++) {
            function v58(v59,v60,v61,v62,v63) {
            }
        }
    }
    const v64 = [Map];
    const v65 = v64.map(v18,v14,v17);
}
}
%NeverOptimizeFunction(main);
main();
