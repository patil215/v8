function main() {
for (let v4 = 0; v4 < 100; v4++) {
    const v9 = [13.37,"undefined",13.37];
    const v11 = [1337,1337,1337];
    const v12 = ["undefined",v11,1337,WeakMap];
    const v13 = {getUint8:v12,fill:v9,input:-4294967295,test:WeakMap,getInt8:-4294967295,pow:v9,some:"undefined",min:"undefined"};
    const v16 = {map:undefined,toPrimitive:13.37};
    function v17(v18,v19,v20,v21) {
        function v23(v24,v25) {
            const v28 = new Int8Array(42208);
            return v23;
        }
        const v30 = [13.37,Object];
        const v31 = v23(v23,v30,13.37);
        const v33 = [13.37];
        function v34(v35,v36,v37,v38) {
            const v40 = {set:v23,get:v34};
            const v42 = Object.defineProperty(v31,"BYTES_PER_ELEMENT",v40);
            v42["BYTES_PER_ELEMENT"] = "BYTES_PER_ELEMENT";
        }
        const v48 = [1337];
        const v49 = v34(-2147483649,Function,1337,v48,Function);
        const v50 = v34(1337,v33);
        for (let v54 = 0; v54 < 100; v54++) {
            function v55(v56,v57,v58,v59,v60) {
            }
        }
    }
    const v61 = [Map];
    const v62 = v61.map(v17,v13,v16);
}
}
%NeverOptimizeFunction(main);
main();
