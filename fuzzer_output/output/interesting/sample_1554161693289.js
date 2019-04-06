function main() {
const v4 = [13.37,"undefined",13.37];
const v6 = [1337,1337,1337];
const v7 = ["undefined",v6,1337,WeakMap];
const v8 = {getUint8:v7,fill:v4,input:-4294967295,test:WeakMap,getInt8:-4294967295,pow:v4,some:"undefined",min:"undefined"};
const v9 = {};
function v10(v11,v12,v13,v14) {
    const v16 = [1337];
    for (let v20 = 0; v20 < 100; v20++) {
        const v23 = {map:undefined,toPrimitive:13.37};
        let v27 = 0;
        const v34 = v27 + 1;
        v27 = v34;
        function v35(v36,v37,v38,v39) {
            return 1;
        }
        const v40 = [0];
        const v41 = v40.map(v35,v8,v23);
        const v42 = v41[268435456];
    }
}
const v47 = [v9];
const v48 = v10(10,Function,1337,v47,Function);
}
%NeverOptimizeFunction(main);
main();
