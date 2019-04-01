function main() {
const v1 = [13.37];
function v6(v7,v8,v9,v10,v11) {
    for (const v15 of v1) {
        const v17 = v15 - v8;
        const v18 = [13.37,13.37,13.37,13.37];
        delete v18[0];
    }
}
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v6("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
