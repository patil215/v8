function main() {
function v0(v1,v2,v3,v4) {
    const v7 = new Float64Array(2022);
    let v11 = "q9t/JCKeHU";
    for (const v12 in v11) {
        const v13 = typeof Function;
        function v15(v16,v17,v18,v19) {
            v19.flags = 1337;
        }
        const v20 = v15(undefined,Float64Array,v13,v7);
        const v26 = [1337];
        for (let v30 = 0; v30 < 100; v30++) {
            const v31 = v15(10,Function,1337,v26,Function);
        }
    }
}
const v37 = [1337];
for (let v41 = 0; v41 < 100; v41++) {
    const v42 = v0(10,Function,1337,v37,Function);
}
}
%NeverOptimizeFunction(main);
main();
