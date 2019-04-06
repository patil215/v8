function main() {
(-65535).valueOf = "all";
const v2 = (-65535)[-65536];
const v5 = [13.37];
const v7 = [1337,1337,1337];
const v8 = [];
const v9 = {};
const v10 = {};
let v11 = v8;
const v13 = [1337,1337,1337,1337,1337];
const v15 = [13.37];
delete (2)[-65535];
let v21 = 0;
let v24 = 0;
let v27 = 0;
while (v27 < 7) {
    let v28 = "all";
    const v29 = v27 + 1;
    const v32 = {map:13.37,toPrimitive:13.37};
    function v33(v34,v35,v36,v37) {
        function v38(v39,v40,v41,v42) {
        }
        const v44 = [1337];
        for (const v51 in v37) {
        }
        let v54 = 0;
        while (v54 < 5) {
            const v55 = v44.map(v38,"boolean",v32);
            const v56 = v54 + 1;
            v54 = v56;
        }
    }
    const v62 = [1337];
    for (let v66 = 0; v66 < 100; v66++) {
        const v67 = v33(10,Function,1337,v62,Function);
    }
    v27 = v29;
}
}
%NeverOptimizeFunction(main);
main();
