function main() {
function v1(v2,v3,v4,v5) {
    let v8 = 0;
    do {
        v5.valueOf = v1;
        const v9 = v8 + 1;
        v8 = v9;
    } while (v8 < 5);
    v5.flags = 1337;
}
const v15 = [1337];
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v1(10,Function,1337,v15,Function);
}
}
%NeverOptimizeFunction(main);
main();
