function main() {
const v4 = [1337,1337,1337,100];
const v5 = [v4,1,1337];
let v7 = undefined;
for (let v11 = 0; v11 < 100; v11++) {
    const v16 = [13.37,"undefined",13.37];
    const v18 = [1337,1337,1337];
    const v19 = ["undefined",v18,1337,WeakMap];
    const v20 = {getUint8:v19,fill:v16,input:-4294967295,test:WeakMap,getInt8:-4294967295,pow:v16,some:"undefined",min:"undefined"};
    const v21 = {};
    const v26 = [v21];
    let v28 = undefined;
    const v31 = {map:undefined,toPrimitive:13.37};
    function v33(v34,v35,v36,v37) {
        let v39 = undefined;
        let v41 = -1;
        function v42(v43,v44,v45,v46) {
            const v47 = v45 / v41;
            v39 = v47;
        }
        const v53 = [1337];
        for (let v57 = 0; v57 < 100; v57++) {
            const v58 = v42(10,Function,1337,v53,Function);
        }
    }
    const v59 = [0];
    const v60 = v59.map(v33,v20,v31);
}
}
%NeverOptimizeFunction(main);
main();
