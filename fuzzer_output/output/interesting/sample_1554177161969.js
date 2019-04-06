function main() {
function v3(v4,v5,v6,v7) {
    let v11 = 0;
    const v12 = v11 + 1;
    v11 = v12;
    const v13 = typeof "__defineGetter__";
    const v15 = v13 === "boolean";
    function v16(v17,v18,v19,v20) {
        return v16;
    }
    const v21 = {set:v16};
    const v23 = Object.is(-1024,v16,v21);
    return v23;
}
const v28 = [13.37];
for (let v32 = 0; v32 < 100; v32++) {
    const v33 = v3(10,Function,1337,v28,Function);
}
}
%NeverOptimizeFunction(main);
main();
