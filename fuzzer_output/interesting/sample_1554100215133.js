function main() {
function v1(v2,v3,v4) {
}
const v6 = {set:v1,get:v1};
const v8 = Object.defineProperty(Function,127,v6);
const v11 = [1337];
const v12 = {exec:v11};
let v16 = 0;
Function.__proto__ = v12;
const v17 = v16 + 1;
v16 = v17;
for (const v20 in Function) {
}
}
%NeverOptimizeFunction(main);
main();
