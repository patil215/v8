function main() {
const v4 = [1337];
const v5 = [v4];
let v7 = 13.37;
function v14(v15,v16,v17,v18) {
    function v19(v20,v21,v22,v23) {
    }
    const v31 = [13.37,13.37,13.37,13.37];
    const v32 = {getFloat64:9007199254740991};
    for (const v33 of v31) {
        with (v31) {
            const v34 = {split:v33,getUint16:v33,getUint32:v33,MIN_VALUE:v32,padEnd:Math};
        }
    }
    const v35 = ["apply"];
    for (let v39 = 0; v39 != 100; v39++) {
        const v40 = v19(10,Function,1337,v35,Function);
    }
    v5[1] = Function;
}
const v46 = [1337];
const v47 = v14(10,Function,1337,v46,Function);
const v48 = v14("boolean","apply",1337);
}
%NeverOptimizeFunction(main);
main();
