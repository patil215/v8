function main() {
const v3 = [13.37,13.37];
const v4 = ["number",RegExp,v3];
const v6 = [13.37];
const v8 = [1337];
const v9 = {exec:v8};
function v10(v11,v12,v13,v14) {
    let v16 = 0;
    do {
        const v17 = v16 + 1;
        v16 = v9;
    } while (v16 < v6);
    let v20 = 0;
    while (v20 < 1) {
        let v21 = v13;
        if (v11) {
            let v24 = 0;
            do {
                const v25 = v21 + 1;
                const v26 = v24 + 1;
                v24 = v26;
            } while (v24 < 2);
            v21 = v4;
        } else {
            let v29 = 0;
            while (v29 < 10) {
                v20 = 10;
                const v30 = v29 + 1;
                v29 = v30;
            }
        }
        const v31 = v20 + 1;
        v20 = v31;
    }
    v16[2] = 0;
    return v9;
}
const v37 = [1337];
for (let v41 = 0; v41 < 100; v41++) {
    const v42 = v10(10,Function,1337,v37,Function);
}
}
%NeverOptimizeFunction(main);
main();
