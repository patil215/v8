function main() {
const v3 = [1337];
const v4 = [v3];
function v5(v6,v7,v8,v9) {
    function v10(v11,v12,v13,v14) {
    }
    const v22 = [13.37,13.37,13.37,13.37];
    const v23 = {getFloat64:9007199254740991};
    for (const v24 of v22) {
        with (v22) {
            const v26 = {};
            const v28 = new Proxy(Function,v26);
            v28[0] = Proxy;
            const v29 = {split:v24,getUint16:v24,getUint32:v24,MIN_VALUE:v23,padEnd:Math};
        }
    }
    const v30 = ["apply"];
    for (let v34 = 0; v34 != 100; v34++) {
        const v35 = v10(10,Function,1337,v30,Function);
    }
    v4[1] = Function;
}
const v41 = [1337];
const v42 = v5(10,Function,1337,v41,Function);
const v43 = v5("boolean","apply",1337);
}
%NeverOptimizeFunction(main);
main();
