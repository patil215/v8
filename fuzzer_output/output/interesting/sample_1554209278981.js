function main() {
const v1 = [13.37,13.37,13.37];
const v3 = v1.__proto__;
v3[1337] = 13.37;
for (let v7 = 0; v7 != 100; v7++) {
    const v9 = {hasOwnProperty:1337};
    const v12 = [13.37,13.37,13.37];
    const v15 = {map:13.37,toPrimitive:13.37};
    function v16(v17,v18,v19,v20) {
        function v21(v22,v23,v24,v25) {
            return v19;
        }
        const v27 = [1337];
        const v28 = v27.map(v21,"boolean",v15);
        v28[65535] = v12;
    }
    const v34 = [1337];
    for (let v38 = 0; v38 < 100; v38++) {
        const v39 = v16(10,Function,1337,v34,Function);
    }
    const v40 = v9.__proto__;
    v40[1337] = 685873.5511442542;
}
}
%NeverOptimizeFunction(main);
main();
