function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v8 = [13.37,13.37,13.37,13.37,13.37];
const v10 = [1337];
const v11 = [];
const v12 = {toPrimitive:v10,getFloat32:v8,MIN_VALUE:-2268958292,abs:1337,lastMatch:"string",fromCharCode:13.37,keys:13.37,map:"string",ownKeys:1337};
const v13 = {find:v12,getUint32:v12,species:v11};
let v14 = v13;
function v18(v19,v20,v21,v22,v23) {
    for (let v27 = 0; v27 < 100; v27++) {
        const v30 = [13.37,13.37,13.37,13.37,13.37];
        v19.__proto__ = v30;
        for (let v35 = 0; v35 < 4; v35++) {
            const v36 = v30.forEach(Object,v35,Function);
            const v37 = v36 - 1;
        }
    }
}
const v38 = v18("undefined",1337,v14,Math);
const v39 = v18(v14,v8,v38,1337,v4);
}
%NeverOptimizeFunction(main);
main();
