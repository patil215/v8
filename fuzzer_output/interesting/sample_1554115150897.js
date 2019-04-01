function main() {
function v1(v2,v3,v4,v5) {
    if (v5) {
        const v6 = {get:1337};
    } else {
    }
}
for (let v14 = 0; v14 < 100; v14++) {
    const v15 = v1(10,Function,1337,10,Function);
}
}
%NeverOptimizeFunction(main);
main();
