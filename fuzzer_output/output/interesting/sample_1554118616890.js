function main() {
const v1 = [1337];
const v2 = {exec:v1};
function v3(v4,v5,v6,v7) {
    const v8 = ~v6;
    const v9 = v2.has;
    return v8;
}
const v15 = [1337];
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v3(10,Function,1337,v15,Function);
}
}
%NeverOptimizeFunction(main);
main();
