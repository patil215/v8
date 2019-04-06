function main() {
let v3 = 0;
const v4 = v3 + 1;
v3 = v4;
const v6 = [13.37,13.37,13.37];
const v8 = {deleteProperty:13.37,round:127,isInteger:13.37};
const v10 = {construct:-65536,has:1337,ownKeys:1337,deleteProperty:v6,setPrototypeOf:13.37,getPrototypeOf:v8};
function v12(v13,v14,v15,v16) {
    const v19 = new Uint8ClampedArray(32822);
    const v20 = v19[4];
    const v21 = typeof v20;
    const v23 = v21 === "undefined";
    let v26 = 0;
    const v27 = v26 + 1;
    v26 = v27;
    const v28 = v10[v20];
}
const v37 = [1337];
for (let v41 = 0; v41 < 100; v41++) {
    const v42 = v12(10,Function,1337,v37,Function);
}
}
%NeverOptimizeFunction(main);
main();
