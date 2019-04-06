function main() {
const v4 = [13.37,"undefined",13.37];
const v6 = [1337,1337,1337];
const v7 = ["undefined",v6,1337,WeakMap];
const v8 = {getUint8:v7,fill:v4,input:-4294967295,test:WeakMap,getInt8:-4294967295,pow:v4,some:"undefined",min:"undefined"};
const v9 = {};
function v10(v11,v12,v13,v14) {
    const v16 = [1337];
    for (const v17 of v16) {
        for (let v21 = 0; v21 < 100; v21++) {
            const v24 = {map:undefined,toPrimitive:13.37};
            function v26(v27,v28,v29,v30) {
            }
            const v31 = [0];
            const v32 = v31.map(v26,v8,v24);
        }
    }
}
const v37 = [v9];
const v38 = v10(10,Function,1337,v37,Function);
const v39 = v10(v10,v6);
}
%NeverOptimizeFunction(main);
main();
