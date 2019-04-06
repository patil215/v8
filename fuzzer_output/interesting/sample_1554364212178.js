function main() {
const v1 = [1337,1337,1337,1337,1337];
function v2(v3,v4,v5,v6) {
    for (let v10 = 0; v10 < 100; v10++) {
        const v12 = [127];
        const v13 = [v12];
        const v14 = {};
        const v16 = new BigUint64Array(v13,v14);
        const v19 = {map:13.37,toPrimitive:13.37};
        for (let v23 = 0; v23 < 100; v23++) {
            const v25 = [13.37,13.37];
            function v26(v27,v28,v29,v30) {
            }
            function v31(v32,v33,v34,v35) {
            }
            const v36 = {preventExtension:v31,get:v26,deleteProperty:v31,has:v31,defineProperty:v31,getOwnPropertyDescriptor:v26,call:v26,set:v31,ownKeys:v31,setPrototypeOf:v26,construct:v31};
            const v38 = new Proxy(v25,v36);
            const v40 = {length:v31};
            const v42 = Reflect.defineProperty(v38,2998604110,v40);
            function v43(v44,v45,v46,v47) {
                const v49 = Symbol.toStringTag;
                const v50 = v16[v49];
                return v23;
            }
            const v52 = [1337];
            const v53 = v52.map(v43,"boolean",v19);
        }
    }
}
const v58 = [v1];
const v59 = v2(10,Function,1337,v58,arguments);
}
%NeverOptimizeFunction(main);
main();
