function main() {
function v0(v1,v2,v3,v4) {
    const v5 = [];
    const v9 = [1337];
    const v12 = Symbol.split;
    Symbol[v12] = v5;
    function v13(v14,v15,v16,v17,v18) {
    }
    for (const v20 of v9) {
        const v21 = typeof v20;
        const v23 = v21 <= "string";
        const v27 = Boolean.__proto__;
        function v28(v29,v30,v31,v32,v33) {
            const v34 = typeof v27;
        }
        for (let v39 = 0; v39 < 100; v39++) {
            const v40 = v13(v20,Function,v23,13.37,0);
        }
    }
}
const v46 = [1000];
for (let v50 = 0; v50 < 100; v50++) {
    const v51 = v0(10,Function,1337,v46,Function);
}
}
%NeverOptimizeFunction(main);
main();
