function main() {
function v0(v1,v2,v3,v4) {
    function v8(v9,v10,v11,v12) {
        let v15 = 0;
        const v16 = "undefined" + 1;
        v15 = v16;
        const v17 = v15.__proto__;
        return v15;
    }
    const v23 = [1337];
    const v27 = v8(10,Function,1337,v23,Function);
    const v30 = v8(v23,Function,WeakMap);
    let v37 = 0;
    const v38 = v37 + 1;
    v37 = v38;
}
const v45 = [1337];
for (let v49 = 0; v49 < 100; v49++) {
    const v50 = v0(10,Function,1337,v45,Function);
}
}
%NeverOptimizeFunction(main);
main();
