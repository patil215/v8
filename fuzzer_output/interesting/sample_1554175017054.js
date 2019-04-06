function main() {
const v4 = [13.37];
const v6 = [1337];
const v7 = [127,13.37,127,"farDM+J*zM"];
const v8 = {toFixed:v7,fromCodePoint:v6,global:v4,getUint8:Error,isNaN:"farDM+J*zM",exec:127,setFloat32:v7};
let v9 = 1337;
const v13 = [1337,1337,1337,1337];
const v14 = [v13,1,1337];
function v15(v16,v17,v18,v19) {
    const v22 = [13.37,13.37,13.37,13.37];
    for (let v26 = -4096; v26 < 100; v26++) {
        const v27 = 1 % v26;
        v9 = 13.37;
        const v30 = [13.37,13.37];
        function v31(v32,v33,v34,v35) {
            delete v18[1];
            const v39 = 1 * v16;
            const v40 = {NEGATIVE_INFINITY:1,fromCodePoint:v17,includes:v7,split:v14,ceil:4.0,hasInstance:v14,indexOf:v34,PI:v8,__lookupGetter__:v34};
            return v26;
        }
        function v41(v42,v43,v44,v45) {
            return v30;
        }
        const v46 = {preventExtension:v41,get:v31,deleteProperty:v41,has:v41,defineProperty:v41,round:v31,call:v31,set:v41,ownKeys:v41,setPrototypeOf:v31,construct:v41};
        const v48 = new Proxy(v30,v46);
        const v49 = v27 + 1;
    }
    return v7;
}
const v50 = v15(1337,v14,"undefined");
const v51 = v15(v50,v15,1,v6,127,v50);
}
%NeverOptimizeFunction(main);
main();
