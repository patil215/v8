function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v2 = [];
const v5 = [13.37,13.37];
function v6(v7,v8,v9,v10) {
}
function v11(v12,v13,v14,v15) {
    let v19 = 1;
    const v20 = String.fromCodePoint(1,v19,v19,1,v19);
    for (let v23 = 0; v23 <= 100; v23++) {
        let v25 = undefined;
    }
}
const v26 = {preventExtension:v11,get:v6,deleteProperty:v11,has:v11,defineProperty:v11,getOwnPropertyDescriptor:v6,call:v6,set:v11,ownKeys:v11,setPrototypeOf:v6,construct:v11};
const v28 = new Proxy(v5,v26);
const v29 = v11(v28,v6,v11,v6,"3zWPoLio6+");
const v30 = v2 < v29;
const v31 = v11("3zWPoLio6+",v30,v1,Proxy);
}
%NeverOptimizeFunction(main);
main();
