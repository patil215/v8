function main() {
function v2(v3,v4,v5,v6) {
}
const v7 = {get:v2,set:v2,apply:v2,defineProperty:v2,has:v2,setPrototypeOf:v2,isExtensible:v2,getPrototypeOf:v2,preventExtension:v2,call:v2};
const v9 = new Proxy(v2,v7);
let v11 = 0;
const v15 = v11 + 1;
v11 = v15;
const v17 = [1337,1337,1337];
const v18 = [13.37,v17];
const v21 = new v9(v18,5);
const v24 = [13.37];
const v25 = [v24,-72232.04263445828,"number",Set];
}
%NeverOptimizeFunction(main);
main();
