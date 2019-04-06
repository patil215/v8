function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [13.37,13.37,13.37,13.37,13.37];
const v7 = [1337];
const v8 = [];
const v9 = {toPrimitive:v7,getFloat32:v5,MIN_VALUE:-2268958292,abs:1337,lastMatch:"string",fromCharCode:13.37,keys:13.37,map:"string",ownKeys:1337};
const v10 = {find:v9,getUint32:v9,species:v8};
let v11 = v10;
function v15(v16,v17,v18,v19,v20) {
    for (let v24 = 0; v24 < 100; v24++) {
        const v27 = [13.37,13.37,13.37,13.37,13.37];
        const v29 = Symbol.match;
        const v30 = v27[v29];
        v16.__proto__ = v27;
        for (let v35 = 0; v35 < 4; v35++) {
            const v36 = v27.forEach(Object,v35,Map);
        }
    }
}
const v37 = v15("undefined",1337,v11,Math);
const v38 = v15(v11,v5,v37,1337,v1);
}
%NeverOptimizeFunction(main);
main();
