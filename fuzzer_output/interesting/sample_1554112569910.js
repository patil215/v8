function main() {
function v0(v1,v2,v3,v4) {
    for (let v8 = 0; v8 < 100; v8++) {
        const v10 = [13.37];
        for (let v14 = 0; v14 < 100; v14++) {
            for (let v18 = 0; v18 < 3; v18++) {
                for (const v19 of v10) {
                    function v20(v21,v22,v23) {
                    }
                }
            }
        }
    }
}
const v29 = [1337];
const v30 = v0(10,Function,1337,v29,Function);
let v38 = 0;
const v39 = v38 + 1;
v38 = v39;
}
%NeverOptimizeFunction(main);
main();
