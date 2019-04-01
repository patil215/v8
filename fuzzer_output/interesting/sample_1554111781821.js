function main() {
const v2 = [1337];
function v3(v4,v5,v6,v7) {
    let v10 = 0;
    const v11 = v10 + 1;
    v10 = v11;
    function v12(v13,v14,v15) {
    }
    const v16 = {deleteProperty:v12,construct:v12,get:v3,ownKeys:v3,preventExtension:v12,apply:v12};
    const v18 = new Proxy(v2,v16);
    v18[1337] = v5;
    let v27 = 0;
    const v28 = v27 + 1;
    v27 = v28;
    let v31 = 0;
    const v32 = v31 + 1;
    v31 = v32;
}
const v38 = [1337];
const v42 = v3(10,Function,1337,v38,Function);
}
%NeverOptimizeFunction(main);
main();
