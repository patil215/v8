function main() {
let v4 = 0;
v4 = 10;
let v15 = 0;
v15 = 10;
const v16 = Function.__lookupGetter__;
function v17(v18,v19,v20) {
}
const v21 = typeof 13.37;
const v23 = v21 === "boolean";
const v25 = {get:v17,set:v17};
const v27 = Object.defineProperty(v16,"toLocaleString",v25);
}
%NeverOptimizeFunction(main);
main();
