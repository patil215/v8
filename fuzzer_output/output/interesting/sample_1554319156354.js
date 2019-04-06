function main() {
const v2 = [1337,1337,1337,1337];
const v3 = {leftContext:v2};
let v4 = Error;
const v6 = [13.37,13.37];
const v9 = [];
const v10 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v9,acosh:v9};
const v12 = typeof 13.37;
const v14 = v12 === "symbol";
const v15 = [13.37,13.37];
function v16(v17,v18,v19,v20) {
}
function v21(v22,v23,v24,v25) {
    const v26 = v3.__defineSetter__(v22,v4,"undefined",v24);
    const v27 = {push:v9,of:13.37,...v3};
}
const v29 = new Proxy(v15,v6);
const v30 = "undefined"[v10];
const v31 = v21(v29,v16,v21,v16,v30);
}
%NeverOptimizeFunction(main);
main();
