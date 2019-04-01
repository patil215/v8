function main() {
let v3 = 0;
const v4 = v3 + 1;
v3 = v4;
let v7 = "undefined";
const v11 = [1337];
const v12 = [v11];
function v14(v15,v16,v17) {
    v16[v17] = v16;
    function v21(v22,v23,v24,v25) {
    }
    const v34 = [1337];
    for (let v38 = 0; v38 < 100; v38++) {
        const v39 = v21(10,Function,1337,v34,Function);
    }
}
const v40 = [9];
const v41 = v14(13.37,"undefined",v7,v12,v40);
const v42 = v14(1337,13.37);
}
%NeverOptimizeFunction(main);
main();
