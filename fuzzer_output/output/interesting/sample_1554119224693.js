function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = {substr:"0*pmfmmD3n",hasInstance:13.37,c:64,deleteProperty:"0*pmfmmD3n",setUint16:1337,copyWithin:13.37,leftContext:v5,for:v3};
const v7 = {source:64,constructor:13.37,forEach:1337,has:v6,every:64,toString:13.37};
const v9 = [1337];
function v10(v11,v12,v13,v14) {
    function v15(v16,v17,v18) {
    }
    const v19 = {deleteProperty:v15,construct:v15,get:v10,ownKeys:v10,preventExtension:v15,apply:v15};
    const v21 = new Proxy(v9,v19);
    with (v21) {
        PI = v3;
    }
}
const v23 = v10(v7,100);
const v26 = new Int8Array(48129);
}
%NeverOptimizeFunction(main);
main();
