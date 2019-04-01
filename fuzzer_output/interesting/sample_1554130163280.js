function main() {
const v2 = new Float64Array(2022);
const v8 = [1337];
let v10 = undefined;
let v12 = "q9t/JCKeHU";
for (const v13 in v12) {
    const v17 = typeof Function;
    function v19(v20,v21,v22,v23) {
        let v26 = 0;
        do {
            const v27 = v17 + 1;
            const v28 = v23[v27];
            v26 = v27;
        } while (v26 < 5);
        v23.flags = 1337;
    }
    const v34 = [1337];
    for (let v38 = 0; v38 < 100; v38++) {
        const v39 = v19(10,Function,1337,v34,Function);
    }
}
}
%NeverOptimizeFunction(main);
main();
