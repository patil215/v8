function main() {
const v1 = [65535];
function v2(v3,v4,v5,v6) {
    let v8 = 0;
    const v11 = {max:Function,setPrototypeOf:10};
    const v13 = [1337];
    const v14 = [v13];
    const v20 = [13.37,13.37,13.37,13.37];
    const v22 = [13.37,13.37,13.37,13.37];
    for (const v23 of v22) {
        with (v23) {
            v20[8] = v23;
        }
    }
    const v24 = [1337];
    function v27(v28,v29,v30,v31,v32) {
        return v24;
    }
    function v39(v40,v41,v42,v43,v44) {
        const v45 = v27(v41,v43,9007199254740991,9007199254740991);
        return v8;
    }
    for (let v49 = 0; v49 < 100; v49++) {
        const v50 = v39("undefined",1337,13.37,Math);
    }
    return v1;
}
const v56 = [1337];
for (let v60 = 0; v60 < 100; v60++) {
    const v61 = v2(10,Function,1337,v56,Function);
}
}
%NeverOptimizeFunction(main);
main();
