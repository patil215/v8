function main() {
const v0 = {};
function v1(v2,v3,v4,v5) {
    const v7 = {get:v1};
    const v9 = Object.isExtensible("abs","abs",v7);
}
const v15 = [1337];
const v16 = v1(10,Function,1337,v15,Function);
}
%NeverOptimizeFunction(main);
main();
