function main() {
const v1 = [13.37,13.37,13.37];
const v3 = [];
const v4 = {iterator:1337,bind:v1,reverse:v3};
function v5(v6,v7,v8,v9) {
    let v11 = v6;
    const v13 = [1337];
}
let v21 = "string";
const v22 = v21.split("string",-1);
function v23(v24,v25,v26,v27,v28) {
}
let v34 = 0;
const v35 = {setPrototypeOf:v5,set:v23,getPrototypeOf:v23,call:v5,deleteProperty:v23,isExtensible:v23};
const v37 = new Proxy(v4,v35);
const v38 = v34 + 1;
v34 = v38;
}
%NeverOptimizeFunction(main);
main();
