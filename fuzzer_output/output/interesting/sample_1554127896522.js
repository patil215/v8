function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
function v4(v5,v6,v7,v8) {
    let v13 = undefined;
    let v15 = 2147483647;
    function v16(v17,v18,v19,v20) {
        let v22 = 0;
        const v23 = v22 / v15;
        v13 = v23;
    }
    const v29 = [1337];
    for (let v33 = 0; v33 < 100; v33++) {
        const v34 = v16(10,Function,1337,v29,Function);
    }
}
const v43 = [1337];
let v47 = 0;
const v48 = v47 + 1;
v47 = v48;
for (let v51 = 0; v51 < 100; v51++) {
    const v52 = v4(10,Function,1337,v43,Function);
}
}
%NeverOptimizeFunction(main);
main();
