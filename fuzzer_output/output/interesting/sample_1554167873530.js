function main() {
const v4 = [13.37,"undefined",13.37];
function v5(v6,v7) {
}
const v9 = [1337,1337,1337];
const v10 = ["undefined",v9,1337,WeakMap];
const v11 = {getUint8:v10,fill:v4,input:-4294967295,test:WeakMap,getInt8:-4294967295,pow:v4,some:"undefined",min:"undefined"};
const v12 = {};
function v13(v14,v15,v16,v17) {
    for (let v21 = 0; v21 < 100; v21++) {
        const v24 = {map:undefined,toPrimitive:13.37};
        function v26(v27,v28,v29,v30) {
            return 1;
        }
        const v31 = [0];
        const v32 = v31.map(v26,v11,v24);
        const v34 = {get:v5,set:v26};
        const v36 = Object.defineProperty(v32,"pow",v34);
        const v37 = v32[268435456];
    }
}
const v42 = [v12];
const v43 = v13(10,Function,1337,v42,Function);
}
%NeverOptimizeFunction(main);
main();
