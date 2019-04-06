function main() {
const v1 = [1337,1337,1337,1337,1337];
const v6 = [v1];
let v8 = undefined;
for (let v12 = 0; v12 < 100; v12++) {
    const v14 = [127];
    const v15 = [v14];
    const v16 = {};
    const v18 = new BigUint64Array(v15,v16);
    const v21 = {map:13.37,toPrimitive:13.37};
    v6.__proto__ = v18;
    for (let v25 = 0; v25 < 100; v25++) {
        function v26(v27,v28,v29,v30) {
            const v32 = Symbol.toStringTag;
            const v33 = v18[v32];
        }
        const v35 = [1337];
        const v36 = v35.map(v26,"boolean",v21);
    }
}
}
%NeverOptimizeFunction(main);
main();
