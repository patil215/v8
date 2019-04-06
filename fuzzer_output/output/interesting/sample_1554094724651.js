function main() {
const v1 = [1337];
const v3 = [13.37];
const v6 = [1337];
const v8 = [13.37];
function v10(v11,v12,v13) {
    const v15 = {set:v10,get:v10};
    const v17 = Object.defineProperty(v13,"preventExtensions",v15);
}
const v18 = v10(v6,1337,v8);
function v19(v20,v21,v22) {
    const v24 = {set:v19,get:v19};
    const v26 = Object.defineProperty(v22,"preventExtensions",v24);
}
const v27 = v19(v1,1337,v3);
}
%NeverOptimizeFunction(main);
main();
