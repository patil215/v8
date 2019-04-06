function main() {
const v1 = ArrayBuffer.__proto__;
const v10 = [1337];
let v15 = undefined;
function v21(v22,v23,v24,v25,v26) {
    const v29 = typeof v1;
    const v31 = v29 === "number";
    for (let v41 = 9007199254740991; v41 < 10; v41++) {
        const v42 = typeof Function;
        const v44 = v42 === "function";
    }
}
function v45(v46,v47,v48,v49,v50) {
    const v51 = v21(v47,v49,9007199254740991,9007199254740991);
}
for (let v55 = 0; v55 < 100; v55++) {
    const v56 = v45("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
