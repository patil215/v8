function main() {
const v1 = {__defineSetter__:13.37,toStringTag:13.37};
let v4 = "ceil";
function v8(v9,v10,v11,v12,v13) {
    let v15 = 0;
    const v16 = v1 + 1;
    v15 = v16;
    const v17 = v9 >= v15;
    return v17;
}
const v18 = v4 & 13.37;
for (let v22 = 0; v22 < 100; v22++) {
    const v23 = v8("undefined",1337,v18,Math);
}
}
%NeverOptimizeFunction(main);
main();
