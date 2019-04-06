function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337];
const v7 = [v6,13.37,"number",Set];
const v8 = {getUint8:v7,create:16,getPrototypeOf:"number",getOwnPropertyDescriptor:16,setInt16:v4,toStringTag:v6,filter:13.37};
const v9 = {ceil:1337,log1p:1337,c:v7};
function v14(v15,v16,v17,v18,v19) {
    for (let v23 = 0; v23 < 5; v23++) {
        const v25 = {isExtensible:0,log:v23,shift:v23,__proto__:v19,acos:v6};
        let v27 = 0;
        v25.acos = v9;
        do {
            let v30 = 0;
            while (v30 < 8) {
                const v31 = v30 + 1;
                v30 = v31;
            }
            const v32 = v27 + 1;
            v27 = v32;
        } while (v27 < 9);
    }
}
const v35 = v14("undefined",1337,13.37,Math);
const v36 = v14(100,v8,v9,0,Math);
}
%NeverOptimizeFunction(main);
main();
