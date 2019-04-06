function main() {
const v0 = {};
function v5(v6,v7,v8,v9,v10) {
    const v12 = v9.abs(v0,0,"undefined");
    return v12;
}
for (let v16 = 0; v16 < 100; v16++) {
    const v17 = v5("undefined",7,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
