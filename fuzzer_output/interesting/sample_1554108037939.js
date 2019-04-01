function main() {
function v2(v3,v4,v5,v6) {
    function v7(v8,v9,v10,v11) {
    }
    const v19 = [13.37,13.37,13.37,13.37];
    const v20 = {getFloat64:9007199254740991};
    for (const v21 of v19) {
        with (v19) {
            const v22 = {split:v21,getUint16:v21,getUint32:v21,MIN_VALUE:v20,padEnd:Math};
        }
    }
    const v23 = ["apply"];
    for (let v27 = 0; v27 != 100; v27++) {
        const v28 = v7(10,Function,1337,v23,Function);
    }
    return v23;
}
const v34 = [1337];
const v35 = v2(10,Function,1337,v34,Function);
const v36 = v2("boolean","apply",1337);
}
%NeverOptimizeFunction(main);
main();
