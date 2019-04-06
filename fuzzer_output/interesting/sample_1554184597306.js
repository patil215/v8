function main() {
function v0(v1,v2,v3,v4) {
    const v7 = new Float32Array(7);
    function v11(v12,v13,v14,v15) {
    }
    const v17 = {set:v0,get:v11};
    const v19 = Object.defineProperty(v7,"asyncIterator",v17);
    for (const v20 of v7) {
    }
}
const v26 = [1337];
for (let v30 = 0; v30 < 100; v30 = v30 + 4) {
    const v31 = v0(-9007199254740992,Object,1337,v26,Function);
}
}
%NeverOptimizeFunction(main);
main();
