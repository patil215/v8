function main() {
const v2 = [1337,1337];
const v3 = {setUint32:v2,parseInt:13.37,getUint32:13.37};
const v5 = [13.37];
let v10 = undefined;
const v15 = [990341.4142203603,990341.4142203603];
const v17 = [gc,"flat",v15];
const v18 = {toLocaleString:v17,sin:-3994579876,isView:-3994579876};
function v19(v20,v21,v22,v23) {
    let v25 = "undefined";
    for (const v26 in v25) {
        const v28 = [1337];
        const v30 = Symbol.toStringTag;
        v23[v30] = v28;
        const v32 = {get:v19};
        const v34 = Object.defineProperty(v23,"endsWith",v32);
    }
}
const v40 = [127];
const v41 = v19(10,Function,1337,v40,Function);
const v42 = v19(990341.4142203603,v18,1337,v17);
}
%NeverOptimizeFunction(main);
main();
