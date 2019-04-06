function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337];
const v7 = [v6,13.37,"number",Set];
const v9 = {getUint8:v7,create:16,getPrototypeOf:"number",getOwnPropertyDescriptor:16,setInt16:v4,toStringTag:v6,filter:13.37};
const v10 = {ceil:1337,log1p:1337,c:v7};
let v11 = v9;
const v17 = [1337];
const v22 = [13.37,13.37,13.37,13.37];
const v23 = {getFloat64:9007199254740991};
for (const v26 of v22) {
    with (v26) {
        const v27 = {split:v26,getUint16:v26,getUint32:v26,MIN_VALUE:v23,padEnd:Math};
    }
    const v28 = v26 in v23;
    v17.length = 2;
}
}
%NeverOptimizeFunction(main);
main();
