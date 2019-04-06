function main() {
let v2 = 0;
while (v2 < 7) {
    const v3 = v2 + 1;
    const v6 = {map:13.37,toPrimitive:13.37};
    function v7(v8,v9,v10,v11) {
        function v12(v13,v14,v15,v16) {
            return v6;
        }
        const v18 = [1337];
        let v21 = 0;
        const v22 = v18.map(v12,"boolean",v6);
        const v23 = v21 + 1;
        v21 = v23;
    }
    const v29 = [1337];
    for (let v33 = 0; v33 < 100; v33++) {
        const v34 = v7(10,Function,1337,v29,Function);
    }
    v2 = v3;
}
}
%NeverOptimizeFunction(main);
main();
