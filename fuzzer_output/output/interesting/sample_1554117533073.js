function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v3 = [13.37];
function v4(v5,v6,v7,v8) {
    let v11 = 0;
    do {
        let v14 = 0;
        do {
            for (const v15 of v1) {
            }
            const v16 = v14 + 1;
            v14 = v16;
        } while (v14 < 10);
        const v17 = v11 + 1;
        v11 = v17;
        const v18 = v3.__proto__;
        let v21 = 0;
        do {
            const v22 = v3.asyncIterator;
            const v23 = v22 + 1;
            v21 = v23;
        } while (v21 < 10);
        const v24 = (0)[v17];
    } while (v11 < 4);
}
const v30 = [1337];
const v31 = v4(10,Function,1337,v30,Function);
}
%NeverOptimizeFunction(main);
main();
