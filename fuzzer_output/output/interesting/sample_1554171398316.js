function main() {
const v1 = [13.37,13.37,13.37];
const v4 = {map:13.37,toPrimitive:13.37};
function v5(v6,v7,v8,v9) {
    function v10(v11,v12,v13,v14) {
        return v8;
    }
    const v19 = [1337];
    let v25 = 0;
    const v26 = v19.map(v10,"boolean",v4);
    let v29 = 0;
    const v30 = v29 + 1;
    v29 = v30;
    let v33 = 0;
    v26[65535] = v1;
    const v34 = v33 + 1;
    v33 = v34;
    const v35 = v25 + 1;
    v25 = v35;
}
const v41 = [1337];
for (let v45 = 0; v45 < 100; v45++) {
    const v46 = v5(10,Function,1337,v41,Function);
}
}
%NeverOptimizeFunction(main);
main();
