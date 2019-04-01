function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [13.37,13.37];
const v8 = {replace:1337,setFloat64:v6,hasInstance:v6,charAt:v7,max:Number,reverse:v7,getFloat64:1337,map:13.37};
const v9 = ~1337;
v8[v4] = v4;
const v10 = {setInt8:1337,cos:v4};
let v11 = "boolean";
function v12(v13,v14,v15,v16) {
    const v20 = [13.37,13.37,13.37,13.37];
    v14[9] = v6;
    let v23 = 0;
    do {
        const v24 = v23.constructor("boolean",v20);
        const v25 = v23 + 1;
        v23 = v25;
    } while (v23 < 7);
    const v27 = [13.37,13.37,13.37,13.37];
    for (const v28 of v27) {
        v20[8] = v28;
    }
    function v31(v32,v33,v34,v35,v36) {
        return v31;
    }
    for (let v40 = 0; v40 < 100; v40++) {
        const v41 = v31("undefined",1337,13.37,Math);
    }
    return 100;
}
const v47 = [1337];
for (let v54 = 0; v54 < 100; v54++) {
    const v55 = v12(10,Function,1337,v47,Function);
}
}
%NeverOptimizeFunction(main);
main();
