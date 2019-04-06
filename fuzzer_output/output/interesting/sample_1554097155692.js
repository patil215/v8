function main() {
let v2 = "undefined";
const v6 = [1337];
const v7 = [v6];
const v9 = [1337];
const v13 = [1337];
const v14 = Function.__lookupGetter__;
function v15(v16,v17,v18) {
    const v19 = {defineProperties:v14,exec:v16,EPSILON:v13,sin:v16,keyFor:v18,reverse:v14};
}
const v21 = [1337];
const v22 = v15(13.37,"undefined",v2,v7,v21);
const v23 = v15(3,v9);
const v24 = v15("undefined",13.37);
}
%NeverOptimizeFunction(main);
main();
