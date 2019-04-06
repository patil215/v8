function main() {
const v1 = [13.37,13.37];
const v3 = [13.37,13.37];
function v4(v5,v6,v7,v8) {
}
function v9(v10,v11,v12,v13) {
    const v16 = [1337];
    const v17 = [v16];
    with (v17) {
        let v24 = "undefined";
        let v26 = "undefined";
        let v29 = 0;
        let v35 = "undefined";
        let v39 = 0;
        v39 = 10;
        const v46 = new Array(46647);
        for (let v50 = 0; v50 < 100; v50++) {
            function v51(v52,v53,v54,v55) {
            }
        }
    }
    let v57 = 0;
    const v58 = v57 + 1;
    v57 = v58;
}
const v59 = {preventExtension:v9,get:v4,deleteProperty:v9,has:v9,defineProperty:v9,getOwnPropertyDescriptor:v4,call:v4,set:v9,ownKeys:v9,setPrototypeOf:v4,construct:v9};
const v61 = new Proxy(v3,v59);
const v64 = new Int8Array(8715);
const v66 = {length:v9};
const v68 = Reflect.defineProperty(v61,1337,v66);
const v69 = v9(v66,Int8Array,v1,v64,v64,Int8Array);
}
%NeverOptimizeFunction(main);
main();
