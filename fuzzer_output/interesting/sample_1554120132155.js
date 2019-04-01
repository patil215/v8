function main() {
function v1(v2,v3,v4,v5) {
    let v7 = 13.37;
    do {
        const v8 = ~v7;
        v7 = v8;
    } while (v7 < 5);
}
const v14 = [1337];
for (let v18 = 0; v18 < 100; v18++) {
    const v19 = v1(10,Function,1337,v14,Function);
}
}
%NeverOptimizeFunction(main);
main();
