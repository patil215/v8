function main() {
function v4(v5,v6,v7,v8,v9) {
    let v14 = 0;
    for (const v15 in v5) {
        v7.__proto__ = v14;
    }
}
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v4("undefined",1337,-2.220446049250313e-16,Math);
}
}
%NeverOptimizeFunction(main);
main();
