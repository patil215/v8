function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = {hasOwnProperty:1337};
const v7 = {atan2:13.37,pow:v6,NEGATIVE_INFINITY:-3421226912,exp:-3421226912,for:1337,race:v5,flags:Function,hypot:v3};
const v9 = Object instanceof Object;
const v11 = [1337,1337,1337,1337];
let v14 = 0;
function v15(v16,v17,v18,v19) {
}
const v20 = {isExtensible:v15,deleteProperty:v15,has:v15,defineProperty:v15,set:v15,construct:v15,apply:v15};
const v22 = new Proxy(v11,v20);
for (const v23 in v22) {
}
}
%NeverOptimizeFunction(main);
main();
