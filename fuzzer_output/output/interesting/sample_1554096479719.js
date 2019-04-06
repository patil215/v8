function main() {
function v1(v2,v3,v4) {
}
const v6 = {set:v1,get:v1};
const v8 = Object.defineProperty(Function,127,v6);
for (const v10 in Function) {
}
let v12 = "undefined";
let v16 = 0;
v16 = 10;
for (const v18 in Function) {
}
const v27 = [1337];
let v31 = 0;
v31 = 10;
let v33 = "undefined";
let v37 = 0;
v37 = 10;
}
%NeverOptimizeFunction(main);
main();
