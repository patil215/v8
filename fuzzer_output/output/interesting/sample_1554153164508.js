function main() {
const v4 = [-0.0,-0.0,-0.0];
const v6 = [1337,1337,-4294967295];
const v7 = ["undefined",v6,1337,WeakMap];
const v8 = {getUint8:v7,fill:v4,input:-4294967295,test:WeakMap,getInt8:-4294967295,pow:v4,some:"undefined",min:"undefined"};
const v11 = {map:13.37,toPrimitive:13.37};
function v12(v13,v14,v15,v16) {
    const v17 = "boolean" % v13;
    function v18(v19,v20,v21) {
        v16.valueOf = v12;
    }
    function v22(v23,v24,v25,v26) {
        return v11;
    }
    const v28 = [1337];
    for (let v32 = 0; v32 < 100; v32++) {
    }
    const v34 = [Function];
    let v37 = 0;
    while (v37 < 5) {
        const v38 = v28.map(v22,"boolean",v11);
        const v39 = v37 + 1;
        v37 = v39;
    }
    const v40 = v22(5,1337);
}
const v46 = [1337];
for (let v50 = 0; v50 < 100; v50++) {
    const v51 = v12(5,Function,1337,v46,Function);
}
const v52 = typeof v8;
const v54 = v52 === "number";
}
%NeverOptimizeFunction(main);
main();
