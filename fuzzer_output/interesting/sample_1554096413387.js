function main() {
Function[1337] = "undefined";
function v5(v6,v7,v8) {
}
let v11 = 0;
const v13 = {set:v5,get:v5};
const v15 = Object.defineProperty(Function,127,v13);
const v16 = v11 + 1;
v11 = v16;
}
%NeverOptimizeFunction(main);
main();
