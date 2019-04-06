function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
    const v15 = [1337,1337,1337];
    const v16 = [];
    const v17 = {splice:v16,setFloat64:v16,log:1337,getFloat64:-3983639058,sticky:"string",ownKeys:"string",getUint8:v15};
    for (let v21 = 0; v21 < 100; v21++) {
        const v24 = [1337,1337,1337,1337,1337];
        const v25 = Function.bind(Function,v24,1337);
        v17.unscopables = v25;
    }
}
const v26 = {preventExtension:v7,get:v2,deleteProperty:v7,has:v7,defineProperty:v7,getOwnPropertyDescriptor:v2,call:v2,set:v7,ownKeys:v7,setPrototypeOf:v2,construct:v7};
const v28 = new Proxy(v1,v26);
const v30 = {length:v7};
const v32 = Reflect.defineProperty(v28,1337,v30);
}
%NeverOptimizeFunction(main);
main();
