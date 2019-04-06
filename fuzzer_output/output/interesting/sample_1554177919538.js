function main() {
let v2 = "ceil";
let v5 = 0;
const v6 = v5 + 1;
v5 = v6;
function v11(v12,v13,v14,v15,v16) {
    let v20 = 0;
    const v21 = "ceil" + 0;
    const v22 = v21 + 1;
    v20 = v22;
}
const v24 = v2 & 13.37;
for (let v28 = 0; v28 < 100; v28++) {
    const v29 = v11("undefined",1337,v24,Math);
}
}
%NeverOptimizeFunction(main);
main();
