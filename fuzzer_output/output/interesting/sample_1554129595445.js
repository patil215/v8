function main() {
const v3 = [1337];
const v7 = [v3];
function v8(v9,v10,v11,v12) {
    function v13(v14,v15,v16,v17) {
    }
    const v25 = [13.37,13.37,13.37,13.37];
    const v26 = {getFloat64:9007199254740991};
    for (const v27 of v25) {
        with (v25) {
            const v28 = {split:v27,getUint16:v27,getUint32:v27,MIN_VALUE:v26,padEnd:Math};
            const v29 = v13(v25,v7,v28);
        }
    }
    const v30 = ["apply"];
    for (let v34 = 0; v34 != 100; v34++) {
        const v35 = v13(10,Function,1337,v30,Function);
    }
}
const v41 = [1337];
const v42 = v8(10,Function,1337,v41,Function);
const v43 = v8("boolean","apply",1337);
}
%NeverOptimizeFunction(main);
main();
