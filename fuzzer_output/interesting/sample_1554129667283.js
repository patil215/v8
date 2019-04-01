function main() {
const v1 = [1337];
function v2(v3,v4,v5,v6) {
    with (v1) {
        for (let v10 = 0; v10 < 5; v10++) {
            const v17 = "undefined" != 1337;
            for (let v26 = 0; v26 < 7; v26++) {
            }
            for (let v33 = 0; v33 < 5; v33++) {
                const v34 = gc(3,v33,v33,v33,Function);
            }
        }
        for (let v38 = 0; v38 < 100; v38++) {
        }
        for (let v42 = 0; v42 != 100; v42++) {
        }
    }
}
const v48 = [1337];
const v49 = v2(10,Function,1337,v48,Function);
const v50 = v2(v49,1337,Function,v2);
}
%NeverOptimizeFunction(main);
main();
