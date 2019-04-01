function main() {
const v1 = [13.37];
const v3 = [1337,1337];
let v4 = v3;
v4 = 13.37;
function v5(v6,v7,v8,v9) {
    Function.__proto__ = Proxy;
    const v13 = [1337];
    const v14 = [v13];
    const v16 = [1337];
    const v18 = v4 + 1;
    let v20 = "undefined";
    function v21(v22,v23,v24) {
    }
    for (const v25 in v20) {
    }
    const v26 = v21(...v16,"undefined",...v1,v14,1337);
    for (const v28 in Function) {
    }
    let v31 = 0;
    do {
        const v32 = v31 + 1;
        v31 = v32;
    } while (v31 < 5);
}
const v38 = [1337];
for (let v42 = 0; v42 < 100; v42++) {
    const v43 = v5(10,Function,1337,v38,Function);
}
}
%NeverOptimizeFunction(main);
main();
