function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {toPrimitive:v5,getFloat32:v3,MIN_VALUE:-2268958292,abs:1337,lastMatch:"string",fromCharCode:13.37,keys:13.37,map:"string",ownKeys:1337};
const v8 = {find:v7,getUint32:v7,species:v6};
let v9 = v8;
function v13(v14,v15,v16,v17,v18) {
    for (let v22 = 0; v22 < 100; v22++) {
        const v25 = [13.37,13.37,13.37,13.37,13.37];
        v25[129] = 1;
        for (let v30 = 0; v30 < 4; v30++) {
            const v31 = v25.forEach(Object,v30,Function);
        }
    }
}
const v32 = v13("undefined",1337,v9,Math);
}
%NeverOptimizeFunction(main);
main();
