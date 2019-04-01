// Flags: --allow-natives-syntax

function main() {
let v1 = Math;
const v3 = new Set();
for (let v7 = 0; v7 < 5; v7++) {
    const v10 = Function + 1;
    function v11(v12,v13,v14,v15,v16) {
        const v19 = {setPrototypeOf:Function,setPrototypeOf:-3438262288};
        const v23 = [1337];
        let v25 = "undefined";
        let v29 = 0;
        v3[64] = Function;
        while (v29 < 3) {
            v29 = 10;
            function v30(v31,v32,v33) {
            }
        }
        const v34 = v10.codePointAt(v15,v1,v16);
        let v36 = "undefined";
        for (const v37 in v36) {
        }
        for (let v39 = 0; v39 < 100; v39++) {
        }
        return v34;
    }
    const v40 = v11();
}
}
%NeverOptimizeFunction(main);
main();
