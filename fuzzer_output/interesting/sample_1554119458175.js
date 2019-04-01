function main() {
function v0(v1,v2,v3,v4) {
    let v6 = "undefined";
    const v10 = [1337];
    const v11 = [v10];
    function v13(v14,v15,v16) {
    }
    const v17 = [1337];
    function v19(v20,v21,v22,v23) {
        const v27 = [1337];
        function v29(v30,v31,v32,v33,v34) {
        }
        for (const v36 of v27) {
            const v37 = typeof v36;
            const v39 = v37 <= "string";
            for (let v43 = 0; v43 < 100; v43++) {
                const v44 = v29(v36,Function,v39,13.37,0);
            }
        }
        const v46 = {max:Function,setPrototypeOf:10};
    }
    const v52 = [1337];
    for (let v56 = 0; v56 < 100; v56++) {
        const v57 = v19(10,Function,1337,v52,Function);
    }
    const v58 = v13(13.37,"undefined",v6,v11,v17);
}
const v64 = [1337];
const v68 = v0(10,Function,1337,v64,Function);
}
%NeverOptimizeFunction(main);
main();
