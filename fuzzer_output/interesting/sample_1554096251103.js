function main() {
let v5 = 0;
const v6 = v5 + 1;
v5 = v6;
function v8(v9,v10,v11) {
}
let v14 = 0;
const v16 = {set:v8,get:v8};
const v18 = Object.defineProperty(Function,127,v16);
const v19 = v14 + 1;
v14 = v19;
let v21 = "undefined";
let v25 = 0;
v25 = 10;
for (const v27 in Function) {
}
}
%NeverOptimizeFunction(main);
main();
