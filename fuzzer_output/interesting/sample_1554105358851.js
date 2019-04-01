function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
function v5(v6,v7,v8,v9) {
}
const v11 = [1337];
const v18 = {preventExtension:v5,setPrototypeOf:v5};
const v20 = new Proxy(v11,v18);
v20.length = 2;
}
%NeverOptimizeFunction(main);
main();
