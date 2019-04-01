function main() {
let v5 = undefined;
function v10(v11,v12,v13,v14) {
    let v16 = 13.37;
    let v18 = "undefined";
    function v19(v20,v21,v22,v23) {
        for (const v25 in Function) {
            for (let v29 = 0; v29 < 3; v29++) {
            }
        }
        v5 = v19;
    }
    const v35 = [1337];
    for (let v39 = 0; v39 != 100; v39++) {
        const v40 = v19(10,Function,1337,v35,Function);
    }
}
const v46 = [1337];
const v47 = v10(10,Function,1337,v46,Function);
const v48 = v10("delete","apply",1337);
let v53 = "undefined";
let v57 = 0;
v57 = 10;
let v59 = "undefined";
let v63 = 0;
v63 = 10;
}
%NeverOptimizeFunction(main);
main();
