function main() {
const v1 = [1337];
const v5 = [13.37,13.37,13.37,13.37,13.37];
const v7 = [1337,1337,1337,1337];
const v8 = {substr:"0*pmfmmD3n",hasInstance:13.37,c:64,deleteProperty:"0*pmfmmD3n",setUint16:1337,copyWithin:13.37,leftContext:v7,for:v5};
const v9 = {source:64,constructor:13.37,forEach:1337,has:v8,every:64,toString:13.37};
const v11 = v1.__proto__;
const v12 = [1337];
function v13(v14,v15,v16,v17) {
    v11.length = 0;
    function v19(v20,v21,v22) {
    }
    const v23 = {deleteProperty:v19,construct:v19,get:v13,ownKeys:v13,preventExtension:v19,apply:v19};
    const v25 = new Proxy(v12,v23);
}
const v27 = v13(v9,100);
}
%NeverOptimizeFunction(main);
main();
