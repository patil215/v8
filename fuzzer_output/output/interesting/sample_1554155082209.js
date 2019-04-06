function main() {
const v1 = [13.37,13.37];
const v3 = [13.37,13.37];
function v4(v5,v6,v7,v8) {
}
function v9(v10,v11,v12,v13) {
    const v15 = [1337];
    const v16 = [v15];
    with (v16) {
        const v21 = [1337];
        const v26 = v21.shift(Function,1337,1337,v21);
        const v28 = [1337];
        const v33 = [13.37];
        const v44 = [13.37,13.37,13.37,13.37];
        for (let v55 = 0; v55 < 100; v55++) {
            function v56(v57,v58,v59,v60) {
            }
        }
    }
}
const v61 = {preventExtension:v9,get:v4,deleteProperty:v9,has:v9,defineProperty:v9,getOwnPropertyDescriptor:v4,call:v4,set:v9,ownKeys:v9,setPrototypeOf:v4,construct:v9};
const v63 = new Proxy(v3,v61);
const v66 = new Int8Array(8715);
const v68 = {length:v9};
const v70 = Reflect.defineProperty(v63,1337,v68);
const v71 = v9(v68,Int8Array,v1,v66,v66,Int8Array);
}
%NeverOptimizeFunction(main);
main();
