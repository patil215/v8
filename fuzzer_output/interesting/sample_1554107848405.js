function main() {
function v0(v1,v2,v3,v4) {
    let v6 = "undefined";
    const v7 = v6[1000];
    for (let v10 = v7; v10 < 5; v10++) {
    }
}
const v15 = [1337];
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v0(10,Function,1337,v15,1337);
}
}
%NeverOptimizeFunction(main);
main();
