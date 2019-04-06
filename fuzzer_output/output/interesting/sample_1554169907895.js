function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    let v9 = undefined;
    let v11 = undefined;
    let v13 = -1;
    function v14(v15,v16,v17,v18) {
        v16.__proto__ = v4;
        let v19 = v9;
        const v20 = v19 / v13;
        v11 = v20;
    }
    const v26 = [1337];
    const v30 = v14(10,Function,1337,v26,Function);
    const v34 = v7 + 1;
    v7 = v34;
}
for (let v38 = 0; v38 < 100; v38++) {
}
const v44 = [1337];
for (let v48 = 0; v48 < 100; v48 = v48 + 4) {
    const v49 = v0(-9007199254740992,Object,1337,v44,Function);
}
}
%NeverOptimizeFunction(main);
main();
