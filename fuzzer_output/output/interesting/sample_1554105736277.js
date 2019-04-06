function main() {
function v0(v1,v2,v3,v4) {
    let v8 = "undefined";
    const v10 = [1337];
    const v11 = {exec:v10};
    const v15 = [1337];
    const v16 = {max:Function,setPrototypeOf:10};
    const v17 = {exec:v15};
    const v20 = Function && 13.37;
    function v21(v22,v23,v24) {
        const v25 = v16.setPrototypeOf;
    }
    const v26 = v21(v20,v17,v11,v8);
    let v30 = 0;
    do {
        const v31 = v30 + 1;
        v30 = v31;
    } while (v30 < 4);
    return v30;
}
const v37 = [1337];
for (let v41 = 0; v41 < 100; v41++) {
    const v42 = v0(10,Function,1337,v37,Function);
}
}
%NeverOptimizeFunction(main);
main();
