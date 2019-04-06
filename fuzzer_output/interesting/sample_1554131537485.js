function main() {
function v1(v2,v3,v4,v5) {
    let v7 = "undefined";
    do {
        const v8 = v7 + "undefined";
        const v9 = v7 - 1;
        v7 = v9;
    } while (v7 < 1337);
}
const v15 = [1337];
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v1(6,Function,1337,v15,Function);
}
}
%NeverOptimizeFunction(main);
main();
