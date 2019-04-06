function main() {
function v1(v2,v3,v4,v5) {
    const v8 = {max:Function,setPrototypeOf:10};
    const v10 = {max:Function,setPrototypeOf:13.37};
    const v12 = {ceil:v1};
    const v14 = Object.defineProperty(v8,"global",v12);
}
const v20 = [1337];
const v21 = v1(10,Function,1337,v20,Function);
}
%NeverOptimizeFunction(main);
main();
