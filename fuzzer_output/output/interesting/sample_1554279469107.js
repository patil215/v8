function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v9(v10,v11,v12,v13) {
}
const v14 = {preventExtension:v9,get:v2,deleteProperty:v9,has:v9,defineProperty:v9,getOwnPropertyDescriptor:v2,call:v2,set:v9,ownKeys:v9,setPrototypeOf:v2,construct:v9};
const v16 = new Proxy(v1,v14);
for (let v23 = 0; v23 < 1337; v23 = v23 + 3) {
    const v24 = 3 - v23;
    const v25 = [v24];
    let v26 = v25;
    const v30 = [1337,1337,1337];
    const v31 = [v30,v26,"number",this];
}
for (let v35 = 0; v35 < 1337; v35 = v35 + 3) {
    const v36 = 3 - v35;
    v16[v36] = 0;
    const v37 = [v36];
    let v38 = v37;
    const v42 = [1337,1337,1337];
    const v43 = [v42,v38,"number",this];
}
}
%NeverOptimizeFunction(main);
main();
