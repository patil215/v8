function main() {
function v1(v2,v3,v4,v5) {
    const v7 = {values:v1};
    const v9 = Object.defineProperty(this,"clz32",v7);
}
const v15 = [1337];
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v1(10,Function,1337,v15,Function);
}
}
%NeverOptimizeFunction(main);
main();
