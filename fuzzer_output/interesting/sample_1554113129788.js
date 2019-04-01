function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [1337];
    function v8(v9,v10,v11,v12) {
        const v15 = {max:Function,setPrototypeOf:10};
        return v6;
    }
    const v21 = [1337];
    for (let v25 = 0; v25 < 100; v25++) {
        const v26 = v8(10,Function,1337,v21,Function);
        let v27 = v26;
        if (v25) {
            v27.toString = v0;
        } else {
        }
    }
}
const v33 = [1337];
for (let v37 = 0; v37 < 100; v37++) {
    const v38 = v0(10,Function,1337,v33,Function);
}
}
%NeverOptimizeFunction(main);
main();
