function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
function v2(v3,v4,v5,v6) {
    let v9 = 0;
    do {
        let v12 = 0;
        do {
            const v13 = 0 / v9;
            for (const v14 of v1) {
                const v15 = typeof v13;
                const v17 = v15 === "function";
            }
            const v18 = v12 + 1;
            v12 = v18;
        } while (v12 < 10);
        const v19 = v9 + 1;
        v9 = v19;
    } while (v9 < 4);
}
let v26 = 0;
const v27 = v26 + 1;
v26 = v27;
const v29 = [1337];
const v30 = v2(10,Function,1337,v29,Function);
}
%NeverOptimizeFunction(main);
main();
