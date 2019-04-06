function main() {
const v4 = [1337,1337,1337,1337,1337];
const v5 = [];
const v6 = {parseFloat:13.37};
const v7 = {getUint8:1337,preventExtensions:-198592749,of:v4,copyWithin:Atomics,BYTES_PER_ELEMENT:Atomics,source:v5,race:v6};
let v8 = v7;
const v12 = [13.37,13.37,13.37,13.37,13.37];
const v14 = [13.37];
const v15 = [];
const v16 = {toPrimitive:v14,getFloat32:v12,MIN_VALUE:-2268958292,abs:1337,lastMatch:"string",fromCharCode:13.37,keys:13.37,map:"string",ownKeys:1337};
const v17 = {find:v16,shift:v16,propertyIsEnumerable:v15};
let v18 = v17;
function v22(v23,v24,v25,v26,v27) {
    for (let v31 = 0; v31 < 100; v31++) {
        const v36 = Infinity * 0;
        const v38 = v36 === v36;
        if (v38) {
            v8 = v18;
        } else {
        }
    }
}
const v39 = v22("undefined",-2094915241,v18,BigUint64Array);
}
%NeverOptimizeFunction(main);
main();
