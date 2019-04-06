function main() {
function v1(v2,v3,v4,v5) {
    const v10 = [13.37,13.37,13.37,13.37];
    const v12 = v10.__proto__;
    const v13 = [7,...v12];
    let v15 = "undefined";
    let v20 = 0;
    const v21 = v20 + 1;
    v20 = v21;
}
const v27 = [1337];
for (let v31 = 0; v31 < 100; v31++) {
    const v32 = v1(10,Function,1337,v27,Function);
}
}
%NeverOptimizeFunction(main);
main();
