function main() {
const v1 = [1337,1337,1337];
function v2(v3,v4,v5,v6) {
}
const v8 = [1337];
const v10 = {preventExtension:v2,setPrototypeOf:v2};
const v12 = new Proxy(v8,v10);
v12.length = 2;
const v14 = v12 | 1;
}
%NeverOptimizeFunction(main);
main();
