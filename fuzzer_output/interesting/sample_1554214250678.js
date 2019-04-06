function main() {
const v1 = [2.220446049250313e-16,2.220446049250313e-16];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
}
const v16 = [13.37];
const v17 = [v16,-72232.04263445828,"number",Set];
const v18 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v20 = new Set(v1,v18);
const v21 = {set:v7};
const v23 = Object.defineProperties(v20,Set,v21);
function v24(v25,v26,v27) {
    Set.NaN = v25;
}
let v30 = 0;
while (v30 < 65537) {
    const v31 = v21 <= 65537;
    let v32 = v31;
    const v33 = v24(v23,v32,v32);
    const v34 = v30 + 1;
    v30 = v34;
}
}
%NeverOptimizeFunction(main);
main();
