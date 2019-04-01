function main() {
function v2(v3,v4,v5,v6) {
    function v7(v8,v9,v10,v11) {
    }
    const v22 = [1337];
    const v26 = [13.37,13.37,13.37,13.37];
    const v27 = {getFloat64:9007199254740991};
    for (const v28 of v26) {
        with (v28) {
            const v29 = {split:v28,getUint16:v28,getUint32:v28,MIN_VALUE:v27,padEnd:Math};
        }
        const v30 = v28 in v27;
        v22.length = 2;
    }
    const v32 = [1337];
    for (let v36 = 0; v36 != 100; v36++) {
        const v37 = v7(10,Function,1337,v32,Function);
    }
}
const v43 = [1337];
const v44 = v2(10,Function,1337,v43,Function);
const v45 = v2("boolean","apply",1337);
}
%NeverOptimizeFunction(main);
main();
