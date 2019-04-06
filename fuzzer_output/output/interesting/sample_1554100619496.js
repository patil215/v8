function main() {
const v5 = {};
with (v5) {
    const v10 = 13.37 != v5;
    let v11 = v10;
    for (const v12 in v11) {
        const v13 = v12(v12,v11,Math);
    }
}
}
%NeverOptimizeFunction(main);
main();
