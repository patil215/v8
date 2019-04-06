function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
function v10(v11,v12,v13,v14,v15) {
    let v17 = undefined;
    let v20 = 0;
    const v21 = v20 + 1;
    v20 = v21;
    for (let v25 = 0; v25 < 100; v25++) {
        for (const v26 in v25) {
            v17 = v25;
        }
        const v27 = v14.__proto__;
        function v28(v29,v30,v31,v32,v33) {
        }
        if (v17) {
            const v34 = {set:v10};
        } else {
        }
        let v37 = 0;
        const v38 = 0 != v28;
        if (v38) {
            let v41 = 0;
            const v42 = v41 + 1;
            v41 = v42;
        } else {
            const v43 = v27 < "pvN/LdblNy";
        }
        const v44 = v37 + 1;
        v37 = v44;
    }
}
const v45 = v10("undefined",1337,13.37,Math);
}
%NeverOptimizeFunction(main);
main();
