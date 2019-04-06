function main() {
const v1 = [1337];
const v4 = new Float64Array(1616);
for (let v7 = 0; v7 < v1; v7++) {
    const v9 = [13.37,13.37];
    function v10(v11,v12,v13,v14) {
    }
    function v15(v16,v17,v18,v19) {
    }
    const v20 = {preventExtension:v15,get:v10,deleteProperty:v15,has:v15,defineProperty:v15,getOwnPropertyDescriptor:v10,call:v10,set:v15,ownKeys:v15,setPrototypeOf:v10,construct:v15};
    const v22 = new Proxy(v9,v20);
    const v23 = v4.lastIndexOf(v4,1,v7);
}
}
%NeverOptimizeFunction(main);
main();
