function main() {
let v1 = "undefined";
const v5 = [1337];
const v6 = [v5];
const v8 = [1337];
const v13 = [1337];
let v14 = "undefined";
const v15 = Function.__lookupGetter__;
function v16(v17,v18,v19) {
    const v20 = {acosh:v15,exec:v17,EPSILON:v13,sin:v17,keyFor:v19,reverse:v15};
}
const v22 = [1337];
const v24 = v16(13.37,"undefined",v1,v6,v22);
const v25 = v16(3,v8);
}
%NeverOptimizeFunction(main);
main();
